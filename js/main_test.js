/*@shinsenter/defer.js@3.7.0*/
!(function(i,u,f){function s(n,t,e){N?z(n,t):((e=e===f?s.lazy:e)?q:S).push(n,Math.max(e?350:0,t))} function c(n){return"string"==typeof(n=n||{})?{id:n}:n} function r(t,n,e,o){a(n.split(" "),function(n){(o||i)[t+"EventListener"](n,e||m)})} function a(n,t){n.map(t)} function l(n,t){a(D.call(n.attributes),function(n){t(n.name,n.value)})} function d(n,t,e,o,i,c){if(i=I.createElement(n),e&&r(w,b,e,i),t) for(c in t)i[j](c,t[c]);return o&&I.head.appendChild(i),i} function p(n,t){return D.call((t||I).querySelectorAll(n))} function h(o,n){a(p("source,img",o),h),l(o,function(n,t,e){(e=y.exec(n))&&o[j](e[1],t)}),"string"==typeof n&&(o.className+=" "+n),o[b]&&o[b]()} function n(n,t,e){s(function(o){a(o=p(n||"script[type=deferjs]"),function(n,e){n[A]&&(e={},l(n,function(n,t){n!=C&&(e[n==A?"href":n]=t)}),e.as=g,e.rel="preload",d(v,e,f,I))}),(function i(n,e,t){(n=o[k]())&&(e={},l(n,function(n,t){n!=C&&(e[n]=t)}),t=e[A]&&!("async" in e),(e=d(g,e)).text=n.text,n.parentNode.replaceChild(e,n),t?r(w,b+" error",i,e):i())})()},t,e)} function m(n,t){for(t=N?(r(e,o),q):(r(e,x),N=s,q[0]&&r(w,o),S);t[0];)z(t[k](),t[k]())} var y=/^data-(.+)/,v="link",g="script",b="load",t="pageshow",w="add",e="remove",o="touchstart mousemove mousedown keydown wheel",x="on"+t in i?t:b,j="setAttribute",k="shift",A="src",C="type",E=i.IntersectionObserver,I=i.document||i,N=/p/.test(I.readyState),S=[],q=[],z=i.setTimeout,D=S.slice;s.all=n,s.domz=function(n,t,i,z,c,r){s(function(e){function o(n){c&&!1===c(n)||h(n,i)} e=E?new E(function(n){a(n,function(n,t){n.isIntersecting&&(t=n.target)&&(z&&z(t),e.unobserve(t),o(t))})},r):f,a(p(n||"[data-src]"),function(n){n[u]||(n[u]=s,e?e.observe(n):o(n))})},t,!1)},s.dom=function(n,t,i,c,r){s(function(e){function o(n){c&&!1===c(n)||h(n,i)} e=E?new E(function(n){a(n,function(n,t){n.isIntersecting&&(e.unobserve(t=n.target),o(t))})},r):f,a(p(n||"[data-src]"),function(n){n[u]||(n[u]=s,e?e.observe(n):o(n))})},t,!1)},s.css=function(n,t,e,o,i){(t=c(t)).href=n,t.rel="stylesheet",s(function(){d(v,t,o,I)},e,i)},s.js=function(n,t,e,o,i){(t=c(t)).src=n,s(function(){d(g,t,o,I)},e,i)},s.reveal=h,i[u]=s,N||r(w,x),n()})(this,"Defer")

    'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');
    
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
    
    function jtCallback(){
    
    /*Your Script is here to maintain performance.*/
    
    // the example below if you use url.
    // Defer.css('your_css_url','your-style-id',100);
    // Defer.js('your_script_url','your-script-id',100);
    
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
      }, 50); // 0.05秒遅延実行
    
    /* .defer-img差し替え */
    Defer.dom('.defer-img img', 100); // 0.1秒後に処理
    
    /* loading="lazy" の順次解除 */
    Defer(function() {
        // すべての <img> 要素を配列に変換
        var imageEagerLoad = Array.from(document.querySelectorAll('img'));
        
        if (imageEagerLoad.length === 0) return;
    
        // 初回の要素を0.1秒後に処理
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
    }, 0);
    
    /* リンクカードの作成 */
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
            
            // Hugging Face models
            'huggingface.co/bluepen5805/blue_pencil-flux1': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ff1638f0-0295-45e8-b038-d7f376f26873/ComfyUI_00023_.jpeg',
            'huggingface.co/bluepen5805/anima_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/48499ad8-33bb-4a2c-aac8-af6c6edcc280/00494-20240625200426-223644773-30-5.jpeg',
            'huggingface.co/bluepen5805/blue_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/55619f31-4395-4e9b-a94d-208460a9f7d2/00494-20240623160056-880978405-30-5.jpeg',
            'huggingface.co/easygoing0114': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQc6TaqYJzaLshb3_gqq033VJHulIafa-B9uDdLZJ8mMur0lpHWCgGapiBPH2Cqclz2xzD3UW_SaORKAjy2mabO2EuDCQv5IwD_XhUCpqakhEs0v5K4r5ud_eqyDlF6BPtLqbKYIMR00wd5ire9pCcFc1ieii2sBI6tMMmVxprH0Fhafk/w200-e90-rw/Profile%20image.png'
          };
          
          // デフォルトのCivitai画像
          this.DEFAULT_CIVITAI_IMAGE = 'https://education.civitai.com/wp-content/uploads/2023/08/Edu1.png';
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
    //        console.error('Error getting custom image:', error);
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
            imageUrl = imageUrl.replace(/s1600|w0-e90-rw|w800-e90-rw/g, 'w400-e90-rw');
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
    
    /* dark-mode ボタン */
    Defer(function() {
        var buttons = document.querySelectorAll(".toggle-dark-mode-btn");
    
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                var htmlElement = document.querySelector("html");
                var classList = htmlElement.classList;
                var isDarkMode = classList.contains("dark-mode");
                var twitterThemeMeta = document.querySelector("#twitter-theme");
    
                if (isDarkMode) {
                    classList.remove("dark-mode");
                    localStorage.setItem('theme', 'light'); // ライトモードを記憶
                    twitterThemeMeta.setAttribute('content', 'light'); // Metaタグを更新
                } else {
                    classList.add("dark-mode");
                    localStorage.setItem('theme', 'dark'); // ダークモードを記憶
                    twitterThemeMeta.setAttribute('content', 'dark'); // Metaタグを更新
                }
            });
        });
    
        // ページ読み込み時にlocalStorageの値をチェックして適用
        var savedTheme = localStorage.getItem('theme');
        var twitterThemeMeta = document.querySelector("#twitter-theme");
        if (savedTheme === 'dark') {
            document.querySelector("html").classList.add("dark-mode");
            twitterThemeMeta.setAttribute('content', 'dark'); // Metaタグを更新
        } else {
            twitterThemeMeta.setAttribute('content', 'light'); // Metaタグを更新
        }
    }, 500); // 500ミリ秒後遅延実行
    
    /* mermaid 読み込み */
    Defer(function () {
      const initializeMermaid = async () => {
        const mermaidCodes = document.querySelectorAll('code.mermaid');
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
    }, 600); // 600ms 遅延実行
    
    
    /* table の font-size と padding を画面の最大幅に合わせて変更 */
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
        
    }, 700); // 700ミリ秒遅延実行
    
    // 埋め込みコンテンツの設定
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
    }, 800); // DOMContentLoaded から0.8秒後に実行開始
    
    /* iframe */
    Defer.dom('.defer-iframe iframe', 900);
    
    /* GPUアクセラレーション除去 */
    Defer(function() {
            var elements = document.querySelectorAll('.gpu-accelerated');
            elements.forEach(function(element) {
                element.classList.remove('gpu-accelerated');
            });
        }, 1000);  // 1000ミリ秒後に実行
    
    /* DMCA バッジ */
    Defer.js('//images.dmca.com/Badges/DMCABadgeHelper.min.js','dmca',1500);
    
    Defer(function() {
      // ウィンドウの幅が800pxより大きい場合のみ実行
      if (window.innerWidth > 800) {
        // 画像のsrc属性を変更
        var imageFullSize = document.querySelectorAll('img');
        imageFullSize.forEach(function(img) {
          var src = img.src;
          if (src.includes('w800-e90-rw')) {
            var newFullImgSrc = src.replace('w800-e90-rw', 'w0-e90-rw');
            img.src = newFullImgSrc;
          }
        });
      }
    }, 5000); // 5秒（5000ミリ秒）遅延実行
    
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
    }, 10000); // 10秒（10000ミリ秒）遅延実行
    
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
    }, 15000); // 15秒（15000ミリ秒）遅延実行
    
    /* img の src の "w800-e90-rw" を "w0-e90-rw" に 再度書き換え*/
    Defer(function() {
      // ウィンドウの幅が800pxより大きい場合のみ実行
      if (window.innerWidth > 800) {
        // 画像のsrc属性を変更
        var imageFullSize2 = document.querySelectorAll('img');
        imageFullSize2.forEach(function(img) {
          var src = img.src;
          if (src.includes('w800-e90-rw')) {
            var newFullImgSrc = src.replace('w800-e90-rw', 'w0-e90-rw');
            img.src = newFullImgSrc;
          }
        });
      }
    }, 20000); // 20秒（200000ミリ秒）遅延実行
    
    }
    
    var ImgSize = 400; // 読み込み画像の解像度を設定

    

