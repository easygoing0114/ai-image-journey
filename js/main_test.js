
/*@shinsenter/defer.js@3.7.0*/
!(function (i, u, f) { function s(n, t, e) { N ? z(n, t) : ((e = e === f ? s.lazy : e) ? q : S).push(n, Math.max(e ? 350 : 0, t)) } function c(n) { return "string" == typeof (n = n || {}) ? { id: n } : n } function r(t, n, e, o) { a(n.split(" "), function (n) { (o || i)[t + "EventListener"](n, e || m) }) } function a(n, t) { n.map(t) } function l(n, t) { a(D.call(n.attributes), function (n) { t(n.name, n.value) }) } function d(n, t, e, o, i, c) { if (i = I.createElement(n), e && r(w, b, e, i), t) for (c in t) i[j](c, t[c]); return o && I.head.appendChild(i), i } function p(n, t) { return D.call((t || I).querySelectorAll(n)) } function h(o, n) { a(p("source,img", o), h), l(o, function (n, t, e) { (e = y.exec(n)) && o[j](e[1], t) }), "string" == typeof n && (o.className += " " + n), o[b] && o[b]() } function n(n, t, e) { s(function (o) { a(o = p(n || "script[type=deferjs]"), function (n, e) { n[A] && (e = {}, l(n, function (n, t) { n != C && (e[n == A ? "href" : n] = t) }), e.as = g, e.rel = "preload", d(v, e, f, I)) }), (function i(n, e, t) { (n = o[k]()) && (e = {}, l(n, function (n, t) { n != C && (e[n] = t) }), t = e[A] && !("async" in e), (e = d(g, e)).text = n.text, n.parentNode.replaceChild(e, n), t ? r(w, b + " error", i, e) : i()) })() }, t, e) } function m(n, t) { for (t = N ? (r(e, o), q) : (r(e, x), N = s, q[0] && r(w, o), S); t[0];)z(t[k](), t[k]()) } var y = /^data-(.+)/, v = "link", g = "script", b = "load", t = "pageshow", w = "add", e = "remove", o = "touchstart mousemove mousedown keydown wheel", x = "on" + t in i ? t : b, j = "setAttribute", k = "shift", A = "src", C = "type", E = i.IntersectionObserver, I = i.document || i, N = /p/.test(I.readyState), S = [], q = [], z = i.setTimeout, D = S.slice; s.all = n, s.domz = function (n, t, i, z, c, r) { s(function (e) { function o(n) { c && !1 === c(n) || h(n, i) } e = E ? new E(function (n) { a(n, function (n, t) { n.isIntersecting && (t = n.target) && (z && z(t), e.unobserve(t), o(t)) }) }, r) : f, a(p(n || "[data-src]"), function (n) { n[u] || (n[u] = s, e ? e.observe(n) : o(n)) }) }, t, !1) }, s.dom = function (n, t, i, c, r) { s(function (e) { function o(n) { c && !1 === c(n) || h(n, i) } e = E ? new E(function (n) { a(n, function (n, t) { n.isIntersecting && (e.unobserve(t = n.target), o(t)) }) }, r) : f, a(p(n || "[data-src]"), function (n) { n[u] || (n[u] = s, e ? e.observe(n) : o(n)) }) }, t, !1) }, s.css = function (n, t, e, o, i) { (t = c(t)).href = n, t.rel = "stylesheet", s(function () { d(v, t, o, I) }, e, i) }, s.js = function (n, t, e, o, i) { (t = c(t)).src = n, s(function () { d(g, t, o, I) }, e, i) }, s.reveal = h, i[u] = s, N || r(w, x), n() })(this, "Defer")

'IntersectionObserver' in window || document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');

if (document.querySelector('#toc') !== null) {
  Defer.js('https://files.ai-image-journey.com/js/page_toc.js', 'page_toc_js', 100);
  Defer.css('https://files.ai-image-journey.com/css/page_toc.css', 'page_toc_css', 100);
}

if (document.querySelector('.chartjs') !== null) {
  Defer.js('https://files.ai-image-journey.com/js/chart.umd.min.js', 'chartjs', 100);
  Defer.js('https://files.ai-image-journey.com/js/chartjs-plugin-datalabels.min.js', 'chartjsdatalabelsplugin', 300);
  Defer.js('https://files.ai-image-journey.com/js/chartjs-adapter-date-fns.bundle.min.js', 'chartjsadapterdatefns', 300);
  Defer.js('https://files.ai-image-journey.com/js/chartjs_arrow_plugin.js', 'chartjsarrowplugin', 300);
  Defer.js('https://files.ai-image-journey.com/js/papaprase.js', 'papapease', 300);
}

if (document.querySelector('.language-mermaid') !== null) {
  Defer.js('https://files.ai-image-journey.com/js/mermaid-custom/mermaid-custom.min.js', 'mermaid', 100);
}

if (document.querySelector('.markdown') !== null) {
  Defer.js('https://cdnjs.cloudflare.com/ajax/libs/turndown/7.2.0/turndown.min.js', 'turndown', 100);
  Defer.js('https://unpkg.com/turndown-plugin-gfm/dist/turndown-plugin-gfm.js', 'turndownplugin', 100);
  Defer.js('https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js', 'marked', 100);
  Defer.js('https://cdn.jsdelivr.net/npm/marked-extended-tables/lib/index.umd.js', 'markedplugin', 100);
}

