(() => {
  'use strict';

  const MERMAID_URL = 'https://ai-image-journey.pages.dev/js/mermaid/mermaid.esm.min.mjs';
  const SELECTOR = '.language-mermaid';
  const MIN_WIDTH = 560;
  const RESIZE_DELAY = 100;
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

  const items = []; // { node, code, isGantt, width, rendered }
  let mermaid, fontFamily = FALLBACK_FONT;
  let rendering = false, pending = false, timer;

  const getWidth = (node) => {
    const box = node.closest('.mermaid-chart') || node.parentElement || node;
    return Math.max(MIN_WIDTH, Math.floor(box.getBoundingClientRect().width) || MIN_WIDTH);
  };

  async function renderItem(item, width) {
    const { node } = item;
    if (item.rendered && node.offsetHeight) node.style.minHeight = node.offsetHeight + 'px';
    node.removeAttribute('data-processed');
    node.textContent = item.code;

    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'strict',
      fontFamily,
      gantt: { useWidth: width, useMaxWidth: true },
    });

    try {
      await mermaid.run({
        nodes: [node],
        suppressErrors: true,
        postRenderCallback: (id) => {
          const svg = document.getElementById(id);
          if (!svg) return;
          svg.classList.add('mmd');
          svg.querySelectorAll('style').forEach((s) => s.remove());
        },
      });
    } finally {
      node.style.minHeight = '';
      item.width = width;
      item.rendered = true;
      document
        .querySelectorAll('body > [id^="dmermaid-"], body > [id^="imermaid-"]')
        .forEach((el) => el.remove());
    }
  }

  async function renderAll() {
    if (rendering) { pending = true; return; }
    rendering = true;
    try {
      do {
        pending = false;
        for (const item of items) {
          const width = getWidth(item.node);
          if (item.rendered && (!item.isGantt || item.width === width)) continue;
          await renderItem(item, width);
        }
      } while (pending);
    } finally {
      rendering = false;
    }
  }

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(() => renderAll().catch((e) => console.error('[mermaid-run]', e)), RESIZE_DELAY);
  }

  async function main() {
    const nodes = [...document.querySelectorAll(SELECTOR)].filter(
      (n) => !n.hasAttribute('data-processed')
    );
    if (!nodes.length) return;

    nodes.forEach((node) => {
      const code = refreshGanttDates(node.textContent.trim());
      node.textContent = code;
      items.push({ node, code, isGantt: /^\s*gantt\b/m.test(code), width: 0, rendered: false });
    });

    ({ default: mermaid } = await import(MERMAID_URL));
    fontFamily =
      getComputedStyle(document.documentElement).getPropertyValue('--font-system-ui').trim() ||
      FALLBACK_FONT;

    await renderAll();

    if (items.some((i) => i.isGantt)) {
      window.addEventListener('resize', schedule, { passive: true });
      window.addEventListener('orientationchange', schedule, { passive: true });
    }
  }

  main().catch((e) => console.error('[mermaid-run] failed:', e));
})();