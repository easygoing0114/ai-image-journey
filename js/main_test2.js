/* ==========================================================================
   main_test.js
   依存: defer_390.js (先に読み込むこと。グローバルの Defer を使う)

   テンプレート側で定義されていれば読む変数 (無くても動作):
     titleSeparator / pageTitle / innerAdsDelimiter / ignoreAdsDelimiter
   テーマ側のインラインスクリプトで定義される関数 (あれば使う):
     applyTheme / saveTheme / updateAllChartColors
   ========================================================================== */


/* ==========================================================================
   外部 CSS / JS の遅延読み込み
   ページ内に該当要素があるときだけ読み込む。
   Defer.css / Defer.js (url, id, 遅延ms)
   ========================================================================== */

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
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs-plugin-datalabels.min.js', 'chartjsdatalabelsplugin', 700,  null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs-adapter-date-fns.bundle.min.js', 'chartjsadapterdatefns', 700, null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs_arrow_plugin.js', 'chartjsarrowplugin', 700,  null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/papaprase.js', 'papapease', 700,  null, true);
}

if (document.querySelector('.language-mermaid')) {
  Defer.css('https://ai-image-journey.pages.dev/css/mermaid.css', 'mermaid-css', 350,  null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/mermaid-run.js', 'mermaid-run', 350,  null, true);
}

if (document.querySelector('.katex-block')) {
  Defer.css('https://ai-image-journey.pages.dev/css/katex.css', 'katex-css', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/katex.min.js', 'katex', 350,  null, true);
  Defer.js('https://ai-image-journey.pages.dev/js/katex-auto-render.js', 'katex-auto-render', 700,  null, true);
}

if (document.querySelector('.twitter-tweet')) {
  Defer.js('https://ai-image-journey.pages.dev/js/twitter_embed.js', 'twitter', 700,  null, true);
}

if (document.querySelector('.bluesky-embed')) {
  Defer.js('https://ai-image-journey.pages.dev/js/bluesky-embed.js', 'bluesky-embed', 700,  null, true);
}


/* ==========================================================================
   グローバル関数
   chartjs-run.js が window.debounce を参照するため、IIFE の外 (グローバル) に置く。
   ========================================================================== */

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}


/* ==========================================================================
   ここからサイト独自コード
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. 設定
     ------------------------------------------------------------------------ */

  const MY_DOMAIN = 'ai-image-journey.com';

  const TITLE_SEPARATOR = typeof titleSeparator !== 'undefined' ? titleSeparator : ' - ';
  const PAGE_LABEL = typeof pageTitle !== 'undefined' ? pageTitle : 'Page';
  const AD_ANCHOR_SELECTOR = typeof innerAdsDelimiter !== 'undefined' ? innerAdsDelimiter : 'p,br,div';
  const AD_IGNORE_SELECTOR = typeof ignoreAdsDelimiter !== 'undefined' ? ignoreAdsDelimiter : 'pre,ul,ol,table,blockquote';

  const THUMBNAIL_WIDTH = 400;          // カスタム記事リストのサムネイル幅 (px)
  const BACK_TO_TOP_THRESHOLD = 1000;   // この px 以上スクロールしたらトップへ戻るボタンを表示
  const LAZY_RELEASE_BATCH = 2;         // loading="lazy" を一度に解除する枚数
  const LAZY_RELEASE_INTERVAL = 200;    // 解除バッチの間隔 (ms)

  const header = document.getElementById('header');
  const backToTop = document.getElementById('back-to-top');
  const searchButton = document.getElementById('header-search-button');
  const searchDropdown = document.getElementById('header-search-dropdown');
  const menuButton = document.getElementById('header-menu-button');
  const navbarMenu = document.getElementById('navbar-menu');
  const adsContainer = document.getElementById('ads-post');
  const postBody = document.getElementById('post-body');
  const relatedPosts = document.querySelector('.related-posts');
  const relatedInline = document.querySelector('.related-inline');


  /* ------------------------------------------------------------------------
     2. 画像
     ------------------------------------------------------------------------ */

  /**
   * Blogger の画像 URL を THUMBNAIL_WIDTH のサムネイル URL に変換
   * 例: .../img/a/xxxx=s1600 や .../proxy/xxxx=s1600 → "=" 以降を差し替える
   * 上記の形式以外は変換せずそのまま返す。
   */
  function toBloggerThumbnail(src) {
    if (!/img\/a|proxy\//.test(src)) return src;

    const size = `w${THUMBNAIL_WIDTH}-c-e90-rw`;
    const equalsIndex = src.lastIndexOf('=');
    return equalsIndex === -1 ? `${src}=${size}` : src.slice(0, equalsIndex + 1) + size;
  }

  /** 画像 URL を表示用サイズに変換 (Blogger → サムネイル / YouTube → mqdefault) */
  function toThumbnail(src) {
    if (!src) return src;
    if (/googleusercontent/.test(src)) return toBloggerThumbnail(src);
    if (/img\.youtube|i\.ytimg/.test(src)) return src.slice(0, src.lastIndexOf('/')) + '/mqdefault.jpg';
    return src;
  }

  /**
   * loading="lazy" を順次解除する (img / iframe)。
   * Blogger の画像サーバーは応答待ちが長いので、少しずつ並列にリクエストを出す。
   */
  function releaseLazyMedia(root = document) {
    root.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]').forEach((element, i) => {
      Defer(
        () => element.removeAttribute('loading'),
        Math.floor(i / LAZY_RELEASE_BATCH) * LAZY_RELEASE_INTERVAL
      );
    });
  }

  /** src 内の from を to に置き換える (viewport 幅が minViewport 以下なら何もしない) */
  function swapImageSize(from, to, minViewport = 0) {
    if (window.innerWidth <= minViewport) return;
    document.querySelectorAll(`img[src*="${from}"]`).forEach((img) => {
      img.src = img.src.replace(from, to);
    });
  }

  // data-src を使う画像の差し替え (公式の Defer.dom)
  // 旧 .lazyload 画像 (data-src のみ) は、表示前にサムネイルサイズへ変換する。
  // テーマ側に data-src + .lazyload の画像が無ければ、この1行は削除できる。
  Defer.dom('img.lazyload', 1, 'loaded', (img) => {
    const src = img.getAttribute('data-src');
    if (src) img.setAttribute('data-src', toThumbnail(src));
  }, { rootMargin: '500%' });
  Defer.dom('img', 300);
  Defer.dom('iframe', 500);

  Defer(() => releaseLazyMedia(), 100);

  // 小さいカード画像を段階的に拡大 (w200, w400 → w800 → w0)
  Defer(() => swapImageSize('w200-e90-rw', 'w800-e90-rw'), 5000);
  Defer(() => swapImageSize('w400-e90-rw', 'w800-e90-rw'), 5000);
  Defer(() => {
    // 最高画質 (w0) は PC 幅のみ。ダウンロード用途の長期滞在者向け
    swapImageSize('w800-e90-rw', 'w0-e90-rw', 800);
    swapImageSize('w1200-e90-rw', 'w0-e90-rw', 800);
  }, 10000);

  Defer(() => {
    document.querySelectorAll('.gpu-accelerated').forEach((el) => el.classList.remove('gpu-accelerated'));
  }, 3000);


  /* ------------------------------------------------------------------------
     3. ヘッダー / ドロップダウン / トップへ戻るボタン
     ------------------------------------------------------------------------ */

  function closeDropdowns() {
    searchDropdown?.classList.remove('dropdown-visible');
    navbarMenu?.classList.remove('dropdown-visible');
  }

  function bindDropdown(button, target, other) {
    if (!button || !target) return;
    button.addEventListener('click', () => {
      target.classList.toggle('dropdown-visible');
      other?.classList.remove('dropdown-visible');
    });
  }

  bindDropdown(searchButton, searchDropdown, navbarMenu);
  bindDropdown(menuButton, navbarMenu, searchDropdown);

  document.addEventListener('click', (event) => {
    const inside = [searchButton, searchDropdown, menuButton, navbarMenu]
      .some((el) => el?.contains(event.target));
    if (!inside) closeDropdowns();
  });

  // スクロール処理は 1 本にまとめ、requestAnimationFrame で間引く
  let lastScrollTop = 0;
  let showHeaderTimer;
  let scrollTicking = false;
  const scrollThreshold = window.innerHeight * 0.03;

  function onScrollFrame() {
    scrollTicking = false;
    const current = window.pageYOffset || document.documentElement.scrollTop;

    if (header) {
      if (current > lastScrollTop && current > scrollThreshold) {
        // 下へスクロール: ヘッダーを隠す
        clearTimeout(showHeaderTimer);
        header.classList.remove('header-move-down');
        header.classList.add('header-move-up');
      } else if (current < lastScrollTop) {
        // 上へスクロール: 少し待ってからヘッダーを表示
        clearTimeout(showHeaderTimer);
        showHeaderTimer = setTimeout(() => {
          header.classList.remove('header-move-up');
          header.classList.add('header-move-down');
        }, 200);
      }
    }

    closeDropdowns();
    backToTop?.classList.toggle('d-none', current < BACK_TO_TOP_THRESHOLD);
    lastScrollTop = Math.max(current, 0);
  }

  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(onScrollFrame);
  }, { passive: true });


  /* ------------------------------------------------------------------------
     4. 小さな処理 (外部リンク / DMCA / ダークモードボタン / タイトル)
     ------------------------------------------------------------------------ */

  // 外部リンクは新しいタブで開く (http/https のみ。mailto: などは対象外)
  document.querySelectorAll('a[href]').forEach((link) => {
    if (!/^https?:$/.test(link.protocol)) return;
    const host = link.hostname;
    if (host === MY_DOMAIN || host.endsWith(`.${MY_DOMAIN}`)) return;
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  const dmcaLink = document.getElementById('dmcaLink');
  if (dmcaLink && !dmcaLink.href.includes('refurl')) {
    dmcaLink.href += `${dmcaLink.href.includes('?') ? '&' : '?'}refurl=${document.location}`;
  }

  // ダークモード切り替え (保存はトグル操作時のみ。applyTheme / saveTheme はテーマ側で定義)
  document.querySelectorAll('.toggle-dark-mode-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const next = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
      window.applyTheme?.(next);
      window.saveTheme?.(next);
      if (typeof updateAllChartColors === 'function') updateAllChartColors();
    });
  });

  // ページ番号付きのページでは <title> にページ番号を挿入する
  const pageNumber = new URLSearchParams(location.search).get('page');
  if (pageNumber) {
    document.title = document.title.replace(
      TITLE_SEPARATOR,
      `${TITLE_SEPARATOR}${PAGE_LABEL} ${pageNumber}${TITLE_SEPARATOR}`
    );
  }


  /* ------------------------------------------------------------------------
     5. Blogger フィード
        同一オリジンの相対パスで fetch するので、www の有無に左右されない。
     ------------------------------------------------------------------------ */

  async function fetchFeed(labelPath, params) {
    const response = await fetch(`/feeds/posts/summary/${labelPath}?${params}&alt=json`);
    if (!response.ok) throw new Error(`feed request failed: ${response.status}`);
    return (await response.json()).feed;
  }

  function showElement(element) {
    element.classList.remove('visually-hidden');
  }

  function shuffled(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }


  /* ------------------------------------------------------------------------
     6. ページネーション (#pagination)
        <div id="pagination" data-posts="10" data-label="ラベル名" data-pagination="false|...">
     ------------------------------------------------------------------------ */

  async function createPagination(container) {
    if (container.dataset.pagination === 'false') {
      showElement(container);
      return;
    }

    const postsPerPage = Number(container.dataset.posts);
    const label = encodeURIComponent(container.dataset.label || '');
    const labelPath = label ? `-/${label}/` : '';
    const searchPath = label ? `/search/label/${label}` : '/search';

    const query = new URLSearchParams(location.search);
    const pageSize = Number(query.get('max-results')) || postsPerPage;
    const currentPage = Number(query.get('page')) || 1;

    // そのページ先頭の記事の公開日時を取得し、検索ページへ遷移する
    async function goToPage(page) {
      if (page === 1) {
        location.href = label ? `${searchPath}?max-results=${postsPerPage}&page=1` : '/';
        return;
      }
      const feed = await fetchFeed(labelPath, `start-index=${(page - 1) * postsPerPage}&max-results=1`);
      const published = feed.entry[0].published.$t;
      // "2024-01-01T12:00:00.123+09:00" → ミリ秒 (20〜22 文字目) を除き、+ をエンコード
      const timestamp = (published.slice(0, 19) + published.slice(23)).replace('+', '%2B');
      location.href = `${searchPath}?updated-max=${timestamp}&max-results=${pageSize}&page=${page}`;
    }

    function createButton(text, page) {
      const button = document.createElement('button');
      button.className = 'round-button';
      button.textContent = text;
      button.addEventListener('click', (event) => {
        event.preventDefault();
        goToPage(page).catch((error) => console.warn('[pagination]', error));
      });
      return button;
    }

    const feed = await fetchFeed(labelPath, 'max-results=1');
    const totalResults = parseInt(feed.openSearch$totalResults.$t, 10);
    if (postsPerPage >= totalResults) return; // 1 ページに収まるなら何も表示しない

    const totalPages = Math.ceil(totalResults / pageSize);
    const buttons = document.createElement('div');
    buttons.className = 'button-container';
    if (currentPage > 1) buttons.appendChild(createButton('Prev Page', currentPage - 1));
    if (currentPage < totalPages) buttons.appendChild(createButton('Next Page', currentPage + 1));

    container.innerHTML = '';
    container.appendChild(buttons);
    showElement(container);
  }


  /* ------------------------------------------------------------------------
     6b. 前後記事ナビ (#post-pager) のタイトル表示
         Blogger のテンプレートタグ (data:olderPageTitle など) はリンク文言用で、
         記事タイトルは取得できないため、フィードを ?path= で 1 記事だけ引く。
         (旧実装は記事ページ全体を fetch していた)
     ------------------------------------------------------------------------ */

  const TITLE_SUFFIX_TO_STRIP = ' | AI Image Journey';

  /** フィードから 1 記事だけ取得する (?path= で絞り込み)。絞り込めていなければ null */
  async function fetchTitleFromFeed(url) {
    const { pathname } = new URL(url);
    const feed = await fetchFeed('', `max-results=1&path=${pathname}`);
    const entry = feed.entry?.[0];
    const href = entry?.link.find((l) => l.rel === 'alternate')?.href;
    // path が無視されると最新記事が返ってくるので、URL が一致するか確認する
    return href && new URL(href).pathname === pathname ? entry.title.$t.trim() : null;
  }

  /** 記事ページを読み、<title> が出た時点で読み込みを打ち切る (フィードで取れなかった場合の保険) */
  async function fetchTitleFromPage(url) {
    const response = await fetch(url);
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let html = '';
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      html += decoder.decode(value, { stream: true });
      const match = html.match(/<title>([\s\S]*?)<\/title>/);
      if (match) {
        reader.cancel();
        const box = document.createElement('textarea');
        box.innerHTML = match[1]; // HTML エンティティを元に戻す
        return box.value.replace(TITLE_SUFFIX_TO_STRIP, '').trim();
      }
    }
    return '';
  }

  async function fetchPostTitle(url) {
    return (await fetchTitleFromFeed(url).catch(() => null)) ?? fetchTitleFromPage(url);
  }

  function processPostPager(pager) {
    pager.querySelectorAll('a').forEach((link) => {
      const titleSpan = document.createElement('span');
      link.appendChild(titleSpan);

      fetchPostTitle(link.href)
        .then((title) => { titleSpan.textContent = title; })
        .catch(() => { /* 取得失敗時は空のままにする */ });
    });
  }


  /* ------------------------------------------------------------------------
     7. カスタム記事リスト (.custom-posts)
        <div class="custom-posts"
             data-label="ラベル (カンマ区切りで複数可。未指定なら要素の中身)"
             data-title="見出し" data-items="表示数"
             data-shuffle="シャッフル後に残す数" data-no-item="除外する記事URL"
             data-func="テンプレート名" data-callback="描画後に呼ぶグローバル関数名">
     ------------------------------------------------------------------------ */

  /** フィード由来の文字列を HTML に埋め込むための最低限のエスケープ */
  function escapeHtml(text) {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return String(text ?? '').replace(/[&<>"']/g, (ch) => entities[ch]);
  }

  /** 記事内の関連記事リスト (data-func="related_inline_temp") */
  function relatedInlineTemplate({ title, posts }) {
    // title は data-title 属性 (サイト管理者が書く値) なのでそのまま出力する
    const heading = title ? `<div><span>${title}</span></div>` : '';
    const items = posts
      .map((post) => `<li class='inline-related-list'><a href='${escapeHtml(post.url)}'>${escapeHtml(post.title)}</a></li>`)
      .join('');

    return `<div id='inline-related-article'>${heading}<ul>${items}</ul></div>`;
  }

  /** サイドバーのサムネイル付き記事リスト (data-func="sidebar_temp") */
  function sidebarTemplate({ title, posts }) {
    const heading = title
      ? `<div class='widget-title'><span class='item-title-text'>${title}</span></div>`
      : '';

    const items = posts
      .map((post) => {
        const url = escapeHtml(post.url);
        const postTitle = escapeHtml(post.title);
        const thumbnail = post.img
          ? `<div class='item-thumbnail'>` +
              `<img alt='${postTitle}' class='object-cover thumbnail-img' loading='lazy' src='${escapeHtml(post.img)}'/>` +
            `</div>`
          : '';

        return (
          `<div class='item-post'>` +
            `<a class='item-post-link' href='${url}'>` +
              thumbnail +
              `<div class='item-content'>` +
                `<h3 class='item-title' itemprop='headline'><span href='${url}'>${postTitle}</span></h3>` +
              `</div>` +
            `</a>` +
          `</div>`
        );
      })
      .join('');

    return `${heading}<div class='item-post-base'>${items}</div>`;
  }

  /** data-func に書く名前 → テンプレート関数 */
  const TEMPLATES = {
    related_inline_temp: relatedInlineTemplate,
    sidebar_temp: sidebarTemplate,
  };

  function toPostData(entry) {
    const link = entry.link.find((l) => l.rel === 'alternate') || entry.link[entry.link.length - 1];
    return {
      url: link.href,
      title: entry.title.$t,
      img: toThumbnail(entry.media$thumbnail?.url),
    };
  }

  /** "A,B,C" 形式のラベルから 1 つ選び、フィードの "-/ラベル/" パスを返す */
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
    // data-label が無ければ要素の中身がラベル (描画前に読んでおく)
    const labelPath = buildLabelPath(container.dataset.label || container.innerHTML);

    // 除外記事が混ざる可能性があるので 1 件多めに取得する
    const feed = await fetchFeed(labelPath, `max-results=${noItem ? limit + 1 : limit}`);
    const posts = (feed.entry || [])
      .map(toPostData)
      .filter((post) => post.url !== noItem)
      .slice(0, limit);
    if (!posts.length) return;

    const finalPosts = shuffle ? shuffled(posts).slice(0, Number(shuffle)) : posts;
    container.innerHTML = template({ title, posts: finalPosts }).trim();
    showElement(container);

    releaseLazyMedia(container);

    if (typeof window[callback] === 'function') window[callback]();
  }

  // 他のスクリプトから呼べるように公開しておく (旧 jt-main の jo.loadCustomPosts と同じ名前)
  window.jo = Object.assign(window.jo || {}, { loadCustomPosts });


  /* ------------------------------------------------------------------------
     8. 記事本文まわり
     ------------------------------------------------------------------------ */

  /** .related-posts の内容を記事内の .related-inline にコピーする */
  function copyRelatedPostsToInline() {
    if (!relatedPosts || !relatedInline) return;

    relatedInline.innerHTML = relatedPosts.innerHTML;

    const excludedUrl = relatedPosts.getAttribute('data-no-item');
    if (excludedUrl !== null) relatedInline.setAttribute('data-no-item', excludedUrl);
  }

  /**
   * #ads-post の中身 (広告) を記事本文に等間隔で挿入する。
   * 先頭の広告は最初の区切り要素の前、最後の広告は本文末尾に置く。
   * pre / ul / ol / table / blockquote の内側の要素は挿入位置から除外する。
   */
  function insertInArticleAds() {
    if (!adsContainer || !postBody) return;

    const ads = Array.from(adsContainer.children);
    if (!ads.length) return;

    const anchors = Array.from(postBody.querySelectorAll(`${AD_ANCHOR_SELECTOR},${AD_IGNORE_SELECTOR}`))
      .filter((element) => {
        const ignoredAncestor = element.closest(AD_IGNORE_SELECTOR);
        return !ignoredAncestor || element === ignoredAncestor;
      });
    const interval = Math.max(1, Math.round(anchors.length / ads.length));

    ads.forEach((ad, i) => {
      if (i === ads.length - 1) {
        postBody.appendChild(ad);
      } else if (i === 0) {
        anchors[0]?.before(ad);
      } else {
        anchors[interval * i]?.after(ad);
      }
    });
  }


  /* ------------------------------------------------------------------------
     9. 実行 (すべて load 後。取得タイミングは秒数で指定)
     ------------------------------------------------------------------------ */

  Defer(() => {
    if (postBody) copyRelatedPostsToInline();

    // 複数のリストが同時にフィードを取りに行かないよう 300ms ずつずらす
    document.querySelectorAll('.custom-posts').forEach((container, i) => {
      Defer(() => {
        loadCustomPosts(container).catch((error) => console.warn('[custom-posts]', error));
      }, i * 300);
    });

    insertInArticleAds();
  }, 300);

  Defer(() => {
    const postPager = document.getElementById('post-pager');
    if (postPager) processPostPager(postPager);
  }, 1500);

  Defer(() => {
    const pagination = document.getElementById('pagination');
    if (pagination) createPagination(pagination).catch((error) => console.warn('[pagination]', error));
  }, 500);
})();