/*js@0.5.5/main.js*/

// Global object and configuration
const config = {};

(function initializeTemplate() {
    // Window and document references
    const win = window;
    const doc = document;
    
    // Utility functions and global variables
    const setTimeout = win.setTimeout;
    const clearTimeout = win.clearTimeout;
    const DateObj = Date;
    const MathObj = Math;
    const parseInt = win.parseInt;
    
    // Configuration variables from global scope
    const isPreview = typeof isPreview !== 'undefined' && isPreview;
    const siteUrl = 'https://www.' + (typeof siteUrl !== 'undefined' ? siteUrlVj : '');
    const currentUrl = typeof currentUrl !== 'undefined' ? currentUrl : '';
    const blogId = typeof blogId !== 'undefined' ? blogId : '';
    const blogTitle = typeof blogTitle !== 'undefined' ? blogTitle : '';
    const titleSeparator = typeof titleSeparator !== 'undefined' ? titleSeparator : ' - ';
    const pageTitle = typeof pageTitle !== 'undefined' ? pageTitle : 'Page';
    
    // Analytics and Ads configuration
    const analyticId = typeof analyticId !== 'undefined' && analyticId;
    const caPubAdsense = typeof caPubAdsense !== 'undefined' && caPubAdsense;
    const adsensePublisherId = caPubAdsense ? 'ca-pub-' + caPubAdsense : null;
    
    // TOC and Callback configurations
    const autoTOC = typeof autoTOC !== 'undefined' && autoTOC;
    const tocTemplate = typeof toc_temp === 'function' ? toc_temp : null;
    const positionTOC = typeof positionTOC !== 'undefined' && positionTOC;
    const jtCallback = typeof jtCallback === 'function' ? jtCallback : null;

    // Utility Functions
    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function addClass(element, className) {
        if (!hasClass(element, className)) {
            const currentClass = element.className;
            element.className = currentClass + (currentClass ? ' ' : '') + className;
        }
    }

    function removeClass(element, className) {
        element.className = element.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)'), '').trim();
    }

    function removeClassTemporarily(element, className, delay = 300) {
        removeClass(element, className);
        setTimeout(() => {
            removeClass(element, 'd-block');
        }, delay);
    }

    function arrayContains(array, item) {
        return array.indexOf(item) !== -1;
    }

    // Pagination and URL parameter handling
    function getUrlParameter(param, url) {
        const regex = new RegExp('[?&]' + param + '=([^&#=])');
        const match = regex.exec(url);
        return match ? match[1] : null;
    }

    // Safe JSON parsing
    function safeJSONParse(jsonString) {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            return false;
        }
    }

    // WebP Support Check
    let webpSupport;
    const webpTestImage = new Image();
    webpTestImage.onload = webpTestImage.onerror = function() {
        webpSupport = this.height === 2;
    };
    webpTestImage.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    // Scroll header handling
    let lastScrollPosition = 0;
    win.addEventListener('scroll', function() {
        const currentScrollPosition = this.pageYOffset;
        const headerElement = headerRef;

        if (currentScrollPosition < lastScrollPosition && hasClass(headerElement, 'header-hidden')) {
            const hideTimer = setTimeout(() => {
                removeClass(headerElement, 'header-hidden');
            }, 500);
        } else if (currentScrollPosition > lastScrollPosition && hasClass(headerElement, 'header-animate')) {
            clearTimeout(hideTimer);
            addClass(headerElement, 'header-hidden');
        }

        lastScrollPosition = currentScrollPosition;
    }, false);

