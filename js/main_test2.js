// jettheme 読み込み画像の解像度
var ImgSize = 400;

/*@shinsenter/defer.js@3.7.0*/
!(function(i,u,f){function s(n,t,e){N?z(n,t):((e=e===f?s.lazy:e)?q:S).push(n,Math.max(e?350:0,t))} function c(n){return"string"==typeof(n=n||{})?{id:n}:n} function r(t,n,e,o){a(n.split(" "),function(n){(o||i)[t+"EventListener"](n,e||m)})} function a(n,t){n.map(t)} function l(n,t){a(D.call(n.attributes),function(n){t(n.name,n.value)})} function d(n,t,e,o,i,c){if(i=I.createElement(n),e&&r(w,b,e,i),t) for(c in t)i[j](c,t[c]);return o&&I.head.appendChild(i),i} function p(n,t){return D.call((t||I).querySelectorAll(n))} function h(o,n){a(p("source,img",o),h),l(o,function(n,t,e){(e=y.exec(n))&&o[j](e[1],t)}),"string"==typeof n&&(o.className+=" "+n),o[b]&&o[b]()} function n(n,t,e){s(function(o){a(o=p(n||"script[type=deferjs]"),function(n,e){n[A]&&(e={},l(n,function(n,t){n!=C&&(e[n==A?"href":n]=t)}),e.as=g,e.rel="preload",d(v,e,f,I))}),(function i(n,e,t){(n=o[k]())&&(e={},l(n,function(n,t){n!=C&&(e[n]=t)}),t=e[A]&&!("async" in e),(e=d(g,e)).text=n.text,n.parentNode.replaceChild(e,n),t?r(w,b+" error",i,e):i())})()},t,e)} function m(n,t){for(t=N?(r(e,o),q):(r(e,x),N=s,q[0]&&r(w,o),S);t[0];)z(t[k](),t[k]())} var y=/^data-(.+)/,v="link",g="script",b="load",t="pageshow",w="add",e="remove",o="touchstart mousemove mousedown keydown wheel",x="on"+t in i?t:b,j="setAttribute",k="shift",A="src",C="type",E=i.IntersectionObserver,I=i.document||i,N=/p/.test(I.readyState),S=[],q=[],z=i.setTimeout,D=S.slice;s.all=n,s.domz=function(n,t,i,z,c,r){s(function(e){function o(n){c&&!1===c(n)||h(n,i)} e=E?new E(function(n){a(n,function(n,t){n.isIntersecting&&(t=n.target)&&(z&&z(t),e.unobserve(t),o(t))})},r):f,a(p(n||"[data-src]"),function(n){n[u]||(n[u]=s,e?e.observe(n):o(n))})},t,!1)},s.dom=function(n,t,i,c,r){s(function(e){function o(n){c&&!1===c(n)||h(n,i)} e=E?new E(function(n){a(n,function(n,t){n.isIntersecting&&(e.unobserve(t=n.target),o(t))})},r):f,a(p(n||"[data-src]"),function(n){n[u]||(n[u]=s,e?e.observe(n):o(n))})},t,!1)},s.css=function(n,t,e,o,i){(t=c(t)).href=n,t.rel="stylesheet",s(function(){d(v,t,o,I)},e,i)},s.js=function(n,t,e,o,i){(t=c(t)).src=n,s(function(){d(g,t,o,I)},e,i)},s.reveal=h,i[u]=s,N||r(w,x),n()})(this,"Defer")

'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');

// Defer.js example
// Defer.css('your_css_url','your-style-id',100);
// Defer.js('your_script_url','your-script-id',100);

/* 外部スクリプトの読み込み */
if (document.querySelector('.mermaid') !== null) {
  Defer.js('https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs', 'mermaid', 100);
}

if (document.querySelector('.chartjs') !== null) {
  Defer.js('https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js', 'chartjs', 100);
  Defer.js('https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.min.js', 'chartjsdatalabelsplugin', 300);
  Defer.js('https://files.ai-image-journey.com/js/chartjs_arrow_plugin.js', 'chartjsarrowplugin', 300);
}

if (document.querySelector('.markdown') !== null) {
  Defer.js('https://cdnjs.cloudflare.com/ajax/libs/turndown/7.2.0/turndown.min.js', 'turndown', 100);
  Defer.js('https://unpkg.com/turndown-plugin-gfm/dist/turndown-plugin-gfm.js', 'turndownplugin', 100);
  Defer.js('https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js', 'marked', 100);
  Defer.js('https://cdn.jsdelivr.net/npm/marked-extended-tables/lib/index.umd.js', 'markedplugin', 100);
}

