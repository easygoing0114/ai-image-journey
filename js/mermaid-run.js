/* mermaid-run.js
 * mermaid v12 (flowchart / gantt only) + external mermaid.css
 * - テーマ(ダークモード)は mermaid.css が html.dark-mode で切り替えるため、再描画は不要
 * - mermaid が SVG 内に出力する <style> は取り除く(スタイルは mermaid.css に一本化)
 * - ガントチャートの最終日付は、描画前にソース内で当日の日付へ置換
 */
(function () {
  const CSS_ID = 'mermaid-css';
  const CSS_TIMEOUT = 3000;

  document.querySelectorAll('.mermaid-chart').forEach(figure => {
    figure.classList.add('box-img', 'box-img640');
  });

  // ---- ガント日付更新 -------------------------------------------------
  function localToday() {
    const d = new Date();
    const p = n => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  function findLatestDate(code) {
    const dates = code.match(/\d{4}-\d{2}-\d{2}/g);
    if (!dates) return null;
    return dates.reduce((latest, cur) => (new Date(cur) > new Date(latest) ? cur : latest), dates[0]);
  }

  function updateGanttDate(code, today) {
    if (!/^\s*gantt\b/m.test(code)) return code;
    const latest = findLatestDate(code);
    return latest ? code.split(latest).join(today) : code;
  }

  // ---- 共有グラデーション ----------------------------------------------
  // ダークテーマのノード枠線は stroke:url(#mermaid-gradient) を参照する。
  // mermaid は SVG ごとに別 ID のグラデーションを埋め込むため、共通 CSS 用に 1 つだけ共有定義を置く。
  // 色は mermaid.css の --mermaid-gradient-start / --mermaid-gradient-end から取る。
  function ensureSharedDefs() {
    if (document.getElementById('mermaid-shared-defs')) return;
    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.id = 'mermaid-shared-defs';
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    svg.innerHTML =
      '<defs><linearGradient id="mermaid-gradient" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%">' +
      '<stop offset="0%" style="stop-color:var(--mermaid-gradient-start);stop-opacity:1"></stop>' +
      '<stop offset="100%" style="stop-color:var(--mermaid-gradient-end);stop-opacity:1"></stop>' +
      '</linearGradient></defs>';
    document.body.appendChild(svg);
  }

  // ---- mermaid.css の読み込み待ち --------------------------------------
  // CSS 未適用のまま SVG を差し込むと、一瞬スタイル無しで表示されるため待つ
  function waitForCss() {
    return new Promise(resolve => {
      const link = document.getElementById(CSS_ID);
      if (!link || link.sheet) return resolve();
      const done = () => resolve();
      link.addEventListener('load', done, { once: true });
      link.addEventListener('error', done, { once: true });
      setTimeout(done, CSS_TIMEOUT);
    });
  }

  // ---- 描画 ------------------------------------------------------------
  async function renderAll() {
    if (typeof mermaid === 'undefined') return;

    mermaid.initialize({
      startOnLoad: false,
      theme: 'default', // 配色は mermaid.css 側で light / dark を切り替える
      layout: 'dagre'   // v12 の既定は elk。v10 までと同じ dagre に固定
    });

    ensureSharedDefs();
    await waitForCss();

    const today = localToday();
    const elements = document.querySelectorAll('.language-mermaid');

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.getAttribute('data-processed')) continue;

      const code = updateGanttDate(element.textContent.trim(), today);
      const id = 'mermaid-svg-' + i;

      try {
        const { svg, bindFunctions } = await mermaid.render(id, code);

        // mermaid が出力する <style> を除去(mermaid.css に任せる)
        const tpl = document.createElement('template');
        tpl.innerHTML = svg;
        tpl.content.querySelectorAll('svg > style').forEach(s => s.remove());

        element.replaceChildren(tpl.content);
        element.setAttribute('data-processed', 'true');
        if (bindFunctions) bindFunctions(element);
      } catch (error) {
        console.error('Mermaid render error:', error);
        // 失敗時に mermaid が body に残す一時要素を掃除
        document.getElementById('d' + id)?.remove();
        document.getElementById(id)?.remove();
      }
    }
  }

  Defer(renderAll, 1500);
})();