if (document.querySelector('.bluesky-embed') !== null) {
  Defer.js('https://files.ai-image-journey.com/js/bluesky-embed.js', 'bluesky-embed', 1000);
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

// テキストエリアの高さ自動調整
if (document.querySelector('textarea') !== null) {

  function createAutoResizeTextarea() {
    const textareas = document.querySelectorAll('textarea');

    textareas.forEach(textarea => {
      let isScheduled = false; // rAFが既にスケジュールされているかを管理

      function adjustHeight() {
        textarea.style.height = 'auto';
        textarea.style.height = Math.max(textarea.scrollHeight, 24) + 'px';

        isScheduled = false;
      }

      function scheduleAdjustHeight() {
        if (!isScheduled) {
          isScheduled = true;
          // 次の描画フレーム直前で adjustHeight を実行
          requestAnimationFrame(adjustHeight);
        }
      }

      // 初期ロード時に高さを設定
      scheduleAdjustHeight();

      // イベント発生時に rAF に処理を委ねる
      // rAF が既にスケジュールされていれば、不要な再スケジュールを防ぐ
      ['input', 'paste', 'cut', 'keydown', 'keyup'].forEach(event => {
        textarea.addEventListener(event, scheduleAdjustHeight);
      });

    });
  }

  // DOMがロードされた後に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createAutoResizeTextarea);
  } else {
    createAutoResizeTextarea();
  }
}

