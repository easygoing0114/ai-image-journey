/* main.js (依存: defer_390.js) */

/* ---------- defer.js が読み込めなかった場合の最小フォールバック ---------- */

if (typeof window.Defer !== 'function') {
  const toAttrs = (v) => (typeof v === 'string' ? { id: v } : v || {});
  const append = (tag, props) => document.head.appendChild(Object.assign(document.createElement(tag), props));
  const fallback = (fn, delay) => setTimeout(fn, typeof delay === 'number' ? delay : 0);

  fallback.css = (href, attrs, delay) =>
    fallback(() => append('link', { ...toAttrs(attrs), href, rel: 'stylesheet' }), delay);
  fallback.js = (src, attrs, delay) =>
    fallback(() => append('script', { ...toAttrs(attrs), src }), delay);
  fallback.dom = (selector = '[data-src]') => {
    document.querySelectorAll(selector).forEach((el) => {
      for (const { name, value } of [...el.attributes]) {
        const m = /^data-(.+)/.exec(name);
        if (m) el.setAttribute(m[1], value);
      }
    });
  };
  fallback.all = () => {};

  window.Defer = fallback;
}

/* ---------- 外部 CSS / JS の遅延読み込み ---------- */

if (document.querySelector('#post-pager, #HTML5')) {
  Defer.css('https://ai-image-journey.pages.dev/css/post-pager.css', 'post-pager-css', 100);
}

