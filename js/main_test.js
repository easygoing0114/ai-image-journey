
/*@shinsenter/defer.js@3.7.0*/
!(function(i,u,f){function s(n,t,e){N?z(n,t):((e=e===f?s.lazy:e)?q:S).push(n,Math.max(e?350:0,t))} function c(n){return"string"==typeof(n=n||{})?{id:n}:n} function r(t,n,e,o){a(n.split(" "),function(n){(o||i)[t+"EventListener"](n,e||m)})} function a(n,t){n.map(t)} function l(n,t){a(D.call(n.attributes),function(n){t(n.name,n.value)})} function d(n,t,e,o,i,c){if(i=I.createElement(n),e&&r(w,b,e,i),t) for(c in t)i[j](c,t[c]);return o&&I.head.appendChild(i),i} function p(n,t){return D.call((t||I).querySelectorAll(n))} function h(o,n){a(p("source,img",o),h),l(o,function(n,t,e){(e=y.exec(n))&&o[j](e[1],t)}),"string"==typeof n&&(o.className+=" "+n),o[b]&&o[b]()} function n(n,t,e){s(function(o){a(o=p(n||"script[type=deferjs]"),function(n,e){n[A]&&(e={},l(n,function(n,t){n!=C&&(e[n==A?"href":n]=t)}),e.as=g,e.rel="preload",d(v,e,f,I))}),(function i(n,e,t){(n=o[k]())&&(e={},l(n,function(n,t){n!=C&&(e[n]=t)}),t=e[A]&&!("async" in e),(e=d(g,e)).text=n.text,n.parentNode.replaceChild(e,n),t?r(w,b+" error",i,e):i())})()},t,e)} function m(n,t){for(t=N?(r(e,o),q):(r(e,x),N=s,q[0]&&r(w,o),S);t[0];)z(t[k](),t[k]())} var y=/^data-(.+)/,v="link",g="script",b="load",t="pageshow",w="add",e="remove",o="touchstart mousemove mousedown keydown wheel",x="on"+t in i?t:b,j="setAttribute",k="shift",A="src",C="type",E=i.IntersectionObserver,I=i.document||i,N=/p/.test(I.readyState),S=[],q=[],z=i.setTimeout,D=S.slice;s.all=n,s.domz=function(n,t,i,z,c,r){s(function(e){function o(n){c&&!1===c(n)||h(n,i)} e=E?new E(function(n){a(n,function(n,t){n.isIntersecting&&(t=n.target)&&(z&&z(t),e.unobserve(t),o(t))})},r):f,a(p(n||"[data-src]"),function(n){n[u]||(n[u]=s,e?e.observe(n):o(n))})},t,!1)},s.dom=function(n,t,i,c,r){s(function(e){function o(n){c&&!1===c(n)||h(n,i)} e=E?new E(function(n){a(n,function(n,t){n.isIntersecting&&(e.unobserve(t=n.target),o(t))})},r):f,a(p(n||"[data-src]"),function(n){n[u]||(n[u]=s,e?e.observe(n):o(n))})},t,!1)},s.css=function(n,t,e,o,i){(t=c(t)).href=n,t.rel="stylesheet",s(function(){d(v,t,o,I)},e,i)},s.js=function(n,t,e,o,i){(t=c(t)).src=n,s(function(){d(g,t,o,I)},e,i)},s.reveal=h,i[u]=s,N||r(w,x),n()})(this,"Defer")

'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');

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
Defer.dom('img', 100);
Defer.dom('iframe', 500);

/* debounce関数 */
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