// Image Optimization and Lazy Loading
function optimizeResponsiveImage(imageElement) {
    if (imageElement.tagName === 'IMG') {
        const devicePixelRatio = localStorage ? (window.devicePixelRatio && window.devicePixelRatio > 1 ? window.devicePixelRatio : 1.5) : 1;
        
        const imageWidth = (imageElement.offsetWidth * devicePixelRatio).toFixed();
        const parentWidth = (imageElement.parentElement.offsetWidth * devicePixelRatio).toFixed();
        const grandparentWidth = (imageElement.parentElement.parentElement.offsetWidth * devicePixelRatio).toFixed();
        const imageHeight = (imageElement.offsetHeight * devicePixelRatio).toFixed();

        let imageSource = '';
        const currentSource = imageElement.getAttribute('src');
        
        // Determine image sizing strategy
        const isRatioClass = hasClass(imageElement.parentElement, 'ratio');
        const imageSizeClass = isRatioClass 
            ? `w${ImgSize}-e90${webpSuffix}` 
            : `w${ImgSize}-e90${webpSuffix}`;
        
        if (currentSource) {
            imageSource = currentSource;
            
            // Modify image source based on certain conditions
            if (dynamicImageLoading) {
                const imageVariant = dynamicImageIndex 
                    ? dynamicImageIdentifier + imageSizeClass 
                    : currentSource + '=' + imageSizeClass;
                
                imageElement.setAttribute('src', imageVariant);
            }
        } else if (dynamicImageLoading) {
            // Fallback to default image
            imageElement.setAttribute('src', dynamicVideoIdentifier + '/mqdefault.jpg');
        }
    }
}