if (document.querySelector('canvas') !== null) {
  Defer.js('https://cdn.jsdelivr.net/npm/html2canvas-pro/dist/html2canvas-pro.min.js', 'canvaspro', 100);
}

/* img, iframe 差し替え */
Defer.dom('.defer-img img', 100);
Defer.dom('.defer-iframe iframe', 500);

/*jettheme function*/
function related_temp(e) {
  return (e.title ? "<div class='widget-title position-relative text-uppercase'><span>" + e.title + "</span></div>" : "") + "<div class='row row-cols-2'>" + e.posts.map(function (data, i) {
    return "<article class='mb-4'> <div class='related-card overflow-hidden rounded position-relative border jt-border-light bg-archive'>" + (data.img ? "<div class='item-thumbnail'><a class='related-card-img jt-bg-light  ratio ratio-4x3' href='" + data.url + "'><img alt='" + data.title + "' class='object-cover lazy-" + data.grup_id + " lazyload thumbnail-img' data-src='" + data.img + "' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>" : "") + "<div class='item-content p-4'><h2 class='item-title' itemprop='headline'><a href='" + data.url + "'>" + data.title + "</a></h2><div class='hide-element item-meta d-flex flex-wrap'>" + (data.author != "Unknown" ? "<small class='me-2'><svg aria-hidden='true' class=' jt-icon'><use xlink:href='#i-user'/></svg>" + data.author + "</small>" : "") + "<small class='me-2'><svg aria-hidden='true' class=' jt-icon'><use xlink:href='#i-clock'/></svg>" + data.date + "</small></div></div></div></article>";
  }).join("") + "</div>";
}

function related_inline_temp(e) {
  return "<div id='inline-related-article'>" + (e.title ? "<div class='pb-3'><span>" + e.title + "</span></div>" : "") + "<ul class='ps-3'>" + e.posts.map(function (data, i) {
    return "<li class='inline-related-list'><a href='" + data.url + "'>" + data.title + "</a></li>";
  }).join("") + "</ul></div>";
}

function sidebar_temp(e) {
  return (e.title ? "<div class='widget-title position-relative'><span class='item-title-text'>" + e.title + "</span></div>" : "") + "<div class='item-post-base'>" + e.posts.map(function (data, i) {
    return "<div class='item-post'><a class='item-post-link' href='" + data.url + "'>" + (data.img ? "<div class='item-thumbnail'><img alt='" + data.title + "' class='object-cover thumbnail-img lazy-" + data.grup_id + " lazyload' data-src='" + data.img + "' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></div>" : "") + "<div class='item-content'><h3 class='item-title' itemprop='headline'><span href='" + data.url + "'>" + data.title + "</span></h3><div class='item-meta '><span class='post-date'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-clock'/></svg>" + data.date + "</span></div></div></a></div>";
  }).join("") + "</div>";
}

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
  document.addEventListener("DOMContentLoaded", function () {
      var dmcaBadgeClass = "dmca-badge";
      var refUrlParam = "refurl";
      var badgeLinks = document.querySelectorAll('a.' + dmcaBadgeClass);
      if (badgeLinks.length > 0 && badgeLinks[0].getAttribute("href").indexOf(refUrlParam) < 0) {
          for (var r = 0; r < badgeLinks.length; r++) {
              var link = badgeLinks[r];
              link.href = link.href + (link.href.indexOf("?") === -1 ? "?" : "&") + refUrlParam + "=" + document.location;
          }
      }
  }, false);
}, 100);

/* dark-mode ボタン */
Defer(function() {
  var darkModeButtons = document.querySelectorAll(".toggle-dark-mode-btn");

  darkModeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          var htmlElement = document.querySelector("html");
          var classList = htmlElement.classList;
          var isDarkMode = classList.contains("dark-mode");
          var twitterThemeMeta = document.querySelector("#twitter-theme");

          if (isDarkMode) {
              classList.remove("dark-mode");
              localStorage.setItem('theme', 'light'); // ライトモードを記憶
              if (twitterThemeMeta) {
                  twitterThemeMeta.setAttribute('content', 'light'); // Metaタグを更新
              }
          } else {
              classList.add("dark-mode");
              localStorage.setItem('theme', 'dark'); // ダークモードを記憶
              if (twitterThemeMeta) {
                  twitterThemeMeta.setAttribute('content', 'dark'); // Metaタグを更新
              }
          }
          
          // Chart.jsの色を更新（テンプレート関数を呼び出し）
          if (typeof updateAllChartColors === 'function') {
              setTimeout(function() {
                  updateAllChartColors();
              }, 100); // CSSの適用を待つ
          }
      });
  });

  // ページ読み込み時にlocalStorageの値をチェックして適用
  var savedTheme = localStorage.getItem('theme');
  var twitterThemeMeta = document.querySelector("#twitter-theme");
  if (savedTheme === 'dark') {
      document.querySelector("html").classList.add("dark-mode");
      if (twitterThemeMeta) {
          twitterThemeMeta.setAttribute('content', 'dark'); // Metaタグを更新
      }
  } else {
      if (twitterThemeMeta) {
          twitterThemeMeta.setAttribute('content', 'light'); // Metaタグを更新
      }
  }
}, 100);

