/**
 * jt-main.js (clean rewrite)
 *
 * 依存:
 *   - Defer.js (main.js 側で読み込み済みであること)
 *       Defer.js(src)                     … <script> を遅延読み込み (JSONP に使用)
 *       Defer.domz(selector, delay, revealClass, beforeReveal, filter, observerOptions)
 *                                         … 画面に近づいた要素に対して処理を実行
 *
 * テンプレート側で定義されていれば読み込むグローバル変数 (無くても動作):
 *   siteUrl / currentUrl / titleSeparator / pageTitle / innerAdsDelimiter / ignoreAdsDelimiter
 *
 * 構成:
 *   1. テンプレート関数 (data-func から名前で呼ばれるためグローバル)
 *   2. 設定・定数・DOM 参照
 *   3. 汎用ヘルパー
 *   4. 画像サイズ変換
 *   5. ページネーション
 *   6. 前後記事ナビのタイトル取得
 *   7. カスタム記事リスト (JSONP)
 *   8. 記事内広告の挿入
 *   9. 初期化・イベント登録
 */


/* ==========================================================================
   1. テンプレート関数
   ========================================================================== */

/** JSONP コールバック用の名前空間 (jo.pagination_key などが生える) */
const jo = {};

/** フィード由来の文字列を HTML に埋め込むための最低限のエスケープ */
function escapeHtml(text) {
  const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(text ?? '').replace(/[&<>"']/g, (ch) => entities[ch]);
}

/** 記事内の関連記事リスト (data-func="related_inline_temp") */
function related_inline_temp({ title, posts }) {
  // title は data-title 属性 (サイト管理者が書く値) なのでそのまま出力する
  const heading = title ? `<div><span>${title}</span></div>` : '';
  const items = posts
    .map((post) => `<li class='inline-related-list'><a href='${escapeHtml(post.url)}'>${escapeHtml(post.title)}</a></li>`)
    .join('');

  return `<div id='inline-related-article'>${heading}<ul>${items}</ul></div>`;
}

/** サイドバーのサムネイル付き記事リスト (data-func="sidebar_temp") */
function sidebar_temp({ title, posts }) {
  const BLANK_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  const heading = title
    ? `<div class='widget-title'><span class='item-title-text'>${title}</span></div>`
    : '';

  const items = posts
    .map((post) => {
      const url = escapeHtml(post.url);
      const postTitle = escapeHtml(post.title);
      const thumbnail = post.img
        ? `<div class='item-thumbnail'>` +
            `<img alt='${postTitle}' class='object-cover thumbnail-img lazy-${post.grup_id} lazyload' ` +
            `data-src='${escapeHtml(post.img)}' loading='lazy' src='${BLANK_GIF}'/>` +
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


(function () {
  'use strict';

  /* ========================================================================
     2. 設定・定数・DOM 参照
     ======================================================================== */

  // テンプレート側のグローバル変数を安全に読む (未定義ならデフォルト値)
  // ※ ローカル変数名はグローバル名と被らないよう大文字にしている
  const SITE_HOST = typeof siteUrl !== 'undefined'
    ? String(siteUrl).replace(/^\w+:\/\//, '').replace(/\/$/, '')
    : '';
  const BASE_URL = SITE_HOST ? `https://${SITE_HOST}` : '';
  const CURRENT_URL = typeof currentUrl !== 'undefined' ? currentUrl : '';
  const TITLE_SEPARATOR = typeof titleSeparator !== 'undefined' ? titleSeparator : ' - ';
  const PAGE_LABEL = typeof pageTitle !== 'undefined' ? pageTitle : 'Page';
  const AD_ANCHOR_SELECTOR = typeof innerAdsDelimiter !== 'undefined' ? innerAdsDelimiter : 'p,br,div';
  const AD_IGNORE_SELECTOR = typeof ignoreAdsDelimiter !== 'undefined' ? ignoreAdsDelimiter : 'pre,ul,ol,table,blockquote';

  /** 前後記事ナビに表示するタイトルから取り除くサイト名 */
  const TITLE_SUFFIX_TO_STRIP = ' | AI Image Journey';
  /** リサイズ後のサムネイル幅 (px) */
  const THUMBNAIL_WIDTH = 400;
  /** この px 以上スクロールしたらトップへ戻るボタンを表示 */
  const BACK_TO_TOP_THRESHOLD = 1000;
  /** localStorage に保存する「訪問済み」フラグのキー */
  const VISITED_FLAG_KEY = 'lazy';

  const backToTopButton = document.getElementById('back-to-top');
  const adsContainer = document.getElementById('ads-post');
  const postBody = document.getElementById('post-body');
  const relatedPosts = document.querySelector('.related-posts');
  const relatedInline = document.querySelector('.related-inline');


  /* ========================================================================
     3. 汎用ヘルパー
     ======================================================================== */

  /** URL のクエリパラメータを取得 (無ければ null) */
  function getQueryParam(name, url) {
    const match = new RegExp(`[?&]${name}=([^&#=]*)`).exec(url);
    return match ? match[1] : null;
  }

  /** 配列のコピーをシャッフルして返す (Fisher–Yates) */
  function shuffled(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /** Blogger フィードを JSONP で読み込む (callback は jo.<callbackName>) */
  function requestFeed(feedPath, params, callbackName) {
    Defer.js(`${feedPath}?${params}&alt=json&callback=jo.${callbackName}`);
  }

  /** 画面に近づいた要素に handler を実行し、revealClass を付けて data-* を展開する */
  function observeLazy(selector, handler, { revealClass = null, margin = '500%' } = {}) {
    Defer.domz(selector, 1, revealClass, handler, null, { rootMargin: margin });
  }

  function showElement(element) {
    element.classList.remove('visually-hidden');
  }

  function isVisitedBefore() {
    try {
      return localStorage.getItem(VISITED_FLAG_KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function markAsVisited() {
    try {
      localStorage.setItem(VISITED_FLAG_KEY, '1');
    } catch (e) { /* localStorage が使えない環境では何もしない */ }
  }


  /* ========================================================================
     4. 画像サイズ変換
     ======================================================================== */

  // WebP 対応ブラウザなら Blogger 画像の URL 末尾に "-rw" を付ける
  let webpSuffix = '-rw';

  (function detectWebpSupport() {
    const img = new Image();
    img.onload = img.onerror = () => {
      if (img.height !== 2) webpSuffix = '';
    };
    img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  })();

  /** Blogger / Google 画像の URL を指定幅のサムネイル URL に変換 */
  function toBloggerThumbnail(src) {
    const size = `w${THUMBNAIL_WIDTH}-c-e90${webpSuffix}`;

    // 例: .../img/a/xxxx=s1600 や .../proxy/xxxx=s1600 → "=" 以降を差し替える
    if (/img\/a|proxy\//.test(src)) {
      const equalsIndex = src.lastIndexOf('=');
      return equalsIndex === -1 ? `${src}=${size}` : src.slice(0, equalsIndex + 1) + size;
    }

    // 例: .../s1600/image.png → 後ろから 2 番目のパス要素 (s1600) を差し替える
    const segments = src.split('/');
    return src.replace(segments[segments.length - 2], size);
  }

  /** YouTube サムネイルを中サイズ (mqdefault) に変換 */
  function toYoutubeThumbnail(src) {
    return src.slice(0, src.lastIndexOf('/')) + '/mqdefault.jpg';
  }

  /** <img data-src> を表示前に適切なサイズの URL へ書き換える (Defer.domz のコールバック) */
  function resizeImageSource(element) {
    if (element.tagName !== 'IMG') return;

    const src = element.getAttribute('data-src');
    if (!src) return;

    if (/bp\.blogspot|googleusercontent/.test(src)) {
      element.setAttribute('data-src', toBloggerThumbnail(src));
    } else if (/img\.youtube|i\.ytimg/.test(src)) {
      element.setAttribute('data-src', toYoutubeThumbnail(src));
    }
  }


  /* ========================================================================
     5. ページネーション (#pagination)
     ======================================================================== */

  /**
   * <div id="pagination" data-posts="10" data-label="ラベル名" data-pagination="false|...">
   * Blogger のフィードから総記事数を取得し、Prev / Next ボタンを表示する。
   */
  function createPagination(container) {
    if (container.getAttribute('data-pagination') === 'false') {
      showElement(container);
      return;
    }

    const postsPerPage = Number(container.getAttribute('data-posts'));
    const encodedLabel = encodeURIComponent(container.getAttribute('data-label') || '');

    const feedPath = `${BASE_URL}/feeds/posts/summary/${encodedLabel ? `-/${encodedLabel}/` : ''}`;
    const searchPath = `${BASE_URL}/search${encodedLabel ? `/label/${encodedLabel}` : ''}`;

    const pageSize = Number(getQueryParam('max-results', CURRENT_URL)) || postsPerPage;
    const currentPage = Number(getQueryParam('page', CURRENT_URL)) || 1;
    let targetPage = currentPage; // 直近でクリックされた移動先ページ

    function createButton(label, page) {
      const button = document.createElement('button');
      button.className = 'round-button';
      button.textContent = label;
      button.addEventListener('click', (event) => {
        event.preventDefault();
        goToPage(page);
      });
      return button;
    }

    function goToPage(page) {
      targetPage = page;

      // 1 ページ目はフィード不要。ラベル無しならトップへ
      if (page === 1) {
        window.location.href = encodedLabel
          ? `${searchPath}?max-results=${postsPerPage}&page=1`
          : (BASE_URL || '/');
        return;
      }

      // そのページ先頭の記事の公開日時を取得 → jo.pagination_date で遷移
      const startIndex = (page - 1) * postsPerPage;
      requestFeed(feedPath, `start-index=${startIndex}&max-results=1`, 'pagination_date');
    }

    // 総記事数が分かったらボタンを描画
    jo.pagination_key = (data) => {
      const totalResults = parseInt(data.feed.openSearch$totalResults.$t, 10);
      if (postsPerPage >= totalResults) return; // 1 ページに収まるなら何も表示しない

      const totalPages = Math.ceil(totalResults / pageSize);
      const buttons = document.createElement('div');
      buttons.className = 'button-container';

      if (currentPage > 1) buttons.appendChild(createButton('Prev Page', currentPage - 1));
      if (currentPage < totalPages) buttons.appendChild(createButton('Next Page', currentPage + 1));

      container.innerHTML = '';
      container.appendChild(buttons);
      showElement(container);
    };

    // 移動先ページ先頭の記事の日時を使って検索ページへ遷移
    jo.pagination_date = (data) => {
      const published = data.feed.entry[0].published.$t;
      // "2024-01-01T12:00:00.123+09:00" → 日時部分 (19 文字) + タイムゾーン部分 (23 文字目以降)
      const timestamp = (published.slice(0, 19) + published.slice(23)).replace('+', '%2B');
      window.location.href =
        `${searchPath}?updated-max=${timestamp}&max-results=${pageSize}&page=${targetPage}`;
    };

    // 総記事数の取得 (max-results=1 で本体は最小限にする)
    requestFeed(feedPath, 'max-results=1', 'pagination_key');
  }


  /* ========================================================================
     6. 前後記事ナビのタイトル取得 (#post-pager)
     ======================================================================== */

  /** 指定 URL のページを取得し、<title> からサイト名を除いた文字列を返す */
  async function fetchPageTitle(url) {
    const response = await fetch(url);
    const html = await response.text();
    const match = html.match(/<title>(.*?)<\/title>/);
    return match ? match[1].replace(TITLE_SUFFIX_TO_STRIP, '') : '';
  }

  /** #post-pager 内の各リンクに、リンク先のタイトルを追記する */
  function processPostPager(pager) {
    pager.querySelectorAll('a').forEach((link) => {
      const titleSpan = document.createElement('span');
      link.appendChild(titleSpan);

      fetchPageTitle(link.href)
        .then((title) => { titleSpan.innerHTML = title; })
        .catch(() => { /* 取得失敗時は空のままにする */ });
    });
  }


  /* ========================================================================
     7. カスタム記事リスト (.custom-posts)
     ======================================================================== */

  /** Blogger のフィードエントリを、テンプレートに渡す記事オブジェクトへ変換 */
  function toPostData(entry, groupId) {
    const published = new Date(entry.published.$t);

    return {
      grup_id: groupId,
      url: entry.link[entry.link.length - 1].href,
      title: entry.title.$t,
      summary: entry.summary?.$t.trim() ?? '',
      img: entry.media$thumbnail?.url,
      author: entry.author[0].name.$t,
      comment: entry.thr$total?.$t,
      label: entry.category,
      date: `${published.getFullYear()}/${published.getMonth() + 1}/${published.getDate()}`,
    };
  }

  /** "A,B,C" 形式のラベルから 1 つ選び、フィードの "-/ラベル/" パスを返す */
  function buildLabelPath(rawLabels) {
    const labels = rawLabels.split(',');
    const label = (labels.length > 1 ? labels[Math.floor(Math.random() * labels.length)] : rawLabels).trim();
    return label && label !== 'false' ? `-/${encodeURIComponent(label)}/` : '';
  }

  /**
   * <div class="custom-posts"
   *      data-label="ラベル(カンマ区切りで複数可。未指定なら要素の中身)"
   *      data-title="見出し" data-items="表示数"
   *      data-shuffle="シャッフル後に残す数" data-no-item="除外する記事URL"
   *      data-func="描画テンプレート関数名" data-callback="描画後に呼ぶ関数名">
   */
  function loadCustomPosts(container) {
    const getData = (name) => container.getAttribute(`data-${name}`);

    const title = getData('title');
    const itemLimit = Number(getData('items'));
    const shuffleCount = getData('shuffle');
    const excludedUrl = getData('no-item');
    const templateName = getData('func');
    const callbackName = getData('callback');

    // 除外記事が混ざる可能性があるので 1 件多めに取得する
    const maxResults = excludedUrl ? itemLimit + 1 : itemLimit;
    const rawLabels = getData('label') || container.innerHTML;

    const groupId = (Math.random() + 1).toString(36).slice(7);
    const callbackKey = `custom_posts_key_${groupId}`;

    jo[callbackKey] = (data) => {
      delete jo[callbackKey];

      if (parseInt(data.feed.openSearch$totalResults.$t, 10) <= 0) return;

      // 除外記事を飛ばしながら itemLimit 件まで集める
      const posts = [];
      for (const entry of data.feed.entry) {
        if (posts.length === itemLimit) break;
        const post = toPostData(entry, groupId);
        if (post.url !== excludedUrl) posts.push(post);
      }

      const template = window[templateName];
      if (typeof template !== 'function' || posts.length === 0) return;

      const finalPosts = shuffleCount ? shuffled(posts).slice(0, Number(shuffleCount)) : posts;

      container.innerHTML = template({ title, posts: finalPosts, categories: data.feed.category }).trim();
      showElement(container);
      observeLazy(`.lazy-${groupId}`, resizeImageSource, { revealClass: 'loaded', margin: '300%' });

      if (typeof window[callbackName] === 'function') window[callbackName]();
    };

    requestFeed(`${BASE_URL}/feeds/posts/summary/${buildLabelPath(rawLabels)}`, `max-results=${maxResults}`, callbackKey);
  }

  // 他のスクリプトから呼べるように公開しておく
  jo.loadCustomPosts = loadCustomPosts;


  /* ========================================================================
     8. 記事本文まわりの処理
     ======================================================================== */

  /** .related-posts の内容を記事内の .related-inline にコピーする */
  function copyRelatedPostsToInline() {
    if (!relatedPosts || !relatedInline) return;

    relatedInline.innerHTML = relatedPosts.innerHTML;

    const excludedUrl = relatedPosts.getAttribute('data-no-item');
    if (excludedUrl !== null) relatedInline.setAttribute('data-no-item', excludedUrl);
  }

  /**
   * #ads-post の中身 (広告) を記事本文に等間隔で挿入する。
   * 先頭の広告は本文の最初の区切り要素の前、最後の広告は本文末尾に置く。
   * pre / ul / ol / table / blockquote の内側にある要素は挿入位置から除外する。
   */
  function insertInArticleAds() {
    if (!adsContainer || !postBody) return;

    const adNodes = adsContainer.childNodes; // live NodeList (移動すると減る)
    const adCount = adNodes.length;

    const anchors = Array.from(postBody.querySelectorAll(`${AD_ANCHOR_SELECTOR},${AD_IGNORE_SELECTOR}`))
      .filter((element) => {
        const ignoredAncestor = element.closest(AD_IGNORE_SELECTOR);
        return !ignoredAncestor || element === ignoredAncestor;
      });

    const interval = Math.round(anchors.length / adCount);

    for (let i = 0; i < adCount; i++) {
      const isLastAd = i === adCount - 1;

      if (isLastAd) {
        postBody.appendChild(adNodes[0]);
        continue;
      }

      const anchor = i === 0 ? anchors[0] : anchors[interval * i]?.nextSibling;
      anchor?.parentElement.insertBefore(adNodes[0], anchor);
    }
  }


  /* ========================================================================
     9. 初期化・イベント登録
     ======================================================================== */

  /** ユーザー操作 (または再訪問) の後に実行する、重めの初期化処理 */
  function initialize() {
    if (postBody) copyRelatedPostsToInline();
    observeLazy('.custom-posts', loadCustomPosts, { margin: '300%' });
    insertInArticleAds();
  }

  /**
   * 初回訪問時は最初のユーザー操作まで初期化を遅らせる (表示速度対策)。
   * 2 回目以降の訪問ではすぐに初期化する。
   */
  function scheduleInitialization() {
    if (isVisitedBefore()) {
      initialize();
      return;
    }

    markAsVisited();

    const events = ['mousemove', 'touchstart', 'scroll'];
    const onFirstInteraction = () => {
      events.forEach((name) => document.removeEventListener(name, onFirstInteraction));
      initialize();
    };
    events.forEach((name) => document.addEventListener(name, onFirstInteraction, { passive: true }));
  }

  /** ページ番号付きのページでは <title> にページ番号を挿入する */
  function addPageNumberToTitle() {
    const page = getQueryParam('page', CURRENT_URL);
    if (!page) return;

    document.title = document.title.replace(
      TITLE_SEPARATOR,
      `${TITLE_SEPARATOR}${PAGE_LABEL} ${page}${TITLE_SEPARATOR}`
    );
  }

  /** 一定量スクロールしたらトップへ戻るボタンを表示 */
  function setupBackToTop() {
    if (!backToTopButton) return;

    window.addEventListener('scroll', () => {
      backToTopButton.classList.toggle('d-none', window.pageYOffset < BACK_TO_TOP_THRESHOLD);
    }, { passive: true });
  }

  addPageNumberToTitle();
  setupBackToTop();

  observeLazy('.lazyload', resizeImageSource, { revealClass: 'loaded' });
  observeLazy('#post-pager', processPostPager);
  observeLazy('#pagination', createPagination);

  scheduleInitialization();
})();