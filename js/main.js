
/*@shinsenter/defer.js@3.7.0*/
!(function (i, u, f) { function s(n, t, e) { N ? z(n, t) : ((e = e === f ? s.lazy : e) ? q : S).push(n, Math.max(e ? 350 : 0, t)) } function c(n) { return "string" == typeof (n = n || {}) ? { id: n } : n } function r(t, n, e, o) { a(n.split(" "), function (n) { (o || i)[t + "EventListener"](n, e || m) }) } function a(n, t) { n.map(t) } function l(n, t) { a(D.call(n.attributes), function (n) { t(n.name, n.value) }) } function d(n, t, e, o, i, c) { if (i = I.createElement(n), e && r(w, b, e, i), t) for (c in t) i[j](c, t[c]); return o && I.head.appendChild(i), i } function p(n, t) { return D.call((t || I).querySelectorAll(n)) } function h(o, n) { a(p("source,img", o), h), l(o, function (n, t, e) { (e = y.exec(n)) && o[j](e[1], t) }), "string" == typeof n && (o.className += " " + n), o[b] && o[b]() } function n(n, t, e) { s(function (o) { a(o = p(n || "script[type=deferjs]"), function (n, e) { n[A] && (e = {}, l(n, function (n, t) { n != C && (e[n == A ? "href" : n] = t) }), e.as = g, e.rel = "preload", d(v, e, f, I)) }), (function i(n, e, t) { (n = o[k]()) && (e = {}, l(n, function (n, t) { n != C && (e[n] = t) }), t = e[A] && !("async" in e), (e = d(g, e)).text = n.text, n.parentNode.replaceChild(e, n), t ? r(w, b + " error", i, e) : i()) })() }, t, e) } function m(n, t) { for (t = N ? (r(e, o), q) : (r(e, x), N = s, q[0] && r(w, o), S); t[0];)z(t[k](), t[k]()) } var y = /^data-(.+)/, v = "link", g = "script", b = "load", t = "pageshow", w = "add", e = "remove", o = "touchstart mousemove mousedown keydown wheel", x = "on" + t in i ? t : b, j = "setAttribute", k = "shift", A = "src", C = "type", E = i.IntersectionObserver, I = i.document || i, N = /p/.test(I.readyState), S = [], q = [], z = i.setTimeout, D = S.slice; s.all = n, s.domz = function (n, t, i, z, c, r) { s(function (e) { function o(n) { c && !1 === c(n) || h(n, i) } e = E ? new E(function (n) { a(n, function (n, t) { n.isIntersecting && (t = n.target) && (z && z(t), e.unobserve(t), o(t)) }) }, r) : f, a(p(n || "[data-src]"), function (n) { n[u] || (n[u] = s, e ? e.observe(n) : o(n)) }) }, t, !1) }, s.dom = function (n, t, i, c, r) { s(function (e) { function o(n) { c && !1 === c(n) || h(n, i) } e = E ? new E(function (n) { a(n, function (n, t) { n.isIntersecting && (e.unobserve(t = n.target), o(t)) }) }, r) : f, a(p(n || "[data-src]"), function (n) { n[u] || (n[u] = s, e ? e.observe(n) : o(n)) }) }, t, !1) }, s.css = function (n, t, e, o, i) { (t = c(t)).href = n, t.rel = "stylesheet", s(function () { d(v, t, o, I) }, e, i) }, s.js = function (n, t, e, o, i) { (t = c(t)).src = n, s(function () { d(g, t, o, I) }, e, i) }, s.reveal = h, i[u] = s, N || r(w, x), n() })(this, "Defer")

'IntersectionObserver' in window || document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');

if (document.querySelector('.blogcard-auto') !== null) {
  Defer.js('https://ai-image-journey.pages.dev/js/blogcard-auto.js', 'blogcard-auto', 100);
}

if (document.querySelector('textarea') !== null) {
  Defer.js('https://ai-image-journey.pages.dev/js/textarea-adjust.js', 'textarea-adjust', 100);
}

if (document.querySelector('.table-responsive') !== null) {
  Defer.js('https://ai-image-journey.pages.dev/js/table-responsive.js', 'table-responsive', 100);
}