// Pagination Handling
function handlePagination(paginationElement) {
    const paginationAttribute = paginationElement.getAttribute('data-pagination');
    
    if (paginationAttribute !== 'false') {
        const maxResults = paginationElement.getAttribute('data-max-results');
        const labelFilter = paginationElement.getAttribute('data-label');
        
        const labelPath = labelFilter ? '-/' + encodeURIComponent(labelFilter) + '/' : '';
        const labelSearchPath = labelFilter ? '/label/' + labelFilter : '';
        
        const currentMaxResults = getUrlParameter('max-results', currentUrl) || maxResults;
        const currentPage = getUrlParameter('page', currentUrl) || 1;
        
        // Fetch pagination data dynamically
        Defer.js(
            `${siteUrl}/feeds/posts/summary/${labelPath}?alt=json&callback=jo.paginationByKey&max-results=1`
        );
        
        // Pagination callback function
        jo.paginationByKey = function(jsonResponse) {
            const feed = jsonResponse.feed;
            const totalResults = parseInt(feed.openSearch$totalResults.$t);
            
            if (maxResults < totalResults) {
                const paginationInfo = calculatePagination(
                    totalResults, 
                    currentPage, 
                    currentMaxResults, 
                    5  // Maximum page buttons
                );
                
                const paginationContainer = document.createElement('div');
                addClass(paginationContainer, 'pagination mb-0');
                
                // Previous page button
                if (paginationInfo.currentPage !== 1) {
                    const prevButton = createPaginationButton(
                        paginationInfo.currentPage - 1, 
                        '', 
                        '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'
                    );
                    paginationContainer.appendChild(prevButton);
                }
                
                // Page number buttons
                if (!arrayContains(paginationInfo.pages, 1)) {
                    const firstPageButton = createPaginationButton(1, paginationInfo.currentPage, '1 . .');
                    paginationContainer.appendChild(firstPageButton);
                }
                
                paginationInfo.pages.forEach(pageNum => {
                    const pageButton = createPaginationButton(pageNum, paginationInfo.currentPage);
                    paginationContainer.appendChild(pageButton);
                });
                
                // Final page button
                if (!arrayContains(paginationInfo.pages, paginationInfo.totalPages)) {
                    const lastPageButton = createPaginationButton(
                        paginationInfo.totalPages, 
                        paginationInfo.currentPage, 
                        '. . ' + paginationInfo.totalPages
                    );
                    paginationContainer.appendChild(lastPageButton);
                }
                
                // Next page button
                if (paginationInfo.currentPage !== paginationInfo.totalPages) {
                    const nextButton = createPaginationButton(
                        paginationInfo.currentPage + 1, 
                        '', 
                        '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'
                    );
                    paginationContainer.appendChild(nextButton);
                }
                
                paginationElement.innerHTML = '';
                addClass(paginationContainer, 'pagination mb-0');
                
                if (jtCallback) jtCallback();
                removeClass(paginationElement, 'visually-hidden');
            }
        };
        
        // Date-based pagination callback
        jo.paginationByDate = function(jsonResponse) {
            const updatedMaxDate = jsonResponse.feed.entry[0].published.$t;
            const searchUrl = `${siteUrl}/search${labelSearchPath}?updated-max=${updatedMaxDate}&max-results=${currentMaxResults}&page=${currentPage}`;
            window.location.href = searchUrl;
        };
    } else {
        removeClass(paginationElement, 'visually-hidden');
    }
}