if (document.querySelector('.blogcard-auto')) {
  Defer.css('https://ai-image-journey.pages.dev/css/blogcard-auto.css', 'blogcard-auto-css', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/blogcard-auto.js', 'blogcard-auto-js', 100);
}

if (document.querySelector('textarea')) {
  Defer.css('https://ai-image-journey.pages.dev/css/textarea.css', 'textarea-css', 100);
}

if (document.querySelector('.table-responsive')) {
  Defer.js('https://ai-image-journey.pages.dev/js/table-responsive.js', 'table-responsive', 100);
}

if (document.querySelector('#toc')) {
  Defer.css('https://ai-image-journey.pages.dev/css/page_toc.css', 'page_toc_css', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/page_toc.js', 'page_toc_js', 100);
}

if (document.querySelector('.markdown')) {
  Defer.js('https://ai-image-journey.pages.dev/js/turndown.min.js', 'turndown', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/turndown-plugin-gfm.js', 'turndownplugin', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/marked.min.js', 'marked', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/marked_index.umd.js', 'markedplugin', 100);
}

if (document.querySelector('.chartjs')) {
  Defer.js('https://ai-image-journey.pages.dev/js/chart.umd.min.js', 'chartjs', 350, null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs-run.js', 'chartjs-run', 350, null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs-plugin-datalabels.min.js', 'chartjsdatalabelsplugin', 700, null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs-adapter-date-fns.bundle.min.js', 'chartjsadapterdatefns', 700, null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs_arrow_plugin.js', 'chartjsarrowplugin', 700, null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/papaprase.js', 'papapease', 700, null, true);
}

if (document.querySelector('.language-mermaid')) {
  Defer.css('https://ai-image-journey.pages.dev/css/mermaid.css', 'mermaid-css', 350, null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/mermaid-run.js', 'mermaid-run', 350, null, true);
}

if (document.querySelector('.katex-block')) {
  Defer.css('https://ai-image-journey.pages.dev/css/katex.css', 'katex-css', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/katex.min.js', 'katex', 350, null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/katex-auto-render.js', 'katex-auto-render', 700, null, true);
}

if (document.querySelector('.twitter-tweet')) {
  Defer.js('https://ai-image-journey.pages.dev/js/twitter_embed.js', 'twitter', 700, null, true);
}

if (document.querySelector('.bluesky-embed')) {
  Defer.js('https://ai-image-journey.pages.dev/js/bluesky-embed.js', 'bluesky-embed', 700, null, true);
}

// 依存関係のためグローバルに置く
function debounce(func, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), wait);
  };
}

(function () {
  'use strict';

  /* ---------- 設定 ---------- */

  const MY_DOMAIN = 'ai-image-journey.com';
  const TITLE_SEPARATOR = typeof titleSeparator !== 'undefined' ? titleSeparator : ' - ';
  const PAGE_LABEL = typeof pageTitle !== 'undefined' ? pageTitle : 'Page';

  const THUMBNAIL_WIDTH = 200;
  const BACK_TO_TOP_THRESHOLD = 1000;
  const LAZY_BATCH = 3;
  const LAZY_INTERVAL = 500;
  const TITLE_SUFFIX = ' | AI Image Journey'; 

  const header = document.getElementById('header');
  const backToTop = document.getElementById('back-to-top');
  const postBody = document.getElementById('post-body');

  /* ---------- 画像 ---------- */

  function toBloggerThumbnail(src) {
    if (!/img\/[ab]|proxy\//.test(src)) return src;
    const size = `w${THUMBNAIL_WIDTH}-e90-rw`;
    const pathSize = /\/[wsh]\d+(?:-[A-Za-z0-9]+)*\//;
    if (pathSize.test(src)) return src.replace(pathSize, `/${size}/`);
    const i = src.lastIndexOf('=');
    return i === -1 ? `${src}=${size}` : src.slice(0, i + 1) + size;
  }

  function toThumbnail(src) {
    if (!src) return src;
    if (/googleusercontent/.test(src)) return toBloggerThumbnail(src);
    if (/img\.youtube|i\.ytimg/.test(src)) return src.slice(0, src.lastIndexOf('/')) + '/mqdefault.jpg';
    return src;
  }

  // loading="lazy" を少しずつ解除する
  function releaseLazyMedia(root = document) {
    root.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]').forEach((el, i) => {
      Defer(() => el.removeAttribute('loading'), Math.floor(i / LAZY_BATCH) * LAZY_INTERVAL);
    });
  }

  function swapImageSize(from, to, minViewport = 0) {
    if (window.innerWidth <= minViewport) return;
    document.querySelectorAll(`img[src*="${from}"]`).forEach((img) => {
      img.src = img.src.replace(from, to);
    });
  }

  Defer(() => {
    Defer.dom('img[data-src]', 100);
    Defer.dom('iframe[data-src]', 300);
  }, 350, true);

  Defer(() => releaseLazyMedia(), 100);

  Defer(() => {
    swapImageSize('w200-e90-rw', 'w800-e90-rw');
    swapImageSize('w400-e90-rw', 'w800-e90-rw');
  }, 5000, true);

  Defer(() => {
    swapImageSize('w800-e90-rw', 'w0-e90-rw', 800);
    swapImageSize('w1200-e90-rw', 'w0-e90-rw', 800);
  }, 10000, true);

  Defer(() => {
    document.querySelectorAll('.gpu-accelerated').forEach((el) => el.classList.remove('gpu-accelerated'));
  }, 3000);

  /* ---------- ヘッダー / ドロップダウン / トップへ戻る ---------- */

  const dropdowns = [
    [document.getElementById('header-search-button'), document.getElementById('header-search-dropdown')],
    [document.getElementById('header-menu-button'), document.getElementById('navbar-menu')],
  ];

  function setDropdown(button, menu, open) {
    menu?.classList.toggle('dropdown-visible', open);
    button?.setAttribute('aria-expanded', String(open));
  }

  const closeDropdowns = () => dropdowns.forEach(([button, menu]) => setDropdown(button, menu, false));

  closeDropdowns(); // aria-expanded の初期値を入れる

  dropdowns.forEach(([button, menu], i) => {
    if (!button || !menu) return;
    button.addEventListener('click', () => {
      const [otherButton, otherMenu] = dropdowns[1 - i];
      setDropdown(otherButton, otherMenu, false);
      setDropdown(button, menu, !menu.classList.contains('dropdown-visible'));
    });
  });

  document.addEventListener('click', (e) => {
    if (!dropdowns.flat().some((el) => el?.contains(e.target))) closeDropdowns();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdowns();
  });

  let lastScrollTop = 0;
  let showHeaderTimer;
  let ticking = false;
  const scrollThreshold = window.innerHeight * 0.03;

  // 検索欄などドロップダウン内にフォーカスがある間は true
  const isTyping = () => dropdowns.some(([, menu]) => menu?.contains(document.activeElement));

  function onScrollFrame() {
    ticking = false;
    const current = window.scrollY;
    const typing = isTyping();

    if (header) {
      if (typing) {
        // 入力中はヘッダーを出したままにする。隠れると入力欄が画面外に出て、
        // ブラウザが入力のたびに入力欄を表示しようとして少しずつスクロールしてしまうため
        clearTimeout(showHeaderTimer);
        header.classList.remove('header-move-up');
        header.classList.add('header-move-down');
      } else if (current > lastScrollTop && current > scrollThreshold) {
        clearTimeout(showHeaderTimer);
        header.classList.remove('header-move-down');
        header.classList.add('header-move-up');
      } else if (current < lastScrollTop) {
        clearTimeout(showHeaderTimer);
        showHeaderTimer = setTimeout(() => {
          header.classList.remove('header-move-up');
          header.classList.add('header-move-down');
        }, 200);
      }
    }

    // 入力中は閉じない (モバイルでキーボード表示時のスクロール対策)
    if (!typing) closeDropdowns();
    backToTop?.classList.toggle('d-none', current < BACK_TO_TOP_THRESHOLD);
    lastScrollTop = Math.max(current, 0);
  }

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(onScrollFrame);
  }, { passive: true });

  /* ---------- 外部リンク / DMCA / ダークモード / タイトル ---------- */

  document.querySelectorAll('a[href]').forEach((link) => {
    if (!/^https?:$/.test(link.protocol)) return;
    const host = link.hostname;
    if (host === MY_DOMAIN || host.endsWith(`.${MY_DOMAIN}`)) return;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const dmcaLink = document.getElementById('dmcaLink');
  if (dmcaLink) {
    const url = new URL(dmcaLink.href, location.href);
    if (!url.searchParams.has('refurl')) {
      url.searchParams.set('refurl', location.href);
      dmcaLink.href = url.href;
    }
  }

  document.querySelectorAll('.toggle-dark-mode-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const next = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
      window.applyTheme?.(next);
      window.saveTheme?.(next);
      if (typeof updateAllChartColors === 'function') updateAllChartColors();
    });
  });

  const pageNumber = new URLSearchParams(location.search).get('page');
  if (pageNumber) {
    document.title = document.title.replace(
      TITLE_SEPARATOR,
      `${TITLE_SEPARATOR}${PAGE_LABEL} ${pageNumber}${TITLE_SEPARATOR}`
    );
  }

  /* ---------- Blogger フィード ---------- */

  // 同じ URL は 1 回だけ取得する (失敗したらキャッシュから外す)
  const feedCache = new Map();

  function fetchFeed(labelPath, params) {
    const url = `/feeds/posts/summary/${labelPath}?${params}&alt=json`;
    if (!feedCache.has(url)) {
      const request = fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`feed request failed: ${res.status}`);
          return res.json();
        })
        .then((json) => json.feed)
        .catch((err) => {
          feedCache.delete(url);
          throw err;
        });
      feedCache.set(url, request);
    }
    return feedCache.get(url);
  }

  const showElement = (el) => el.classList.remove('visually-hidden');

  function shuffled(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const escapeHtml = (text) =>
    String(text ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  /* ---------- ページネーション (#pagination) ---------- */

  async function createPagination(container) {
    if (container.dataset.pagination === 'false') return showElement(container);

    const postsPerPage = Number(container.dataset.posts);
    const label = encodeURIComponent(container.dataset.label || '');
    const labelPath = label ? `-/${label}/` : '';
    const searchPath = label ? `/search/label/${label}` : '/search';
    const currentPage = Number(new URLSearchParams(location.search).get('page')) || 1;

    // updated-max に渡す日時 (ミリ秒を除き、+ をエスケープ)
    const toTimestamp = (entry) => {
      const published = entry.published.$t;
      return (published.slice(0, 19) + published.slice(23)).replace('+', '%2B');
    };

    // page ページ目の URL。entry には「直前のページの最後の記事」を渡す
    const pageHref = (page, entry) =>
      `${searchPath}?updated-max=${toTimestamp(entry)}&max-results=${postsPerPage}&page=${page}`;

    async function prevHref() {
      const page = currentPage - 1;
      if (page === 1) return label ? `${searchPath}?max-results=${postsPerPage}&page=1` : '/';
      const feed = await fetchFeed(labelPath, `start-index=${(page - 1) * postsPerPage}&max-results=1`);
      return pageHref(page, feed.entry[0]);
    }

    // 2 件取得して、2 件目があれば次のページが存在する
    async function nextHref() {
      const feed = await fetchFeed(labelPath, `start-index=${currentPage * postsPerPage}&max-results=2`);
      const [last, following] = feed.entry || [];
      return following ? pageHref(currentPage + 1, last) : null;
    }

    const safe = (promise) => promise.catch((err) => {
      console.warn('[pagination]', err);
      return null;
    });

    const [prev, next] = await Promise.all([
      currentPage > 1 ? safe(prevHref()) : null,
      safe(nextHref()),
    ]);
    if (!prev && !next) return;

    function createLink(text, href, rel) {
      const a = document.createElement('a');
      a.className = 'round-button';
      a.href = href;
      a.rel = rel;
      a.textContent = text;
      return a;
    }

    const nav = document.createElement('div');
    nav.className = 'button-container';
    if (prev) nav.appendChild(createLink('Prev Page', prev, 'prev'));
    if (next) nav.appendChild(createLink('Next Page', next, 'next'));

    container.replaceChildren(nav);
    showElement(container);
  }

  /* ---------- 前後記事ナビ (#post-pager) のタイトル取得 ---------- */

  async function fetchTitleFromFeed(url) {
    const { pathname } = new URL(url);
    const feed = await fetchFeed('', `max-results=1&path=${pathname}`);
    const entry = feed.entry?.[0];
    const href = entry?.link.find((l) => l.rel === 'alternate')?.href;
    return href && new URL(href).pathname === pathname ? entry.title.$t.trim() : null;
  }

  // <title> が読めた時点で打ち切る
  async function fetchTitleFromPage(url) {
    const reader = (await fetch(url)).body.getReader();
    const decoder = new TextDecoder();
    let html = '';
    for (;;) {
      const { done, value } = await reader.read();
      if (done) return '';
      html += decoder.decode(value, { stream: true });
      const match = html.match(/<title>([\s\S]*?)<\/title>/);
      if (match) {
        reader.cancel();
        const box = document.createElement('textarea');
        box.innerHTML = match[1];
        return box.value.replace(TITLE_SUFFIX, '').trim();
      }
    }
  }

  const fetchPostTitle = async (url) => (await fetchTitleFromFeed(url).catch(() => null)) ?? fetchTitleFromPage(url);

  function processPostPager(pager) {
    pager.querySelectorAll('a').forEach((link) => {
      const span = link.appendChild(document.createElement('span'));
      fetchPostTitle(link.href).then((title) => { span.textContent = title; }).catch(() => {});
    });
  }

  /* ---------- カスタム記事リスト (.custom-posts) ---------- */

  const TEMPLATES = {
    related_inline_temp: ({ title, posts }) => {
      const heading = title ? `<div><span>${escapeHtml(title)}</span></div>` : '';
      const items = posts
        .map((p) => `<li class='inline-related-list'><a href='${escapeHtml(p.url)}'>${escapeHtml(p.title)}</a></li>`)
        .join('');
      return `<div id='inline-related-article'>${heading}<ul>${items}</ul></div>`;
    },

    sidebar_temp: ({ title, posts }) => {
      const heading = title ? `<div class='widget-title'><span class='item-title-text'>${escapeHtml(title)}</span></div>` : '';
      const items = posts
        .map((p) => {
          const url = escapeHtml(p.url);
          const name = escapeHtml(p.title);
          const thumb = p.img
            ? `<div class='item-thumbnail'><img alt='${name}' class='object-cover thumbnail-img' decoding='async' loading='lazy' src='${escapeHtml(p.img)}'/></div>`
            : '';
          return `<div class='item-post'><a class='item-post-link' href='${url}'>${thumb}` +
            `<div class='item-content'><h3 class='item-title' itemprop='headline'><span>${name}</span></h3></div></a></div>`;
        })
        .join('');
      return `${heading}<div class='item-post-base'>${items}</div>`;
    },
  };

  function toPostData(entry) {
    const link = entry.link.find((l) => l.rel === 'alternate') || entry.link[entry.link.length - 1];
    return { url: link.href, title: entry.title.$t, img: toThumbnail(entry.media$thumbnail?.url) };
  }

  // "A,B,C" 形式なら 1 つ選ぶ
  function buildLabelPath(rawLabels) {
    const labels = rawLabels.split(',');
    const label = (labels.length > 1 ? labels[Math.floor(Math.random() * labels.length)] : rawLabels).trim();
    return label && label !== 'false' ? `-/${encodeURIComponent(label)}/` : '';
  }

  async function loadCustomPosts(container) {
    const { title, items, shuffle, noItem, func, callback } = container.dataset;
    const template = TEMPLATES[func];
    if (!template) return;

    const limit = Number(items);
    const labelPath = buildLabelPath(container.dataset.label || container.textContent);

    const feed = await fetchFeed(labelPath, `max-results=${noItem ? limit + 1 : limit}`);
    const posts = (feed.entry || [])
      .map(toPostData)
      .filter((p) => p.url !== noItem)
      .slice(0, limit);
    if (!posts.length) return;

    const shuffleCount = Number(shuffle);
    const finalPosts = shuffleCount > 0 ? shuffled(posts).slice(0, shuffleCount) : posts;
    container.innerHTML = template({ title, posts: finalPosts }).trim();
    showElement(container);
    releaseLazyMedia(container);

    if (typeof window[callback] === 'function') window[callback]();
  }

  window.jo = Object.assign(window.jo || {}, { loadCustomPosts });

  /* ---------- 記事本文 ---------- */

  function copyRelatedPostsToInline() {
    const related = document.querySelector('.related-posts');
    const inline = document.querySelector('.related-inline');
    if (!related || !inline) return;

    inline.innerHTML = related.innerHTML;
    const excluded = related.getAttribute('data-no-item');
    if (excluded !== null) inline.setAttribute('data-no-item', excluded);
  }

  // #ads-post の中身 (関連記事リンクの枠) を本文末尾へ移動する
  function moveInlineRelatedToEnd() {
    const container = document.getElementById('ads-post');
    if (container && postBody) postBody.append(...container.children);
  }

  /* ---------- 実行 ---------- */

  Defer(() => {
    if (postBody) {
      moveInlineRelatedToEnd(); // 中身を読み込む前に移動しておく
      copyRelatedPostsToInline();
    }

    document.querySelectorAll('.custom-posts').forEach((container, i) => {
      Defer(() => loadCustomPosts(container).catch((err) => console.warn('[custom-posts]', err)), i * 100);
    });
  }, 100);

  Defer(() => {
    const pager = document.getElementById('post-pager');
    if (pager) processPostPager(pager);
  }, 1500, true);

  Defer(() => {
    const pagination = document.getElementById('pagination');
    if (pagination) createPagination(pagination).catch((err) => console.warn('[pagination]', err));
  }, 500);
})();