if (document.querySelector('#toc') !== null) {
  Defer.js('https://ai-image-journey.pages.dev/js/page_toc.js', 'page_toc_js', 100);
  Defer.css('https://ai-image-journey.pages.dev/css/page_toc.css', 'page_toc_css', 100);
}

if (document.querySelector('.chartjs') !== null) {
  Defer.js('https://ai-image-journey.pages.dev/js/chart.umd.min.js', 'chartjs', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs-run.js', 'chartjs-run', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs-plugin-datalabels.min.js', 'chartjsdatalabelsplugin', 300);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs-adapter-date-fns.bundle.min.js', 'chartjsadapterdatefns', 300);
  Defer.js('https://ai-image-journey.pages.dev/js/chartjs_arrow_plugin.js', 'chartjsarrowplugin', 300);
  Defer.js('https://ai-image-journey.pages.dev/js/papaprase.js', 'papapease', 300);
}

if (document.querySelector('.language-mermaid') !== null) {
  Defer.js('https://ai-image-journey.pages.dev/js/mermaid-custom/mermaid-custom.min.js', 'mermaid', 100);
  Defer.js('https://ai-image-journey.pages.dev/js/mermaid-run.js', 'mermaid-run', 100);
}

if (document.querySelector('.markdown') !== null) {
  Defer.js('https://cdnjs.cloudflare.com/ajax/libs/turndown/7.2.0/turndown.min.js', 'turndown', 100);
  Defer.js('https://unpkg.com/turndown-plugin-gfm/dist/turndown-plugin-gfm.js', 'turndownplugin', 100);
  Defer.js('https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js', 'marked', 100);
  Defer.js('https://cdn.jsdelivr.net/npm/marked-extended-tables/lib/index.umd.js', 'markedplugin', 100);
}

if (document.querySelector('.bluesky-embed') !== null) {
  Defer.js('https://ai-image-journey.pages.dev/js/bluesky-embed.js', 'bluesky-embed', 1000);
}
if (document.querySelector('.twitter-tweet') !== null) {
  Defer.js('https://platform.twitter.com/widgets.js', 'twitter', 1500);
}
if (document.querySelector('.text-post-media') !== null) {
  Defer.js('https://www.threads.com/embed.js', 'threads', 1500);
}


/* img, iframe 差し替え */
Defer.dom('img', 300);
Defer.dom('iframe', 500);

/* debounce関数 */
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

/* header アニメーション */
// スクロール位置を記録する変数
let lastScrollTop = 0;
const header = document.getElementById('header');
// スクロールの閾値
const scrollThreshold = window.innerHeight * 0.03;

// debounce用のタイムアウトIDを保持
let showHeaderTimeout;

// ヘッダーを表示する処理
function showHeader() {
  clearTimeout(showHeaderTimeout);
  showHeaderTimeout = setTimeout(function () {
    header.classList.remove('header-move-up');
    header.classList.add('header-move-down');
  }, 200);
}

// スクロール処理の本体
function handleScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // 上にスクロール（下方向に移動）
  if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
    // 待機中のヘッダー表示をキャンセル
    clearTimeout(showHeaderTimeout);
    // ヘッダーを隠す（即座に実行）
    header.classList.remove('header-move-down');
    header.classList.add('header-move-up');
  }
  // 下にスクロール（上方向に移動）
  else if (currentScroll < lastScrollTop) {
    showHeader();
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

// スクロールイベントのリスナー
window.addEventListener('scroll', handleScroll, false);

// 要素取得（存在チェック付き）
const headerSearchButton = document.getElementById('header-search-button');
const headerSearchDropdown = document.getElementById('header-search-dropdown');
const headerMenuButton = document.getElementById('header-menu-button');
const navbarMenu = document.getElementById('navbar-menu');

// 共通関数：自分はトグル、相手は強制非表示
const toggleAndHideOther = (targetDropdown, otherDropdown) => {
  targetDropdown.classList.toggle('dropdown-visible');
  if (otherDropdown && otherDropdown.classList.contains('dropdown-visible')) {
    otherDropdown.classList.remove('dropdown-visible');
  }
};

// 検索ボタンクリック
if (headerSearchButton && headerSearchDropdown) {
  headerSearchButton.addEventListener('click', function () {
    toggleAndHideOther(headerSearchDropdown, navbarMenu);
  });
}

// メニューボタンクリック
if (headerMenuButton && navbarMenu) {
  headerMenuButton.addEventListener('click', function () {
    toggleAndHideOther(navbarMenu, headerSearchDropdown);
  });
}

// === スクロール時に両方閉じる ===
let ticking = false;
const closeBothOnScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      headerSearchDropdown?.classList.remove('dropdown-visible');
      navbarMenu?.classList.remove('dropdown-visible');
      ticking = false;
    });
    ticking = true;
  }
};