// Calculate Pagination Details
function calculatePagination(totalItems, currentPage, pageSize, maxPageButtons) {
    const totalPages = Math.ceil(totalItems / pageSize);
    
    currentPage = parseInt(currentPage);
    pageSize = parseInt(pageSize);
    maxPageButtons = parseInt(maxPageButtons);
    
    let startPage, endPage;
    
    if (totalPages <= maxPageButtons) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const halfButtons = Math.floor(maxPageButtons / 2);
        
        if (currentPage <= halfButtons) {
            startPage = 1;
            endPage = maxPageButtons;
        } else if (currentPage + halfButtons >= totalPages) {
            startPage = totalPages - maxPageButtons + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - halfButtons;
            endPage = currentPage + halfButtons;
        }
    }
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    
    const pages = Array.from({length: endPage + 1 - startPage}, (_, i) => startPage + i);
    
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}

// Create Pagination Button
function createPaginationButton(pageNumber, currentPage, buttonText) {
    const button = document.createElement('button');
    addClass(button, 'btn rounded-pill jt-icon-center');
    
    button.innerHTML = buttonText || pageNumber;
    button.setAttribute('data-page', pageNumber);
    
    if (pageNumber === currentPage) {
        addClass(button, 'jt-btn-primary');
    } else {
        addClass(button, 'jt-btn-light hover-btn-primary');
        
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const pageAttribute = this.getAttribute('data-page');
            
            if (pageAttribute == 1) {
                window.location.href = siteUrl + '/search' + labelSearchPath + '?max-results=' + currentMaxResults + '&page=' + pageAttribute;
            } else {
                const startIndex = (pageAttribute - 1) * currentMaxResults;
                Defer.js(
                    `${siteUrl}/feeds/posts/summary/${labelPath}?start-index=${startIndex}&alt=json&callback=jo.paginationByDate&max-results=1`
                );
            }
        });
    }
    
    return button;
}

