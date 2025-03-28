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
  }, 5000); 
  
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

Defer.js('https://cdn.jsdelivr.net/npm/smooth-zoom@latest/dist/zoom.min.js','smooth-zoom',100);