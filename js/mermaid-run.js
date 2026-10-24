/*
 * mermaid-run.js
 *
 * Mermaid v12 の ESM を動的 import して描画する。
 *  - main.js から Defer.js 経由で呼ばれる（mermaid.css は Defer.css で別途読み込む）
 *  - 描画直後、各 SVG 内に生成される <style> を全て削除し、見た目は mermaid.css に任せる
 *  - フォントはサイトの --font-system-ui を Mermaid に渡す（文字幅の計測を表示時と一致させる）
 *  - Gantt は論理幅を「MIN_WIDTH と表示領域の幅の大きい方」にして描画する。
 *    狭い画面では SVG（viewBox + width:100%）が縮小表示される
 *  - 端末の回転・リサイズで表示領域の幅が変わったとき、Gantt を再描画する
 */
(() => {
  'use strict';

  const MERMAID_URL = 'https://ai-image-journey.pages.dev/js/mermaid/mermaid.esm.min.mjs';
  const SELECTOR = '.language-mermaid';

  // 図を描画するときの最低幅（px）。これより狭い画面では縮小表示になる
  const MIN_WIDTH = 640;

  // リサイズ・回転イベントの待ち時間（ms）
  const RESIZE_DELAY = 250;

  // --font-system-ui が取得できなかった場合の予備（サイトの定義と同じ）
  const FALLBACK_FONT =
    "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', \"Segoe UI\", \"Liberation Sans\", \"Hiragino Sans\", \"BIZ UDGothic\", system-ui, sans-serif";

  const today = new Date().toISOString().split('T')[0];

  // Gantt: 最新の日付を今日に置換
  function refreshGanttDates(code) {
    if (!code.includes('gantt')) return code;
    const dates = code.match(/\d{4}-\d{2}-\d{2}/g);
    if (!dates) return code;
    const latest = dates.reduce((a, b) => (new Date(b) > new Date(a) ? b : a), dates[0]);
    return code.split(latest).join(today);
  }

  document.querySelectorAll('.mermaid-chart').forEach((figure) => {
    figure.classList.add('box-img', 'box-img640');
  });

  // 描画対象: { node, code, isGantt, width, rendered }
  //  - code: 再描画に使う元のソース（描画後は node の中身が SVG に置き換わるため保持しておく）
  //  - width: 最後に描画したときの論理幅
  const items = [];

  let mermaid = null;
  let fontFamily = FALLBACK_FONT;
  let rendering = false; // 描画中フラグ（多重実行の防止）
  let pending = false;   // 描画中に再描画の要求が来たかどうか
  let resizeTimer = null;

  // 図を表示するコンテナの幅から、描画に使う論理幅を求める
  function getTargetWidth(node) {
    const box = node.closest('.mermaid-chart') || node.parentElement || node;
    const containerWidth = Math.floor(box.getBoundingClientRect().width) || MIN_WIDTH;
    return Math.max(MIN_WIDTH, containerWidth);
  }

  // 構文エラー時などに body 直下へ残る一時要素を掃除
  function cleanupTempElements() {
    document
      .querySelectorAll('body > [id^="dmermaid-"], body > [id^="imermaid-"]')
      .forEach((el) => el.remove());
  }

  async function renderItem(item, width) {
    const { node } = item;

    // 再描画時に高さが一瞬潰れてページがガタつかないよう、現在の高さを保持する
    const prevHeight = node.offsetHeight;
    if (item.rendered && prevHeight) node.style.minHeight = prevHeight + 'px';

    // 描画済みなら、元のソースに戻して未処理の状態にする
    node.removeAttribute('data-processed');
    node.textContent = item.code;

    mermaid.initialize({
      startOnLoad: false,
      theme: 'default', // 配色は mermaid.css で上書きするため固定
      securityLevel: 'strict',
      fontFamily,
      gantt: {
        useWidth: width,   // 描画時の論理幅（最低 MIN_WIDTH）
        useMaxWidth: true, // SVG は width:100% + viewBox で縮小される
      },
    });

    try {
      await mermaid.run({
        nodes: [node],
        suppressErrors: true,
        // innerHTML 挿入直後（描画前）に呼ばれる
        postRenderCallback: (id) => {
          const svg = document.getElementById(id);
          if (!svg) return;
          svg.classList.add('mmd'); // mermaid.css のスコープ
          svg.querySelectorAll('style').forEach((style) => style.remove());
        },
      });
    } finally {
      node.style.minHeight = '';
      item.width = width;
      item.rendered = true;
      cleanupTempElements();
    }
  }

  // 全ての図を描画する。幅が変わっていない図（と Gantt 以外の描画済みの図）はスキップする
  async function renderAll() {
    if (!mermaid) return;
    if (rendering) {
      pending = true;
      return;
    }
    rendering = true;
    try {
      do {
        pending = false;
        for (const item of items) {
          const width = getTargetWidth(item.node);
          if (item.rendered && (!item.isGantt || item.width === width)) continue;
          await renderItem(item, width);
        }
      } while (pending);
    } finally {
      rendering = false;
    }
  }

  // リサイズ・回転イベントをまとめて、少し待ってから再描画する
  // （縦方向だけの変化、例: アドレスバーの出入りでは、幅が同じなので再描画されない）
  function scheduleRerender() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      renderAll().catch((err) => console.error('[mermaid-run] re-render failed:', err));
    }, RESIZE_DELAY);
  }

  async function main() {
    const nodes = [...document.querySelectorAll(SELECTOR)].filter(
      (n) => !n.hasAttribute('data-processed')
    );
    if (!nodes.length) return;

    nodes.forEach((node) => {
      const code = node.textContent.trim();
      const updated = refreshGanttDates(code);
      if (updated !== code) node.textContent = updated;

      items.push({
        node,
        code: updated,
        isGantt: /^\s*gantt\b/m.test(updated),
        width: 0,
        rendered: false,
      });
    });

    ({ default: mermaid } = await import(MERMAID_URL));

    fontFamily =
      getComputedStyle(document.documentElement).getPropertyValue('--font-system-ui').trim() ||
      FALLBACK_FONT;

    await renderAll();

    // Gantt が1つもなければ、幅が変わっても再描画する必要はない
    if (items.some((item) => item.isGantt)) {
      window.addEventListener('resize', scheduleRerender, { passive: true });
      window.addEventListener('orientationchange', scheduleRerender, { passive: true });
    }
  }

  main().catch((err) => console.error('[mermaid-run] failed:', err));
})();