// Custom Posts Loading
jo.loadCustomPosts = function(containerElement) {
    // Generate a unique identifier for this custom posts section
    const uniqueId = (Math.random() + 1).toString(36).substring(2);
    
    // Retrieve configuration attributes from the container
    const labelFilter = containerElement.getAttribute('data-label');
    const customContent = containerElement.getAttribute('data-content');
    const sortOrder = containerElement.getAttribute('data-sort-order');
    const maxResults = containerElement.getAttribute('data-max-results');
    const contentTemplate = containerElement.getAttribute('data-template');
    const randomSeed = containerElement.getAttribute('data-random-seed');
    
    // Construct the feed URL with appropriate filters
    const labelPath = labelFilter ? '-/' + encodeURIComponent(labelFilter.split(',')[0]) + '/' : '';
    const searchQuery = customContent ? '?q=' + encodeURIComponent(customContent) : '';
    const queryPath = searchQuery || labelPath;
    
    // Determine the number of posts to load
    const postCount = sortOrder ? parseInt(sortOrder) + 1 : maxResults;
    
    // Dynamically load posts via JSONP
    Defer.js(
        `${siteUrl}/feeds/posts/summary/${queryPath}alt=json&callback=jo.customPostsKey${uniqueId}&max-results=${postCount}`
    );
    
    // Callback function for processing loaded posts
    jo[`customPostsKey${uniqueId}`] = function(jsonResponse) {
        const totalResults = parseInt(jsonResponse.feed.openSearch$totalResults.$t);
        const categories = jsonResponse.feed.category;
        
        if (totalResults > 0) {
            // Prepare post collection object
            const postCollection = {
                title: customContent,
                posts: [],
                categories: categories
            };
            
            const entries = jsonResponse.feed.entry;
            let processedPostCount = 0;
            
            for (let i = 0; i < entries.length; ++i) {
                // Stop if we've reached the desired number of posts
                if (processedPostCount === maxResults) break;
                
                const entry = entries[i];
                const postLink = entry.link[entry.link.length - 1].href;
                
                // Skip duplicate posts
                if (postLink !== randomSeed) {
                    processedPostCount++;
                    
                    const postDetails = {
                        group_id: uniqueId,
                        url: postLink,
                        title: entry.title.$t,
                        summary: entry.summary.$t.trim(),
                        img: entry.media$thumbnail ? entry.media$thumbnail.url : null,
                        author: entry.author[0].name.$t,
                        comment: entry.thr$total ? entry.thr$total.$t : 0,
                        label: entry.category,
                    };
                    
                    // Parse and format publication date
                    const publishDate = new Date(entry.published.$t);
                    postDetails.date = `${publishDate.getFullYear()}/${publishDate.getMonth() + 1}/${publishDate.getDate()}`;
                    
                    postCollection.posts.push(postDetails);
                }
            }
            
            // Apply custom template if provided
            const templateFunction = window[contentTemplate];
            if (typeof templateFunction === 'function' && postCollection.posts.length > 0) {
                // Optional: Reverse post order if specified
                if (sortOrder) {
                    postCollection.posts = postCollection.posts.slice().reverse();
                }
                
                // Render posts using custom template
                containerElement.innerHTML = templateFunction(postCollection);
                
                // Remove loading indicators
                removeClass(containerElement, 'visually-hidden');
                
                // Lazy load images within the rendered content
                Defer.domz(`.lazy-${uniqueId}`, 1, 'loaded', optimizeResponsiveImage, null, {rootMargin: '300%'});
            }
            
            // Optional callback after post rendering
            const postRenderCallback = window[containerElement.getAttribute('data-callback')];
            if (postRenderCallback && typeof postRenderCallback === 'function') {
                postRenderCallback();
            }
        }
    };
};

// External Link Handler
function handleExternalLinks(containerElement) {
    const links = containerElement.querySelectorAll('a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if link is external
        if (href && (href.startsWith('http://') || href.startsWith('https://')) && !href.includes(siteUrl)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// Form Submission Handler
function initializeFormSubmission() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formElement = event.target;
            addClass(formElement, 'loading');
            
            const formData = new FormData(formElement);
            let requestBody = `blogID=${blogId}`;
            
            // Serialize form data
            formData.forEach((value, key) => {
                requestBody += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            });
            
            const contactFormUrl = 'https://www.blogger.com/contact-form.do';
            const xhr = new XMLHttpRequest();
            
            xhr.open('POST', contactFormUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            
            xhr.onreadystatechange = function() {
                if (this.readyState === 4) {
                    removeClass(formElement, 'loading');
                    
                    if (this.status === 200 && this.responseText !== '') {
                        const response = safeJSONParse(this.responseText.trim());
                        
                        if (response && response.details.emailSentStatus === 'true') {
                            formElement.reset();
                            removeClass(formElement, 'send-error');
                            addClass(formElement, 'send-success');
                        } else {
                            removeClass(formElement, 'send-success');
                            addClass(formElement, 'send-error');
                        }
                    }
                }
            };
            
            xhr.send(requestBody);
        });
    });
}

