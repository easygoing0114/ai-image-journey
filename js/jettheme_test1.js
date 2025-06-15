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
// グローバルな名前空間オブジェクト
const jo = {};

// 即時実行関数（IIFE）でスコープを分離
(function() {
  // グローバルオブジェクトとメソッドのショートカット
  const windowObj = window;
  const documentObj = document;
  const setTimeoutFn = setTimeout;
  const clearTimeoutFn = clearTimeout;
  const DateObj = Date;
  const MathObj = Math;
  const parseIntFn = parseInt;
  const encodeURIFn = encodeURIComponent;
  const RegExpObj = RegExp;
  const XMLHttpRequestObj = XMLHttpRequest;
  const localStorageObj = localStorage;
  const JSONObj = JSON;
  const ImageObj = Image;

  // 頻繁に使用するプロパティやメソッドのショートカット
  const innerHTMLProp = "innerHTML";
  const tagNameProp = "tagName";
  const getElementByIdFn = "getElementById";
  const querySelectorFn = "querySelector";
  const querySelectorAllFn = "querySelectorAll";
  const createElementFn = "createElement";
  const classNameProp = "className";
  const replaceFn = "replace";
  const lastIndexOfFn = "lastIndexOf";
  const eventListenerFn = "EventListener";
  const removeFn = "remove";
  const lengthProp = "length";
  const sliceFn = "slice";
  const pushFn = "push";
  const attributeFn = "Attribute";
  const checkedProp = "checked";
  const offsetWidthProp = "offsetWidth";
  const toFixedFn = "toFixed";
  const pageYOffsetProp = "pageYOffset";
  const appendChildFn = "appendChild";
  const firstChildProp = "firstChild";
  const insertBeforeFn = "insertBefore";
  const matchFn = "match";
  const hrefProp = "href";
  const targetProp = "target";
  const locationProp = "location";
  const splitFn = "split";
  const trimFn = "trim";
  const openFn = "open";
  const sendFn = "send";
  const randomFn = "random";
  const parentElementProp = "parentElement";
  const preventDefaultFn = "preventDefault";
  const substrFn = "substr";
  const setRequestHeaderFn = "setRequestHeader";
  const responseTextProp = "responseText";
  const titleProp = "title";
  const ceilFn = "ceil";
  const floorFn = "floor";
  const textContentProp = "textContent";
  const itemFn = "Item";
  const nextSiblingProp = "nextSibling";
  const loadEvent = "load";
  const falseStr = "false";
  const scrollEvent = "scroll";
  const clickEvent = "click";
  const mousemoveEvent = "mousemove";
  const touchstartEvent = "touchstart";
  const changeEvent = "change";
  const undefinedStr = "undefined";
  const functionStr = "function";
  const contentTypeHeader = "Content-Type";
  const paginationStr = "pagination";
  const loadCustomPostsStr = "loadCustomPosts";
  const customPostsStr = "custom_posts";
  const adsbygoogleStr = "adsbygoogle";
  const httpsPrefix = "https://";
  const bloggerDomain = "www.blogger.com/";
  const webpSuffix = "-rw";
  const devicePixelRatioProp = "devicePixelRatio";

  // グローバル設定（Bloggerテンプレート用の変数）
  const isPreview = typeof isPreview !== undefinedStr && isPreview;
  const siteUrl = typeof siteUrl !== undefinedStr ? siteUrl[substrFn](0, siteUrl[lengthProp] - 1)[replaceFn](/(^\w+:|^)\/\//, "") : "";
  const currentUrl = typeof currentUrl !== undefinedStr ? currentUrl : "";
  const blogId = typeof blogId !== undefinedStr ? blogId : "";
  const blogTitle = typeof blogTitle !== undefinedStr ? blogTitle : "";
  const titleSeparator = typeof titleSeparator !== undefinedStr ? titleSeparator : " - ";
  const pageTitle = typeof pageTitle !== undefinedStr ? pageTitle : "Page";
  const analyticId = typeof analyticId !== undefinedStr && analyticId;
  const caPubAdsense = typeof caPubAdsense !== undefinedStr && caPubAdsense[replaceFn](/^\D+/g, "");
  const adsenseClientId = !!caPubAdsense && "ca-pub-" + caPubAdsense;
  const innerAdsDelimiter = typeof innerAdsDelimiter !== undefinedStr ? innerAdsDelimiter : "p,br,div";
  const ignoreAdsDelimiter = typeof ignoreAdsDelimiter !== undefinedStr ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote";
  const autoTOC = typeof autoTOC !== undefinedStr && autoTOC;
  const tocTemplate = typeof toc_temp === functionStr && toc_temp;
  const positionTOC = typeof positionTOC !== undefinedStr && positionTOC;
  const jtCallback = typeof jtCallback === functionStr && jtCallback;

  const baseUrl = httpsPrefix + siteUrl;

  // DOM要素のキャッシュ
  const headerElement = documentObj[getElementByIdFn]("header");
  const searchToggle = documentObj[getElementByIdFn]("search-toggle");
  const searchHeader = documentObj[getElementByIdFn]("search-header");
  const navbarToggle = documentObj[getElementByIdFn]("navbar-toggle");
  const navbarElement = documentObj[getElementByIdFn]("navbar");
  const backToTop = documentObj[getElementByIdFn]("back-to-top");
  const darkToggler = documentObj[getElementByIdFn]("dark-toggler");
  const htmlElement = documentObj[querySelectorFn]("html");
  const commentButton = documentObj[getElementByIdFn]("comment-button");
  const threadedCommentForm = documentObj[getElementByIdFn]("threaded-comment-form");
  const commentEditor = documentObj[getElementByIdFn]("comment-editor");
  const commentEditorSrc = documentObj[getElementByIdFn]("comment-editor-src");
  const commentScript = documentObj[getElementByIdFn]("comment-script");
  const commentReplies = documentObj[querySelectorAllFn](".comment-reply");
  const noScriptEntries = documentObj[querySelectorAllFn](".entry-text noscript");
  const contactForms = documentObj[querySelectorAllFn](".contact-form-blogger");
  const adsPostElement = documentObj[getElementByIdFn]("ads-post");
  const postBodyElement = documentObj[getElementByIdFn]("post-body");
  const relatedPostsElement = documentObj[querySelectorFn](".related-posts");
  const relatedInlineElement = documentObj[querySelectorFn](".related-inline");
  const currentPage = getQueryParam("page", currentUrl);
  const isLazyLoading = localStorageObj !== null && localStorageObj["get" + itemFn]("lazy") == "1";

  // ヘッダーのスクロール処理
  let lastScrollY = 0;
  windowObj["add" + eventListenerFn](scrollEvent, function() {
    const currentScrollY = this[pageYOffsetProp];
    let timeoutId;
    if (currentScrollY < lastScrollY && hasClass(headerElement, "header-hidden")) {
      timeoutId = setTimeoutFn(function() {
        removeClass(headerElement, "header-hidden");
      }, 500);
    } else if (lastScrollY < currentScrollY && hasClass(headerElement, "header-animate")) {
      clearTimeoutFn(timeoutId);
      addClass(headerElement, "header-hidden");
    }
    lastScrollY = currentScrollY;
  }, false);

  // クラス操作ユーティリティ
  function hasClass(element, className) {
    return (" " + element[classNameProp] + " ").indexOf(" " + className + " ") > -1;
  }

  function addClass(element, className) {
    if (!hasClass(element, className)) {
      const currentClass = element[classNameProp];
      element[classNameProp] = currentClass ? currentClass + " " + className : className;
    }
  }

  function removeClass(element, className) {
    element[classNameProp] = element[classNameProp][replaceFn](new RegExpObj("(?:^|\\s)" + className + "(?!\\S)"), "")[trimFn]();
  }

  function toggleClassWithDelay(element, className, delay = 300) {
    removeClass(element, className);
    setTimeoutFn(function() {
      removeClass(element, "d-block");
    }, delay);
  }

  function arrayIncludes(array, value) {
    for (let i = 0; i < array[lengthProp]; i++) {
      if (array[i] === value) return true;
    }
    return false;
  }

  function getQueryParam(param, url) {
    const regex = new RegExpObj("[?&]" + param + "=([^&#=]*)");
    const match = url[matchFn](regex);
    return match ? match[1] : null;
  }

  function parseJSON(jsonStr) {
    try {
      return JSONObj.parse(jsonStr);
    } catch (e) {
      return false;
    }
  }

  // WebPサポートチェック
  function checkWebPSupport(callback) {
    const img = new ImageObj();
    img.onload = img.onerror = function() {
      callback(img.height === 2);
    };
    img.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  checkWebPSupport(function(support) {
    if (!support) webpSuffix = "";
  });

  // 画像の遅延読み込み処理
  function lazyLoadImage(element) {
    if (element[tagNameProp] === "IMG") {
      let src = element["get" + attributeFn]("data-src");
      if (src[matchFn](/(bp.blogspot|googleusercontent)/)) {
        const pixelRatio = isLazyLoading ? (windowObj[devicePixelRatioProp] && windowObj[devicePixelRatioProp] > 1 ? windowObj[devicePixelRatioProp] : 1.5) : 1;
        const width = (element[offsetWidthProp] * pixelRatio)[toFixedFn](0);
        const parentWidth = (element[parentElementProp][offsetWidthProp] * pixelRatio)[toFixedFn](0);
        const grandParentWidth = (element[parentElementProp][parentElementProp][offsetWidthProp] * pixelRatio)[toFixedFn](0);
        const height = (element.offsetHeight * pixelRatio)[toFixedFn](0);
        let parts = src[splitFn]("/");
        const equalIndex = src[lastIndexOfFn]("=") + 1;
        let suffix = hasClass(element[parentElementProp], "ratio") ? "w" + ImgSize + "-e90" + webpSuffix : "w" + ImgSize + "-e90" + webpSuffix;
        if (src[matchFn](/(img\/a|proxy\/)/)) {
          src = equalIndex ? src[sliceFn](0, equalIndex) + suffix : src + "=" + suffix;
        } else {
          src = src[replaceFn](parts[parts[lengthProp] - 2], suffix);
        }
        element["set" + attributeFn]("data-src", src);
      } else if (src[matchFn](/(img.youtube|i.ytimg)/)) {
        src = src[substrFn](0, src[lastIndexOfFn]("/")) + "/mqdefault.jpg";
        element["set" + attributeFn]("data-src", src);
      }
    }
  }

  // ページネーション処理
  function setupPagination(element) {
    const postsPerPage = element["get" + attributeFn]("data-posts");
    const label = element["get" + attributeFn]("data-label");
    const encodedLabel = encodeURIFn(label);
    const labelPath = encodedLabel ? "-/" + encodedLabel + "/" : "";
    const labelQuery = encodedLabel ? "/label/" + encodedLabel : "";
    const maxResults = getQueryParam("max-results", currentUrl) || postsPerPage;
    const currentPage = getQueryParam("page", currentUrl) || 1;

    if (element["get" + attributeFn]("data-pagination") !== falseStr) {
      Defer.js(baseUrl + "/feeds/posts/summary/" + labelPath + "?alt=json&callback=jo." + paginationStr + "_key&max-results=1");

      jo[paginationStr + "_key"] = function(data) {
        const totalPosts = parseIntFn(data.feed.openSearch$totalResults.$t);
        if (postsPerPage < totalPosts) {
          const paginationData = calculatePagination(totalPosts, currentPage, maxResults, 5);
          const ul = documentObj[createElementFn]("ul");
          if (paginationData.currentPage !== 1) {
            ul[appendChildFn](createPaginationItem(paginationData.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'));
          }
          if (!arrayIncludes(paginationData.pages, 1)) {
            ul[appendChildFn](createPaginationItem(1, paginationData.currentPage, "1 . ."));
          }
          for (let i = 0; i < paginationData.pages[lengthProp]; i++) {
            ul[appendChildFn](createPaginationItem(paginationData.pages[i], paginationData.currentPage));
          }
          if (!arrayIncludes(paginationData.pages, paginationData.totalPages)) {
            ul[appendChildFn](createPaginationItem(paginationData.totalPages, paginationData.currentPage, ". . " + paginationData.totalPages));
          }
          if (paginationData.currentPage !== paginationData.totalPages) {
            ul[appendChildFn](createPaginationItem(paginationData.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'));
          }
          element[innerHTMLProp] = "";
          addClass(ul, "pagination mb-0");
          element[appendChildFn](ul);
          removeClass(element, "visually-hidden");
        }
      };

      jo[paginationStr + "_date"] = function(data) {
        const entry = data.feed.entry[0];
        const published = entry.published.$t[substrFn](0, 19) + entry.published.$t[substrFn](23, 29);
        const encodedDate = published[replaceFn]("+", "%2B");
        const url = baseUrl + "/search" + labelQuery + "?updated-max=" + encodedDate + "&max-results=" + maxResults + "&page=" + currentPage;
        windowObj[locationProp][hrefProp] = url;
      };

      function createPaginationItem(page, currentPage, text) {
        const li = documentObj[createElementFn]("li");
        const span = documentObj[createElementFn]("span");
        addClass(span, "btn rounded-pill jt-icon-center");
        span[innerHTMLProp] = text || page;
        span["set" + attributeFn]("data-page", page);
        if (page === currentPage) {
          addClass(span, "jt-btn-primary");
        } else {
          addClass(span, "jt-btn-light hover-btn-primary");
          span["add" + eventListenerFn](clickEvent, function(event) {
            event[preventDefaultFn]();
            let url;
            if (page === 1) {
              url = encodedLabel ? baseUrl + "/search" + labelQuery + "?max-results=" + postsPerPage + "&page=" + page : baseUrl;
              windowObj[locationProp][hrefProp] = url;
            } else {
              const startIndex = (page - 1) * maxResults;
              Defer.js(baseUrl + "/feeds/posts/summary/" + labelPath + "?start-index=" + startIndex + "&alt=json&callback=jo." + paginationStr + "_date&max-results=1");
            }
          });
        }
        li[appendChildFn](span);
        return li;
      }

      function calculatePagination(totalItems, currentPage, pageSize, maxPages) {
        totalItems = parseIntFn(totalItems);
        currentPage = parseIntFn(currentPage);
        pageSize = parseIntFn(pageSize);
        maxPages = parseIntFn(maxPages);
        const totalPages = MathObj[ceilFn](totalItems / pageSize);
        currentPage = currentPage < 1 ? 1 : currentPage > totalPages ? totalPages : currentPage;
        let startPage, endPage;
        if (totalPages <= maxPages) {
          startPage = 1;
          endPage = totalPages;
        } else {
          const halfMax = MathObj[floorFn](maxPages / 2);
          const halfMaxCeil = MathObj[ceilFn](maxPages / 2) - 1;
          if (currentPage <= halfMax) {
            startPage = 1;
            endPage = maxPages;
          } else if (totalPages <= currentPage + halfMaxCeil) {
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
          } else {
            startPage = currentPage - halfMax;
            endPage = currentPage + halfMaxCeil;
          }
        }
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = MathObj.min(startIndex + pageSize - 1, totalItems - 1);
        const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
        return {
          totalItems,
          currentPage,
          pageSize,
          totalPages,
          startPage,
          endPage,
          startIndex,
          endIndex,
          pages
        };
      }
    } else {
      removeClass(element, "visually-hidden");
    }
  }

  // カスタム投稿の読み込み
  jo[loadCustomPostsStr] = function(element) {
    const uniqueId = (MathObj[randomFn]() + 1).toString(36)[substrFn](7);
    const label = element["get" + attributeFn]("data-label") || element[innerHTMLProp];
    const title = element["get" + attributeFn]("data-title");
    const items = element["get" + attributeFn]("data-items");
    const shuffle = element["get" + attributeFn]("data-shuffle");
    const noItemUrl = element["get" + attributeFn]("data-no-item");
    const callbackFunc = element["get" + attributeFn]("data-func");
    const postCallback = element["get" + attributeFn]("data-callback");
    const maxItems = noItemUrl ? parseIntFn(items) + 1 : items;
    const labels = label[splitFn](",");
    const labelQuery = labels[lengthProp] > 1 ? "-/" + encodeURIFn(labels[MathObj[floorFn](MathObj[randomFn]() * labels[lengthProp])]) + "/?" : label && label !== falseStr ? "-/" + encodeURIFn(label[trimFn]()) + "/?" : "?";

    Defer.js(baseUrl + "/feeds/posts/summary/" + labelQuery + "alt=json&callback=jo." + customPostsStr + "_key_" + uniqueId + "&max-results=" + maxItems);

    jo[customPostsStr + "_key_" + uniqueId] = function(data) {
      const totalResults = parseIntFn(data.feed.openSearch$totalResults.$t);
      const categories = data.feed.category;
      if (totalResults > 0) {
        const postsData = { title, posts: [], categories };
        const entries = data.feed.entry;
        let count = 0;
        for (let i = 0; i < entries[lengthProp] && count < items; ++i) {
          const entry = entries[i];
          const url = entry.link[entry.link[lengthProp] - 1][hrefProp];
          if (url !== noItemUrl) {
            count++;
            const post = {
              grup_id: uniqueId,
              url,
              title: entry[titleProp].$t,
              summary: entry.summary.$t[trimFn](),
              img: entry.media$thumbnail && entry.media$thumbnail.url,
              author: entry.author[0].name.$t,
              comment: entry.thr$total && entry.thr$total.$t,
              label: entry.category,
              date: formatDate(entry.published.$t)
            };
            postsData.posts[pushFn](post);
          }
        }
        if (typeof windowObj[callbackFunc] === functionStr && postsData.posts[lengthProp] > 0) {
          if (shuffle) {
            postsData.posts = shuffleArray(postsData.posts)[sliceFn](0, shuffle);
          }
          element[innerHTMLProp] = windowObj[callbackFunc](postsData)[trimFn]();
          removeClass(element, "visually-hidden");
          Defer.domz(".lazy-" + uniqueId, 1, "loaded", lazyLoadImage, null, { rootMargin: "300%" });
          if (postCallback && typeof windowObj[postCallback] === functionStr) {
            windowObj[postCallback]();
          }
        }
      }
    };

    function formatDate(dateStr) {
      const date = new DateObj(dateStr);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }

    function shuffleArray(array) {
      const result = array.slice();
      for (let i = result[lengthProp] - 1; i > 0; i--) {
        const j = MathObj[floorFn](MathObj[randomFn]() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
      return result;
    }
  };

  // ページタイトルの動的取得
  function fetchPageTitle(url, element) {
    const xhr = new XMLHttpRequestObj();
    xhr[openFn]("get", url);
    xhr[setRequestHeaderFn](contentTypeHeader, "text/html");
    xhr[sendFn](null);
    xhr["add" + eventListenerFn](loadEvent, function() {
      const titleMatch = xhr[responseTextProp][matchFn](/<title>(.*?)<\/title>/);
      element[innerHTMLProp] = titleMatch[1][replaceFn](titleSeparator + blogTitle, "");
    });
  }

  // リンクにページタイトルを追加
  function addPageTitles(element) {
    const links = element[querySelectorAllFn]("a");
    for (let i = 0; i < links[lengthProp]; ++i) {
      const link = links[i];
      const span = documentObj[createElementFn]("span");
      addClass(span, "d-block pt-2");
      link[appendChildFn](span);
      fetchPageTitle(link[hrefProp], span);
    }
  }

  // ヘッダーのアニメーション制御
  function toggleHeaderAnimation() {
    (searchToggle && searchToggle[checkedProp] || navbarToggle && navbarToggle[checkedProp] ? removeClass : addClass)(headerElement, "header-animate");
  }

  // クリックイベントの外部ハンドリング
  function handleOutsideClick(element, callback) {
    function listener(event) {
      if (!element.contains(event[targetProp])) {
        callback();
        documentObj[removeFn + eventListenerFn](clickEvent, listener);
      }
    }
    documentObj["add" + eventListenerFn](clickEvent, listener);
  }

  // コメントフォームの表示
  function showCommentForm(url) {
    if (url !== commentEditorSrc[hrefProp]) {
      addClass(threadedCommentForm, "loader");
      commentEditorSrc[hrefProp] = url;
      commentEditor.src = url;
    }
    if (hasClass(threadedCommentForm, "d-none")) {
      removeClass(threadedCommentForm, "d-none");
      const scriptSrc = commentScript.value[matchFn](/<script.*?src='(.*?)'/)[1];
      Defer.js(scriptSrc, "comment-js", 500, function() {
        BLOG_CMT_createIframe(httpsPrefix + bloggerDomain + "rpc_relay.html");
      });
    }
  }

  // イベントリスナーの設定
  if (searchToggle) {
    searchToggle["add" + eventListenerFn](changeEvent, function() {
      toggleHeaderAnimation();
      if (this[checkedProp]) {
        setTimeoutFn(function() {
          documentObj[getElementByIdFn]("search-input").focus();
        }, 100);
        handleOutsideClick(searchHeader, function() {
          searchToggle[checkedProp] = false;
          toggleHeaderAnimation();
        });
      }
    });
  }

  if (navbarToggle) {
    navbarToggle["add" + eventListenerFn](changeEvent, function() {
      toggleHeaderAnimation();
      if (this[checkedProp]) {
        addClass(navbarElement, "d-block");
        setTimeoutFn(function() {
          addClass(navbarElement, "show");
        }, 100);
        handleOutsideClick(navbarElement, function() {
          navbarToggle[checkedProp] = false;
          toggleHeaderAnimation();
          toggleClassWithDelay(navbarElement, "show");
        });
      } else {
        toggleClassWithDelay(navbarElement, "show");
      }
    });
  }

  if (darkToggler) {
    darkToggler["add" + eventListenerFn](clickEvent, function(event) {
      event[preventDefaultFn]();
      toggleClass(htmlElement, "dark-mode");
      if (localStorageObj !== null) {
        localStorageObj["set" + itemFn]("theme", hasClass(htmlElement, "dark-mode") ? "dark" : "light");
      }
    });
  }

  windowObj["add" + eventListenerFn](scrollEvent, function() {
    (this[pageYOffsetProp] >= 1 && headerElement !== null ? addClass : removeClass)(headerElement, "shadow-sm");
    (this[pageYOffsetProp] >= 1000 && backToTop !== null ? removeClass : addClass)(backToTop, "d-none");
  }, false);

  if (commentEditor) {
    commentEditor["add" + eventListenerFn](loadEvent, function() {
      removeClass(threadedCommentForm, "loader");
    });
  }

  if (commentButton) {
    commentButton["add" + eventListenerFn](clickEvent, function(event) {
      event[preventDefaultFn]();
      showCommentForm(this[hrefProp]);
      if (threadedCommentForm[parentElementProp].id !== "add-comment") {
        documentObj[getElementByIdFn]("add-comment")[appendChildFn](threadedCommentForm);
      }
    });
  }

  for (let i = 0; i < commentReplies[lengthProp]; ++i) {
    commentReplies[i]["add" + eventListenerFn](clickEvent, function(event) {
      event[preventDefaultFn]();
      const commentId = this["get" + attributeFn]("data-comment-id");
      showCommentForm(this[hrefProp]);
      if (threadedCommentForm[parentElementProp].id !== "c" + commentId) {
        documentObj[getElementByIdFn]("c" + commentId)[appendChildFn](threadedCommentForm);
      }
    });
  }

  for (let i = 0; i < contactForms[lengthProp]; ++i) {
    contactForms[i]["add" + eventListenerFn]("submit", function(event) {
      event[preventDefaultFn]();
      const form = event[targetProp];
      addClass(form, "loading");
      const formData = new FormData(form);
      let dataStr = "blogID=" + blogId;
      formData.forEach((value, key) => {
        dataStr += "&" + encodeURIFn(key) + "=" + encodeURIFn(value);
      });
      const url = httpsPrefix + bloggerDomain + "contact-form.do";
      const xhr = new XMLHttpRequestObj();
      xhr[openFn]("post", url);
      xhr[setRequestHeaderFn](contentTypeHeader, "application/x-www-form-urlencoded");
      xhr[sendFn](dataStr);
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200 && this.response !== "") {
          removeClass(form, "loading");
          const response = parseJSON(this[responseTextProp][trimFn]());
          if (response && response.details.emailSentStatus === "true") {
            form.reset();
            removeClass(form, "send-error");
            addClass(form, "send-success");
          } else {
            removeClass(form, "send-success");
            addClass(form, "send-error");
          }
        }
      };
    });
  }

  // メイン初期化処理
  function initialize(shouldRemoveListeners) {
    if (shouldRemoveListeners) {
      documentObj[removeFn + eventListenerFn](mousemoveEvent, initialize);
      documentObj[removeFn + eventListenerFn](touchstartEvent, initialize);
      documentObj[removeFn + eventListenerFn](scrollEvent, initialize);
    }

    Defer.domz(".custom-posts", 1, null, jo[loadCustomPostsStr], null, { rootMargin: "300%" });

    if (noScriptEntries[lengthProp] > 0) {
      for (let i = 0; i < noScriptEntries[lengthProp]; ++i) {
        const noscript = noScriptEntries[i];
        const content = noscript[innerHTMLProp];
        const textarea = documentObj[createElementFn]("textarea");
        textarea[innerHTMLProp] = content[replaceFn](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
        const div = documentObj[createElementFn]("div");
        div[innerHTMLProp] = textarea.value;
        if (i === 0) addClass(div, "feature-image full-width");
        noscript[parentElementProp][insertBeforeFn](div, noscript);
      }
      Defer.domz('[lazyload="true"]', 1, "loaded", lazyLoadImage, null, { rootMargin: "300%" });
    }

    if (postBodyElement !== null) {
      if (relatedPostsElement !== null && relatedInlineElement !== null) {
        relatedInlineElement[innerHTMLProp] = relatedPostsElement[innerHTMLProp];
        relatedInlineElement["set" + attributeFn]("data-no-item", relatedPostsElement["get" + attributeFn]("data-no-item"));
      }

      if (adsPostElement !== null) {
        const delimiters = postBodyElement[querySelectorAllFn](innerAdsDelimiter + "," + ignoreAdsDelimiter);
        const adNodes = adsPostElement.childNodes;
        const adCount = adNodes[lengthProp];
        const validDelimiters = [];
        for (let i = 0; i < delimiters[lengthProp]; i++) {
          const closestIgnore = delimiters[i].closest(ignoreAdsDelimiter);
          if (!closestIgnore || delimiters[i] === closestIgnore) {
            validDelimiters[pushFn](delimiters[i]);
          }
        }
        for (let i = 0; i < adCount; i++) {
          const index = i === adCount - 1 ? validDelimiters[lengthProp] - 1 : MathObj.round(validDelimiters[lengthProp] / adCount) * i;
          const target = i === 0 ? validDelimiters[0] : validDelimiters[index][nextSiblingProp];
          if (target) {
            target[parentElementProp][insertBeforeFn](adNodes[0], target);
          } else if (i === adCount - 1) {
            postBodyElement[appendChildFn](adNodes[0]);
          }
        }
      }

      if (autoTOC && autoTOC !== falseStr && tocTemplate && postBodyElement[firstChildProp] !== null) {
        const headings = postBodyElement[querySelectorAllFn]("h2,h3,h4,h5,h6");
        const tocContainer = documentObj[createElementFn]("div");
        const tocItems = [];
        for (let i = 0; i < headings[lengthProp]; i++) {
          const heading = headings[i];
          const text = heading[textContentProp];
          const level = parseIntFn(heading[tagNameProp][replaceFn]("H", ""));
          heading.id = text;
          tocItems[pushFn]({ level, title: text, id: text });
        }
        let target = postBodyElement[querySelectorFn](positionTOC) || postBodyElement[firstChildProp];
        if (target[nextSiblingProp]) target = target[nextSiblingProp];
        if (tocItems[lengthProp] > 0) {
          tocContainer[innerHTMLProp] = tocTemplate(tocItems)[trimFn]();
          target[parentElementProp][insertBeforeFn](tocContainer, target);
        }
      }
    }

    if (!isPreview) {
      if (adsenseClientId) {
        if (typeof adsbygoogle === undefinedStr) adsbygoogle = [];
        Defer.js(httpsPrefix + "pagead2.googlesyndication.com/pagead/js/" + adsbygoogleStr + ".js?client=" + adsenseClientId, adsbygoogleStr, 100);
      }
      if (analyticId && analyticId !== falseStr) {
        Defer.js(httpsPrefix + "www.googletagmanager.com/gtag/js?id=" + analyticId, "analytics", 100, function() {
          function gtag() { dataLayer[pushFn](arguments); }
          gtag("js", new DateObj());
          gtag("config", analyticId);
        });
      }
      if (jtCallback) jtCallback();
      if (blogId) Defer.css(httpsPrefix + bloggerDomain + "dyn-css/authorization.css?targetBlogID=" + blogId);
    }
  }

  // ページタイトルの設定
  if (currentPage) {
    documentObj[titleProp] = documentObj[titleProp][replaceFn](titleSeparator, titleSeparator + pageTitle + " " + currentPage + titleSeparator);
  }

  // 遅延読み込みの初期化
  Defer.domz(".lazyload", 1, "loaded", lazyLoadImage, null, { rootMargin: "300%" });
  Defer.domz("#post-pager", 1, null, addPageTitles, null, { rootMargin: "300%" });
  Defer.domz("#pagination", 1, null, setupPagination, null, { rootMargin: "300%" });

  if (isLazyLoading) {
    initialize(false);
  } else {
    if (localStorageObj !== null) localStorageObj["set" + itemFn]("lazy", 1);
    documentObj["add" + eventListenerFn](mousemoveEvent, initialize);
    documentObj["add" + eventListenerFn](touchstartEvent, initialize);
    documentObj["add" + eventListenerFn](scrollEvent, initialize);
  }
})();