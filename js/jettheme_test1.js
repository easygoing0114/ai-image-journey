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
  Defer.js('https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js', 'mermaid', 100);
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

if (document.querySelector('.twitter-tweet') !== null) {
  Defer.js('https://platform.twitter.com/widgets.js', 'twitter', 100);
}
if (document.querySelector('.bluesky-embed') !== null) {
  Defer.js('https://embed.bsky.app/static/embed.js', 'bluesky', 100);
}
if (document.querySelector('.instagram-media') !== null) {
  Defer.js('https://www.instagram.com/embed.js', 'instagram', 100);
}

/* debounce関数 */
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

/* img, iframe 差し替え */
Defer.dom('.defer-img img', 100);
Defer.dom('.defer-iframe iframe', 1500);

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
    var dmcaLink = document.getElementById('dmcaLink');
    if (dmcaLink && dmcaLink.href.indexOf('refurl') < 0) {
        dmcaLink.href += (dmcaLink.href.indexOf('?') === -1 ? '?' : '&') + 'refurl=' + document.location;
    }
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

  // 既存の図表にスタイルを適用
  document.querySelectorAll('figure.mermaid-chart').forEach(figure => {
    figure.classList.add('box-img', 'box-img640');
  });

  const isDarkMode = document.documentElement.classList.contains('dark-mode');

  // gantt チャートの再診日付を更新
  // 今日の日付を取得 (YYYY-MM-DD形式)
  const today = new Date().toISOString().split('T')[0]; // 2025-06-09

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
    // <code class="mermaid"> 要素をすべて取得
    const mermaidElements = document.querySelectorAll('code.mermaid');
    
    mermaidElements.forEach((element) => {
      const code = element.textContent;
      
      // 'gantt' を含むか確認
      if (code.includes('gantt')) {
        const latestDate = findLatestDate(code);
        if (latestDate) {
          // 最新の日付を今日の日付に置換
          const updatedCode = replaceLatestDate(code, latestDate, today);
          // 置換後のコードを要素に戻す
          element.textContent = updatedCode;
          
          // Mermaid.jsを再レンダリング（Mermaidがページにロードされている場合）
          if (typeof mermaid !== 'undefined') {
            mermaid.init(undefined, element);
          }
        }
      }
    });
  }

  updateMermaidGanttCharts()

  Defer(function () {

    mermaid.initialize({
      startOnLoad: false, // 手動初期化のためfalseに
      theme: isDarkMode ? 'dark' : 'default',
    });

    mermaid.run();

  }, 3000);
}