// スクロールイベント（パフォーマンス考慮：requestAnimationFrameで制御）
window.addEventListener('scroll', closeBothOnScroll, { passive: true });

// === （任意）ドキュメント全体クリックで閉じる ===
document.addEventListener('click', function (e) {
  const isSearchClick = headerSearchButton?.contains(e.target) || headerSearchDropdown?.contains(e.target);
  const isMenuClick = headerMenuButton?.contains(e.target) || navbarMenu?.contains(e.target);

  if (!isSearchClick && !isMenuClick) {
    headerSearchDropdown?.classList.remove('dropdown-visible');
    navbarMenu?.classList.remove('dropdown-visible');
  }
});

/* 外部リンクに新しいタブで開く属性追加 */
const links = document.querySelectorAll('a');
const myDomain = 'ai-image-journey.com';

links.forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.includes(myDomain) && !href.startsWith('/') && !href.startsWith('#')) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

/* DMCA バッジ */
var dmcaLink = document.getElementById('dmcaLink');
if (dmcaLink && dmcaLink.href.indexOf('refurl') < 0) {
  dmcaLink.href += (dmcaLink.href.indexOf('?') === -1 ? '?' : '&') + 'refurl=' + document.location;
}

/* dark-mode ボタン */
var darkModeButtons = document.querySelectorAll(".toggle-dark-mode-btn");

darkModeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var isDarkMode = htmlElement.classList.contains("dark-mode");
    var newTheme = isDarkMode ? 'light' : 'dark';

    applyTheme(newTheme);

    // Chart.jsの色を更新
    if (typeof updateAllChartColors === 'function') {
      updateAllChartColors();
    }

    // Mermaidチャートを再描画
    if (typeof updateMermaidTheme === 'function') {
      updateMermaidTheme(newTheme);
    }

    // Blueskyの埋め込みテーマを更新
    if (window.bluesky && typeof window.bluesky.updateThemes === 'function') {
      window.bluesky.updateThemes();
    }

  });
});

/* loading="lazy" の順次解除 */
Defer(function () {
  // すべての <img> 要素を配列に変換
  var imageEagerLoad = Array.from(document.querySelectorAll('img'));

  if (imageEagerLoad.length === 0) return;

  // すべての画像の遅延読み込みを順次解除
  imageEagerLoad.forEach((img, index) => {
    Defer(function () {
      img.removeAttribute('loading');
    }, (index * 200)); // 0.2秒の間隔で順次解除
  });
}, 100);

/* GPUアクセラレーション除去 */
Defer(function () {
  var elements = document.querySelectorAll('.gpu-accelerated');
  elements.forEach(function (element) {
    element.classList.remove('gpu-accelerated');
  });
}, 3000);

/* img の src の "w200-e90-rw" を "w400-e90-rw" に書き換え */
Defer(function () {
  var imageSmallSize = document.querySelectorAll('img');
  imageSmallSize.forEach(function (img) {
    var src = img.src;
    if (src.includes('w200-e90-rw')) {
      var newSmallImgSrc = src.replace('w200-e90-rw', 'w400-e90-rw');
      img.src = newSmallImgSrc;
    }
  });
}, 2000);

/* img の src の "w400-e90-rw" を "w800-e90-rw" に書き換え */
Defer(function () {
  var imageMediumSize = document.querySelectorAll('img');
  imageMediumSize.forEach(function (img) {
    var src = img.src;
    if (src.includes('w400-e90-rw')) {
      var newMediumImgSrc = src.replace('w400-e90-rw', 'w800-e90-rw');
      img.src = newMediumImgSrc;
    }
  });
}, 5000);
