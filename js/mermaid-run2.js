/*
 * mermaid-run.js
 *
 * Mermaid v12 の ESM を読み込んで描画する。
 *  - main.js から Defer.js 経由で呼ばれる（classic script）。ESM は動的 import() で読む
 *  - mermaid.css は main.js が Defer.css で読み込む（id="mermaid-css"）。ここでは読み込み完了を待つだけ
 *  - 描画後、各 SVG 内に生成される <style> を削除する
 *  - 配色は mermaid.css（.dark-mode 対応済み）が担当するため、テーマ切替で再描画しない
 *
 * 注意: <style> を消すと、Mermaid が計測時に使ったフォント指定も消える。
 *       フォントはサイトの --font-system-ui を取得して Mermaid に渡しており、
 *       mermaid.css も同じ変数を使うので、計測時と表示時のフォントは一致する。
 */
(() => {
  'use strict';

  // ---- 設定 ---------------------------------------------------------------
  // Cloudflare Pages 上に配置した Mermaid v12 の ESM（チャンクは ./chunks/mermaid.esm.min/ に置く）
  const MERMAID_URL = 'https://ai-image-journey.pages.dev/js/mermaid/mermaid.esm.min.mjs';
  const CSS_ID = 'mermaid-css'; // main.js の Defer.css の第2引数と一致させる
  const SELECTOR = '.language-mermaid';

  // --font-system-ui が取得できなかった場合の予備（サイトの定義と同じ）
  const FALLBACK_FONT =
    "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', \"Segoe UI\", \"Liberation Sans\", \"Hiragino Sans\", \"BIZ UDGothic\", system-ui, sans-serif";

  function siteFontFamily() {
    const v = getComputedStyle(document.documentElement).getPropertyValue('--font-system-ui').trim();
    return v || FALLBACK_FONT;
  }

  // true: classDef 由来のルールだけ <style> に残す（classDef を使う図の色が消えない）
  // false: <style> を完全に削除する
  const KEEP_CLASSDEF_STYLES = true;

  // ---- 既存処理: figure にクラス付与 ---------------------------------------
  document.querySelectorAll('.mermaid-chart').forEach((figure) => {
    figure.classList.add('box-img', 'box-img640');
  });

  // ---- Gantt: 最新の日付を今日に置換（従来処理を維持） ----------------------
  const today = new Date().toISOString().split('T')[0];

  function refreshGanttDates(code) {
    if (!code.includes('gantt')) return code;
    const dates = code.match(/\d{4}-\d{2}-\d{2}/g);
    if (!dates) return code;
    const latest = dates.reduce((a, b) => (new Date(b) > new Date(a) ? b : a), dates[0]);
    return code.split(latest).join(today);
  }

  // ---- <style> の後始末 ----------------------------------------------------
  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function classDefMatchers(source) {
    const names = new Set();
    for (const m of source.matchAll(/^\s*classDef\s+([^\s;]+)/gm)) {
      m[1].split(',').forEach((n) => n && names.add(n));
    }
    return [...names].map((n) => new RegExp('\\.' + escapeRegExp(n) + '(?![\\w-])'));
  }

  // CSS テキストをルール配列に解析する。
  // SVG 内の <style> は .sheet の扱いがブラウザ依存なので、
  // 適用されない（media="not all"）一時的な HTML <style> で解析する。
  function parseRules(cssText) {
    const tmp = document.createElement('style');
    tmp.media = 'not all';
    tmp.textContent = cssText;
    document.head.appendChild(tmp);
    let rules = [];
    try {
      rules = tmp.sheet ? [...tmp.sheet.cssRules] : [];
    } catch (_) {
      /* 解析できなければ全削除にフォールバック */
    }
    tmp.remove();
    return rules;
  }

  function stripGeneratedStyles(svg, source) {
    svg.classList.add('mmd'); // mermaid.css のスコープ

    const matchers = KEEP_CLASSDEF_STYLES ? classDefMatchers(source) : [];

    svg.querySelectorAll('style').forEach((style) => {
      if (matchers.length) {
        const kept = parseRules(style.textContent)
          .filter(
            (rule) =>
              rule.selectorText &&
              rule.cssText.includes('!important') &&
              matchers.some((re) => re.test(rule.selectorText))
          )
          .map((rule) => rule.cssText);
        if (kept.length) {
          style.textContent = kept.join('\n');
          return;
        }
      }
      style.remove();
    });
  }

  // ---- mermaid.css の読み込み完了待ち ---------------------------------------
  // <style> を消した後は mermaid.css だけが見た目を決めるため、先に描画すると
  // 一瞬だけ未スタイルの図（黒塗り）が見える。link が読み込まれる（.sheet が入る）まで待つ。
  // 5秒待っても読めなければ（404 など）そのまま描画する。
  function waitForStylesheet(id, timeout = 5000) {
    return new Promise((resolve) => {
      const start = performance.now();
      (function check() {
        const link = document.getElementById(id);
        if ((link && link.sheet) || performance.now() - start > timeout) return resolve();
        setTimeout(check, 50);
      })();
    });
  }

  // ---- 本処理 --------------------------------------------------------------
  async function main() {
    // 並行して取得開始（描画は両方そろってから）
    const modulePromise = import(MERMAID_URL);
    const cssPromise = waitForStylesheet(CSS_ID);

    // 描画対象と元ソースを控える（Gantt は日付を更新）
    const sources = new Map();
    const nodes = [...document.querySelectorAll(SELECTOR)].filter(
      (n) => !n.hasAttribute('data-processed')
    );
    if (!nodes.length) return;

    nodes.forEach((node) => {
      const code = node.textContent.trim();
      const updated = refreshGanttDates(code);
      if (updated !== code) node.textContent = updated;
      sources.set(node, updated);
    });

    const [{ default: mermaid }] = await Promise.all([modulePromise, cssPromise]);

    mermaid.initialize({
      startOnLoad: false,
      theme: 'default', // 配色は mermaid.css で上書きするため固定
      securityLevel: 'strict',
      fontFamily: siteFontFamily(),
    });

    await mermaid.run({
      nodes,
      suppressErrors: true,
      // innerHTML 挿入直後（描画前）に呼ばれるので、デフォルト配色が見えることはない
      postRenderCallback: (id) => {
        const svg = document.getElementById(id);
        if (!svg) return;
        const host = svg.closest(SELECTOR);
        stripGeneratedStyles(svg, (host && sources.get(host)) || '');
      },
    });

    // 構文エラー時などに body 直下へ残る一時要素を掃除
    document
      .querySelectorAll('body > [id^="dmermaid-"], body > [id^="imermaid-"]')
      .forEach((el) => el.remove());
  }

  main().catch((err) => console.error('[mermaid-run] failed:', err));
})();