/* header アニメーション */
Defer(function() {
  // スクロール位置を記録する変数
  let lastScrollTop = 0;
  const header = document.getElementById('header');
  // スクロールの閾値（ビューポート高さの5% = 5svh相当）
  const scrollThreshold = window.innerHeight * 0.03;

  // debounce用のタイムアウトIDを保持
  let showHeaderTimeout;

  // ヘッダーを表示する処理（debounce適用）
  function showHeader() {
    clearTimeout(showHeaderTimeout);
    showHeaderTimeout = setTimeout(function() {
      header.classList.remove('header-move-up');
      header.classList.add('header-move-down');
    }, 300);
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
      // ヘッダーを表示（debounce適用）
      showHeader();
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  // スクロールイベントのリスナー
  window.addEventListener('scroll', handleScroll, false);
}, 100);

Defer(function () {
    // 要素取得（存在チェック付き）
    const headerSearchButton   = document.getElementById('header-search-button');
    const headerSearchDropdown = document.getElementById('header-search-dropdown');
    const headerMenuButton     = document.getElementById('header-menu-button');
    const navbarMenu           = document.getElementById('navbar-menu');

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
        const isMenuClick   = headerMenuButton?.contains(e.target) || navbarMenu?.contains(e.target);

        if (!isSearchClick && !isMenuClick) {
            headerSearchDropdown?.classList.remove('dropdown-visible');
            navbarMenu?.classList.remove('dropdown-visible');
        }
    });

}, 100);

/* 外部リンクに新しいタブで開く属性追加 */
Defer(function() {
  const links = document.querySelectorAll('a');
  const myDomain = 'ai-image-journey.com';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.includes(myDomain) && !href.startsWith('/') && !href.startsWith('#')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}, 100); 

/* DMCA バッジ */
Defer(function () {
    var dmcaLink = document.getElementById('dmcaLink');
    if (dmcaLink && dmcaLink.href.indexOf('refurl') < 0) {
        dmcaLink.href += (dmcaLink.href.indexOf('?') === -1 ? '?' : '&') + 'refurl=' + document.location;
    }
}, 100);

/* dark-mode ボタン */
Defer(function () {
  var darkModeButtons = document.querySelectorAll(".toggle-dark-mode-btn");

  darkModeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
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
}, 100);

// テキストエリアの高さ自動調整
if (document.querySelector('textarea') !== null) {
  Defer(function() {

    function createAutoResizeTextarea() {
        const textareas = document.querySelectorAll('textarea');
        
        textareas.forEach(textarea => {
            function adjustHeight() {
                textarea.style.height = 'auto';
                textarea.style.height = Math.max(textarea.scrollHeight, 24) + 'px';
            }

            adjustHeight();

            // 全てのイベントを監視
            ['input', 'paste', 'cut', 'keydown', 'keyup'].forEach(event => {
                textarea.addEventListener(event, () => {
                    setTimeout(adjustHeight, 0);
                });
            });

            // 定期的な値チェック（最も確実）
            let lastValue = textarea.value;
            const checkInterval = setInterval(() => {
                if (textarea.value !== lastValue) {
                    lastValue = textarea.value;
                    adjustHeight();
                }
                
                // textareaが削除された場合はintervalをクリア
                if (!document.contains(textarea)) {
                    clearInterval(checkInterval);
                }
            }, 50);
        });
    }

    createAutoResizeTextarea();

  }, 100);
}

