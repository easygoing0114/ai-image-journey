
/*@shinsenter/defer.js@3.7.0*/
!(function(i,u,f){function s(n,t,e){N?z(n,t):((e=e===f?s.lazy:e)?q:S).push(n,Math.max(e?350:0,t))} function c(n){return"string"==typeof(n=n||{})?{id:n}:n} function r(t,n,e,o){a(n.split(" "),function(n){(o||i)[t+"EventListener"](n,e||m)})} function a(n,t){n.map(t)} function l(n,t){a(D.call(n.attributes),function(n){t(n.name,n.value)})} function d(n,t,e,o,i,c){if(i=I.createElement(n),e&&r(w,b,e,i),t) for(c in t)i[j](c,t[c]);return o&&I.head.appendChild(i),i} function p(n,t){return D.call((t||I).querySelectorAll(n))} function h(o,n){a(p("source,img",o),h),l(o,function(n,t,e){(e=y.exec(n))&&o[j](e[1],t)}),"string"==typeof n&&(o.className+=" "+n),o[b]&&o[b]()} function n(n,t,e){s(function(o){a(o=p(n||"script[type=deferjs]"),function(n,e){n[A]&&(e={},l(n,function(n,t){n!=C&&(e[n==A?"href":n]=t)}),e.as=g,e.rel="preload",d(v,e,f,I))}),(function i(n,e,t){(n=o[k]())&&(e={},l(n,function(n,t){n!=C&&(e[n]=t)}),t=e[A]&&!("async" in e),(e=d(g,e)).text=n.text,n.parentNode.replaceChild(e,n),t?r(w,b+" error",i,e):i())})()},t,e)} function m(n,t){for(t=N?(r(e,o),q):(r(e,x),N=s,q[0]&&r(w,o),S);t[0];)z(t[k](),t[k]())} var y=/^data-(.+)/,v="link",g="script",b="load",t="pageshow",w="add",e="remove",o="touchstart mousemove mousedown keydown wheel",x="on"+t in i?t:b,j="setAttribute",k="shift",A="src",C="type",E=i.IntersectionObserver,I=i.document||i,N=/p/.test(I.readyState),S=[],q=[],z=i.setTimeout,D=S.slice;s.all=n,s.domz=function(n,t,i,z,c,r){s(function(e){function o(n){c&&!1===c(n)||h(n,i)} e=E?new E(function(n){a(n,function(n,t){n.isIntersecting&&(t=n.target)&&(z&&z(t),e.unobserve(t),o(t))})},r):f,a(p(n||"[data-src]"),function(n){n[u]||(n[u]=s,e?e.observe(n):o(n))})},t,!1)},s.dom=function(n,t,i,c,r){s(function(e){function o(n){c&&!1===c(n)||h(n,i)} e=E?new E(function(n){a(n,function(n,t){n.isIntersecting&&(e.unobserve(t=n.target),o(t))})},r):f,a(p(n||"[data-src]"),function(n){n[u]||(n[u]=s,e?e.observe(n):o(n))})},t,!1)},s.css=function(n,t,e,o,i){(t=c(t)).href=n,t.rel="stylesheet",s(function(){d(v,t,o,I)},e,i)},s.js=function(n,t,e,o,i){(t=c(t)).src=n,s(function(){d(g,t,o,I)},e,i)},s.reveal=h,i[u]=s,N||r(w,x),n()})(this,"Defer")

'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');

// Defer.js example
// Defer.css('your_css_url','your-style-id',100);
// Defer.js('your_script_url','your-script-id',100);

/* 外部スクリプトの読み込み */
if (document.querySelector('#toc') !== null) {
  Defer.js('https://files.ai-image-journey.com/js/page_toc.js', 'page_toc', 100);
}

if (document.querySelector('.mermaid') !== null) {
  Defer.js('https://files.ai-image-journey.com/js/mermaid.min.js', 'mermaid', 100);
}

if (document.querySelector('.chartjs') !== null) {
  Defer.js('https://files.ai-image-journey.com/js/chart.umd.min.js', 'chartjs', 100);
  Defer.js('https://files.ai-image-journey.com/js/chartjs-plugin-datalabels.min.js', 'chartjsdatalabelsplugin', 500);
  Defer.js('https://files.ai-image-journey.com/js/chartjs_arrow_plugin.js', 'chartjsarrowplugin', 500);
}

if (document.querySelector('.markdown') !== null) {
  Defer.js('https://cdnjs.cloudflare.com/ajax/libs/turndown/7.2.0/turndown.min.js', 'turndown', 100);
  Defer.js('https://unpkg.com/turndown-plugin-gfm/dist/turndown-plugin-gfm.js', 'turndownplugin', 100);
  Defer.js('https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js', 'marked', 100);
  Defer.js('https://cdn.jsdelivr.net/npm/marked-extended-tables/lib/index.umd.js', 'markedplugin', 100);
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
Defer.dom('.defer-img img', 300);
Defer.dom('.defer-iframe iframe', 1500);

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

    // 3番目以降の画像の遅延読み込みを解除
    imageEagerLoad.slice(2).forEach((img, index) => {
        Defer(function() {
            img.removeAttribute('loading');
        }, (index * 200)); // 初回の0.2秒 + 0.2秒の間隔
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
    let chartsInitialized = false;
    
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
    
    function initializeCharts() {
        // 初回のみChart.jsの設定を行う
        if (!chartsInitialized) {
            Chart.register(ChartDataLabels);
            Chart.defaults.layout.padding = 24;
            chartsInitialized = true;
        }
        
        // チャート作成
        createAllCharts();
        
        // テーマカラーの適用
        updateAllChartColors();
        
        // Canvas要素のサイズ設定
        document.querySelectorAll('.chartjs').forEach(canvas => {
            canvas.style.width = 'auto';
            canvas.style.height = 'auto';
        });
    }
    
    function handleResize() {
        // リサイズ時はチャートの色を更新し、Chart.jsの内蔵リサイズ機能を使用
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
    }, 3000);
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