// Initialization and Setup Function
function initializeTemplateFeatures() {
    // Deferred content loading and initialization
    function initializeDeferredContent(initialLoad = false) {
        // Custom posts loading
        if (document.querySelectorAll('.custom-posts').length > 0) {
            Defer.domz('.custom-posts', 1, null, jo.loadCustomPosts, null, {rootMargin: '300%'});
        }

        // Handle noscript image replacements
        if (document.querySelectorAll('.entry-text noscript').length > 0) {
            const noscriptElements = document.querySelectorAll('.entry-text noscript');
            
            for (let i = 0; i < noscriptElements.length; ++i) {
                const noscriptContent = noscriptElements[i].innerHTML;
                const placeholderElement = document.createElement('div');
                
                // Replace src with lazy loading attributes
                placeholderElement.innerHTML = noscriptContent.replace(
                    /src="(.?)"/g, 
                    'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"'
                );
                
                // Mark first image as feature image
                if (i === 0) {
                    addClass(placeholderElement.firstChild, 'feature-image full-width');
                }
                
                // Insert before noscript element
                noscriptElements[i].parentElement.insertBefore(placeholderElement.firstChild, noscriptElements[i]);
            }

            // Lazy load images
            Defer.domz('[lazyload="true"]', 1, 'loaded', optimizeResponsiveImage, null, {rootMargin: '300%'});
        }

        // Table of Contents (TOC) Generation
        if (autoTOC && tocTemplate && document.querySelector('.entry-text')) {
            const headingElements = document.querySelectorAll('.entry-text h1, .entry-text h2, .entry-text h3');
            const tocContainer = document.createElement('div');
            const tocItems = [];

            for (let i = 0; i < headingElements.length; i++) {
                const heading = headingElements[i];
                const headingText = heading.textContent;
                const headingLevel = parseInt(heading.tagName.replace('H', ''));
                
                // Assign unique ID to heading
                heading.id = headingText;
                
                tocItems.push({
                    text: headingText,
                    level: headingLevel
                });
            }

            // Render TOC using template
            if (tocItems.length > 0) {
                tocContainer.innerHTML = tocTemplate(tocItems);
                
                // Insert TOC at specified position
                const insertReference = positionTOC || document.querySelector('.entry-text').firstChild;
                insertReference.parentElement.insertBefore(tocContainer, insertReference);
            }
        }
    }

    // Conditional Initialization
    if (!isPreview) {
        // Google AdSense Integration
        if (adsensePublisherId) {
            // Ensure AdSense script is loaded
            if (typeof adsbygoogle === 'undefined') {
                window.adsbygoogle = [];
            }
            Defer.js(
                'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + adsensePublisherId, 
                'adsbygoogle', 
                100
            );
        }

        // Google Analytics Integration
        if (analyticId && analyticId !== 'false') {
            Defer.js(
                'https://www.googletagmanager.com/gtag/js?id=' + analyticId, 
                'analytics', 
                100, 
                function() {
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', analyticId);
                }
            );
        }

        // Custom Callback Execution
        if (jtCallback) {
            jtCallback();
        }
    }

    // Page Title Handling
    const pageNumberParam = getUrlParameter('page', currentUrl);
    if (pageNumberParam) {
        document.title = document.title.replace(
            titleSeparator, 
            titleSeparator + pageTitle + ' ' + pageNumberParam + titleSeparator
        );
    }

    // Lazy Loading and Deferred Initialization
    Defer.domz('.lazyload', 1, 'loaded', optimizeResponsiveImage, null, {rootMargin: '300%'});
    Defer.domz('#post-pager', 1, null, handleExternalLinks, null, {rootMargin: '300%'});
    Defer.domz('#pagination', 1, null, handlePagination, null, {rootMargin: '300%'});

    // Final Initialization
    if (localStorage) {
        initializeDeferredContent(false);
        document.addEventListener('DOMContentLoaded', () => {
            document.addEventListener('scroll', initializeDeferredContent);
            document.addEventListener('mousemove', initializeDeferredContent);
        });
    } else {
        initializeDeferredContent(true);
    }
}

// Execute Template Initialization
initializeTemplateFeatures();
})();