/* リンクカードの作成 */
if (document.querySelector('.blogcard-auto') !== null) {
  Defer(function() {
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
          'huggingface.co/easygoing0114': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCVXA9lGHLmQZqpHFx_m1MEfgolO1f8ksTQfLJcHDa5-rH86NWJ-ufv4TgNOAPOMcFfIFEpqBzjV3xPRQ-85oKG-GWDI8zRiUku_ZFtVcOJACWm97gJH_PsadwGx9GujgPRu3RVtBY25qnG0UiTVBzOErzfsEI5Q0ZAnkzkp5odc7BAw/w400-e90-rw/Profile_image_20250824.png',

          // Civitai models
          'civitai.com/models/722776': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ff1638f0-0295-45e8-b038-d7f376f26873/ComfyUI_00023_.jpeg',
          'civitai.com/models/261336': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/48499ad8-33bb-4a2c-aac8-af6c6edcc280/00494-20240625200426-223644773-30-5.jpeg',
          'civitai.com/models/119012': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/55619f31-4395-4e9b-a94d-208460a9f7d2/00494-20240623160056-880978405-30-5.jpeg',
          'civitai.com/models/674457': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b5674e66-26cb-45ec-9e82-c19a2dd9753d/ComfyUI_00262_.jpeg',
          'civitai.com/models/260267': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b50708a9-a0a2-4a62-a688-cbd15abb65e4/image%20(24).jpeg',
          'civitai.com/models/1027203': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5d4020ad-6777-4077-b53e-4432e9263d45/00000-20241211153415-1954655588-30-5.jpeg',
          'civitai.com/models/1188071': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/44382db0-b992-4058-b8b1-369a58cc2604/animagine-xl-4.0-opt.jpeg',
          'civitai.com/models/1356520': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnwPTigmuL8PCTQ0LYH3psdmMJrjX5E6airywZe7ZAUqKzjscylMiyKIlCFx4K3p5Icx7vOb7pXDxohMMXChooPYvgadslw2qQs-N_qQD8cEW_haXr-rbLhUotCNHxUSIKkJ9JDmf8J3qMU6qjnt0S8R0sT0JG844K5bnm8Bc2Lip33T4/w400-e90-rw/Flux1_euler_Anime%20Illustration%20of%20%20A%20young%20girl%20holding%20a%20chalkboard%20that%20says%20flan%20t5%20and%20te-only.png',
          'civitai.com/models/2081436': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4YTSY3VXkYyY3tukvgxw585ybaUXS0FTD8_1VWTo_nIIdBBL9Uk2Mr5ftwIOZLW6LL2Kd2YpZdXIYQ_wyLOOMSzZA38OgKpLoZ7EDSgOhX49vYeJzh08XGvoTb2H8z5_5aZGYFnFji3RrLWMs8M7pMtFOiffgYHOR8_U-42zBfdtivw/w400-e90-rw/HiDream_I1-Dev_clear_photoreal_compare.png',
          'civitai.com/models/2110148': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix1Z4fRSVlZ6sYPVo00fSFG16mokYEd9zLXK9wgCWOl56kOqE6Lhxrf55T9JRbT9zDpXwpEWRd-4Uw48-6AcGFvPAmdM82fXyJMSMUwShoOPaXeFxz4Yk-qnENi37oi9O2tA_1uIbgxTFRYP0lImzUNC98Kwjk02CuXHd1y82ojvxMog/w400-e90-rw/Upscale_Detailer_color_correct_00036_close_up.png'
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
        
        // 0.3秒間隔で処理を開始し、完了次第表示
        const promises = Array.from(blogcards).map((card, index) => {
          return new Promise(resolve => {
            setTimeout(async () => {
              await this.processLink(card);
              resolve();
            }, index * 300); // 0.3秒 = 300ミリ秒
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
  }, 100);
}

/* table の font-size と padding を画面の最大幅に合わせて変更 */
if (document.querySelector('.table-responsive') !== null) {
    
    function adjustTableScale() {
        var tables = document.querySelectorAll('.table-responsive table');
        tables.forEach(function(table) {
            var tableResponsive = table.parentElement;
            var tableResponsiveWidth = tableResponsive.clientWidth;
            
            // 元のサイズが保存されていない場合は保存
            if (!table.dataset.originalWidth) {
                // 完全にリセットした状態でサイズを測定
                table.style.cssText = '';
                table.querySelectorAll('th, td').forEach(function(cell) {
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
            table.querySelectorAll('th, td').forEach(function(cell) {
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
                
                table.style.width = availableWidth + 'px';
                table.style.height = (originalTableHeight * scale) + totalBorderHeight + safetyMargin + 'px';
                table.querySelectorAll('th, td').forEach(function(cell) {
                    cell.style.fontSize = (originalFontSize * scale) + 'px';
                    cell.style.padding = (originalPaddingTop * scale) + 'px ' + (originalPaddingLeft * scale) + 'px';
                });
            }
        });
    }

    Defer(function() {
        const debouncedAdjust = debounce(adjustTableScale, 100);
        window.addEventListener('resize', debouncedAdjust);
        debouncedAdjust(); // 初回実行
    }, 100);
}

/* Aspect Ratio を調整 */
if (document.querySelector('.ar1_1, .ar16_9, .ar9_16, .ar5_7, .ar7_5') !== null) {
    
    // アスペクト比を調整するスクリプト
    function resizeAspectRatios() {
        // .ar1_1 クラスを持つすべての要素を取得（1:1 正方形）
        const squareElements = document.querySelectorAll('.ar1_1');
        squareElements.forEach(element => {
            const actualWidth = element.offsetWidth;
            // 子のiframe要素の高さを調整
            const iframe = element.querySelector('iframe');
            if (iframe) {
                iframe.style.height = actualWidth + 'px';
            }
        });
        
        // .ar16_9 クラスを持つすべての要素を取得（16:9 横長）
        const wideElements = document.querySelectorAll('.ar16_9');
        wideElements.forEach(element => {
            const actualWidth = element.offsetWidth;
            const height = Math.round(actualWidth * 9 / 16);
            // 子のiframe要素の高さを調整
            const iframe = element.querySelector('iframe');
            if (iframe) {
                iframe.style.height = height + 'px';
            }
        });
        
        // .ar9_16 クラスを持つすべての要素を取得（9:16 縦長）
        const tallElements = document.querySelectorAll('.ar9_16');
        tallElements.forEach(element => {
            const actualWidth = element.offsetWidth;
            const height = Math.round(actualWidth * 16 / 9);
            // 子のiframe要素の高さを調整
            const iframe = element.querySelector('iframe');
            if (iframe) {
                iframe.style.height = height + 'px';
            }
        });
        
        // .ar5_7 クラスを持つすべての要素を取得（1:√2 白銀比縦長）
        const silverTallElements = document.querySelectorAll('.ar5_7');
        silverTallElements.forEach(element => {
            const actualWidth = element.offsetWidth;
            const height = Math.round(actualWidth * Math.sqrt(2)); // √2 ≈ 1.4142
            // 子のiframe要素の高さを調整
            const iframe = element.querySelector('iframe');
            if (iframe) {
                iframe.style.height = height + 'px';
            }
        });
        
        // .ar7_5 クラスを持つすべての要素を取得（√2:1 白銀比横長）
        const silverWideElements = document.querySelectorAll('.ar7_5');
        silverWideElements.forEach(element => {
            const actualWidth = element.offsetWidth;
            const height = Math.round(actualWidth / Math.sqrt(2)); // 1/√2 ≈ 0.7071
            // 子のiframe要素の高さを調整
            const iframe = element.querySelector('iframe');
            if (iframe) {
                iframe.style.height = height + 'px';
            }
        });
    }

    // debounce付きのリサイズハンドラーを作成
    const debouncedResize = debounce(resizeAspectRatios, 100);

    // 修正: ResizeObserver変数をスコープ外で宣言
    let resizeObserver;
    
    if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                const element = entry.target;
                if (element.classList.contains('ar1_1')) {
                    const actualWidth = element.offsetWidth;
                    const iframe = element.querySelector('iframe');
                    if (iframe) {
                        iframe.style.height = actualWidth + 'px';
                    }
                } else if (element.classList.contains('ar16_9')) {
                    const actualWidth = element.offsetWidth;
                    const height = Math.round(actualWidth * 9 / 16);
                    const iframe = element.querySelector('iframe');
                    if (iframe) {
                        iframe.style.height = height + 'px';
                    }
                } else if (element.classList.contains('ar9_16')) {
                    const actualWidth = element.offsetWidth;
                    const height = Math.round(actualWidth * 16 / 9);
                    const iframe = element.querySelector('iframe');
                    if (iframe) {
                        iframe.style.height = height + 'px';
                    }
                } else if (element.classList.contains('ar5_7')) {
                    const actualWidth = element.offsetWidth;
                    const height = Math.round(actualWidth * Math.sqrt(2)); // 白銀比縦長 1:√2
                    const iframe = element.querySelector('iframe');
                    if (iframe) {
                        iframe.style.height = height + 'px';
                    }
                } else if (element.classList.contains('ar7_5')) {
                    const actualWidth = element.offsetWidth;
                    const height = Math.round(actualWidth / Math.sqrt(2)); // 白銀比横長 √2:1
                    const iframe = element.querySelector('iframe');
                    if (iframe) {
                        iframe.style.height = height + 'px';
                    }
                }
            });
        });
    }  

    Defer(function() {
        // 初回実行
        resizeAspectRatios();
        
        // リサイズイベントリスナー追加
        window.addEventListener('resize', debouncedResize);
        
        // ResizeObserver で要素監視開始（存在する場合のみ）
        if (resizeObserver) {
            document.querySelectorAll('.ar1_1, .ar16_9, .ar9_16, .ar5_7, .ar7_5').forEach(element => {
                resizeObserver.observe(element);
            });
        }
    }, 100);
}

/* loading="lazy" の順次解除 */
Defer(function() {
    // すべての <img> 要素を配列に変換
    var imageEagerLoad = Array.from(document.querySelectorAll('img'));
    
    if (imageEagerLoad.length === 0) return;

    // すべての画像の遅延読み込みを順次解除
    imageEagerLoad.forEach((img, index) => {
        Defer(function() {
            img.removeAttribute('loading');
        }, (index * 200)); // 0.2秒の間隔で順次解除
    });
}, 200);

/* Chart.js */
if (document.querySelector('.chartjs') !== null) {
    let chartsInitialized = false;
    
    function getCurrentThemeColor() {
        return getComputedStyle(document.documentElement).getPropertyValue('--bs-body-color').trim();
    } 
    
    function calculateDynamicPadding(specificContainer = null) {
        
        // 特定のコンテナが指定されていない場合は最初のコンテナを使用
        const container = specificContainer || document.querySelector('.chartjs-container');
        
        if (!container) {
            return 24; // デフォルト値
        }
        
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
                
        // アスペクト比を計算（幅/高さ）
        const aspectRatio = containerWidth / containerHeight;
        
        // アスペクト比に応じて係数を選択
        let coefficient;
        if (aspectRatio >= 1) {
            coefficient = 0.05; // 横長または正方形の場合
        } else {
            coefficient = 0.1;  // 縦長の場合
        }
        
        const calculatedPadding = Math.round(containerWidth * coefficient);
        
        return calculatedPadding;
    }
    
    function findContainerForChart(canvas) {
        // canvasの親要素を遡って.chartjs-containerを探す
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
        // すべての.chartjsクラスを持つcanvas要素を取得
        const canvases = document.querySelectorAll('canvas.chartjs');
        
        canvases.forEach(canvas => {
            // 既にラッパーで囲まれているかチェック
            if (canvas.parentElement && canvas.parentElement.classList.contains('chartjs-wrapper')) {
                return; // 既にラップされている場合はスキップ
            }
            
            // 新しいdiv要素を作成
            const wrapper = document.createElement('div');
            wrapper.classList.add('chartjs-wrapper');
            
            // canvasの親要素にwrapperを挿入し、canvasをwrapperの中に移動
            canvas.parentNode.insertBefore(wrapper, canvas);
            wrapper.appendChild(canvas);
        });
    }
    
    function updateChartPadding() {
        
        // 既存のチャートのpaddingを個別に更新
        const chartInstances = Object.values(Chart.instances);
        
        chartInstances.forEach(function(chart, index) {
            
            // このチャートに対応するコンテナを見つける
            const canvas = chart.canvas;
            const container = findContainerForChart(canvas);
            
            if (container) {
                const newPadding = calculateDynamicPadding(container);
                
                if (chart.options.layout) {
                    chart.options.layout.padding = newPadding;
                } else {
                    chart.options.layout = { padding: newPadding };
                }
                
                chart.update('none');
            } 
        });
    }
    
    function updateAllChartColors() {
        const currentColor = getCurrentThemeColor();
        Chart.defaults.color = currentColor;
        Object.values(Chart.instances).forEach(function(chart) {
            if (chart.options.scales) {
                Object.keys(chart.options.scales).forEach(function(scaleKey) {
                    // 軸のティックの色
                    if (chart.options.scales[scaleKey].ticks) {
                        chart.options.scales[scaleKey].ticks.color = currentColor;
                    }
                    // 軸ラベルの色
                    if (chart.options.scales[scaleKey].title) {
                        chart.options.scales[scaleKey].title.color = currentColor;
                    }
                });
            }
            if (chart.options.plugins && chart.options.plugins.legend && chart.options.plugins.legend.labels) {
                chart.options.plugins.legend.labels.color = currentColor;
            }
            if (chart.options.plugins && chart.options.plugins.title) {
                chart.options.plugins.title.color = currentColor;
            }
            if (chart.options.plugins && chart.options.plugins.datalabels) {
                chart.options.plugins.datalabels.color = currentColor;
            }
            chart.update('none');
        });
    }
    
    function createAllCharts() {
        // Get all canvas elements with class 'chartjs'
        const canvases = document.querySelectorAll('.chartjs');
        
        canvases.forEach((canvas, index) => {
            // Call createChartN function where N is index + 1
            const funcName = `createChart${index + 1}`;
            if (typeof window[funcName] === 'function') {
                window[funcName]();
            } 
        });
    }
    
    function applyIndividualPadding() {
        
        // 作成されたチャートに対して個別のパディングを適用
        const chartInstances = Object.values(Chart.instances);
        
        chartInstances.forEach(function(chart, index) {
            
            const canvas = chart.canvas;
            const container = findContainerForChart(canvas);
            
            if (container) {
                const padding = calculateDynamicPadding(container);
                
                if (chart.options.layout) {
                    chart.options.layout.padding = padding;
                } else {
                    chart.options.layout = { padding: padding };
                }
                
                chart.update('none');
            } 
        });
    }
    
    function initializeCharts() {
        
        // Canvas要素をdivで囲む処理を最初に実行
        wrapChartjsCanvas();
        
        // 初回のみChart.jsの設定を行う
        if (!chartsInitialized) {
            Chart.register(ChartDataLabels);
            
            // デフォルトのパディングは最小値に設定（個別で上書きする）
            Chart.defaults.layout.padding = 24;
            chartsInitialized = true;
        }
        
        // チャート作成
        createAllCharts();
        
        // 各チャートに個別のパディングを適用
        applyIndividualPadding();
        
        // テーマカラーの適用
        updateAllChartColors();
        
        // Canvas要素のサイズ設定
        document.querySelectorAll('.chartjs').forEach(canvas => {
            canvas.style.width = 'auto';
            canvas.style.height = 'auto';
        });
    }
    
    function handleResize() {
        // リサイズ時は個別のpaddingとチャートの色を更新
        updateChartPadding();
        updateAllChartColors();
        
        // Chart.jsの内蔵リサイズ機能を使用（より効率的）
        Object.values(Chart.instances).forEach(chart => {
            chart.resize();
        });
        
        // Canvas要素のサイズ設定を再適用
        document.querySelectorAll('.chartjs').forEach(canvas => {
            canvas.style.width = 'auto';
            canvas.style.height = 'auto';
        });
    }
    
    Defer(function() {
        const debouncedResize = debounce(handleResize, 100);
        window.addEventListener('resize', debouncedResize);
        initializeCharts(); // 初回実行
    }, 1500);
}

/* mermaid */
if (document.querySelector('.language-mermaid') !== null) {

  // 既存の図表にスタイルを適用
  document.querySelectorAll('.mermaid-chart').forEach(figure => {
    figure.classList.add('box-img', 'box-img640');
  });

  const isDarkMode = document.documentElement.classList.contains('dark-mode');

  // gantt チャートの最新日付を更新
  // 今日の日付を取得 (YYYY-MM-DD形式)
  const today = new Date().toISOString().split('T')[0];

  // 最新の日付を検出する関数
  function findLatestDate(code) {
    const dateRegex = /\d{4}-\d{2}-\d{2}/g;
    const dates = code.match(dateRegex);
    if (!dates) return null;
    
    // 日付を比較して最新の日付を見つける
    return dates.reduce((latest, current) => {
      return new Date(current) > new Date(latest) ? current : latest;
    }, dates[0]);
  }

  // 最新の日付を今日の日付に置換
  function replaceLatestDate(code, latestDate, newDate) {
    const regex = new RegExp(latestDate, 'g');
    return code.replace(regex, newDate);
  }

  // Mermaidコードを検出して処理
  function updateMermaidGanttCharts() {
    const mermaidElements = document.querySelectorAll('.language-mermaid');
    
    mermaidElements.forEach((element) => {
      const code = element.textContent;
      
      if (code.includes('gantt')) {
        const latestDate = findLatestDate(code);
        if (latestDate) {
          const updatedCode = replaceLatestDate(code, latestDate, today);
          element.textContent = updatedCode;
          
          if (typeof mermaid !== 'undefined') {
            mermaid.init(undefined, element);
          }
        }
      }
    });
  }

  updateMermaidGanttCharts()

  // 初回変換前に.language-mermaidの内容を保存する関数
  function preserveMermaidSource() {
    const languageMermaidElements = document.querySelectorAll('.language-mermaid');
    
    languageMermaidElements.forEach(function(element) {
      // 既にコピーが存在する場合はスキップ
      if (element.nextElementSibling && element.nextElementSibling.classList.contains('language-mermaid-copy')) {
        return;
      }
      
      // .language-mermaid-copyを作成
      const copyElement = document.createElement('code');
      copyElement.className = 'language-mermaid-copy';
      copyElement.style.display = 'none';
      copyElement.textContent = element.textContent;
      
      // 元の要素の直後に挿入
      element.parentNode.insertBefore(copyElement, element.nextSibling);
    });
  }

  // Mermaidソースを保存
  preserveMermaidSource();

  // Mermaidチャートのテーマ更新機能（グローバル関数として定義）
  window.updateMermaidTheme = function(theme) {
    try {
      const mermaidElements = document.querySelectorAll('.language-mermaid');
      
      if (mermaidElements.length === 0) {
        return;
      }

      // 既存のSVG要素をすべて削除
      document.querySelectorAll('.language-mermaid svg').forEach(svg => {
        svg.remove();
      });

      // テーマに応じた設定
      const mermaidConfig = {
        startOnLoad: false,
        theme: theme === 'dark' ? 'dark' : 'default'
      };
      
      if (typeof mermaid.initialize === 'function') {
        mermaid.initialize(mermaidConfig);
      }

      // 各Mermaidチャートを再描画（順次処理）
      const processChart = function(index) {
        if (index >= mermaidElements.length) {
          return;
        }

        const element = mermaidElements[index];
        
        // 対応する.language-mermaid-copyからソースコードを取得
        let copyElement = null;
        
        if (element.previousElementSibling && element.previousElementSibling.classList.contains('language-mermaid-copy')) {
          copyElement = element.previousElementSibling;
        } else if (element.nextElementSibling && element.nextElementSibling.classList.contains('language-mermaid-copy')) {
          copyElement = element.nextElementSibling;
        }
        
        if (!copyElement) {
          processChart(index + 1);
          return;
        }
        
        // 親要素を取得（.mermaid-chartのfigure要素）
        const parentFigure = element.closest('.mermaid-chart');
            
        if (parentFigure) {
          const computedStyle = window.getComputedStyle(parentFigure);
                   
          // 現在の計算されたサイズを親要素に適用
          parentFigure.style.width = computedStyle.width;
          parentFigure.style.height = computedStyle.height;
        }
        
        // 保存されたソースコードを取得
        const originalCode = copyElement.textContent.trim();
        let updatedCode = originalCode;
        
        // Ganttチャートの場合は日付を更新
        if (originalCode.includes('gantt')) {
          const latestDate = findLatestDate(originalCode);
          if (latestDate) {
            updatedCode = replaceLatestDate(originalCode, latestDate, today);
          }
        }
        
        // 要素をクリアして準備
        element.innerHTML = '';
        element.textContent = updatedCode;
        element.removeAttribute('data-processed');
        
        // 一意のIDを生成して設定
        const uniqueId = 'mermaid-' + Date.now() + '-' + index;
        element.id = uniqueId;

        // 描画完了後の後処理関数
        const onRenderComplete = function() {
          // 親要素のサイズを元に戻す（元々設定されていなかった場合は削除）
          parentFigure.style.removeProperty('width');
          parentFigure.style.removeProperty('height');
          
          processChart(index + 1);
        };

        try {
          // Mermaidバージョンに応じた描画方法を選択
          if (typeof mermaid.run === 'function') {
            mermaid.run({
              nodes: [element],
              suppressErrors: false
            }).then(function() {
              onRenderComplete();
            }).catch(function(error) {
              onRenderComplete();
            });
          } else if (typeof mermaid.render === 'function') {
            mermaid.render(uniqueId + '-svg', updatedCode).then(function(result) {
              element.innerHTML = result.svg;
              onRenderComplete();
            }).catch(function(error) {
              onRenderComplete();
            });
          } else {
            onRenderComplete();
          }
        } catch (error) {
          onRenderComplete();
        }
      };

      // 最初のチャートから処理開始
      processChart(0);

    } catch (error) {
      if (confirm('チャートのテーマ更新でエラーが発生しました。ページを再読み込みしますか？')) {
        window.location.reload();
      }
    }
  };

  Defer(function () {

    mermaid.initialize({
      startOnLoad: false,
      theme: isDarkMode ? 'dark' : 'default',
    });

    mermaid.run();

  }, 1500);
}
  
/* GPUアクセラレーション除去 */
Defer(function() {
    var elements = document.querySelectorAll('.gpu-accelerated');
    elements.forEach(function(element) {
        element.classList.remove('gpu-accelerated');
    });
}, 3000);
  
/* img の src の "w200-e90-rw" を "w400-e90-rw" に書き換え */
Defer(function() {
  var imageSmallSize = document.querySelectorAll('img');
  imageSmallSize.forEach(function(img) {
    var src = img.src;
    if (src.includes('w200-e90-rw')) {
      var newSmallImgSrc = src.replace('w200-e90-rw', 'w400-e90-rw');
      img.src = newSmallImgSrc;
    }
  });
}, 2000);

/* img の src の "w400-e90-rw" を "w800-e90-rw" に書き換え */
Defer(function() {
  var imageMediumSize = document.querySelectorAll('img');
  imageMediumSize.forEach(function(img) {
    var src = img.src;
    if (src.includes('w400-e90-rw')) {
      var newMediumImgSrc = src.replace('w400-e90-rw', 'w800-e90-rw');
      img.src = newMediumImgSrc;
    }
  });
}, 5000);