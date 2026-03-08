Defer(() => {
    const images = document.querySelectorAll(".entry-text img");
    if (images.length > 0) {
      images.forEach(e => e.classList.add("zoomable"));
      if (typeof Zoom === 'function') {
        Zoom(".zoomable", {
        });
      } else {
        console.error("Smooth Zoom library is not loaded.");
      }
    } else {
      console.warn("No images found in .entry-text.");
    }
  }, 1000); 
  
  /* img の src の "w800-e90-rw" を "w0-e90-rw" に 書き換え*/
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
  }, 7000); 
  
  Defer(function() {
    // ウィンドウの幅が800pxより大きい場合のみ実行
    if (window.innerWidth > 800) {
      // 画像のsrc属性を変更
      var imageFullSize2 = document.querySelectorAll('img');
      imageFullSize2.forEach(function(img) {
        var src = img.src;
        if (src.includes('w800-e90-rw')) {
          var newFullImgSrc2 = src.replace('w800-e90-rw', 'w0-e90-rw');
          img.src = newFullImgSrc2;
        }
      });
    }
  }, 20000); 

  Defer(function() {
    // ウィンドウの幅が800pxより大きい場合のみ実行
    if (window.innerWidth > 800) {
      // 画像のsrc属性を変更
      var imageFullSize3 = document.querySelectorAll('img');
      imageFullSize3.forEach(function(img) {
        var src = img.src;
        if (src.includes('w1200-e90-rw')) {
          var newFullImgSrc3 = src.replace('w1200-e90-rw', 'w0-e90-rw');
          img.src = newFullImgSrc3;
        }
      });
    }
  }, 30000); 

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Zoom=t()}(this,(function(){"use strict";const e=(e,{background:t,useMaximumSize:o=!0,onTransitionEnd:n})=>{const i=e.currentSrc||e.src,{srcset:r,naturalWidth:a}=e,{offsetWidth:s,clientHeight:d}=document.documentElement,{width:c,height:l,left:m,top:u}=e.getBoundingClientRect(),h=s/2-m-c/2,f=(d-l)/2-u,g=Math.min(s/c,d/l),v=r.match(/ ([0-9]+)w/gm)||[],p=(o?Math.max(a,...v.map((e=>+e.trim().replace("w",""))).filter((e=>!Number.isNaN(e)&&a<e))):a)/c,y=Math.min(g,p),E=document.createElement("div"),b=document.createElement("img"),L=e=>{"Escape"===e.key&&w()},w=()=>{E.classList.remove("zoom-bg--reveal"),b.style.transform="",b.addEventListener("transitionend",(()=>{E.remove(),e.classList.remove("zoom-original--hidden"),b.remove()}),{once:!0}),E.removeEventListener("click",w),b.removeEventListener("click",w),window.removeEventListener("scroll",w),window.removeEventListener("resize",w),document.removeEventListener("keydown",L)};if(E.classList.add("zoom-bg"),t)if("auto"===t){const{r:t,g:o,b:n}=function(e,t,o){const n={r:0,g:0,b:0},i=document.createElement("canvas"),r=i.getContext("2d"),a=Math.sqrt(t),s=Math.sqrt(o);if(!r)return n;i.width=a,i.height=s;try{r.drawImage(e,0,0,a,s);const t=r.getImageData(0,0,a,s),{data:o}=t,{length:i}=o,d=i/20;for(let e=0;e<i;e+=20)n.r+=o[e],n.g+=o[e+1],n.b+=o[e+2];n.r=Math.floor(n.r/d),n.g=Math.floor(n.g/d),n.b=Math.floor(n.b/d)}catch(e){return n}return n}(e,c,l);E.style.backgroundColor=`rgba(${t}, ${o}, ${n}, 0.95)`}else E.style.background=t;b.classList.add("zoom-img"),b.src=i,b.width=c,b.height=l,b.style.top=`${u+window.scrollY}px`,b.style.left=`${m}px`,b.style.width=`${c}px`,b.style.height=`${l}px`,E.addEventListener("click",w,{once:!0}),b.addEventListener("click",w,{once:!0}),b.addEventListener("transitionend",(()=>{null==n||n(b)}),{once:!0}),window.addEventListener("scroll",w,{once:!0,passive:!0}),window.addEventListener("resize",w,{once:!0,passive:!0}),document.addEventListener("keydown",L,{passive:!0}),document.body.append(E,b),e.classList.add("zoom-original--hidden"),window.requestAnimationFrame((()=>{window.setTimeout((()=>{b.style.transform=`matrix(${y}, 0, 0, ${y}, ${h}, ${f})`,E.classList.add("zoom-bg--reveal")}))}))};return function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".zoom-bg,.zoom-img{cursor:zoom-out;z-index:90000}.zoom-img{display:block;position:absolute;transition:transform .3s ease-in-out}.zoom-bg{background-color:rgba(0,0,0,.95);height:100vh;left:0;opacity:0;position:fixed;top:0;transition:opacity .3s ease-in-out;width:100vw}.zoom-bg.zoom-bg--reveal{opacity:1}.zoom-original--hidden{visibility:hidden}"),function(t,o={}){const n=t=>{var n;null===(n=o.onClick)||void 0===n||n.call(o,t.target),e(t.target,o)},i=e=>{var t;e instanceof HTMLElement&&("IMG"!==e.tagName?null===(t=e.querySelector("img"))||void 0===t||t.addEventListener("click",n):e.addEventListener("click",n))},r=e=>{var t;e instanceof HTMLElement&&("IMG"!==e.tagName?null===(t=e.querySelector("img"))||void 0===t||t.removeEventListener("click",n):e.removeEventListener("click",n))},a=e=>{if(e){if("string"==typeof e){document.querySelectorAll(e).forEach(i);const t=document.createElement("style"),{head:o}=document;return t.appendChild(document.createTextNode(`${e}{cursor:zoom-in}`)),void o.appendChild(t)}e instanceof HTMLElement?i(e):e.forEach(i)}};return t&&a(t),{zoom:e,attach:a,detach:e=>{e&&("string"!=typeof e?e instanceof HTMLElement?r(e):e.forEach(r):document.querySelectorAll(e).forEach(r))}}}}));