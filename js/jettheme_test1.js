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
// グローバルオブジェクトの定義
const jo = {};

// 即時実行関数でコードをカプセル化
(function initialize() {
  // 頻繁に使用するグローバルオブジェクトやビルトイン関数の参照をキャッシュ
  const windowRef = window;
  const documentRef = document;
  const setTimeoutRef = setTimeout;
  const clearTimeoutRef = clearTimeout;
  const DateRef = Date;
  const MathRef = Math;
  const parseIntRef = parseInt;
  const encodeURIComponentRef = encodeURIComponent;
  const RegExpRef = RegExp;
  const XMLHttpRequestRef = XMLHttpRequest;
  const localStorageRef = localStorage;
  const JSONRef = JSON;
  const ImageRef = Image;

  // よく使うDOMプロパティやメソッドの文字列定数
  const INNER_HTML = 'innerHTML';
  const TAG_NAME = 'tagName';
  const GET_ELEMENT_BY_ID = 'getElementById';
  const QUERY_SELECTOR = 'querySelector';
  const QUERY_SELECTOR_ALL = 'querySelectorAll';
  const CREATE_ELEMENT = 'createElement';
  const CLASS_NAME = 'className';
  const REPLACE = 'replace';
  const LAST_INDEX_OF = 'lastIndexOf';
  const EVENT_LISTENER = 'EventListener';
  const REMOVE = 'remove';
  const LENGTH = 'length';
  const SLICE = 'slice';
  const PUSH = 'push';
  const ATTRIBUTE = 'Attribute';
  const CHECKED = 'checked';
  const OFFSET_WIDTH = 'offsetWidth';
  const TO_FIXED = 'toFixed';
  const PAGE_Y_OFFSET = 'pageYOffset';
  const APPEND_CHILD = 'appendChild';
  const FIRST_CHILD = 'firstChild';
  const INSERT = 'insert';
  const BEFORE = 'Before';
  const MATCH = 'match';
  const HREF = 'href';
  const TARGET = 'target';
  const LOCATION = 'location';
  const SPLIT = 'split';
  const TRIM = 'trim';
  const OPEN = 'open';
  const SEND = 'send';
  const RANDOM = 'random';
  const PARENT_ELEMENT = 'parentElement';
  const PREVENT_DEFAULT = 'preventDefault';
  const SUBSTR = 'substr';
  const SET_REQUEST_HEADER = 'setRequestHeader';
  const RESPONSE_TEXT = 'responseText';
  const TITLE = 'title';
  const CEIL = 'ceil';
  const FLOOR = 'floor';
  const TEXT_CONTENT = 'textContent';
  const ITEM = 'Item';
  const NEXT_SIBLING = 'nextSibling';
  const LOAD = 'load';
  const FALSE = 'false';
  const SCROLL = 'scroll';
  const CLICK = 'click';
  const MOUSEMOVE = 'mousemove';
  const TOUCHSTART = 'touchstart';
  const CHANGE = 'change';
  const UNDEFINED = 'undefined';
  const FUNCTION = 'function';
  const CONTENT_TYPE = 'Content-Type';
  const PAGINATION = 'pagination';
  const LOAD_CUSTOM_POSTS = 'loadCustomPosts';
  const CUSTOM_POSTS = 'custom_posts';
  const ADSENSE = 'adsbygoogle';
  const HTTPS = 'https://';
  const BLOGGER_URL = 'www.blogger.com/';
  const RW = '-rw';
  const DEVICE_PIXEL_RATIO = 'devicePixelRatio';

  // グローバル変数の初期化（環境変数や設定値）
  const isPreview = typeof isPreview !== UNDEFINED && isPreview;
  const siteUrl = typeof siteUrl !== UNDEFINED ? siteUrl[SUBSTR](0, siteUrl[LENGTH] - 1)[REPLACE](/(^\w+:|^)\/\//, '') : '';
  const baseUrl = HTTPS + siteUrl;
  const currentUrl = typeof currentUrl !== UNDEFINED ? currentUrl : '';
  const blogId = typeof blogId !== UNDEFINED ? blogId : '';
  const blogTitle = typeof blogTitle !== UNDEFINED ? blogTitle : '';
  const titleSeparator = typeof titleSeparator !== UNDEFINED ? titleSeparator : ' - ';
  const pageTitle = typeof pageTitle !== UNDEFINED ? pageTitle : 'Page';
  const analyticId = typeof analyticId !== UNDEFINED && analyticId;
  const caPubAdsense = typeof caPubAdsense !== UNDEFINED && caPubAdsense[REPLACE](/^\D+/g, '');
  const adsenseClientId = !!caPubAdsense && 'ca-pub-' + caPubAdsense;
  const innerAdsDelimiter = typeof innerAdsDelimiter !== UNDEFINED ? innerAdsDelimiter : 'p,br,div';
  const ignoreAdsDelimiter = typeof ignoreAdsDelimiter !== UNDEFINED ? ignoreAdsDelimiter : 'pre,ul,ol,table,blockquote';
  const autoTOC = typeof autoTOC !== UNDEFINED && autoTOC;
  const tocTempEnabled = typeof tocTemp === FUNCTION && tocTemp;
  const positionTOC = typeof positionTOC !== UNDEFINED && positionTOC;
  const jtCallbackEnabled = typeof jtCallback === FUNCTION && jtCallback;

  // クラス名に指定のクラスが含まれているかチェック
  function hasClass(element, className) {
    return (` ${element[CLASS_NAME]} `).indexOf(` ${className} `) > -1;
  }

  // クラスを追加
  function addClass(element, className) {
    if (!hasClass(element, className)) {
      const currentClass = element[CLASS_NAME] || '';
      element[CLASS_NAME] = currentClass + (currentClass ? ' ' : '') + className;
    }
  }

  // クラスを削除
  function removeClass(element, className) {
    element[CLASS_NAME] = element[CLASS_NAME][REPLACE](new RegExpRef(`(?:^|\\s)${className}(?!\\S)`), '')[TRIM]();
  }

  // クラスを削除し、遅延で'd-block'を削除
  function toggleClassWithDelay(element, className, delay = 300) {
    removeClass(element, className);
    setTimeoutRef(() => removeClass(element, 'd-block'), delay);
  }

  // 配列に要素が含まれているかチェック
  function includes(array, item) {
    for (let i = 0; i < array[LENGTH]; i++) {
      if (array[i] === item) return true;
    }
    return false;
  }

  // URLからクエリパラメータを取得
  function getQueryParam(param, url) {
    const regex = new RegExpRef(`[?&]${param}=([^&#=]*)`);
    const match = url[MATCH](regex);
    return match ? match[1] : false;
  }

  // JSONをパース（エラー処理付き）
  function parseJSON(data) {
    try {
      return JSONRef.parse(data);
    } catch (e) {
      return false;
    }
  }

  // WebP対応チェック
  let webpSupported = true;
  function checkWebpSupport(callback) {
    const img = new ImageRef();
    img.onload = img.onerror = () => callback(img.height === 2);
    img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  checkWebpSupport(supported => {
    if (!supported) webpSupported = '';
  });

  // DOM要素のキャッシュ
  const header = documentRef[GET_ELEMENT_BY_ID]('header');
  const searchToggle = documentRef[GET_ELEMENT_BY_ID]('search-toggle');
  const searchHeader = documentRef[GET_ELEMENT_BY_ID]('search-header');
  const navbarToggle = documentRef[GET_ELEMENT_BY_ID]('navbar-toggle');
  const navbar = documentRef[GET_ELEMENT_BY_ID]('navbar');
  const backToTop = documentRef[GET_ELEMENT_BY_ID]('back-to-top');
  const darkToggler = documentRef[GET_ELEMENT_BY_ID]('dark-toggler');
  const htmlElement = documentRef[QUERY_SELECTOR]('html');
  const commentButton = documentRef[GET_ELEMENT_BY_ID]('comment-button');
  const threadedCommentForm = documentRef[GET_ELEMENT_BY_ID]('threaded-comment-form');
  const commentEditor = documentRef[GET_ELEMENT_BY_ID]('comment-editor');
  const commentEditorSrc = documentRef[GET_ELEMENT_BY_ID]('comment-editor-src');
  const commentScript = documentRef[GET_ELEMENT_BY_ID]('comment-script');
  const commentReplies = documentRef[QUERY_SELECTOR_ALL]('.comment-reply');
  const noscriptEntries = documentRef[QUERY_SELECTOR_ALL]('.entry-text noscript');
  const contactForms = documentRef[QUERY_SELECTOR_ALL]('.contact-form-blogger');
  const adsPost = documentRef[GET_ELEMENT_BY_ID]('ads-post');
  const postBody = documentRef[GET_ELEMENT_BY_ID]('post-body');
  const relatedPosts = documentRef[QUERY_SELECTOR]('.related-posts');
  const relatedInline = documentRef[QUERY_SELECTOR]('.related-inline');
  const currentPage = getQueryParam('page', currentUrl);
  const isLazyEnabled = localStorageRef !== null && localStorageRef[`get${ITEM}`]('lazy') == '1';

  // スクロール時のヘッダーアニメーション
  let lastScrollY = 0;
  windowRef[`add${EVENT_LISTENER}`](SCROLL, function() {
    const scrollY = this[PAGE_Y_OFFSET];
    let timeoutId;
    if (scrollY < lastScrollY && hasClass(header, 'header-hidden')) {
      timeoutId = setTimeoutRef(() => removeClass(header, 'header-hidden'), 500);
    } else if (lastScrollY < scrollY && hasClass(header, 'header-animate')) {
      clearTimeoutRef(timeoutId);
      addClass(header, 'header-hidden');
    }
    lastScrollY = scrollY;
  }, false);

  // 画像の遅延ロード処理
  function processLazyImage(imgElement) {
    if (imgElement[TAG_NAME] !== 'IMG') return;
    const dataSrc = imgElement[`get${ATTRIBUTE}`]('data-src');
    if (dataSrc[MATCH](/(bp.blogspot|googleusercontent)/)) {
      const pixelRatio = isLazyEnabled && windowRef[DEVICE_PIXEL_RATIO] > 1 ? windowRef[DEVICE_PIXEL_RATIO] : 1.5;
      const imgWidth = (imgElement[OFFSET_WIDTH] * pixelRatio)[TO_FIXED](0);
      const parentWidth = (imgElement[PARENT_ELEMENT][OFFSET_WIDTH] * pixelRatio)[TO_FIXED](0);
      const grandParentWidth = (imgElement[PARENT_ELEMENT][PARENT_ELEMENT][OFFSET_WIDTH] * pixelRatio)[TO_FIXED](0);
      const imgHeight = (imgElement.offsetHeight * pixelRatio)[TO_FIXED](0);
      const urlParts = dataSrc[SPLIT]('/');
      const sizeIndex = dataSrc[LAST_INDEX_OF]('=') + 1;
      let sizeParam = hasClass(imgElement[PARENT_ELEMENT], 'ratio') ? `w${ImgSize}-e90${webpSupported}` : `w${ImgSize}-e90${webpSupported}`;
      const newSrc = dataSrc[MATCH](/(img\/a|proxy\/)/) 
        ? sizeIndex ? dataSrc[SLICE](0, sizeIndex) + sizeParam : dataSrc + '=' + sizeParam 
        : dataSrc[REPLACE](urlParts[urlParts[LENGTH] - 2], sizeParam);
      imgElement[`set${ATTRIBUTE}`]('data-src', newSrc);
    } else if (dataSrc[MATCH](/(img.youtube|i.ytimg)/)) {
      const newSrc = dataSrc[SUBSTR](0, dataSrc[LAST_INDEX_OF]('/')) + '/mqdefault.jpg';
      imgElement[`set${ATTRIBUTE}`]('data-src', newSrc);
    }
  }

  // ページネーション処理
  function initializePagination(paginationElement) {
    if (paginationElement[`get${ATTRIBUTE}`]('data-pagination') === FALSE) {
      removeClass(paginationElement, 'visually-hidden');
      return;
    }
    const postsPerPage = paginationElement[`get${ATTRIBUTE}`]('data-posts');
    const label = paginationElement[`get${ATTRIBUTE}`]('data-label');
    const encodedLabel = encodeURIComponentRef(label);
    const labelPath = encodedLabel ? `-/${encodedLabel}/` : '';
    const labelQuery = encodedLabel ? `/label/${encodedLabel}` : '';
    const maxResults = getQueryParam('max-results', currentUrl) || postsPerPage;
    const currentPageNum = getQueryParam('page', currentUrl) || 1;

    Defer.js(`${baseUrl}/feeds/posts/summary/${labelPath}?alt=json&callback=jo.${PAGINATION}_key&max-results=1`);

    jo[`${PAGINATION}_key`] = function(data) {
      const totalPosts = parseIntRef(data.feed.openSearch$totalResults.$t);
      if (postsPerPage >= totalPosts) return;

      function createPagination(totalItems, currentPage, pageSize, maxPages) {
        totalItems = parseIntRef(totalItems);
        currentPage = parseIntRef(currentPage);
        pageSize = parseIntRef(pageSize);
        maxPages = parseIntRef(maxPages);
        let startPage, endPage;
        const totalPages = MathRef[CEIL](totalItems / pageSize);
        currentPage = MathRef.max(1, MathRef.min(currentPage, totalPages));
        if (totalPages <= maxPages) {
          startPage = 1;
          endPage = totalPages;
        } else {
          const halfMaxPages = MathRef[FLOOR](maxPages / 2);
          const halfMaxPagesCeil = MathRef[CEIL](maxPages / 2) - 1;
          if (currentPage <= halfMaxPages) {
            startPage = 1;
            endPage = maxPages;
          } else if (currentPage + halfMaxPagesCeil >= totalPages) {
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
          } else {
            startPage = currentPage - halfMaxPages;
            endPage = currentPage + halfMaxPagesCeil;
          }
        }
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = MathRef.min(startIndex + pageSize - 1, totalItems - 1);
        const pages = Array.from({ [LENGTH]: endPage + 1 - startPage }, (_, i) => startPage + i);
        return { totalItems, currentPage, pageSize, totalPages, startPage, endPage, startIndex, endIndex, pages };
      }

      const paginationData = createPagination(totalPosts, currentPageNum, maxResults, 5);
      const paginationList = documentRef[CREATE_ELEMENT]('ul');

      function createPageItem(pageNum, currentPage, label = pageNum) {
        const listItem = documentRef[CREATE_ELEMENT]('li');
        const button = documentRef[CREATE_ELEMENT]('span');
        addClass(button, 'btn rounded-pill jt-icon-center');
        button[INNER_HTML] = label;
        button[`set${ATTRIBUTE}`]('data-page', pageNum);
        if (pageNum == currentPage) {
          addClass(button, 'jt-btn-primary');
        } else {
          addClass(button, 'jt-btn-light hover-btn-primary');
          button[`add${EVENT_LISTENER}`](CLICK, event => {
            event[PREVENT_DEFAULT]();
            const targetPage = button[`get${ATTRIBUTE}`]('data-page');
            if (targetPage == 1) {
              const url = encodedLabel ? `${baseUrl}/search${labelQuery}?max-results=${maxResults}&page=${targetPage}` : baseUrl;
              windowRef[LOCATION][HREF] = url;
            } else {
              const startIndex = (targetPage - 1) * maxResults;
              Defer.js(`${baseUrl}/feeds/posts/summary/${labelPath}?start-index=${startIndex}&alt=json&callback=jo.${PAGINATION}_date&max-results=1`);
            }
          });
        }
        listItem[APPEND_CHILD](button);
        return listItem;
      }

      if (paginationData.currentPage != 1) {
        paginationList[APPEND_CHILD](createPageItem(paginationData.currentPage - 1, '', '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'));
      }
      if (!includes(paginationData.pages, 1)) {
        paginationList[APPEND_CHILD](createPageItem(1, paginationData.currentPage, '1 . .'));
      }
      paginationData.pages.forEach(page => {
        paginationList[APPEND_CHILD](createPageItem(page, paginationData.currentPage));
      });
      if (!includes(paginationData.pages, paginationData.totalPages)) {
        paginationList[APPEND_CHILD](createPageItem(paginationData.totalPages, paginationData.currentPage, `. . ${paginationData.totalPages}`));
      }
      if (paginationData.currentPage != paginationData.totalPages) {
        paginationList[APPEND_CHILD](createPageItem(paginationData.currentPage + 1, '', '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'));
      }

      paginationElement[INNER_HTML] = '';
      addClass(paginationList, 'pagination mb-0');
      paginationElement[APPEND_CHILD](paginationList);
      removeClass(paginationElement, 'visually-hidden');
    };

    jo[`${PAGINATION}_date`] = function(data) {
      const published = data.feed.entry[0].published.$t;
      const formattedDate = published[SUBSTR](0, 19) + published[SUBSTR](23, 29)[REPLACE]('+', '%2B');
      const url = `${baseUrl}/search${labelQuery}?updated-max=${formattedDate}&max-results=${maxResults}&page=${currentPageNum}`;
      windowRef[LOCATION][HREF] = url;
    };
  }

  // ページタイトルの取得
  function fetchPageTitle(url, element) {
    const xhr = new XMLHttpRequestRef();
    xhr[OPEN]('get', url);
    xhr[SET_REQUEST_HEADER](CONTENT_TYPE, 'text/html');
    xhr[SEND](null);
    xhr[`add${EVENT_LISTENER}`](LOAD, () => {
      const titleMatch = xhr[RESPONSE_TEXT][MATCH](/<title>(.*?)<\/title>/);
      if (titleMatch) {
        element[INNER_HTML] = titleMatch[1][REPLACE](titleSeparator + blogTitle, '');
      }
    });
  }

  // カスタム投稿の読み込み
  jo[LOAD_CUSTOM_POSTS] = function(element) {
    const uniqueId = (MathRef[RANDOM]() + 1).toString(36)[SUBSTR](7);
    const label = element[`get${ATTRIBUTE}`]('data-label') || element[INNER_HTML];
    const title = element[`get${ATTRIBUTE}`]('data-title');
    const itemCount = element[`get${ATTRIBUTE}`]('data-items');
    const shuffle = element[`get${ATTRIBUTE}`]('data-shuffle');
    const noItem = element[`get${ATTRIBUTE}`]('data-no-item');
    const funcName = element[`get${ATTRIBUTE}`]('data-func');
    const callbackName = element[`get${ATTRIBUTE}`]('data-callback');
    const maxResults = noItem ? parseIntRef(itemCount) + 1 : itemCount;
    const labels = label[SPLIT](',');
    const labelQuery = labels[LENGTH] > 1 
      ? label ? `-/${encodeURIComponentRef(labels[MathRef[FLOOR](MathRef[RANDOM]() * labels[LENGTH])])}/?` : '?' 
      : label && label !== FALSE ? `-/${encodeURIComponentRef(label[TRIM]())}/?` : '?';

    Defer.js(`${baseUrl}/feeds/posts/summary/${labelQuery}alt=json&callback=jo.${CUSTOM_POSTS}_key_${uniqueId}&max-results=${maxResults}`);

    jo[`${CUSTOM_POSTS}_key_${uniqueId}`] = function(data) {
      const totalResults = parseIntRef(data.feed.openSearch$totalResults.$t);
      if (totalResults <= 0) return;

      const postsData = {
        title,
        posts: [],
        categories: data.feed.category
      };
      const entries = data.feed.entry;
      let itemIndex = 0;

      for (let i = 0; i < entries[LENGTH] && itemIndex < itemCount; i++) {
        const entry = entries[i];
        const postUrl = entry.link[entry.link[LENGTH] - 1][HREF];
        if (postUrl === noItem) continue;

        itemIndex++;
        const post = {
          grup_id: uniqueId,
          url: postUrl,
          title: entry[TITLE].$t,
          summary: entry.summary.$t[TRIM](),
          img: entry.media$thumbnail && entry.media$thumbnail.url,
          author: entry.author[0].name.$t,
          comment: entry.thr$total && entry.thr$total.$t,
          label: entry.category
        };
        const published = entry.published.$t;
        const date = new DateRef(published);
        post.date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        postsData.posts[PUSH](post);
      }

      if (typeof windowRef[funcName] === FUNCTION && postsData.posts[LENGTH] > 0) {
        if (shuffle) {
          postsData.posts = (function shuffleArray(array) {
            const shuffled = array.slice();
            for (let i = shuffled[LENGTH] - 1; i > 0; i--) {
              const j = MathRef[FLOOR](MathRef[RANDOM]() * (i + 1));
              [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
          })(postsData.posts)[SLICE](0, shuffle);
        }
        element[INNER_HTML] = windowRef[funcName](postsData)[TRIM]();
        removeClass(element, 'visually-hidden');
        Defer.domz(`.lazy-${uniqueId}`, 1, 'loaded', processLazyImage, null, { rootMargin: '300%' });
        if (callbackName && typeof windowRef[callbackName] === FUNCTION) {
          windowRef[callbackName]();
        }
      }
    };
  };

  // ページャーのリンクタイトルの取得
  function initializePager(pagerElement) {
    const links = pagerElement[QUERY_SELECTOR_ALL]('a');
    links.forEach(link => {
      const span = documentRef[CREATE_ELEMENT]('span');
      addClass(span, 'd-block pt-2');
      link[APPEND_CHILD](span);
      fetchPageTitle(link[HREF], span);
    });
  }

  // ヘッダーのアニメーション状態を更新
  function updateHeaderAnimation() {
    (searchToggle && searchToggle[CHECKED] || navbarToggle && navbarToggle[CHECKED] ? removeClass : addClass)(header, 'header-animate');
  }

  // 外部クリックで要素を閉じる
  function closeOnOutsideClick(container, callback) {
    const handleClick = event => {
      if (!container.contains(event[TARGET])) {
        callback();
        removeClickListener();
      }
    };
    const removeClickListener = () => {
      documentRef[`${REMOVE}${EVENT_LISTENER}`](CLICK, handleClick);
    };
    documentRef[`add${EVENT_LISTENER}`](CLICK, handleClick);
  }

  // コメントフォームの初期化
  function initializeCommentForm(url) {
    if (url !== commentEditorSrc[HREF]) {
      addClass(threadedCommentForm, 'loader');
      commentEditorSrc[HREF] = url;
      commentEditor.src = url;
    }
    if (hasClass(threadedCommentForm, 'd-none')) {
      removeClass(threadedCommentForm, 'd-none');
      const scriptSrc = commentScript.value[MATCH](/<script.*?src='(.*?)'/)[1];
      Defer.js(scriptSrc, 'comment-js', 500, () => {
        BLOG_CMT_createIframe(`${HTTPS}${BLOGGER_URL}rpc_relay.html`);
      });
    }
  }

  // 検索トグルのイベントリスナー
  if (searchToggle) {
    searchToggle[`add${EVENT_LISTENER}`](CHANGE, function() {
      updateHeaderAnimation();
      if (this[CHECKED]) {
        setTimeoutRef(() => documentRef[GET_ELEMENT_BY_ID]('search-input').focus(), 100);
      }
      closeOnOutsideClick(searchHeader, () => {
        searchToggle[CHECKED] = false;
        updateHeaderAnimation();
      });
    });
  }

  // ナビバートグルのイベントリスナー
  if (navbarToggle) {
    navbarToggle[`add${EVENT_LISTENER}`](CHANGE, function() {
      updateHeaderAnimation();
      if (this[CHECKED]) {
        addClass(navbar, 'd-block');
        setTimeoutRef(() => addClass(navbar, 'show'), 100);
        closeOnOutsideClick(navbar, () => {
          navbarToggle[CHECKED] = false;
          updateHeaderAnimation();
          toggleClassWithDelay(navbar, 'show');
        });
      } else {
        toggleClassWithDelay(navbar, 'show');
      }
    });
  }

  // ダークモードトグルのイベントリスナー
  if (darkToggler) {
    darkToggler[`add${EVENT_LISTENER}`](CLICK, event => {
      event[PREVENT_DEFAULT]();
      const toggleDarkMode = (element, className) => hasClass(element, className) ? removeClass(element, className) : addClass(element, className);
      toggleDarkMode(htmlElement, 'dark-mode');
      if (localStorageRef) {
        localStorageRef[`set${ITEM}`]('theme', hasClass(htmlElement, 'dark-mode') ? 'dark' : 'light');
      }
    });
  }

  // スクロールイベントリスナー
  windowRef[`add${EVENT_LISTENER}`](SCROLL, function() {
    (this[PAGE_Y_OFFSET] >= 1 && header ? addClass : removeClass)(header, 'shadow-sm');
    (this[PAGE_Y_OFFSET] >= 1000 && backToTop ? removeClass : addClass)(backToTop, 'd-none');
  }, false);

  // コメントエディターのロードイベント
  if (commentEditor) {
    commentEditor[`add${EVENT_LISTENER}`](LOAD, () => removeClass(threadedCommentForm, 'loader'));
  }

  // コメントボタンのイベントリスナー
  if (commentButton) {
    commentButton[`add${EVENT_LISTENER}`](CLICK, event => {
      event[PREVENT_DEFAULT]();
      initializeCommentForm(this[HREF]);
      if (threadedCommentForm[PARENT_ELEMENT].id !== 'add-comment') {
        documentRef[GET_ELEMENT_BY_ID]('add-comment')[APPEND_CHILD](threadedCommentForm);
      }
    });
  }

  // コメント返信リンクのイベントリスナー
  commentReplies.forEach(reply => {
    reply[`add${EVENT_LISTENER}`](CLICK, event => {
      event[PREVENT_DEFAULT]();
      const commentId = reply[`get${ATTRIBUTE}`]('data-comment-id');
      initializeCommentForm(reply[HREF]);
      if (threadedCommentForm[PARENT_ELEMENT].id !== `c${commentId}`) {
        documentRef[GET_ELEMENT_BY_ID](`c${commentId}`)[APPEND_CHILD](threadedCommentForm);
      }
    });
  });

  // コンタクトフォームのイベントリスナー
  contactForms.forEach(form => {
    form[`add${EVENT_LISTENER}`]('submit', event => {
      event[PREVENT_DEFAULT]();
      const formElement = event[TARGET];
      addClass(formElement, 'loading');
      const formData = new FormData(formElement);
      let dataString = `blogID=${blogId}`;
      formData.forEach((value, key) => {
        dataString += `&${encodeURIComponentRef(key)}=${encodeURIComponentRef(value)}`;
      });
      const xhr = new XMLHttpRequestRef();
      xhr[OPEN]('post', `${HTTPS}${BLOGGER_URL}contact-form.do`);
      xhr[SET_REQUEST_HEADER](CONTENT_TYPE, 'application/x-www-form-urlencoded');
      xhr[SEND](dataString);
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200 && this.response) {
          removeClass(formElement, 'loading');
          const response = parseJSON(this[RESPONSE_TEXT][TRIM]());
          if (response && response.details.emailSentStatus === 'true') {
            formElement.reset();
            removeClass(formElement, 'send-error');
            addClass(formElement, 'send-success');
          } else {
            removeClass(formElement, 'send-success');
            addClass(formElement, 'send-error');
          }
        }
      };
    });
  });

  // 初期化処理
  function initializePage(triggeredByEvent) {
    if (triggeredByEvent) {
      documentRef[`${REMOVE}${EVENT_LISTENER}`](MOUSEMOVE, initializePage);
      documentRef[`${REMOVE}${EVENT_LISTENER}`](TOUCHSTART, initializePage);
      documentRef[`${REMOVE}${EVENT_LISTENER}`](SCROLL, initializePage);
    }

    // カスタム投稿の遅延ロード
    Defer.domz('.custom-posts', 1, null, jo[LOAD_CUSTOM_POSTS], null, { rootMargin: '300%' });

    // noscriptコンテンツの処理
    if (noscriptEntries[LENGTH] > 0) {
      noscriptEntries.forEach((noscript, index) => {
        const content = noscript[INNER_HTML];
        const textarea = documentRef[CREATE_ELEMENT]('textarea');
        textarea[INNER_HTML] = content[REPLACE](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
        const div = documentRef[CREATE_ELEMENT]('div');
        div[INNER_HTML] = textarea.value;
        if (index === 0) addClass(div, 'feature-image full-width');
        noscript[PARENT_ELEMENT][`${INSERT}${BEFORE}`](div, noscript);
      });
      Defer.domz('[lazyload="true"]', 1, 'loaded', processLazyImage, null, { rootMargin: '300%' });
    }

    // 投稿本文の処理
    if (postBody) {
      // 関連記事のコピー
      if (relatedPosts && relatedInline) {
        relatedInline[INNER_HTML] = relatedPosts[INNER_HTML];
        relatedInline[`set${ATTRIBUTE}`]('data-no-item', relatedPosts[`get${ATTRIBUTE}`]('data-no-item'));
      }

      // 広告の配置
      if (adsPost) {
        const delimiters = postBody[QUERY_SELECTOR_ALL](`${innerAdsDelimiter},${ignoreAdsDelimiter}`);
        const adNodes = adsPost.childNodes;
        const adCount = adNodes[LENGTH];
        const validDelimiters = [];
        delimiters.forEach(delimiter => {
          const closestIgnore = delimiter.closest(ignoreAdsDelimiter);
          if (!closestIgnore || delimiter === closestIgnore) {
            validDelimiters[PUSH](delimiter);
          }
        });
        for (let i = 0; i < adCount; i++) {
          if (i === adCount - 1) {
            postBody[APPEND_CHILD](adNodes[0]);
          } else {
            const delimiterIndex = i === adCount - 1 ? validDelimiters[LENGTH] - 1 : MathRef.round(validDelimiters[LENGTH] / adCount) * i;
            const targetDelimiter = i === 0 ? validDelimiters[0] : validDelimiters[delimiterIndex][NEXT_SIBLING];
            if (targetDelimiter) {
              targetDelimiter[PARENT_ELEMENT][`${INSERT}${BEFORE}`](adNodes[0], targetDelimiter);
            }
          }
        }
      }

      // 目次の生成
      if (autoTOC && autoTOC !== FALSE && tocTempEnabled && postBody[FIRST_CHILD]) {
        const headings = postBody[QUERY_SELECTOR_ALL]('h2,h3,h4,h5,h6');
        const tocContainer = documentRef[CREATE_ELEMENT]('div');
        const tocItems = [];
        headings.forEach(heading => {
          const text = heading[TEXT_CONTENT];
          const level = parseIntRef(heading[TAG_NAME][REPLACE]('H', ''));
          heading.id = text;
          tocItems[PUSH]({ level, title: text, id: text });
        });
        let targetElement = postBody[QUERY_SELECTOR](positionTOC) || postBody[FIRST_CHILD];
        if (targetElement[NEXT_SIBLING]) targetElement = targetElement[NEXT_SIBLING];
        if (tocItems[LENGTH] > 0) {
          tocContainer[INNER_HTML] = tocTemp(tocItems)[TRIM]();
          targetElement[PARENT_ELEMENT][`${INSERT}${BEFORE}`](tocContainer, targetElement);
        }
      }
    }

    // 外部スクリプトのロード
    if (!isPreview) {
      if (adsenseClientId) {
        if (typeof windowRef[ADSENSE] === UNDEFINED) windowRef[ADSENSE] = [];
        Defer.js(`${HTTPS}pagead2.googlesyndication.com/pagead/js/${ADSENSE}.js?client=${adsenseClientId}`, ADSENSE, 100);
      }
      if (analyticId && analyticId !== FALSE) {
        Defer.js(`${HTTPS}www.googletagmanager.com/gtag/js?id=${analyticId}`, 'analytics', 100, () => {
          windowRef.dataLayer = windowRef.dataLayer || [];
          function gtag() { windowRef.dataLayer[PUSH](arguments); }
          gtag('js', new DateRef());
          gtag('config', analyticId);
        });
      }
      if (jtCallbackEnabled) jtCallback();
    }
    if (blogId) {
      Defer.css(`${HTTPS}${BLOGGER_URL}dyn-css/authorization.css?targetBlogID=${blogId}`);
    }
  }

  // ページタイトルの更新
  if (currentPage) {
    documentRef[TITLE] = documentRef[TITLE][REPLACE](titleSeparator, `${titleSeparator}${pageTitle} ${currentPage}${titleSeparator}`);
  }

  // 遅延ロードの初期化
  Defer.domz('.lazyload', 1, 'loaded', processLazyImage, null, { rootMargin: '300%' });
  Defer.domz('#post-pager', 1, null, initializePager, null, { rootMargin: '300%' });
  Defer.domz('#pagination', 1, null, initializePagination, null, { rootMargin: '300%' });

  // 初期化のトリガー設定
  if (isLazyEnabled) {
    initializePage(false);
  } else {
    if (localStorageRef) localStorageRef[`set${ITEM}`]('lazy', 1);
    documentRef[`add${EVENT_LISTENER}`](MOUSEMOVE, initializePage);
    documentRef[`add${EVENT_LISTENER}`](TOUCHSTART, initializePage);
    documentRef[`add${EVENT_LISTENER}`](SCROLL, initializePage);
  }
})();