/* リンクカードの作成 */
if (document.querySelector('.blogcard-auto') !== null) {
  Defer(function () {
    class LinkPreviewGenerator {
      constructor(workerUrl) {
        this.workerUrl = workerUrl;
        this.baseDomain = 'ai-image-journey.com';
        this.BLOGGER_IMAGE_DOMAIN = 'blogger.googleusercontent.com';

        // カスタム画像のマッピング
        this.CUSTOM_IMAGES = {
          // GitHub
          'github.com/easygoing0114': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCVXA9lGHLmQZqpHFx_m1MEfgolO1f8ksTQfLJcHDa5-rH86NWJ-ufv4TgNOAPOMcFfIFEpqBzjV3xPRQ-85oKG-GWDI8zRiUku_ZFtVcOJACWm97gJH_PsadwGx9GujgPRu3RVtBY25qnG0UiTVBzOErzfsEI5Q0ZAnkzkp5odc7BAw/w400-e90-rw/Profile_image_20250824.png',

          // Hugging Face models
          'huggingface.co/bluepen5805/blue_pencil-flux1': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ff1638f0-0295-45e8-b038-d7f376f26873/ComfyUI_00023_.jpeg',
          'huggingface.co/bluepen5805/anima_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/48499ad8-33bb-4a2c-aac8-af6c6edcc280/00494-20240625200426-223644773-30-5.jpeg',
          'huggingface.co/bluepen5805/blue_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/55619f31-4395-4e9b-a94d-208460a9f7d2/00494-20240623160056-880978405-30-5.jpeg',
          'huggingface.co/bluepen5805/noob_v_pencil-XL': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5d4020ad-6777-4077-b53e-4432e9263d45/00000-20241211153415-1954655588-30-5.jpeg',
          'huggingface.co/zer0int': 'https://cdn-avatars.huggingface.co/v1/production/uploads/6490359a877fc29cb1b09451/b-oU9m0-ceQQ1tyt2G_pq.png',
          'huggingface.co/easygoing0114/HiDream_HQ-models': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzPF0z6moB5p4_DSWEE4Rgxn2gAfXnLBfTTNUZksVbIOgZ8Zzv-kYczpyNmvguaadFKJVMS-Fn3RDT01njmbbmo0BdDR5ud7eoinBveD6AVJTXzT6LtuTn2eDoZvECnknSwafftBoebrBjD_MSpvKyswlwNeDumzpveAuOcYpJjDHLTg/w400-e90-rw/HiDream_I1-Dev_clear_anime_compare.png',
          'huggingface.co/easygoing0114/easygoing0114/flan-t5-xxl-fused': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcXz7nKUsCisd5moS160_QTJFK5JjGiY6blVSbMlfWgwhAuYYC0xVt3cema6WMQwFDPx8snM5jAdo5ftFGHOFVrJDDQuTmLCn5Zg5HX4_cO9vf4Nl58T04LDVQB8VIMWRnqZfAcSmfDxRKimxmzeRQH9cS7qbldoXOmBhUCnVXuAnWaw/w400-e90-rw/Flan-T5xxl_00020_.png',
          'huggingface.co/easygoing0114/HiDream-I1-Dev_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEji_XSe_Vz4JW98Whg3MRvpZprPRvVRZA_erQAYNsg9F8ptC2Jn_JMEb0-y6ZeZBJ96sV28fywJd11NQ5fH3zawPlcn0U6cVPd21en5xDCCGMFU3jtqSy7FFlPgFz416aTf-08DV9srkjv6aktdbSCq3IHGvVhGBwMtXIS11DXFzPfWcQ/w400-e90-rw/HiDream_clear_00012_.png',
          'huggingface.co/easygoing0114/animagine-xl-4.0-opt-clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq9am8PTLvZsx1SIV8haxgOtx6ZB7LmGQxIgJGxXy53a6Wcf7ftqN3ejWn_rF_keOQpxMsdlG98T3t2TvJbCYIwowCKtw5twxRS_gzWI10yICKwadeQ-wiarAhi2fUGPoRjohTZzLddenh9_DcG19gYyJFBCykLvFxUxvCoiiDVIgu5A/w400-e90-rw/Hitman1_close_up.png',
          'huggingface.co/easygoing0114/anima_pencil-XL_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi06BisvxgpRCqjurddi69g8DXd1u51WbRf7_cpFPQJf6aZM_arHXD7QE4cV2mTscWVeTpti0kZYOcy_YSEHKD-Ek-jb7T9FJpB8MuU2o5hUaxGWuS9SNFOb0uCABNNcKvJSUhqbBQ-QE4kfYCjPCZNQxZ-lNdmaHpK-JWFuDKinmbnZw/w400-e90-rw/anipen_clear_00186_.png',
          'huggingface.co/easygoing0114/Qwen-Image-Edit-2509_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9hEIUyFPYL9zXXEAzP3xFi2l5F0dvgFjEdpayfPVYCvIC46fRvrUBD4VfAcAm7sLnc4Uqz3F42LD4Yw4__p0u2SZrVPKqn1d8pCXL-v-bxzOCbxoWfwIagDTgCFk5zLTACxWHkzfSiqAszB8XhJKZtyNzM4Rb9YJ5HhFm2FMqD9VILQ/w400-e90-rw/Qwen-Image-Edit-2509_clear_anime_kimono.png',
          'huggingface.co/easygoing0114/mellow_pencil-XL_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4LiAxXCKnjrgG-uAWE2QEqdxd7WokhSETWAoz-WVpDXX0EP9UaHuAqWwOZjV53FMdn6kJwbVGcsc6ZOErzA-4TGnj5hKeHge5E-xecyJdcRY9kO4tqoFn9DOANBQVHi5dLlRHrNSHNHZNQKByAGNOtx85cR04J05rcSQgAzt30Diw6A/w400-e90-rw/mellow_pencil-XL-v1.0.0-base_clear_upscale_square4.png',
          'huggingface.co/easygoing0114/SDXL_anime_clear_vae': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi5w8U9Gl8JLLsUqXv6P4otxRNobob2NK-vW93mtPVrH1pQU0EJUtnQi6IlXknjo3q1QMTPZZZpTpD2cAr-K6C1Q0O1RfTcL-KkPrFC6DfvLc0t2F6DFz_Jus5lvannJBM6AjvW7EyNJR4FH0qbpZv6Z23_gTA8D7r3RnynebDDikldA/w400-e90-rw/mellow_pencil-XL-v1.0.0-base_clear_00660_.png',
          'huggingface.co/easygoing0114/Z-Image_clear_vae': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_RktUvKxwH_tr3WsKf_SrOXe2ZOwYlrL8dk69e_TBI3fKU6kNA1dKtroSUZQfo11uS-vZOZkdyGfJEB35nGTh1qDJZ_L6Zkb0rGQaf9oiDO1bpi-Q5vYJ0_1FAEYf9LNG80MSHWOk9ouIcQBzrIetcjNyZz6vNSFHV6M-UCBqSPQLag/w400-e90-rw/Z-Image-Turbo_clear_vivid_vae_photo.png',
          'huggingface.co/easygoing0114/Z-Image-Turbo_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbRZWjOvWuNSND5imJe4tTbU2-v5JkDfbQIkxHJr7RoockZXZnzqF0uUQxK8U-LpBZwtVjAP7UeNS9-w7xZgkXR7DDhSXZ319Fcb9WKH-7o_B6p30A05mhVhBq31xJa4iwCn9myfZ_EBL01HCz65x6-m7CCMTua2uciASEDEmZfWhgYw/w400-e90-rw/Z-Image-Turbo_FP32_clear_vivid_vae_photoreal.png',
          'huggingface.co/easygoing0114/animagine-xl-3.0_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHyjrGmoBb0ZeYgIuCJJouC3iUYvOROj-HSGQXUb8jT8kOoR6aCYVp_NCdHFoidd_Cor_xOfFIsnShe1-4g6SxuXH5bfkq0H3gUDqw2Hl986GQ_s0-vp5LiIXWmIJ4FhwDs95iHito6rBSjeTGuCMrTo2nV52-AUqwUTU7iqbczh2M6w/w400-e90-rw/a%20female%20animated%20character%20with%20blue%20hair%20and%20blue%20eyes%20wears%20a%20black%20outfit%20with%20gold%20embellishments%20and%20a%20fur%20collar%20square.png',
          'huggingface.co/easygoing0114/qwen_image_clear_vae': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeQC5AeEaC1CXr9sqdIaWrJMTQKkzHnxSRkSwVW-VpBel35PvAA5RdTX_abc4IxGqPGYw059PiqDjqROwpbXWbNDAZtiIszEjN3QiSTB8bPh5RNZtVgT08v8C7l2amiP-SQQ2M0UQzsY8QraTTWMDHvH51QN-Z3PKlpbTh0PhLvHrfXQ/w400-e90-rw/clear_vae.png',
          'huggingface.co/easygoing0114/Qwen-Image-Edit-2511_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLa46YF4wGAYIDbvgU3CHqKDG8RlvpXev-FrnltBFyYwnGqqtweyoan2Zr2Ii_4CjsDffvJcZc5bQb-jHFpYOj-rVxJqRUu0HufV70cy_y_Mc43N41uGNy-nl7X4My16fm7nSqpfKQkSCsEqkMMqyHw3JagdgaCvZmqGak0_X_EnTmmA/w400-e90-rw/upscale_00053_.png',

          // Civitai models
          'civitai.com/models/722776': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ff1638f0-0295-45e8-b038-d7f376f26873/ComfyUI_00023_.jpeg',
          'civitai.com/models/261336': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/48499ad8-33bb-4a2c-aac8-af6c6edcc280/00494-20240625200426-223644773-30-5.jpeg',
          'civitai.com/models/119012': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/55619f31-4395-4e9b-a94d-208460a9f7d2/00494-20240623160056-880978405-30-5.jpeg',
          'civitai.com/models/674457': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b5674e66-26cb-45ec-9e82-c19a2dd9753d/ComfyUI_00262_.jpeg',
          'civitai.com/models/260267': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b50708a9-a0a2-4a62-a688-cbd15abb65e4/image%20(24).jpeg',
          'civitai.com/models/1027203': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5d4020ad-6777-4077-b53e-4432e9263d45/00000-20241211153415-1954655588-30-5.jpeg',
          'civitai.com/models/1188071': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/44382db0-b992-4058-b8b1-369a58cc2604/animagine-xl-4.0-opt.jpeg',
          'civitai.com/models/1356520': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnwPTigmuL8PCTQ0LYH3psdmMJrjX5E6airywZe7ZAUqKzjscylMiyKIlCFx4K3p5Icx7vOb7pXDxohMMXChooPYvgadslw2qQs-N_qQD8cEW_haXr-rbLhUotCNHxUSIKkJ9JDmf8J3qMU6qjnt0S8R0sT0JG844K5bnm8Bc2Lip33T4/w400-e90-rw/Flux1_euler_Anime%20Illustration%20of%20%20A%20young%20girl%20holding%20a%20chalkboard%20that%20says%20flan%20t5%20and%20te-only.png',
          'civitai.com/models/2081436': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9fqSstgwxA4AkoQyBpCIxnHeNFDMZbxxyioegihg1-8ihZEI0JHC47fdOxz3rglkOf0sqHzybeduzUiYHxJFpNmIlYS0oGnO51Og6Yakr9BNCaydUEvAjaNkQhPFg51910P5XSQdkS1t62JsxwaOe1woz-RWE0XyAn25K1W8f_bkb4g/w400-e90-rw/HiDream_I1-Dev_clear_anime_compare.png',
          'civitai.com/models/2110148': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix1Z4fRSVlZ6sYPVo00fSFG16mokYEd9zLXK9wgCWOl56kOqE6Lhxrf55T9JRbT9zDpXwpEWRd-4Uw48-6AcGFvPAmdM82fXyJMSMUwShoOPaXeFxz4Yk-qnENi37oi9O2tA_1uIbgxTFRYP0lImzUNC98Kwjk02CuXHd1y82ojvxMog/w400-e90-rw/Upscale_Detailer_color_correct_00036_close_up.png',
          'civitai.com/models/2130524': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBWz6GckEdtrHg2vdLCq5T6yUfO305n0iTOUvp7I2xEHi5hXtLJwKgRk7FtK7Ulh_UXxMRJ2VPV8Hmq-8E4f6hpMgmVyCcSH7h4uUAPiyUIRzxqxMF8xfsOzeFbJC5fnoN4TwXNTghJIcR8x_0JsoqI7wgLWxSvzn81JZBcsHVjBZV3Q/w400-e90-rw/anipen_clear_00118_.png',
          'civitai.com/models/2143257': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheBuAqh9OA5Tfi9iB1XL6Q-yop8bxArkTYDdU3hhFM2cPjoOVdYtGLOHuzLbrheQtkJnVLk85Wti1a5mXGptBLJLK3HYXPWEWxEhq8vAVeYl8Yb8wZwHvVqlb_HZl7sccoiNI0_Vuq5_4z_0njJZO7GB-jyI8FHAaHck71m1cub1ChBg/w400-e90-rw/Qwen-Image_original_vae_photoreal_close_up.png',
          'civitai.com/models/2177495': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVYD44mmA9L2NhhMhad3uIl0mrwxI0SOstiiM_MqHdzhGdU7XAL44K2atvl_HPsF2J99WqXDRxVsvmeC0yVYrY0Y5nctlVc-SRCnJ-sSBnz93TN6KeXvFbvCBJg3ES4sea9cwMR8YvHvA2xmVxZnmxAmzduoVWqP_GQT3IA7xblH2R0w/w400-e90-rw/A%20little%20girl%20happy%20riding%20a%20sled.png',
          'civitai.com/models/2191617': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsr_6FK-zahN4VT6pWn_xf_RGizw5EqwTFMvfpVMBIwJlnD6SaxfyO73K5AulFuy7ybGdlAT0uYv0QIhyphenhyphen6VODD7rOqZx1JxXfoBnsqva9z4R0zOZcEKAQeCKjqrM5T0Yl3nisKhkeZ73TCnKjn7iQDR74AGC8l0Kwyqle-F6ITPp56-Q/w400-e90-rw/Z-Image-Turbo_clear_vivid_vae_upscale_2.png',
          'civitai.com/models/2197598': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyu8Mmv6ABAr0ggVhdlck5Ybs_SbtIgmGuShggKoyO72Pn6nvMNCWI2h3v7E1s6_E9TizS6XL4CQPFHPFtWb6-kVRRIJiU0lSLna946PHlSnzUvEAunQUIdLxwzH1AAwo8qKrJNHlyBE_jE3UP0oadgVsg55EEhGe2fobGyZ6vro269g/w400-e90-rw/Z-Image-Turbo_FP32_clear_vivid_vae_anime.png',
          'civitai.com/models/2241280': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicmkPXX7yy9v0QMgFiVRaMnVFlfPvqBnWApSAhixws4F0SX0XY83kZMDB0rV3_qrnokrfSycSuaBQSJkESITwYdZMYmXM7NI8VN4dXdvD9r0b__WXUU7tLSBVBb7vOekPXZaZq7odGRRv6ZG7HPi_Ya1N-ngZuXXmFqIXFlHClh96Mqg/w400-e90-rw/Chef%20square.png',
          'civitai.com/models/2171491': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUDEOB0Eofke7RkB3VKHo6JZ5negs-2jDDI2EdekHs6T5A86YYXHmh4vO1rgvNxn1W0duXnsHFjSFzsthlNSMxzZQ19mSg7llh53CMYEF2ezfqE9_jPetI354SDn2dV4gnVnRH55Wdh40qOvpsNsKw1DbNgnvRdPzE58gYgtCVlUXnOw/w400-e90-rw/mellow_pencil-XL-v1.0.0-base_clear_00665_.png',
          'civitai.com/models/2151326': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9B-60FkOLypjay6LXo88IgPU_QeuIfX61iPVnRJL05RAMfc9Rsatnd4ak37yqx_9QKzdRPR2j5S4SUtJsUI4F5Cy9ZBeBIO2kWExPIqTfGiHraI9NvgII1vgBqAiLDhvJnOLX3zFfIFYEeLr59NWwuTkpPWZO7csWAf1ZiStuBJhW4g/w400-e90-rw/Qwen-Image-Edit-2511_clear_clear_vae_00022_.png',
          'civitai.com/models/2285329': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIKaqyQStmoZcSq-LbwaJphPB6qPU6CkBLniCyMtD58d8pstUitT0MbnpzbvCEZNf0qSs57psNiIfnq6ZkRPc5AWtf9iPDb94y0QNQfINAWx3xM27CJgKZdkkCQ64Kq6grRIix9H5TYU84HaOkN1qukonoha5bhQd8L4gyxLCyXShBGw/w400-e90-rw/upscale_00006_.png',
        };

        // デフォルトのCivitai画像
        this.DEFAULT_CIVITAI_IMAGE = 'https://files.ai-image-journey.com/images/logo/civitai-color%20400.webp';
      }

      // カスタム画像を取得する関数
      getCustomImage(url) {
        try {
          const urlLower = url.toLowerCase();

          // URLからモデルIDを含むパスを抽出
          for (const [path, image] of Object.entries(this.CUSTOM_IMAGES)) {
            if (urlLower.includes(path.toLowerCase())) {
              return image;
            }
          }

          // Civitaiのその他のページ用のデフォルト画像
          if (urlLower.includes('civitai.com/models/')) {
            return this.DEFAULT_CIVITAI_IMAGE;
          }

          return null;
        } catch (error) {
          // console.error('Error getting custom image:', error);
          return null;
        }
      }

      // メタデータから画像URLを取得する関数
      getMetadataImage(metadata) {
        if (!metadata) return null;
        return metadata.thumbnail ||
          metadata.ogImage ||
          metadata.twitterImage ||
          metadata.firstImage ||
          null;
      }

      createCardHTML(metadata) {
        const isInternal = this.isSameDomain(metadata.url);

        // 1. まずカスタム画像を確認
        let imageUrl = this.getCustomImage(metadata.url);

        // 2. カスタム画像がない場合のみメタデータの画像を使用
        if (!imageUrl) {
          imageUrl = this.getMetadataImage(metadata);
        }


        // 画像URLのパラメータ変換処理
        if (imageUrl) {
          imageUrl = imageUrl.replace(/s1600|w0-e90-rw|w800-e90-rw|w1200-e90-rw/g, 'w400-e90-rw');
        }

        const linkClass = `blogcard-link${imageUrl ? '' : ' blogcard-link-no-image'}`;

        const imageHTML = imageUrl ? `
          <div class="blogcard-image-container">
              <img class="blogcard-image" src="${imageUrl}"
                alt="link page thumbnail image" width="400" height="400" />
          </div>
        ` : '';

        return `
          <figure class="blogcard blogcard-auto">
            <a class="${linkClass}" href="${metadata.url}"
              ${isInternal ? '' : 'target="_blank" rel="noopener noreferrer"'}>
              ${imageHTML}
              <div class="blogcard-content">
                <p class="blogcard-title">${metadata.title}</p>
                <blockquote cite="${metadata.url}">
                  <p class="blogcard-description">${metadata.description}</p>
                </blockquote>
                ${isInternal ? '' : `
                  <div class="blogcard-footer">
                    <img src="https://www.google.com/s2/favicons?domain=${metadata.domain}"
                      alt="Favicon" width="16" height="16" />
                    ${metadata.domain}
                  </div>
                `}
              </div>
            </a>
          </figure>
        `;
      }

      createFallbackCardHTML(link, url) {
        const linkText = link.textContent.trim() || url;
        const customImage = this.getCustomImage(url);
        const linkClass = `blogcard-link${customImage ? '' : ' blogcard-link-no-image'}`;

        const imageHTML = customImage ? `
          <div class="blogcard-image-container">
              <img class="blogcard-image" src="${customImage}"
                alt="link page thumbnail image" width="400" height="400" />
          </div>
        ` : '';

        return `
          <figure class="blogcard blogcard-auto">
            <a class="${linkClass}" href="${url}"
              target="_blank" rel="noopener noreferrer">
              ${imageHTML}
              <div class="blogcard-content">
                <p class="blogcard-title">${linkText}</p>
              </div>
            </a>
          </figure>
        `;
      }

      // メタデータを取得する関数
      async fetchPageData(url) {
        try {
          const response = await fetch(this.workerUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          return data.status === 'success' ? data.metadata : null;
        } catch (error) {
          //        console.error('Error fetching page data:', error);
          return null;
        }
      }

      // 単一のリンクを処理して即座に表示する関数
      async processLink(card) {
        try {
          const link = card.querySelector('a');
          if (!link) return;

          const url = link.getAttribute('href');
          if (!url) return;

          let metadata;
          try {
            metadata = await this.fetchPageData(url);
          } catch (error) {
            metadata = null;
          }

          const cardHTML = metadata ? this.createCardHTML(metadata) : this.createFallbackCardHTML(link, url);

          // 完了したら即座にDOMに反映
          card.insertAdjacentHTML('afterend', cardHTML);
          card.remove();
        } catch (error) {
          //          console.error(`Error processing link: ${error.message}`);
        }
      }

      // 並行処理でリンクを置換する関数（0.5秒間隔で開始）
      async replaceLinks() {
        const blogcards = document.querySelectorAll('.blogcard-auto');

        // 0.5秒間隔で処理を開始し、完了次第表示
        const promises = Array.from(blogcards).map((card, index) => {
          return new Promise(resolve => {
            setTimeout(async () => {
              await this.processLink(card);
              resolve();
            }, index * 500);
          });
        });

        // すべての処理が完了するまで待機（表示は各々完了次第行われる）
        await Promise.all(promises);
      }

      isSameDomain(url) {
        try {
          const urlDomain = new URL(url).hostname;
          return urlDomain === this.baseDomain || urlDomain.endsWith(`.${this.baseDomain}`);
        } catch (error) {
          return false;
        }
      }
    }

    // 実行
    const generator = new LinkPreviewGenerator('https://get-blogcard-info-to-blogger.easygoing0114.workers.dev/');
    generator.replaceLinks();
  }, 200);
}

if (document.querySelector('.table-responsive') !== null) {

  // スケール調整処理の実行を rAF に委ねるためのフラグ
  let isScheduled = false;

  function adjustTableScale() {
    var tables = document.querySelectorAll('.table-responsive table');
    tables.forEach(function (table) {
      var tableResponsive = table.parentElement;
      var tableResponsiveWidth = tableResponsive.clientWidth;

      // 元のサイズが保存されていない場合は保存
      if (!table.dataset.originalWidth) {
        // 完全にリセットした状態でサイズを測定
        table.style.cssText = '';
        table.querySelectorAll('th, td').forEach(function (cell) {
          cell.style.fontSize = '';
          cell.style.padding = '';
        });

        // 元のサイズを保存
        table.dataset.originalWidth = table.scrollWidth;
        table.dataset.originalHeight = table.scrollHeight;

        // 元のスタイルも保存
        var firstCell = table.querySelector('th, td');
        if (firstCell) {
          var computedStyle = getComputedStyle(firstCell);
          if (!table.dataset.originalFontSize) {
            table.dataset.originalFontSize = computedStyle.fontSize;
            table.dataset.originalPaddingTop = computedStyle.paddingTop;
            table.dataset.originalPaddingLeft = computedStyle.paddingLeft;
          }
        }
      }

      // 保存された元のサイズを使用
      var originalTableWidth = parseInt(table.dataset.originalWidth);
      var originalTableHeight = parseInt(table.dataset.originalHeight);
      var originalFontSize = parseFloat(table.dataset.originalFontSize);
      var originalPaddingTop = parseFloat(table.dataset.originalPaddingTop);
      var originalPaddingLeft = parseFloat(table.dataset.originalPaddingLeft);

      // リセット処理
      table.style.height = 'auto';
      table.style.width = 'auto';
      table.querySelectorAll('th, td').forEach(function (cell) {
        cell.style.fontSize = originalFontSize + 'px';
        cell.style.padding = originalPaddingTop + 'px ' + originalPaddingLeft + 'px';
      });

      // スケール調整の判定と適用
      if (originalTableWidth > tableResponsiveWidth) {
        // テーブルの実際のボーダー幅を取得
        var tableComputedStyle = getComputedStyle(table);
        var borderLeftWidth = parseFloat(tableComputedStyle.borderLeftWidth) || 0;
        var borderRightWidth = parseFloat(tableComputedStyle.borderRightWidth) || 0;
        var totalBorderWidth = borderLeftWidth + borderRightWidth;

        // セルのボーダーも考慮（テーブルによってはcollapse border）
        var firstCell = table.querySelector('th, td');
        var totalBorderHeight = 0;
        if (firstCell && tableComputedStyle.borderCollapse !== 'collapse') {
          var cellStyle = getComputedStyle(firstCell);
          var cellBorderLeft = parseFloat(cellStyle.borderLeftWidth) || 0;
          var cellBorderRight = parseFloat(cellStyle.borderRightWidth) || 0;
          var cellBorderTop = parseFloat(cellStyle.borderTopWidth) || 0;
          var cellBorderBottom = parseFloat(cellStyle.borderBottomWidth) || 0;
          totalBorderWidth += Math.max(cellBorderLeft + cellBorderRight, 2);
          totalBorderHeight = cellBorderTop + cellBorderBottom;
        }

        // テーブル自体の上下ボーダー
        var borderTopWidth = parseFloat(tableComputedStyle.borderTopWidth) || 0;
        var borderBottomWidth = parseFloat(tableComputedStyle.borderBottomWidth) || 0;
        totalBorderHeight += borderTopWidth + borderBottomWidth;

        // 安全なマージンを追加
        var safetyMargin = 12;
        var availableWidth = tableResponsiveWidth - totalBorderWidth - safetyMargin;
        var scale = availableWidth / originalTableWidth;

        // DOM書き込み（スタイル適用）
        table.style.width = availableWidth + 'px';
        table.style.height = (originalTableHeight * scale) + totalBorderHeight + safetyMargin + 'px';
        table.querySelectorAll('th, td').forEach(function (cell) {
          cell.style.fontSize = (originalFontSize * scale) + 'px';
          cell.style.padding = (originalPaddingTop * scale) + 'px ' + (originalPaddingLeft * scale) + 'px';
        });
      }
    });
  }

  function scheduleAdjustTableScale() {
    if (!isScheduled) {
      isScheduled = true;
      // 次の描画フレームの直前に adjustTableScale を実行
      requestAnimationFrame(() => {
        adjustTableScale();
        isScheduled = false; // 処理完了後にフラグをリセット
      });
    }
  }

  const debouncedSchedule = debounce(scheduleAdjustTableScale, 100);

  window.addEventListener('resize', debouncedSchedule);

  scheduleAdjustTableScale();
}

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

/* Chart.js - requestAnimationFrame最適化版 */
if (document.querySelector('.chartjs') !== null) {
  let chartsInitialized = false;
  let rafId = null;
  let resizeScheduled = false;

  document.querySelectorAll('.chartjs-container').forEach(figure => {
    figure.classList.add('box-img', 'box-img400');
  });

  function getCurrentThemeColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--bs-body-color').trim();
  }

  function calculateDynamicPadding(specificContainer = null) {
    const container = specificContainer || document.querySelector('.chartjs-container');

    if (!container) {
      return 24;
    }

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const aspectRatio = containerWidth / containerHeight;

    let coefficient;
    if (aspectRatio >= 1) {
      coefficient = 0.05;
    } else {
      coefficient = 0.1;
    }

    const calculatedPadding = Math.round(containerWidth * coefficient);
    return calculatedPadding;
  }

  function findContainerForChart(canvas) {
    let parent = canvas.parentElement;
    while (parent && parent !== document.body) {
      if (parent.classList.contains('chartjs-container')) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }

  function wrapChartjsCanvas() {
    const canvases = document.querySelectorAll('canvas.chartjs');

    canvases.forEach(canvas => {
      if (canvas.parentElement && canvas.parentElement.classList.contains('chartjs-wrapper')) {
        return;
      }

      const wrapper = document.createElement('div');
      wrapper.classList.add('chartjs-wrapper');

      canvas.parentNode.insertBefore(wrapper, canvas);
      wrapper.appendChild(canvas);
    });
  }

  function updateChartPadding() {
    Object.values(Chart.instances).forEach(chart => {
      const container = findContainerForChart(chart.canvas);
      if (!container) return;

      const newPadding = calculateDynamicPadding(container);

      if (!chart.options.layout) {
        chart.options.layout = {};
      }
      chart.options.layout.padding = newPadding;
      chart.update('none');
    });
  }

  function updateAllChartColors() {
    const currentColor = getCurrentThemeColor();
    Chart.defaults.color = currentColor;

    Object.values(Chart.instances).forEach(chart => {
      if (chart.options.scales) {
        Object.keys(chart.options.scales).forEach(scaleKey => {
          const scale = chart.options.scales[scaleKey];
          if (scale.ticks) scale.ticks.color = currentColor;
          if (scale.title) scale.title.color = currentColor;
        });
      }

      const plugins = chart.options.plugins;
      if (plugins) {
        if (plugins.legend?.labels) plugins.legend.labels.color = currentColor;
        if (plugins.title) plugins.title.color = currentColor;
        if (plugins.datalabels) plugins.datalabels.color = currentColor;
      }

      chart.update('none');
    });
  }

  function createAllCharts() {
    const canvases = document.querySelectorAll('.chartjs');

    canvases.forEach((canvas, index) => {
      const funcName = `createChart${index + 1}`;
      if (typeof window[funcName] === 'function') {
        window[funcName]();
      }
    });
  }

  function applyIndividualPadding() {
    Object.values(Chart.instances).forEach(chart => {
      const container = findContainerForChart(chart.canvas);
      if (!container) return;

      const padding = calculateDynamicPadding(container);

      if (!chart.options.layout) {
        chart.options.layout = {};
      }
      chart.options.layout.padding = padding;
      chart.update('none');
    });
  }

  function initializeCharts() {
    wrapChartjsCanvas();

    if (!chartsInitialized) {
      Chart.register(ChartDataLabels);
      Chart.defaults.layout.padding = 24;
      chartsInitialized = true;
    }

    createAllCharts();
    applyIndividualPadding();
    updateAllChartColors();

    // requestAnimationFrameでCanvas要素のサイズ設定を最適化
    requestAnimationFrame(() => {
      document.querySelectorAll('.chartjs').forEach(canvas => {
        canvas.style.width = 'auto';
        canvas.style.height = 'auto';
      });
    });
  }

  // リサイズ処理をrequestAnimationFrameで最適化
  function handleResize() {
    if (resizeScheduled) return;

    resizeScheduled = true;

    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
      updateChartPadding();
      updateAllChartColors();

      Object.values(Chart.instances).forEach(chart => chart.resize());

      document.querySelectorAll('.chartjs').forEach(canvas => {
        canvas.style.width = 'auto';
        canvas.style.height = 'auto';
      });

      resizeScheduled = false;
      rafId = null;
    });
  }

  Defer(function () {
    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedResize);
    initializeCharts();
  }, 1500);
}