/* Chart.js */
if (document.querySelector('.chartjs') !== null) {

  function getCurrentThemeColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--bs-body-color').trim();
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

  function executeChart() {
    getCurrentThemeColor();
    updateAllChartColors();
    Chart.register(ChartDataLabels);
    Chart.defaults.layout.padding = 24;
    
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
const jo = {};
!function t() {
  var windowObj = window;
  var documentObj = document;
  var setTimeoutFn = setTimeout;
  var clearTimeoutFn = clearTimeout;
  var dateObj = Date;
  var mathObj = Math;
  var parseIntFn = parseInt;
  var encodeURIComponentFn = encodeURIComponent;
  var regexObj = RegExp;
  var xmlHttpRequestObj = XMLHttpRequest;
  var localStorageObj = localStorage;
  var jsonObj = JSON;
  var imageObj = Image;
  var innerHTMLProp = "innerHTML";
  var tagNameProp = "tagName";
  var getElementByIdFn = "getElementById";
  var querySelectorFn = "querySelector";
  var querySelectorAllFn = "querySelectorAll";
  var createElementFn = "createElement";
  var classNameProp = "className";
  var replaceFn = "replace";
  var lastIndexOfFn = "lastIndexOf";
  var eventListenerProp = "EventListener";
  var removeFn = "remove";
  var lengthProp = "length";
  var sliceFn = "slice";
  var pushFn = "push";
  var attributeFn = "Attribute";
  var checkedProp = "checked";
  var offsetWidthProp = "offsetWidth";
  var toFixedFn = "toFixed";
  var pageYOffsetProp = "pageYOffset";
  var appendChildFn = "appendChild";
  var firstChildProp = "firstChild";
  var insertStr = "insert";
  var beforeStr = "Before";
  var matchFn = "match";
  var hrefProp = "href";
  var targetProp = "target";
  var locationProp = "location";
  var splitFn = "split";
  var trimFn = "trim";
  var openFn = "open";
  var sendFn = "send";
  var randomFn = "random";
  var parentElementProp = "parentElement";
  var preventDefaultFn = "preventDefault";
  var substrFn = "substr";
  var setRequestHeaderFn = "setRequestHeader";
  var responseTextProp = "responseText";
  var titleProp = "title";
  var ceilFn = "ceil";
  var floorFn = "floor";
  var textContentProp = "textContent";
  var itemFn = "Item";
  var nextSiblingProp = "nextSibling";
  var loadEvent = "load";
  var falseStr = "false";
  var scrollEvent = "scroll";
  var clickEvent = "click";
  var mousemoveEvent = "mousemove";
  var touchstartEvent = "touchstart";
  var changeEvent = "change";
  var undefinedStr = "undefined";
  var functionStr = "function";
  var contentTypeHeader = "Content-Type";
  var paginationStr = "pagination";
  var loadCustomPostsFn = "loadCustomPosts";
  var customPostsStr = "custom_posts";
  var adsbygoogleStr = "adsbygoogle";
  var httpsStr = "https://";
  var bloggerDomain = "www.blogger.com/";
  var rwStr = "-rw";
  var devicePixelRatioProp = "devicePixelRatio";
  var isPreviewFlag = typeof isPreview !== undefinedStr && isPreview;
  var siteUrl = typeof siteUrl !== undefinedStr ? siteUrl[substrFn](0, siteUrl[lengthProp] - 1)[replaceFn](/(^\w+:|^)\/\//, "") : "";
  var baseUrl = httpsStr + siteUrl;
  var currentUrl = typeof currentUrl !== undefinedStr ? currentUrl : "";
  var blogId = typeof blogId !== undefinedStr ? blogId : "";
  var blogTitle = typeof blogTitle !== undefinedStr ? blogTitle : "";
  var titleSeparator = typeof titleSeparator !== undefinedStr ? titleSeparator : " - ";
  var pageTitle = typeof pageTitle !== undefinedStr ? pageTitle : "Page";
  var analyticId = typeof analyticId !== undefinedStr && analyticId;
  var caPubAdsense = typeof caPubAdsense !== undefinedStr && caPubAdsense[replaceFn](/^\D+/g, "");
  var adsenseClientId = !!caPubAdsense && "ca-pub-" + caPubAdsense;
  var innerAdsDelimiter = typeof innerAdsDelimiter !== undefinedStr ? innerAdsDelimiter : "p,br,div";
  var ignoreAdsDelimiter = typeof ignoreAdsDelimiter !== undefinedStr ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote";
  var autoTOC = typeof autoTOC !== undefinedStr && autoTOC;
  var tocTemplateFn = typeof toc_temp === functionStr && toc_temp;
  var positionTOC = typeof positionTOC !== undefinedStr && positionTOC;
  var jtCallbackFn = typeof jtCallback === functionStr && jtCallback;

  function tD(element, className) {
    return -1 < (" " + element[classNameProp] + " ").indexOf(" " + className + " ");
  }

  function t2(element, className) {
    var currentClasses;
    tD(element, className) || ("" !== (currentClasses = element[classNameProp]) && (className = " " + className), element[classNameProp] = currentClasses + className);
  }

  function t3(element, className) {
    element[classNameProp] = element[classNameProp][replaceFn](new regexObj("(?:^|\\s)" + className + "(?!\\S)"), "")[trimFn]();
  }

  function tq(element, className, delay) {
    t3(element, className);
    setTimeoutFn(function() {
      t3(element, "d-block");
    }, delay || 300);
  }

  function tH(array, value) {
    for (var i = 0; i < array[lengthProp]; i++) {
      if (array[i] === value) return true;
    }
    return false;
  }

  function tL(param, url) {
    return !!(param = new regexObj("[?&]" + param + "=([^&#=]*)")).test(url) && url[matchFn](param)[1];
  }

  function tO(jsonString) {
    try {
      return jsonObj.parse(jsonString);
    } catch (e) {
      return false;
    }
  }

  var webpTestFn = function(callback) {
    callback || (rwStr = "");
  };
  var webpImage = new imageObj();
  webpImage.onload = webpImage.onerror = function() {
    webpTestFn(2 === webpImage.height);
  };
  webpImage.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

  var headerElement = documentObj[getElementByIdFn]("header");
  var searchToggle = documentObj[getElementByIdFn]("search-toggle");
  var searchHeader = documentObj[getElementByIdFn]("search-header");
  var navbarToggle = documentObj[getElementByIdFn]("navbar-toggle");
  var navbarElement = documentObj[getElementByIdFn]("navbar");
  var backToTop = documentObj[getElementByIdFn]("back-to-top");
  var darkToggler = documentObj[getElementByIdFn]("dark-toggler");
  var htmlElement = documentObj[querySelectorFn]("html");
  var commentButton = documentObj[getElementByIdFn]("comment-button");
  var threadedCommentForm = documentObj[getElementByIdFn]("threaded-comment-form");
  var commentEditor = documentObj[getElementByIdFn]("comment-editor");
  var commentEditorSrc = documentObj[getElementByIdFn]("comment-editor-src");
  var commentScript = documentObj[getElementByIdFn]("comment-script");
  var commentReplies = documentObj[querySelectorAllFn](".comment-reply");
  var noscriptElements = documentObj[querySelectorAllFn](".entry-text noscript");
  var contactForms = documentObj[querySelectorAllFn](".contact-form-blogger");
  var adsPostElement = documentObj[getElementByIdFn]("ads-post");
  var postBodyElement = documentObj[getElementByIdFn]("post-body");
  var relatedPosts = documentObj[querySelectorFn](".related-posts");
  var relatedInline = documentObj[querySelectorFn](".related-inline");
  var currentPage = tL("page", currentUrl);
  var isLazyLoading = null !== localStorageObj && 1 == localStorageObj["get" + itemFn]("lazy");

  var lastScrollY = 0;
  windowObj["add" + eventListenerProp](scrollEvent, function() {
    var timeoutId, scrollY = this[pageYOffsetProp];
    scrollY < lastScrollY && tD(headerElement, "header-hidden") ? timeoutId = setTimeoutFn(function() {
      t3(headerElement, "header-hidden");
    }, 500) : lastScrollY < scrollY && tD(headerElement, "header-animate") && (clearTimeoutFn(timeoutId), t2(headerElement, "header-hidden"));
    lastScrollY = scrollY;
  }, false);

  var processImage = function(element) {
    var src, width, parentWidth, grandparentWidth, height, parts, equalIndex, newSrc;
    if ("IMG" === element[tagNameProp]) {
      src = element["get" + attributeFn]("data-src");
      if (src[matchFn](/(bp.blogspot|googleusercontent)/)) {
        var pixelRatio = isLazyLoading ? windowObj[devicePixelRatioProp] && 1 < windowObj[devicePixelRatioProp] ? windowObj[devicePixelRatioProp] : 1.5 : 1;
        width = (element[offsetWidthProp] * pixelRatio)[toFixedFn](0);
        parentWidth = (element[parentElementProp][offsetWidthProp] * pixelRatio)[toFixedFn](0);
        grandparentWidth = (element[parentElementProp][parentElementProp][offsetWidthProp] * pixelRatio)[toFixedFn](0);
        height = (element.offsetHeight * pixelRatio)[toFixedFn](0);
        parts = src[splitFn]("/");
        equalIndex = src[lastIndexOfFn]("=") + 1;
        newSrc = "";
        newSrc = tD(element[parentElementProp], "ratio") ? "w" + ImgSize + "-e90" + rwStr : "w" + ImgSize + "-e90" + rwStr;
        src = src[matchFn](/(img\/a|proxy\/)/) ? equalIndex ? src[sliceFn](0, equalIndex) + newSrc : src + "=" + newSrc : src[replaceFn](parts[parts[lengthProp] - 2], newSrc);
        element["set" + attributeFn]("data-src", src);
      } else if (src[matchFn](/(img.youtube|i.ytimg)/)) {
        src = src[substrFn](0, src[lastIndexOfFn]("/")) + "/mqdefault.jpg";
        element["set" + attributeFn]("data-src", src);
      }
    }
  };

  var processPagination = function(element) {
    var postsPerPage, label, encodedLabel, labelPath, maxResults, currentPageNum, effectivePostsPerPage, currentPageIndex;
    function createPageItem(pageNum, currentPage, label) {
      var li = documentObj[createElementFn]("li");
      var span = documentObj[createElementFn]("span");
      t2(span, "btn rounded-pill jt-icon-center");
      span[innerHTMLProp] = label || pageNum;
      span["set" + attributeFn]("data-page", pageNum);
      if (pageNum == currentPage) {
        t2(span, "jt-btn-primary");
      } else {
        t2(span, "jt-btn-light hover-btn-primary");
        span["add" + eventListenerProp](clickEvent, function(event) {
          var url;
          event[preventDefaultFn]();
          var page = span["get" + attributeFn]("data-page");
          if (1 == page) {
            url = encodedLabel ? baseUrl + "/search" + labelPath + "?max-results=" + postsPerPage + "&page=" + page : baseUrl;
            windowObj[locationProp][hrefProp] = url;
          } else {
            url = (page - 1) * postsPerPage;
            Defer.js(baseUrl + "/feeds/posts/summary/" + label + "?start-index=" + url + "&alt=json&callback=jo." + paginationStr + "_date&max-results=1");
          }
        });
      }
      li[appendChildFn](span);
      return li;
    }
    if (element["get" + attributeFn]("data-pagination") != falseStr) {
      postsPerPage = element["get" + attributeFn]("data-posts");
      encodedLabel = encodeURIComponentFn(label = element["get" + attributeFn]("data-label"));
      label = encodedLabel ? "-/" + encodedLabel + "/" : "";
      labelPath = encodedLabel ? "/label/" + encodedLabel : "";
      Defer.js(baseUrl + "/feeds/posts/summary/" + label + "?alt=json&callback=jo." + paginationStr + "_key&max-results=1");
      maxResults = tL("max-results", currentUrl);
      currentPageNum = tL("page", currentUrl);
      effectivePostsPerPage = maxResults || postsPerPage;
      currentPageIndex = currentPageNum || 1;
      jo[paginationStr + "_key"] = function(data) {
        var feed = data.feed;
        var totalResults = parseIntFn(feed.openSearch$totalResults.$t);
        if (postsPerPage < totalResults) {
          var paginationData = function calculatePagination(total, current, pageSize, maxPages) {
            total = parseIntFn(total);
            current = parseIntFn(current);
            pageSize = parseIntFn(pageSize);
            maxPages = parseIntFn(maxPages);
            var startPage, endPage, totalPages = mathObj[ceilFn](total / pageSize);
            if (current < 1) current = 1;
            else if (totalPages < current) current = totalPages;
            endPage = totalPages <= maxPages ? (startPage = 1, totalPages) : (halfMax = mathObj[floorFn](maxPages / 2), halfMaxCeil = mathObj[ceilFn](maxPages / 2) - 1, current <= halfMax ? (startPage = 1, maxPages) : totalPages <= current + halfMaxCeil ? (startPage = totalPages - maxPages + 1, totalPages) : (startPage = current - halfMax, current + halfMaxCeil));
            var startIndex = (current - 1) * pageSize;
            var endIndex = mathObj.min(startIndex + pageSize - 1, total - 1);
            var pages = [];
            for (var i = 0; i < endPage + 1 - startPage; i++) pages[pushFn](i);
            pages = pages.map(function(i) {
              return startPage + i;
            });
            return {
              totalItems: total,
              currentPage: current,
              pageSize: pageSize,
              totalPages: totalPages,
              startPage: startPage,
              endPage: endPage,
              startIndex: startIndex,
              endIndex: endIndex,
              pages: pages
            };
          }(totalResults, currentPageIndex, effectivePostsPerPage, 5);
          var ul = documentObj[createElementFn]("ul");
          var totalPages = paginationData.totalPages;
          if (1 != paginationData.currentPage) {
            var prevItem = createPageItem(paginationData.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>');
            ul[appendChildFn](prevItem);
          }
          if (!tH(paginationData.pages, 1)) {
            var firstPageItem = createPageItem(1, paginationData.currentPage, "1 . .");
            ul[appendChildFn](firstPageItem);
          }
          for (var i = 0; i < paginationData.pages[lengthProp]; i++) {
            var pageItem = createPageItem(paginationData.pages[i], paginationData.currentPage);
            ul[appendChildFn](pageItem);
          }
          if (!tH(paginationData.pages, totalPages)) {
            var lastPageItem = createPageItem(totalPages, paginationData.currentPage, ". . " + totalPages);
            ul[appendChildFn](lastPageItem);
          }
          if (paginationData.currentPage != totalPages) {
            var nextItem = createPageItem(paginationData.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>');
            ul[appendChildFn](nextItem);
          }
          element[innerHTMLProp] = "";
          t2(ul, "pagination mb-0");
          element[appendChildFn](ul);
          t3(element, "visually-hidden");
        }
      };
      jo[paginationStr + "_date"] = function(data) {
        var timestamp = data.feed.entry[0].published.$t;
        timestamp = timestamp[substrFn](0, 19) + timestamp[substrFn](23, 29);
        timestamp = timestamp[replaceFn]("+", "%2B");
        var url = baseUrl + "/search" + labelPath + "?updated-max=" + timestamp + "&max-results=" + effectivePostsPerPage + "&page=" + currentPageIndex;
        windowObj[locationProp][hrefProp] = url;
      };
    } else {
      t3(element, "visually-hidden");
    }
  };

  function ei(url, element) {
    var xhr = new xmlHttpRequestObj();
    xhr[openFn]("get", url);
    xhr[setRequestHeaderFn](contentTypeHeader, "text/html");
    xhr[sendFn](null);
    xhr["add" + eventListenerProp](loadEvent, function() {
      var titleMatch = xhr[responseTextProp][matchFn](/<title>(.*?)<\/title>/);
      element[innerHTMLProp] = titleMatch[1][replaceFn](titleSeparator + blogTitle, "");
    });
  }

  jo[loadCustomPostsFn] = function(element) {
    var uniqueId = (mathObj[randomFn]() + 1).toString(36)[substrFn](7);
    var label = element["get" + attributeFn]("data-label");
    var title = element["get" + attributeFn]("data-title");
    var items = element["get" + attributeFn]("data-items");
    var shuffle = element["get" + attributeFn]("data-shuffle");
    var noItem = element["get" + attributeFn]("data-no-item");
    var funcName = element["get" + attributeFn]("data-func");
    var callbackName = element["get" + attributeFn]("data-callback");
    var maxResults = noItem ? parseIntFn(items) + 1 : items;
    var labels = label || element[innerHTMLProp];
    var labelArray = labels[splitFn](",");
    var feedPath = "";
    feedPath = 1 < labelArray[lengthProp] ? labels ? "-/" + encodeURIComponentFn(labelArray[mathObj[floorFn](mathObj[randomFn]() * labelArray[lengthProp])]) + "/?" : "?" : labels && labels != falseStr ? "-/" + encodeURIComponentFn(labels[trimFn]()) + "/?" : "?";
    Defer.js(baseUrl + "/feeds/posts/summary/" + feedPath + "alt=json&callback=jo." + customPostsStr + "_key_" + uniqueId + "&max-results=" + maxResults);
    jo[customPostsStr + "_key_" + uniqueId] = function(data) {
      var totalResults = parseIntFn(data.feed.openSearch$totalResults.$t);
      var categories = data.feed.category;
      if (0 < totalResults) {
        var result = {
          title: title,
          posts: [],
          categories: categories
        };
        var entries = data.feed.entry;
        var count = 0;
        for (var i = 0; i < entries[lengthProp]; ++i) {
          var entry = entries[i];
          var url = entry.link[entry.link[lengthProp] - 1][hrefProp];
          if (count == items) break;
          if (url != noItem) {
            count++;
            var post = {};
            post.grup_id = uniqueId;
            post.url = url;
            post.title = entry[titleProp].$t;
            post.summary = entry.summary.$t[trimFn]();
            post.img = entry.media$thumbnail && entry.media$thumbnail.url;
            post.author = entry.author[0].name.$t;
            post.comment = entry.thr$total && entry.thr$total.$t;
            post.label = entry.category;
            var date = entry.published.$t;
            var dateObj = new dateObj(date);
            var day = dateObj.getDate();
            var month = dateObj.getMonth() + 1;
            var year = dateObj.getFullYear();
            post.date = year + "/" + month + "/" + day;
            result.posts[pushFn](post);
          }
        }
        var func = windowObj[funcName];
        if (typeof func === functionStr && 0 < result.posts[lengthProp]) {
          if (shuffle) {
            result.posts = (function shuffleArray(array) {
              var arr = array.slice();
              for (var i = arr[lengthProp] - 1; 0 < i; i--) {
                var j = mathObj[floorFn](mathObj[randomFn]() * (i + 1));
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
              }
              return arr;
            })(result.posts)[sliceFn](0, shuffle);
          }
          element[innerHTMLProp] = func(result)[trimFn]();
          t3(element, "visually-hidden");
          Defer.domz(".lazy-" + uniqueId, 1, "loaded", processImage, null, {
            rootMargin: "300%"
          });
          if (callbackName) {
            var callback = windowObj[callbackName];
            if (typeof callback === functionStr) callback();
          }
        }
      }
    };
  };

  var processPagerLinks = function(element) {
    var links = element[querySelectorAllFn]("a");
    for (var i = 0; i < links[lengthProp]; ++i) {
      var link = links[i];
      var url = link[hrefProp];
      var span = documentObj[createElementFn]("span");
      t2(span, "d-block pt-2");
      link[appendChildFn](span);
      ei(url, span);
    }
  };

  function toggleHeader() {
    (searchToggle && searchToggle[checkedProp] || navbarToggle && navbarToggle[checkedProp] ? t3 : t2)(headerElement, "header-animate");
  }

  function handleClickOutside(container, callback) {
    function handler(event) {
      if (!container.contains(event[targetProp])) {
        callback();
        removeListener();
      }
    }
    var removeListener = function() {
      documentObj[removeFn + eventListenerProp](clickEvent, handler);
    };
    documentObj["add" + eventListenerProp](clickEvent, handler);
  }

  if (searchToggle) {
    searchToggle["add" + eventListenerProp](changeEvent, function() {
      toggleHeader();
      if (this[checkedProp]) {
        setTimeoutFn(function() {
          documentObj[getElementByIdFn]("search-input").focus();
        }, 100);
      }
      handleClickOutside(searchHeader, function() {
        searchToggle[checkedProp] = false;
        toggleHeader();
      });
    });
  }

  if (navbarToggle) {
    navbarToggle["add" + eventListenerProp](changeEvent, function() {
      var navbar;
      toggleHeader();
      if (this[checkedProp]) {
        t2(navbar = navbarElement, "d-block");
        setTimeoutFn(function() {
          t2(navbar, "show");
        }, 100);
        handleClickOutside(navbarElement, function() {
          navbarToggle[checkedProp] = false;
          toggleHeader();
          tq(navbarElement, "show");
        });
      } else {
        tq(navbarElement, "show");
      }
    });
  }

  windowObj["add" + eventListenerProp](scrollEvent, function() {
    (1 <= this[pageYOffsetProp] && null !== headerElement ? t2 : t3)(headerElement, "shadow-sm");
    (1000 <= this[pageYOffsetProp] && null !== backToTop ? t3 : t2)(backToTop, "d-none");
  }, false);

  function initializePage(isRemoveListeners) {
    if (isRemoveListeners) {
      documentObj[removeFn + eventListenerProp](mousemoveEvent, initializePage);
      documentObj[removeFn + eventListenerProp](touchstartEvent, initializePage);
      documentObj[removeFn + eventListenerProp](scrollEvent, initializePage);
    }
    Defer.domz(".custom-posts", 1, null, jo[loadCustomPostsFn], null, {
      rootMargin: "300%"
    });
    if (null !== postBodyElement) {
      if (null !== relatedPosts && null !== relatedInline) {
        relatedInline[innerHTMLProp] = relatedPosts[innerHTMLProp];
        relatedInline["set" + attributeFn]("data-no-item", relatedPosts["get" + attributeFn]("data-no-item"));
      }
    }
  }

  if (currentPage) {
    documentObj[titleProp] = documentObj[titleProp][replaceFn](titleSeparator, titleSeparator + pageTitle + " " + currentPage + titleSeparator);
  }

  Defer.domz(".lazyload", 1, "loaded", processImage, null, {
    rootMargin: "300%"
  });
  Defer.domz("#post-pager", 1, null, processPagerLinks, null, {
    rootMargin: "300%"
  });
  Defer.domz("#pagination", 1, null, processPagination, null, {
    rootMargin: "300%"
  });

  if (isLazyLoading) {
    initializePage(false);
  } else {
    if (null !== localStorageObj) localStorageObj["set" + itemFn]("lazy", 1);
    documentObj["add" + eventListenerProp](mousemoveEvent, initializePage);
    documentObj["add" + eventListenerProp](touchstartEvent, initializePage);
    documentObj["add" + eventListenerProp](scrollEvent, initializePage);
  }
}();