// テキストエリアの高さ自動調整
if (document.querySelector('textarea') !== null) {
  Defer(function() {

    // より確実でシンプルなアプローチ
    function createAutoResizeTextarea() {
        const textareas = document.querySelectorAll('textarea');
        
        textareas.forEach(textarea => {
            function adjustHeight() {
                textarea.style.height = 'auto';
                textarea.style.height = Math.max(textarea.scrollHeight, 24) + 'px';
            }

            // 初期調整
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
          // Civitai models
          'civitai.com/models/722776': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ff1638f0-0295-45e8-b038-d7f376f26873/ComfyUI_00023_.jpeg',
          'civitai.com/models/261336': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/48499ad8-33bb-4a2c-aac8-af6c6edcc280/00494-20240625200426-223644773-30-5.jpeg',
          'civitai.com/models/119012': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/55619f31-4395-4e9b-a94d-208460a9f7d2/00494-20240623160056-880978405-30-5.jpeg',
          'civitai.com/models/674457': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b5674e66-26cb-45ec-9e82-c19a2dd9753d/ComfyUI_00262_.jpeg',
          'civitai.com/models/260267': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b50708a9-a0a2-4a62-a688-cbd15abb65e4/image%20(24).jpeg',
          'civitai.com/models/1027203': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5d4020ad-6777-4077-b53e-4432e9263d45/00000-20241211153415-1954655588-30-5.jpeg',
          'civitai.com/models/1188071': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/44382db0-b992-4058-b8b1-369a58cc2604/animagine-xl-4.0-opt.jpeg',
          'civitai.com/models/1356520': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjslEk_MbcW7rmbFx4f3uB5iN8zNVKrFJV7qLSuoc8WJsLxq0aR04ug4Suqef9fK4A5QcaprR-dFgqxsNpj-Pk6j3-lAIix8bRtiRs3OXLy3G2cLUqdE-0bY-hEiTEFLbRnLJU9hbysUPAL-78n39qmQYB7mxvRunFo_Xpx5HDVIKNUBLE/w400-e90-rw/Flux1_euler_Anime%20Illustration%20of%20%20A%20young%20girl%20holding%20a%20chalkboard%20that%20says%20flan%20t5%20and%20te-only.png',
          
          // Hugging Face models
          'huggingface.co/bluepen5805/blue_pencil-flux1': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ff1638f0-0295-45e8-b038-d7f376f26873/ComfyUI_00023_.jpeg',
          'huggingface.co/bluepen5805/anima_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/48499ad8-33bb-4a2c-aac8-af6c6edcc280/00494-20240625200426-223644773-30-5.jpeg',
          'huggingface.co/bluepen5805/blue_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/55619f31-4395-4e9b-a94d-208460a9f7d2/00494-20240623160056-880978405-30-5.jpeg',
          'huggingface.co/bluepen5805/noob_v_pencil-XL': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5d4020ad-6777-4077-b53e-4432e9263d45/00000-20241211153415-1954655588-30-5.jpeg',
          'huggingface.co/zer0int': 'https://cdn-avatars.huggingface.co/v1/production/uploads/6490359a877fc29cb1b09451/b-oU9m0-ceQQ1tyt2G_pq.png',
          'huggingface.co/easygoing0114': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPnTwjMymZ1GmW7M0av29ua0DpqyeFZ2QLf3INk-i0rgWAepGwtta79Kn7mtrSSkfCPHHAaFL2Yywvp7sRP3-JAteLQYJsxX-SSTwrd_BKld9pBGxsByp2q9feoXdizjP0MTD5_0V8glo9J0qLVxyegs_qPumq6ijA_13hzLOzjLE2ejs/w400-e90-rw/profile%202025.5.10.png'
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
  
      async replaceLinks() {
        const blogcards = document.querySelectorAll('.blogcard-auto');
        for (const card of blogcards) {
          try {
            const link = card.querySelector('a');
            if (!link) continue;
  
            const url = link.getAttribute('href');
            if (!url) continue;
  
  //          console.log('Processing:', card, link, url);
  
            let metadata;
            try {
              metadata = await this.fetchPageData(url);
            } catch (error) {
              metadata = null;
            }
  
            const cardHTML = metadata ? this.createCardHTML(metadata) : this.createFallbackCardHTML(link, url);
            
            card.insertAdjacentHTML('afterend', cardHTML);
            card.remove();
          } catch (error) {
  //          console.error(`Error processing link: ${error.message}`);
            continue;
          }
        }
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

/* loading="lazy" の順次解除 */
Defer(function() {
    // すべての <img> 要素を配列に変換
    var imageEagerLoad = Array.from(document.querySelectorAll('img'));
    
    if (imageEagerLoad.length === 0) return;

    // 初回の要素を0.2秒後に処理
    const firstImage = imageEagerLoad[0];
    Defer(function() {
        firstImage.removeAttribute('loading');
    }, 200);

    // 残りの要素を0.2秒間隔で処理
    imageEagerLoad.slice(1).forEach((img, index) => {
        Defer(function() {
            img.removeAttribute('loading');
        }, 400 + (index * 200)); // 初回の0.2秒 + 0.2秒の間隔
    });
}, 200);

/* mermaid 読み込み */
if (document.querySelector('.mermaid') !== null) {
  Defer(function () {
      const initializeMermaid = async () => {
      const mermaidCodes = document.querySelectorAll('.mermaid');
      if (mermaidCodes.length > 0) {
          const { default: mermaid } = await import('https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs');
  
          // ダークモードの検出
          const isDarkMode = document.documentElement.classList.contains('dark-mode');
  
          mermaid.initialize({
          startOnLoad: true,
          theme: isDarkMode ? 'dark' : 'default',
          });
  
          mermaid.contentLoaded();
  
          // アスペクト比に基づいてクラスを適用 & <svg> の max-width 削除
          setTimeout(() => {
          document.querySelectorAll('figure.mermaid-chart').forEach(figure => {
              const preBlock = figure.querySelector('pre.mermaid-block');
  
              if (preBlock) {
              const aspectRatio = preBlock.clientWidth / preBlock.clientHeight;
  
              // 共通クラス box-img を付与
              figure.classList.add('box-img');
  
              // アスペクト比に応じたクラスを追加
              if (aspectRatio >= 1) {
                  figure.classList.add('box-img640');
              } else {
                  figure.classList.add('box-img480');
              }
              }
  
          });
          }, 1000); // レンダリング完了後に実行
      }
      };
  
      initializeMermaid();
  }, 100); 
}

/* Chart.js */
if (document.querySelector('.chartjs') !== null) {

  Chart.defaults.layout.padding = 24;

  function getCurrentThemeColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--bs-body-color').trim();
  } 

  function updateAllChartColors() {
    const currentColor = getCurrentThemeColor();
    
      Object.values(Chart.instances).forEach(function(chart) {
      if (chart.options.scales) {
        Object.keys(chart.options.scales).forEach(function(scaleKey) {
          if (chart.options.scales[scaleKey].ticks) {
            chart.options.scales[scaleKey].ticks.color = currentColor;
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

  function executeChart() {
    getCurrentThemeColor();
    updateAllChartColors();
    Chart.register(ChartDataLabels);
    Chart.defaults.color = currentColor;
    
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

  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      executeChart()
    }, 3000);
  });

}

/* table の font-size と padding を画面の最大幅に合わせて変更 */
if (document.querySelector('table') !== null) {
  Defer(function() {
  
  function debounce(func, wait) {
      let timeout;
      return function() {
          const context = this, args = arguments;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), wait);
      };
  }
  
  function adjustTableScale() {
          var tables = document.querySelectorAll('.table-responsive table');
          tables.forEach(function(table) {
              var tableResponsive = table.parentElement;
              var tableResponsiveWidth = tableResponsive.clientWidth;
              var tableResponsiveFontSize = parseFloat(getComputedStyle(tableResponsive).fontSize);
              var paddingAdjustment = 2 * 1 * tableResponsiveFontSize; // 1emのpaddingが左右にあるので2emをピクセルに変換
              var availableWidth = tableResponsiveWidth - paddingAdjustment;
              var tableWidth = table.scrollWidth;
              var tableHeight = table.scrollHeight;
  
              if (tableWidth > availableWidth) {
                  var scale = availableWidth / tableWidth;
                  table.style.width = availableWidth + 'px';
                  table.style.height = tableHeight * scale + 'px';
                  table.querySelectorAll('th, td').forEach(function(cell) {
                      var originalFontSize = parseFloat(getComputedStyle(cell).fontSize);
                      cell.style.fontSize = (originalFontSize * scale) + 'px';
                      var originalPaddingTopBottom = parseFloat(getComputedStyle(cell).paddingTop);
                      var originalPaddingLeftRight = parseFloat(getComputedStyle(cell).paddingLeft);
                      cell.style.padding = (originalPaddingTopBottom * scale) + 'px ' + (originalPaddingLeftRight * scale) + 'px';
                  });
              } else {
                  table.style.height = 'auto';
                  table.querySelectorAll('th, td').forEach(function(cell) {
                      cell.style.fontSize = '';
                      cell.style.padding = '';
                  });
              }
          });
      }
  
      const debouncedAdjustTableScale = debounce(adjustTableScale, 100);
  
      window.addEventListener('resize', debouncedAdjustTableScale);
      window.addEventListener('load', adjustTableScale);
      adjustTableScale();
      
  }, 100); 
}

// 埋め込みコンテンツの設定
if (document.querySelector('iframe') !== null) {
  const embedConfigs = [
      {
          elements: document.getElementsByClassName('twitter-tweet'),
          script: '//platform.twitter.com/widgets.js',
          id: 'widgets-js'
      },
      {
          elements: document.getElementsByClassName('instagram-media'),
          script: '//www.instagram.com/embed.js',
          id: 'instaembed-js'
      },
      {
          elements: document.getElementsByClassName('bluesky-embed'),
          script: '//embed.bsky.app/static/embed.js',
          id: 'blueskyembed-js'
      }
  ];
  
  Defer(function() {
      // 要素が存在する埋め込みのみをフィルタリング
      const activeEmbeds = embedConfigs.filter(config => config.elements.length !== 0);
      
      if (activeEmbeds.length === 0) return;
  
      // 最初の埋め込みを即時読み込み（Defer 自体が既に遅延されているため）
      const firstEmbed = activeEmbeds[0];
      Defer.js(firstEmbed.script, firstEmbed.id);
  
      // 残りの埋め込みを0.5秒間隔で読み込み
      let delay = 500; // 間隔は500ms
      activeEmbeds.slice(1).forEach((embed) => {
          Defer.js(embed.script, embed.id, delay);
          delay += 500;
      });
  }, 300);
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
}, 10000);

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
}, 20000);

/*js@0.5.5/main.js*/
const jo={};!function t(){var e,a,n=window,o=document,r=setTimeout,s=clearTimeout,i=Date,l=Math,d=parseInt,c=(btoa,encodeURIComponent),u=RegExp,f=XMLHttpRequest,g=(alert,localStorage),m=JSON,p=Image,h="innerHTML",$="tagName",y="getElementById",v="querySelector",_="querySelectorAll",A="createElement",b="className",j="replace",w="lastIndexOf",k="EventListener",x="remove",P="length",I="slice",z="push",S="Attribute",C="checked",B="offsetWidth",E="toFixed",R="pageYOffset",M="appendChild",D="firstChild",q="insert",H="Before",L="match",O="href",G="target",N="location",T="split",W="trim",Y="open",F="send",Q="random",U="parentElement",J="preventDefault",V="substr",X="setRequestHeader",K="responseText",Z="title",tt="ceil",te="floor",ta="textContent",tn="Item",to="nextSibling",tr="load",ts="false",ti="scroll",tl="click",td="mousemove",tc="touchstart",tu="change",tf="undefined",tg="function",tm="Content-Type",tp="pagination",th="loadCustomPosts",t$="custom_posts",ty="adsbygoogle",tv="https://",t_="www.blogger.com/",tA="-rw",tb="devicePixelRatio",tj=typeof isPreview!==tf&&isPreview,tw=tv+(typeof siteUrl!==tf?siteUrl[V](0,siteUrl[P]-1)[j](/(^\w+:|^)\/\//,""):""),tk=typeof currentUrl!==tf?currentUrl:"",tx=typeof blogId!==tf?blogId:"",tP=typeof blogTitle!==tf?blogTitle:"",tI=typeof titleSeparator!==tf?titleSeparator:" - ",t0=typeof pageTitle!==tf?pageTitle:"Page",t9=typeof analyticId!==tf&&analyticId,tz=typeof caPubAdsense!==tf&&caPubAdsense[j](/^\D+/g,""),tS=!!tz&&"ca-pub-"+tz,tC=typeof innerAdsDelimiter!==tf?innerAdsDelimiter:"p,br,div",t8=typeof ignoreAdsDelimiter!==tf?ignoreAdsDelimiter:"pre,ul,ol,table,blockquote",tB=typeof autoTOC!==tf&&autoTOC,tE=typeof toc_temp===tg&&toc_temp,tR=typeof positionTOC!==tf&&positionTOC,tM=typeof jtCallback===tg&&jtCallback;function tD(t,e){return -1<(" "+t[b]+" ").indexOf(" "+e+" ")}function t2(t,e){var a;tD(t,e)||(""!=(a=t[b])&&(e=" "+e),t[b]=a+e)}function t3(t,e){t[b]=t[b][j](new u("(?:^|\\s)"+e+"(?!\\S)"),"")[W]()}function tq(t,e,a){t3(t,e),r(function(){t3(t,"d-block")},a||300)}function tH(t,e){for(var a=0;a<t[P];a++)if(t[a]===e)return!0;return!1}function tL(t,e){return!!(t=new u("[?&]"+t+"=([^&#=]*)")).test(e)&&e[L](t)[1]}function tO(t){try{return m.parse(t)}catch(e){return!1}}e=function(t){t||(tA="")},(a=new p).onload=a.onerror=function(){e(2==a.height)},a.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";var t4=o[y]("header"),t1=o[y]("search-toggle"),t7=o[y]("search-header"),tG=o[y]("navbar-toggle"),tN=o[y]("navbar"),tT=o[y]("back-to-top"),tW=o[y]("dark-toggler"),tY=o[v]("html"),tF=o[y]("comment-button"),tQ=o[y]("threaded-comment-form"),tU=o[y]("comment-editor"),tJ=o[y]("comment-editor-src"),tV=o[y]("comment-script"),tX=o[_](".comment-reply"),t5=o[_](".entry-text noscript"),t6=o[_](".contact-form-blogger"),tK=o[y]("ads-post"),tZ=o[y]("post-body"),et=o[v](".related-posts"),ee=o[v](".related-inline"),ea=tL("page",tk),en=null!==g&&1==g["get"+tn]("lazy");var eo=0;n["add"+k](ti,function(){var t,e=this[R];e<eo&&tD(t4,"header-hidden")?t=r(function(){t3(t4,"header-hidden")},500):eo<e&&tD(t4,"header-animate")&&(s(t),t2(t4,"header-hidden")),eo=e},!1);var er=function(t){var e,a,o,r,s,i,l,d;"IMG"==t[$]&&((d=t["get"+S]("data-src"))[L](/(bp.blogspot|googleusercontent)/)?(l=en?n[tb]&&1<n[tb]?n[tb]:1.5:1,e=(t[B]*l)[E](0),a=(t[U][B]*l)[E](0),o=(t[U][U][B]*l)[E](0),r=(t.offsetHeight*l)[E](0),s=d[T]("/"),i=d[w]("=")+1,l="",l=tD(t[U],"ratio")?"w"+ImgSize+"-e90"+tA:"w"+ImgSize+"-e90"+tA,d=d[L](/(img\/a|proxy\/)/)?i?d[I](0,i)+l:d+"="+l:d[j](s[s[P]-2],l),t["set"+S]("data-src",d)):d[L](/(img.youtube|i.ytimg)/)&&(d=d[V](0,d[w]("/"))+"/mqdefault.jpg",t["set"+S]("data-src",d)))},es=function(t){var e,a,r,s,i,u,f,g;function m(t,i,l){var d=o[A]("li"),c=o[A]("span");return t2(c,"btn  rounded-pill jt-icon-center"),c[h]=l||t,c["set"+S]("data-page",t),t==i?t2(c,"jt-btn-primary"):(t2(c,"jt-btn-light hover-btn-primary"),c["add"+k](tl,function(t){var o;t[J](),1==(g=c["get"+S]("data-page"))?(o=a?tw+"/search"+s+"?max-results="+e+"&page="+g:tw,n[N][O]=o):(o=(g-1)*e,Defer.js(tw+"/feeds/posts/summary/"+r+"?start-index="+o+"&alt=json&callback=jo."+tp+"_date&max-results=1"))})),d[M](c),d}t["get"+S]("data-pagination")!=ts?(e=t["get"+S]("data-posts"),r=(a=c(a=t["get"+S]("data-label")))?"-/"+a+"/":"",s=a?"/label/"+a:"",Defer.js(tw+"/feeds/posts/summary/"+r+"?alt=json&callback=jo."+tp+"_key&max-results=1"),i=tL("max-results",tk),u=tL("page",tk),f=i||e,g=u||1,jo[tp+"_key"]=function(a){var n=a.feed,r=d(n.openSearch$totalResults.$t);if(e<r){var a=function t(e,a,n,o){e=d(e),a=d(a),n=d(n),o=d(o);var r,s,i=l[tt](e/n);a<1?a=1:i<a&&(a=i),s=i<=o?(r=1,i):(e=l[te](o/2),n=l[tt](o/2)-1,a<=e?(r=1,o):i<=a+n?(r=i-o+1,i):(r=a-e,a+n));for(var c=(a-1)*n,o=l.min(c+n-1,e-1),u=[],f=0;f<s+1-r;f++)u[z](f);return u=u.map(function(t){return r+t}),{totalItems:e,currentPage:a,pageSize:n,totalPages:i,startPage:r,endPage:s,startIndex:c,endIndex:o,pages:u}}(r,g,f,5),s=o[A]("ul"),n=a.totalPages;1!=a.currentPage&&(r=m(a.currentPage-1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'),s[M](r)),tH(a.pages,1)||(c=m(1,a.currentPage,"1 . ."),s[M](c));for(var i=0;i<a.pages[P];i++){var c=m(a.pages[i],a.currentPage);s[M](c)}tH(a.pages,n)||(c=m(n,a.currentPage,". . "+n),s[M](c)),a.currentPage!=n&&(n=m(a.currentPage+1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'),s[M](n)),t[h]="",t2(s,"pagination mb-0"),t[M](s),t3(t,"visually-hidden")}},jo[tp+"_date"]=function(t){t=tw+"/search"+s+"?updated-max="+(t=(t=(t=t.feed.entry[0]).published.$t[V](0,19)+t.published.$t[V](23,29))[j]("+","%2B"))+"&max-results="+f+"&page="+g,n[N][O]=t}):t3(t,"visually-hidden")};function ei(t,e){var a=new f;a[Y]("get",t),a[X](tm,"text/html"),a[F](null),a["add"+k](tr,function(){var t=a[K][L](/<title>(.*?)<\/title>/);e[h]=t[1][j](tI+tP,"")})}jo[th]=function(t){var e=(l[Q]()+1).toString(36)[V](7),a=t["get"+S]("data-label"),o=t["get"+S]("data-title"),r=t["get"+S]("data-items"),s=t["get"+S]("data-shuffle"),u=t["get"+S]("data-no-item"),f=t["get"+S]("data-func"),g=t["get"+S]("data-callback"),m=u?d(r)+1:r,p=a||t[h],$=p[T](","),a="",a=1<$[P]?p?"-/"+c($[l[te](l[Q]()*$[P])])+"/?":"?":p&&p!=ts?"-/"+c(p[W]())+"/?":"?";Defer.js(tw+"/feeds/posts/summary/"+a+"alt=json&callback=jo."+t$+"_key_"+e+"&max-results="+m),jo[t$+"_key_"+e]=function(a){var c=d(a.feed.openSearch$totalResults.$t),m=a.feed.category;if(0<c){for(var p={title:o,posts:[],categories:m},$=a.feed.entry,y=0,v=0;v<$[P];++v){var _,A,b=$[v],j=b.link[b.link[P]-1][O];if(y==r)break;j!=u&&(y++,(_={}).grup_id=e,_.url=j,_.title=b[Z].$t,_.summary=b.summary.$t[W](),_.img=b.media$thumbnail&&b.media$thumbnail.url,_.author=b.author[0].name.$t,_.comment=b.thr$total&&b.thr$total.$t,_.label=b.category,A=b.published.$t,b=(j=new i(A)).getDate(),A=j.getMonth()+1,j=j.getFullYear(),_.date=j+"/"+A+"/"+b,p.posts[z](_))}typeof(a=n[f])===tg&&0<p.posts[P]&&(s&&(p.posts=(function t(e){for(var a=e.slice(),n=a[P]-1;0<n;n--){var o=l[te](l[Q]()*(n+1)),r=a[n];a[n]=a[o],a[o]=r}return a})(p.posts)[I](0,s)),t[h]=a(p)[W](),t3(t,"visually-hidden"),Defer.domz(".lazy-"+e,1,"loaded",er,null,{rootMargin:"300%"}),g&&typeof(a=n[g])===tg&&a())}}};var el=function(t){for(var e=t[_]("a"),a=0;a<e[P];++a){var n=e[a],r=n[O],s=o[A]("span");t2(s,"d-block pt-2"),n[M](s),ei(r,s)}};function ed(){(t1&&t1[C]||tG&&tG[C]?t3:t2)(t4,"header-animate")}function ec(t,e){function a(a){t.contains(a[G])||(e(),n())}var n=function(){o[x+k](tl,a)};o["add"+k](tl,a)}function eu(t){t!=tJ[O]&&(t2(tQ,"loader"),tJ[O]=t,tU.src=t),tD(tQ,"d-none")&&(t3(tQ,"d-none"),t=tV.value[L](/<script.*?src='(.*?)'/)[1],Defer.js(t,"comment-js",500,function(){BLOG_CMT_createIframe(tv+t_+"rpc_relay.html")}))}t1&&t1["add"+k](tu,function(){ed(),this[C]&&r(function(){o[y]("search-input").focus()},100),ec(t7,function(){t1[C]=!1,ed()})}),tG&&tG["add"+k](tu,function(){var t;ed(),this[C]?(t2(t=tN,"d-block"),r(function(){t2(t,"show")},100),ec(tN,function(){tG[C]=!1,ed(),tq(tN,"show")})):tq(tN,"show")}),tW&&tW["add"+k](tl,function(t){t[J](),function t(e,a){(tD(e,a)?t3:t2)(e,a)}(tY,"dark-mode"),null!==g&&g["set"+tn]("theme",tD(tY,"dark-mode")?"dark":"light")}),n["add"+k](ti,function(){(1<=this[R]&&null!==t4?t2:t3)(t4,"shadow-sm"),(1e3<=this[R]&&null!==tT?t3:t2)(tT,"d-none")},!1),tU&&tU["add"+k](tr,function(t){t3(tQ,"loader")}),tF&&tF["add"+k](tl,function(t){t[J](),eu(this[O]),"add-comment"!=tQ[U].id&&o[y]("add-comment")[M](tQ)});for(var ef=0;ef<tX[P];++ef)tX[ef]["add"+k](tl,function(t){t[J](),t=this["get"+S]("data-comment-id"),eu(this[O]),tQ[U].id!="c"+t&&o[y]("c"+t)[M](tQ)});for(ef=0;ef<t6[P];++ef)t6[ef]["add"+k]("submit",function(t){t[J]();var e=t[G];t2(e,"loading");var a=new FormData(e),n="blogID="+tx;a.forEach(function(t,e){n+="&"+c(e)+"="+c(t)}),t=tv+t_+"contact-form.do",(a=new f)[Y]("post",t),a[X](tm,"application/x-www-form-urlencoded"),a[F](n),a.onreadystatechange=function(){var t;t3(e,"loading"),4===this.readyState&&200===this.status&&""!=this.response&&((t=tO(this[K][W]()))&&"true"==t.details.emailSentStatus?(e.reset(),t3(e,"send-error"),t2(e,"send-success")):(t3(e,"send-success"),t2(e,"send-error")))}});function eg(t){if(t&&(o[x+k](td,eg),o[x+k](tc,eg),o[x+k](ti,eg)),Defer.domz(".custom-posts",1,null,jo[th],null,{rootMargin:"300%"}),0<t5[P]){for(var e=0;e<t5[P];++e){var a=t5[e],n=a[h],r=o[A]("textarea");r[h]=n[j](/src="(.*?)"/g,'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"'),(n=o[A]("div"))[h]=r.value,0==e&&t2(n,"feature-image full-width"),a[U][q+H](n,a)}Defer.domz('[lazyload="true"]',1,"loaded",er,null,{rootMargin:"300%"})}if(null!==tZ){if(null!==et&&null!==ee&&(ee[h]=et[h],ee["set"+S]("data-no-item",et["get"+S]("data-no-item"))),null!==tK){for(var s=tZ[_](tC+","+t8),i=tK.childNodes,c=i[P],u=[],e=0;e<s[P];e++){var f=s[e].closest(t8);f&&s[e]!=f||u[z](s[e])}for(var g,e=0;e<c;e++)e==c-1?tZ[M](i[0]):(g=e==c-1?u[P]-1:l.round(u[P]/c)*e,(g=0==e?u[0]:u[g][to])&&g[U][q+H](i[0],g))}if(tB&&tB!=ts&&tE&&null!==tZ[D]){for(var m=tZ[_]("h2,h3,h4,h5,h6"),p=o[A]("div"),t=tZ[v](tR),y=[],e=0;e<m[P];e++){var b=m[e],w=b[ta],I=d(b[$][j]("H",""));b.id=w,y[z]({level:I,title:b[ta],id:w})}null===t?t=tZ[D]:t[to]&&(t=t[to]),0<y[P]&&(p[h]=tE(y)[W](),t&&t[U][q+H](p,t))}}tj||(tS&&(typeof adsbygoogle===tf&&(adsbygoogle=[]),Defer.js(tv+"pagead2.googlesyndication.com/pagead/js/"+ty+".js?client="+tS,ty,100)),t9&&t9!=ts&&Defer.js(tv+"www.googletagmanager.com/gtag/js?id="+t9,"analytics",100,function(){function t(){dataLayer[z](arguments)}t("js",new Date),t("config",t9)}),tM&&tM()),tx&&Defer.css(tv+t_+"dyn-css/authorization.css?targetBlogID="+tx)}ea&&(o[Z]=o[Z][j](tI,tI+t0+" "+ea+tI)),Defer.domz(".lazyload",1,"loaded",er,null,{rootMargin:"300%"}),Defer.domz("#post-pager",1,null,el,null,{rootMargin:"300%"}),Defer.domz("#pagination",1,null,es,null,{rootMargin:"300%"}),en?eg(!1):(null!==g&&g["set"+tn]("lazy",1),o["add"+k](td,eg),o["add"+k](tc,eg),o["add"+k](ti,eg))}();
  