/* mermaid */
if (document.querySelector('.language-mermaid') !== null) {

  // 既存の図表にスタイルを適用
  document.querySelectorAll('.mermaid-chart').forEach(figure => {
    figure.classList.add('box-img', 'box-img640');
  });

  const isDarkMode = document.documentElement.classList.contains('dark-mode');
  const today = new Date().toISOString().split('T')[0];

  // ユーティリティ関数（変更なし）
  function findLatestDate(code) {
    const dateRegex = /\d{4}-\d{2}-\d{2}/g;
    const dates = code.match(dateRegex);
    if (!dates) return null;
    return dates.reduce((latest, current) => {
      return new Date(current) > new Date(latest) ? current : latest;
    }, dates[0]);
  }
  function replaceLatestDate(code, latestDate, newDate) {
    const regex = new RegExp(latestDate, 'g');
    return code.replace(regex, newDate);
  }

  // 初回変換前に.language-mermaidの内容を保存する関数
  function preserveMermaidSource() {
    const languageMermaidElements = document.querySelectorAll('.language-mermaid');

    languageMermaidElements.forEach(function (element) {
      if (element.nextElementSibling && element.nextElementSibling.classList.contains('language-mermaid-copy')) {
        return;
      }

      const originalCode = element.textContent.trim();

      // ★修正: copyElementには日付更新前のオリジナルコードを保存★
      const copyElement = document.createElement('code');
      copyElement.className = 'language-mermaid-copy';
      copyElement.style.display = 'none';
      copyElement.textContent = originalCode;

      element.parentNode.insertBefore(copyElement, element.nextSibling);

      // DOM上の要素は、初回描画のためにGanttの日付を更新
      if (originalCode.includes('gantt')) {
        const latestDate = findLatestDate(originalCode);
        if (latestDate) {
          element.textContent = replaceLatestDate(originalCode, latestDate, today);
        }
      }
    });
  }

  preserveMermaidSource();

  window.updateMermaidTheme = function (theme) {
    if (typeof mermaid === 'undefined') return;

    const mermaidElements = document.querySelectorAll('.language-mermaid');
    if (mermaidElements.length === 0) return;

    try {
      // 既存のSVG要素をすべて削除
      document.querySelectorAll('.language-mermaid svg').forEach(svg => {
        svg.remove();
      });

      // テーマに応じた設定と初期化
      const mermaidConfig = {
        startOnLoad: false,
        theme: theme === 'dark' ? 'dark' : 'default'
      };
      if (typeof mermaid.initialize === 'function') {
        mermaid.initialize(mermaidConfig);
      }

      // 描画処理を requestAnimationFrame でスケジュール
      requestAnimationFrame(() => {

        const processChart = function (index) {
          if (index >= mermaidElements.length) return;

          const element = mermaidElements[index];

          // ★修正: 常にオリジナルコードが保存された copyElement からソースを取得
          let copyElement = element.nextElementSibling;
          if (!copyElement || !copyElement.classList.contains('language-mermaid-copy')) {
            copyElement = element.previousElementSibling;
          }
          if (!copyElement || !copyElement.classList.contains('language-mermaid-copy')) {
            processChart(index + 1); // ソースが見つからなければスキップ
            return;
          }

          let updatedCode = copyElement.textContent.trim(); // オリジナルコードからスタート

          // 親要素のサイズ保存 (元のロジックを維持)
          const parentFigure = element.closest('.mermaid-chart');
          if (parentFigure) {
            const computedStyle = window.getComputedStyle(parentFigure);
            parentFigure.style.width = computedStyle.width;
            parentFigure.style.height = computedStyle.height;
          }

          // ★Ganttチャートの場合のみ、オリジナルのソースに対して日付更新を適用
          if (updatedCode.includes('gantt')) {
            const latestDate = findLatestDate(updatedCode);
            if (latestDate) {
              updatedCode = replaceLatestDate(updatedCode, latestDate, today);
            }
          }

          // 要素をクリアし、更新されたコードを設定
          element.innerHTML = '';
          element.textContent = updatedCode;
          element.removeAttribute('data-processed');

          const uniqueId = 'mermaid-' + Date.now() + '-' + index;
          element.id = uniqueId;

          const onRenderComplete = function () {
            // 親要素のサイズを元に戻す
            if (parentFigure) {
              parentFigure.style.removeProperty('width');
              parentFigure.style.removeProperty('height');
            }
            processChart(index + 1);
          };

          // Mermaidの描画実行 (非同期)
          if (typeof mermaid.run === 'function') {
            mermaid.run({ nodes: [element] }).then(onRenderComplete).catch(onRenderComplete);
          } else if (typeof mermaid.render === 'function') {
            mermaid.render(uniqueId + '-svg', updatedCode).then(function (result) {
              element.innerHTML = result.svg;
              onRenderComplete();
            }).catch(onRenderComplete);
          } else {
            onRenderComplete();
          }
        };

        // 最初のチャートから処理開始
        processChart(0);
      }); // requestAnimationFrame 終了

    } catch (error) {
      console.error('Mermaid theme update error:', error);
      // エラー時の処理は維持
      if (confirm('チャートのテーマ更新でエラーが発生しました。ページを再読み込みしますか？')) {
        window.location.reload();
      }
    }
  };

  Defer(function () {
    if (typeof mermaid === 'undefined') return;

    // 初回描画時の設定
    mermaid.initialize({
      startOnLoad: false,
      theme: isDarkMode ? 'dark' : 'default',
    });

    // 日付更新済みのDOMコードを使って描画を実行
    mermaid.run();

  }, 1500);
}

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
