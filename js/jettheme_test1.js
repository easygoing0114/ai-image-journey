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

(function initialize() {
  const windowObj = window;
  const documentObj = document;
  const setTimeoutFn = setTimeout;
  const clearTimeoutFn = clearTimeout;
  const DateObj = Date;
  const MathObj = Math;
  const parseIntFn = parseInt;
  const encodeURIComponentFn = encodeURIComponent;
  const RegExpObj = RegExp;
  const XMLHttpRequestObj = XMLHttpRequest;
  const localStorageObj = localStorage;
  const JSONObj = JSON;
  const ImageObj = Image;

  const innerHTMLProp = "innerHTML";
  const tagNameProp = "tagName";
  const getElementByIdFn = "getElementById";
  const querySelectorFn = "querySelector";
  const querySelectorAllFn = "querySelectorAll";
  const createElementFn = "createElement";
  const classNameProp = "className";
  const replaceFn = "replace";
  const lastIndexOfFn = "lastIndexOf";
  const eventListenerProp = "EventListener";
  const removeFn = "remove";
  const lengthProp = "length";
  const sliceFn = "slice";
  const pushFn = "push";
  const attributeProp = "Attribute";
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
  const loadCustomPostsFn = "loadCustomPosts";
  const customPostsStr = "custom_posts";
  const adsbygoogleStr = "adsbygoogle";
  const httpsPrefix = "https://";
  const bloggerDomain = "www.blogger.com/";
  const rwSuffix = "-rw";
  const devicePixelRatioProp = "devicePixelRatio";

  const isPreview = typeof isPreview !== undefinedStr && isPreview;
  const siteUrl = typeof siteUrl !== undefinedStr ? siteUrl.substr(0, siteUrl.length - 1).replace(/(^\w+:|^)\/\//, "") : "";
  const baseUrl = httpsPrefix + siteUrl;
  const currentUrl = typeof currentUrl !== undefinedStr ? currentUrl : "";
  const blogId = typeof blogId !== undefinedStr ? blogId : "";
  const blogTitle = typeof blogTitle !== undefinedStr ? blogTitle : "";
  const titleSeparator = typeof titleSeparator !== undefinedStr ? titleSeparator : " - ";
  const pageTitle = typeof pageTitle !== undefinedStr ? pageTitle : "Page";
  const analyticId = typeof analyticId !== undefinedStr && analyticId;
  const caPubAdsense = typeof caPubAdsense !== undefinedStr && caPubAdsense.replace(/^\D+/g, "");
  const caPubPrefix = !!caPubAdsense && "ca-pub-" + caPubAdsense;
  const innerAdsDelimiter = typeof innerAdsDelimiter !== undefinedStr ? innerAdsDelimiter : "p,br,div";
  const ignoreAdsDelimiter = typeof ignoreAdsDelimiter !== undefinedStr ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote";
  const autoTOC = typeof autoTOC !== undefinedStr && autoTOC;
  const tocTempFn = typeof toc_temp === functionStr && toc_temp;
  const positionTOC = typeof positionTOC !== undefinedStr && positionTOC;
  const jtCallbackFn = typeof jtCallback === functionStr && jtCallback;

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
    element[classNameProp] = element[classNameProp].replace(new RegExpObj("(?:^|\\s)" + className + "(?!\\S)"), "").trim();
  }

  function toggleClassWithTimeout(element, className, timeout = 300) {
    removeClass(element, className);
    setTimeoutFn(() => removeClass(element, "d-block"), timeout);
  }

  function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) return true;
    }
    return false;
  }

  function getQueryParam(param, url) {
    const regex = new RegExpObj("[?&]" + param + "=([^&#=]*)");
    const match = url.match(regex);
    return match ? match[1] : false;
  }

  function parseJSON(json) {
    try {
      return JSONObj.parse(json);
    } catch (e) {
      return false;
    }
  }

  function checkWebpSupport(callback) {
    const img = new ImageObj();
    img.onload = img.onerror = () => callback(img.height === 2);
    img.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  checkWebpSupport((supportsWebp) => {
    if (!supportsWebp) rwSuffix = "";
  });

  const header = documentObj[getElementByIdFn]("header");
  const searchToggle = documentObj[getElementByIdFn]("search-toggle");
  const searchHeader = documentObj[getElementByIdFn]("search-header");
  const navbarToggle = documentObj[getElementByIdFn]("navbar-toggle");
  const navbar = documentObj[getElementByIdFn]("navbar");
  const backToTop = documentObj[getElementByIdFn]("back-to-top");
  const darkToggler = documentObj[getElementByIdFn]("dark-toggler");
  const htmlElement = documentObj[querySelectorFn]("html");
  const commentButton = documentObj[getElementByIdFn]("comment-button");
  const threadedCommentForm = documentObj[getElementByIdFn]("threaded-comment-form");
  const commentEditor = documentObj[getElementByIdFn]("comment-editor");
  const commentEditorSrc = documentObj[getElementByIdFn]("comment-editor-src");
  const commentScript = documentObj[getElementByIdFn]("comment-script");
  const commentReplies = documentObj[querySelectorAllFn](".comment-reply");
  const noscriptElements = documentObj[querySelectorAllFn](".entry-text noscript");
  const contactForms = documentObj[querySelectorAllFn](".contact-form-blogger");
  const adsPost = documentObj[getElementByIdFn]("ads-post");
  const postBody = documentObj[getElementByIdFn]("post-body");
  const relatedPosts = documentObj[querySelectorFn](".related-posts");
  const relatedInline = documentObj[querySelectorFn](".related-inline");
  const currentPage = getQueryParam("page", currentUrl);
  const isLazyLoaded = localStorageObj && localStorageObj["get" + itemFn]("lazy") == "1";

  let lastScrollY = 0;
  windowObj["add" + eventListenerProp](scrollEvent, () => {
    const currentScrollY = windowObj[pageYOffsetProp];
    let timeoutId;
    if (currentScrollY < lastScrollY && hasClass(header, "header-hidden")) {
      timeoutId = setTimeoutFn(() => removeClass(header, "header-hidden"), 500);
    } else if (lastScrollY < currentScrollY && hasClass(header, "header-animate")) {
      clearTimeoutFn(timeoutId);
      addClass(header, "header-hidden");
    }
    lastScrollY = currentScrollY;
  }, false);

  function processImage(element) {
    if (element[tagNameProp] === "IMG") {
      let src = element["get" + attributeProp]("data-src");
      if (src.match(/(bp.blogspot|googleusercontent)/)) {
        const pixelRatio = isLazyLoaded ? (windowObj[devicePixelRatioProp] && windowObj[devicePixelRatioProp] > 1 ? windowObj[devicePixelRatioProp] : 1.5) : 1;
        const width = (element[offsetWidthProp] * pixelRatio).toFixed(0);
        const parentWidth = (element[parentElementProp][offsetWidthProp] * pixelRatio).toFixed(0);
        const grandParentWidth = (element[parentElementProp][parentElementProp][offsetWidthProp] * pixelRatio).toFixed(0);
        const height = (element.offsetHeight * pixelRatio).toFixed(0);
        const srcParts = src.split("/");
        const sizeIndex = src[lastIndexOfFn]("=") + 1;
        let size = hasClass(element[parentElementProp], "ratio") ? "w" + ImgSize + "-e90" + rwSuffix : "w" + ImgSize + "-e90" + rwSuffix;
        src = src.match(/(img\/a|proxy\/)/) ? (sizeIndex ? src.slice(0, sizeIndex) + size : src + "=" + size) : src.replace(srcParts[srcParts.length - 2], size);
        element["set" + attributeProp]("data-src", src);
      } else if (src.match(/(img.youtube|i.ytimg)/)) {
        src = src.substr(0, src[lastIndexOfFn]("/")) + "/mqdefault.jpg";
        element["set" + attributeProp]("data-src", src);
      }
    }
  }

  function createPagination(element) {
    if (element["get" + attributeProp]("data-pagination") !== falseStr) {
      const postsPerPage = element["get" + attributeProp]("data-posts");
      const label = encodeURIComponentFn(element["get" + attributeProp]("data-label"));
      const labelPath = label ? "-/" + label + "/" : "";
      const labelQuery = label ? "/label/" + label : "";
      const maxResults = getQueryParam("max-results", currentUrl);
      const page = getQueryParam("page", currentUrl);
      const pageSize = maxResults || postsPerPage;
      const currentPageNum = page || 1;

      Defer.js(baseUrl + "/feeds/posts/summary/" + labelPath + "?alt=json&callback=jo." + paginationStr + "_key&max-results=1");

      jo[paginationStr + "_key"] = (data) => {
        const totalResults = parseIntFn(data.feed.openSearch$totalResults.$t);
        if (postsPerPage < totalResults) {
          const paginationData = (function calculatePagination(total, current, size, maxPages) {
            total = parseIntFn(total);
            current = parseIntFn(current);
            size = parseIntFn(size);
            maxPages = parseIntFn(maxPages);
            const totalPages = MathObj.ceil(total / size);
            current = current < 1 ? 1 : (current > totalPages ? totalPages : current);
            let startPage, endPage;
            if (totalPages <= maxPages) {
              startPage = 1;
              endPage = totalPages;
            } else {
              const halfMax = MathObj.floor(maxPages / 2);
              const halfMaxCeil = MathObj.ceil(maxPages / 2) - 1;
              if (current <= halfMax) {
                startPage = 1;
                endPage = maxPages;
              } else if (current >= totalPages - halfMaxCeil) {
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
              } else {
                startPage = current - halfMax;
                endPage = current + halfMaxCeil;
              }
            }
            const startIndex = (current - 1) * size;
            const endIndex = MathObj.min(startIndex + size - 1, total - 1);
            const pages = [];
            for (let i = 0; i < endPage + 1 - startPage; i++) {
              pages.push(startPage + i);
            }
            return {
              totalItems: total,
              currentPage: current,
              pageSize: size,
              totalPages,
              startPage,
              endPage,
              startIndex,
              endIndex,
              pages
            };
          })(totalResults, currentPageNum, pageSize, 5);

          const ul = documentObj[createElementFn]("ul");
          const totalPages = paginationData.totalPages;

          function createPageItem(pageNum, currentPage, label = pageNum) {
            const li = documentObj[createElementFn]("li");
            const span = documentObj[createElementFn]("span");
            addClass(span, "btn rounded-pill jt-icon-center");
            span[innerHTMLProp] = label;
            span["set" + attributeProp]("data-page", pageNum);
            if (pageNum == currentPage) {
              addClass(span, "jt-btn-primary");
            } else {
              addClass(span, "jt-btn-light hover-btn-primary");
              span["add" + eventListenerProp](clickEvent, (e) => {
                e[preventDefaultFn]();
                let url;
                if (pageNum == 1) {
                  url = label ? baseUrl + "/search" + labelQuery + "?max-results=" + pageSize + "&page=" + pageNum : baseUrl;
                  windowObj[locationProp][hrefProp] = url;
                } else {
                  const startIndex = (pageNum - 1) * pageSize;
                  Defer.js(baseUrl + "/feeds/posts/summary/" + labelPath + "?start-index=" + startIndex + "&alt=json&callback=jo." + paginationStr + "_date&max-results=1");
                }
              });
            }
            li[appendChildFn](span);
            return li;
          }

          if (paginationData.currentPage != 1) {
            ul[appendChildFn](createPageItem(paginationData.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'));
          }
          if (!includes(paginationData.pages, 1)) {
            ul[appendChildFn](createPageItem(1, paginationData.currentPage, "1 . ."));
          }
          for (let i = 0; i < paginationData.pages.length; i++) {
            ul[appendChildFn](createPageItem(paginationData.pages[i], paginationData.currentPage));
          }
          if (!includes(paginationData.pages, totalPages)) {
            ul[appendChildFn](createPageItem(totalPages, paginationData.currentPage, ". . " + totalPages));
          }
          if (paginationData.currentPage != totalPages) {
            ul[appendChildFn](createPageItem(paginationData.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'));
          }
          element[innerHTMLProp] = "";
          addClass(ul, "pagination mb-0");
          element[appendChildFn](ul);
          removeClass(element, "visually-hidden");
        }
      };

      jo[paginationStr + "_date"] = (data) => {
        const published = data.feed.entry[0].published.$t;
        const timestamp = published.substr(0, 19) + published.substr(23, 29);
        const encodedTimestamp = timestamp.replace("+", "%2B");
        const url = baseUrl + "/search" + labelQuery + "?updated-max=" + encodedTimestamp + "&max-results=" + pageSize + "&page=" + currentPageNum;
        windowObj[locationProp][hrefProp] = url;
      };
    } else {
      removeClass(element, "visually-hidden");
    }
  }

  function fetchTitle(url, element) {
    const xhr = new XMLHttpRequestObj();
    xhr[openFn]("get", url);
    xhr[setRequestHeaderFn](contentTypeHeader, "text/html");
    xhr[sendFn](null);
    xhr["add" + eventListenerProp](loadEvent, () => {
      const match = xhr[responseTextProp].match(/<title>(.*?)<\/title>/);
      element[innerHTMLProp] = match[1].replace(titleSeparator + blogTitle, "");
    });
  }

  jo[loadCustomPostsFn] = (element) => {
    const uniqueId = (MathObj[randomFn]() + 1).toString(36).substr(7);
    const label = element["get" + attributeProp]("data-label");
    const title = element["get" + attributeProp]("data-title");
    const items = element["get" + attributeProp]("data-items");
    const shuffle = element["get" + attributeProp]("data-shuffle");
    const noItem = element["get" + attributeProp]("data-no-item");
    const callback = element["get" + attributeProp]("data-func");
    const callbackAfter = element["get" + attributeProp]("data-callback");
    const maxResults = noItem ? parseIntFn(items) + 1 : items;
    const labels = label || element[innerHTMLProp];
    const labelArray = labels.split(",");
    let feedUrl = labelArray.length > 1 ? (labels ? "-/" + encodeURIComponentFn(labelArray[MathObj.floor(MathObj[randomFn]() * labelArray.length)]) + "/?" : "?") : (labels && labels !== falseStr ? "-/" + encodeURIComponentFn(labels.trim()) + "/?" : "?");

    Defer.js(baseUrl + "/feeds/posts/summary/" + feedUrl + "alt=json&callback=jo." + customPostsStr + "_key_" + uniqueId + "&max-results=" + maxResults);

    jo[customPostsStr + "_key_" + uniqueId] = (data) => {
      const totalResults = parseIntFn(data.feed.openSearch$totalResults.$t);
      const categories = data.feed.category;
      if (totalResults > 0) {
        const result = {
          title,
          posts: [],
          categories
        };
        const entries = data.feed.entry;
        let count = 0;
        for (let i = 0; i < entries.length; ++i) {
          const entry = entries[i];
          const url = entry.link[entry.link.length - 1][hrefProp];
          if (count === items) break;
          if (url !== noItem) {
            count++;
            const post = {};
            post.grup_id = uniqueId;
            post.url = url;
            post.title = entry[titleProp].$t;
            post.summary = entry.summary.$t.trim();
            post.img = entry.media$thumbnail && entry.media$thumbnail.url;
            post.author = entry.author[0].name.$t;
            post.comment = entry.thr$total && entry.thr$total.$t;
            post.label = entry.category;
            const date = new DateObj(entry.published.$t);
            post.date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            result.posts.push(post);
          }
        }
        if (typeof windowObj[callback] === functionStr && result.posts.length > 0) {
          if (shuffle) {
            result.posts = (function shuffleArray(array) {
              const result = array.slice();
              for (let i = result.length - 1; i > 0; i--) {
                const j = MathObj.floor(MathObj[randomFn]() * (i + 1));
                [result[i], result[j]] = [result[j], result[i]];
              }
              return result;
            })(result.posts).slice(0, shuffle);
          }
          element[innerHTMLProp] = windowObj[callback](result).trim();
          removeClass(element, "visually-hidden");
          Defer.domz(".lazy-" + uniqueId, 1, "loaded", processImage, null, { rootMargin: "300%" });
          if (callbackAfter && typeof windowObj[callbackAfter] === functionStr) {
            windowObj[callbackAfter]();
          }
        }
      }
    };
  };

  function processLinks(element) {
    const links = element[querySelectorAllFn]("a");
    for (let i = 0; i < links.length; ++i) {
      const link = links[i];
      const url = link[hrefProp];
      const span = documentObj[createElementFn]("span");
      addClass(span, "d-block pt-2");
      link[appendChildFn](span);
      fetchTitle(url, span);
    }
  }

  function toggleHeaderAnimation() {
    (searchToggle && searchToggle[checkedProp] || navbarToggle && navbarToggle[checkedProp] ? removeClass : addClass)(header, "header-animate");
  }

  function handleClickOutside(container, callback) {
    const handler = (event) => {
      if (!container.contains(event[targetProp])) {
        callback();
        documentObj[removeFn + eventListenerProp](clickEvent, handler);
      }
    };
    documentObj["add" + eventListenerProp](clickEvent, handler);
  }

  function loadCommentForm(url) {
    if (url !== commentEditorSrc[hrefProp]) {
      addClass(threadedCommentForm, "loader");
      commentEditorSrc[hrefProp] = url;
      commentEditor.src = url;
    }
    if (hasClass(threadedCommentForm, "d-none")) {
      removeClass(threadedCommentForm, "d-none");
      const scriptSrc = commentScript.value.match(/<script.*?src='(.*?)'/)[1];
      Defer.js(scriptSrc, "comment-js", 500, () => {
        BLOG_CMT_createIframe(httpsPrefix + bloggerDomain + "rpc_relay.html");
      });
    }
  }

  if (searchToggle) {
    searchToggle["add" + eventListenerProp](changeEvent, function() {
      toggleHeaderAnimation();
      if (this[checkedProp]) {
        setTimeoutFn(() => documentObj[getElementByIdFn]("search-input").focus(), 100);
      }
      handleClickOutside(searchHeader, () => {
        searchToggle[checkedProp] = false;
        toggleHeaderAnimation();
      });
    });
  }

  if (navbarToggle) {
    navbarToggle["add" + eventListenerProp](changeEvent, function() {
      toggleHeaderAnimation();
      if (this[checkedProp]) {
        addClass(navbar, "d-block");
        setTimeoutFn(() => addClass(navbar, "show"), 100);
        handleClickOutside(navbar, () => {
          navbarToggle[checkedProp] = false;
          toggleHeaderAnimation();
          toggleClassWithTimeout(navbar, "show");
        });
      } else {
        toggleClassWithTimeout(navbar, "show");
      }
    });
  }

  if (darkToggler) {
    darkToggler["add" + eventListenerProp](clickEvent, (e) => {
      e[preventDefaultFn]();
      const toggleDarkMode = (element, className) => (hasClass(element, className) ? removeClass : addClass)(element, className);
      toggleDarkMode(htmlElement, "dark-mode");
      if (localStorageObj) {
        localStorageObj["set" + itemFn]("theme", hasClass(htmlElement, "dark-mode") ? "dark" : "light");
      }
    });
  }

  windowObj["add" + eventListenerProp](scrollEvent, () => {
    (windowObj[pageYOffsetProp] >= 1 && header ? addClass : removeClass)(header, "shadow-sm");
    (windowObj[pageYOffsetProp] >= 1000 && backToTop ? removeClass : addClass)(backToTop, "d-none");
  }, false);

  if (commentEditor) {
    commentEditor["add" + eventListenerProp](loadEvent, () => removeClass(threadedCommentForm, "loader"));
  }

  if (commentButton) {
    commentButton["add" + eventListenerProp](clickEvent, (e) => {
      e[preventDefaultFn]();
      loadCommentForm(this[hrefProp]);
      if (threadedCommentForm[parentElementProp].id !== "add-comment") {
        documentObj[getElementByIdFn]("add-comment")[appendChildFn](threadedCommentForm);
      }
    });
  }

  for (let i = 0; i < commentReplies.length; ++i) {
    commentReplies[i]["add" + eventListenerProp](clickEvent, function(e) {
      e[preventDefaultFn]();
      const commentId = this["get" + attributeProp]("data-comment-id");
      loadCommentForm(this[hrefProp]);
      if (threadedCommentForm[parentElementProp].id !== "c" + commentId) {
        documentObj[getElementByIdFn]("c" + commentId)[appendChildFn](threadedCommentForm);
      }
    });
  }

  for (let i = 0; i < contactForms.length; ++i) {
    contactForms[i]["add" + eventListenerProp]("submit", function(e) {
      e[preventDefaultFn]();
      const form = e[targetProp];
      addClass(form, "loading");
      const formData = new FormData(form);
      let data = "blogID=" + blogId;
      formData.forEach((value, key) => {
        data += "&" + encodeURIComponentFn(key) + "=" + encodeURIComponentFn(value);
      });
      const url = httpsPrefix + bloggerDomain + "contact-form.do";
      const xhr = new XMLHttpRequestObj();
      xhr[openFn]("post", url);
      xhr[setRequestHeaderFn](contentTypeHeader, "application/x-www-form-urlencoded");
      xhr[sendFn](data);
      xhr.onreadystatechange = function() {
        removeClass(form, "loading");
        if (this.readyState === 4 && this.status === 200 && this.response !== "") {
          const response = parseJSON(this[responseTextProp].trim());
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

  function initializeFeatures(isImmediate) {
    if (!isImmediate) {
      documentObj[removeFn + eventListenerProp](mousemoveEvent, initializeFeatures);
      documentObj[removeFn + eventListenerProp](touchstartEvent, initializeFeatures);
      documentObj[removeFn + eventListenerProp](scrollEvent, initializeFeatures);
    }

    Defer.domz(".custom-posts", 1, null, jo[loadCustomPostsFn], null, { rootMargin: "300%" });

    if (noscriptElements.length > 0) {
      for (let i = 0; i < noscriptElements.length; ++i) {
        const noscript = noscriptElements[i];
        const content = noscript[innerHTMLProp];
        const textarea = documentObj[createElementFn]("textarea");
        textarea[innerHTMLProp] = content.replace(/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
        const div = documentObj[createElementFn]("div");
        div[innerHTMLProp] = textarea.value;
        if (i === 0) addClass(div, "feature-image full-width");
        noscript[parentElementProp][insertBeforeFn](div, noscript);
      }
      Defer.domz('[lazyload="true"]', 1, "loaded", processImage, null, { rootMargin: "300%" });
    }

    if (postBody) {
      if (relatedPosts && relatedInline) {
        relatedInline[innerHTMLProp] = relatedPosts[innerHTMLProp];
        relatedInline["set" + attributeProp]("data-no-item", relatedPosts["get" + attributeProp]("data-no-item"));
      }
      if (adsPost) {
        const delimiters = postBody[querySelectorAllFn](innerAdsDelimiter + "," + ignoreAdsDelimiter);
        const adNodes = adsPost.childNodes;
        const adCount = adNodes.length;
        const validDelimiters = [];
        for (let i = 0; i < delimiters.length; i++) {
          const closestIgnored = delimiters[i].closest(ignoreAdsDelimiter);
          if (!closestIgnored || delimiters[i] === closestIgnored) {
            validDelimiters.push(delimiters[i]);
          }
        }
        for (let i = 0; i < adCount; i++) {
          const insertIndex = i === adCount - 1 ? validDelimiters.length - 1 : MathObj.round(validDelimiters.length / adCount) * i;
          const insertNode = i === 0 ? validDelimiters[0] : validDelimiters[insertIndex][nextSiblingProp];
          if (insertNode) {
            insertNode[parentElementProp][insertBeforeFn](adNodes[0], insertNode);
          } else if (i === adCount - 1) {
            postBody[appendChildFn](adNodes[0]);
          }
        }
      }
      if (autoTOC && autoTOC !== falseStr && tocTempFn && postBody[firstChildProp]) {
        const headings = postBody[querySelectorAllFn]("h2,h3,h4,h5,h6");
        const tocDiv = documentObj[createElementFn]("div");
        const tocPosition = postBody[querySelectorFn](positionTOC);
        const tocItems = [];
        for (let i = 0; i < headings.length; i++) {
          const heading = headings[i];
          const text = heading[textContentProp];
          const level = parseIntFn(heading[tagNameProp].replace("H", ""));
          heading.id = text;
          tocItems.push({ level, title: text, id: text });
        }
        const insertTarget = tocPosition ? tocPosition[nextSiblingProp] || tocPosition : postBody[firstChildProp];
        if (tocItems.length > 0) {
          tocDiv[innerHTMLProp] = tocTempFn(tocItems).trim();
          insertTarget[parentElementProp][insertBeforeFn](tocDiv, insertTarget);
        }
      }
    }

    if (!isPreview) {
      if (caPubPrefix) {
        if (typeof adsbygoogle === undefinedStr) adsbygoogle = [];
        Defer.js(httpsPrefix + "pagead2.googlesyndication.com/pagead/js/" + adsbygoogleStr + ".js?client=" + caPubPrefix, adsbygoogleStr, 100);
      }
      if (analyticId && analyticId !== falseStr) {
        Defer.js(httpsPrefix + "www.googletagmanager.com/gtag/js?id=" + analyticId, "analytics", 100, () => {
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new DateObj());
          gtag("config", analyticId);
        });
      }
      if (jtCallbackFn) jtCallbackFn();
    }
    if (blogId) {
      Defer.css(httpsPrefix + bloggerDomain + "dyn-css/authorization.css?targetBlogID=" + blogId);
    }
  }

  if (currentPage) {
    documentObj[titleProp] = documentObj[titleProp].replace(titleSeparator, titleSeparator + pageTitle + " " + currentPage + titleSeparator);
  }

  Defer.domz(".lazyload", 1, "loaded", processImage, null, { rootMargin: "300%" });
  Defer.domz("#post-pager", 1, null, processLinks, null, { rootMargin: "300%" });
  Defer.domz("#pagination", 1, null, createPagination, null, { rootMargin: "300%" });

  if (isLazyLoaded) {
    initializeFeatures(false);
  } else {
    if (localStorageObj) localStorageObj["set" + itemFn]("lazy", 1);
    documentObj["add" + eventListenerProp](mousemoveEvent, initializeFeatures);
    documentObj["add" + eventListenerProp](touchstartEvent, initializeFeatures);
    documentObj["add" + eventListenerProp](scrollEvent, initializeFeatures);
  }
})();