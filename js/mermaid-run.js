/*
 * mermaid-run.js
 *
 * Mermaid v12 の ESM を動的 import して描画する。
 *  - main.js から Defer.js 経由で呼ばれる（mermaid.css は Defer.css で別途読み込む）
 *  - 描画直後、各 SVG 内に生成される <style> を全て削除し、見た目は mermaid.css に任せる
 *  - フォントはサイトの --font-system-ui を Mermaid に渡す（文字幅の計測を表示時と一致させる）
 */
(() => {
  'use strict';

  const MERMAID_URL = 'https://ai-image-journey.pages.dev/js/mermaid/mermaid.esm.min.mjs';
  const SELECTOR = '.language-mermaid';

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

  async function main() {
    const nodes = [...document.querySelectorAll(SELECTOR)].filter(
      (n) => !n.hasAttribute('data-processed')
    );
    if (!nodes.length) return;

    nodes.forEach((node) => {
      const code = node.textContent.trim();
      const updated = refreshGanttDates(code);
      if (updated !== code) node.textContent = updated;
    });

    const { default: mermaid } = await import(MERMAID_URL);

    mermaid.initialize({
      startOnLoad: false,
      theme: 'default', // 配色は mermaid.css で上書きするため固定
      securityLevel: 'strict',
      fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--font-system-ui').trim() || FALLBACK_FONT,
    });

    await mermaid.run({
      nodes,
      suppressErrors: true,
      // innerHTML 挿入直後（描画前）に呼ばれる
      postRenderCallback: (id) => {
        const svg = document.getElementById(id);
        if (!svg) return;
        svg.classList.add('mmd'); // mermaid.css のスコープ
        svg.querySelectorAll('style').forEach((style) => style.remove());
      },
    });

    // 構文エラー時などに body 直下へ残る一時要素を掃除
    document
      .querySelectorAll('body > [id^="dmermaid-"], body > [id^="imermaid-"]')
      .forEach((el) => el.remove());
  }

  main().catch((err) => console.error('[mermaid-run] failed:', err));
})();