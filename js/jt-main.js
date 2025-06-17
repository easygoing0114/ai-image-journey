
/*related articles*/
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

var ImgSize = 400;

const jo = {};

(function() {
  var windowObj = window,
    documentObj = document,
    setTimeoutFn = setTimeout,
    clearTimeoutFn = clearTimeout,
    DateObj = Date,
    MathObj = Math,
    parseIntFn = parseInt,
    encodeURIComponentFn = encodeURIComponent,
    RegExpObj = RegExp,
    XMLHttpRequestObj = XMLHttpRequest,
    localStorageObj = localStorage,
    JSONObj = JSON,
    ImageObj = Image,
    innerHTMLProp = "innerHTML",
    tagNameProp = "tagName",
    getElementByIdFn = "getElementById",
    querySelectorFn = "querySelector",
    querySelectorAllFn = "querySelectorAll",
    createElementFn = "createElement",
    classNameProp = "className",
    replaceFn = "replace",
    lastIndexOfFn = "lastIndexOf",
    EventListenerFn = "EventListener",
    removeFn = "remove",
    lengthProp = "length",
    sliceFn = "slice",
    pushFn = "push",
    AttributeFn = "Attribute",
    checkedProp = "checked",
    offsetWidthProp = "offsetWidth",
    toFixedFn = "toFixed",
    pageYOffsetProp = "pageYOffset",
    appendChildFn = "appendChild",
    insertBeforeFn = "insertBefore",
    matchFn = "match",
    hrefProp = "href",
    targetProp = "target",
    locationProp = "location",
    splitFn = "split",
    trimFn = "trim",
    openFn = "open",
    sendFn = "send",
    randomFn = "random",
    parentElementProp = "parentElement",
    preventDefaultFn = "preventDefault",
    substrFn = "substr",
    setRequestHeaderFn = "setRequestHeader",
    responseTextProp = "responseText",
    titleProp = "title",
    ceilFn = "ceil",
    floorFn = "floor",
    ItemFn = "Item",
    nextSiblingProp = "nextSibling",
    loadEvent = "load",
    falseStr = "false",
    scrollEvent = "scroll",
    clickEvent = "click",
    mousemoveEvent = "mousemove",
    touchstartEvent = "touchstart",
    changeEvent = "change",
    undefinedStr = "undefined",
    functionStr = "function",
    contentTypeHeader = "Content-Type",
    paginationStr = "pagination",
    loadCustomPostsStr = "loadCustomPosts",
    customPostsStr = "custom_posts",
    rwStr = "-rw",
    devicePixelRatioProp = "devicePixelRatio",
    isPreview = typeof isPreview !== undefinedStr && isPreview,
    siteUrl = typeof siteUrl !== undefinedStr ? siteUrl[substrFn](0, siteUrl[lengthProp] - 1)[replaceFn](/(^\w+:|^)\/\//, "") : "",
    currentUrl = typeof currentUrl !== undefinedStr ? currentUrl : "",
    blogId = typeof blogId !== undefinedStr ? blogId : "",
    blogTitle = typeof blogTitle !== undefinedStr ? blogTitle : "",
    titleSeparator = typeof titleSeparator !== undefinedStr ? titleSeparator : " - ",
    pageTitle = typeof pageTitle !== undefinedStr ? pageTitle : "Page",
    analyticId = typeof analyticId !== undefinedStr && analyticId,
    caPubAdsense = typeof caPubAdsense !== undefinedStr && caPubAdsense[replaceFn](/^\D+/g, ""),
    innerAdsDelimiter = typeof innerAdsDelimiter !== undefinedStr ? innerAdsDelimiter : "p,br,div",
    ignoreAdsDelimiter = typeof ignoreAdsDelimiter !== undefinedStr ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
    autoTOC = typeof autoTOC !== undefinedStr && autoTOC,
    positionTOC = typeof positionTOC !== undefinedStr && positionTOC,
    jtCallback = typeof jtCallback === functionStr && jtCallback;

  function hasClass(element, className) {
    return -1 < (" " + element[classNameProp] + " ").indexOf(" " + className + " ");
  }

  function addClass(element, className) {
    if (!hasClass(element, className)) {
      var currentClass = element[classNameProp];
      if (currentClass !== "") className = " " + className;
      element[classNameProp] = currentClass + className;
    }
  }

  function removeClass(element, className) {
    element[classNameProp] = element[classNameProp][replaceFn](new RegExpObj("(?:^|\\s)" + className + "(?!\\S)"), "")[trimFn]();
  }

  function toggleClassWithTimeout(element, className, timeout) {
    removeClass(element, className);
    setTimeoutFn(function() {
      removeClass(element, "d-block");
    }, timeout || 300);
  }

  function arrayIncludes(array, item) {
    for (var i = 0; i < array[lengthProp]; i++) {
      if (array[i] === item) return true;
    }
    return false;
  }

  function getQueryParam(param, url) {
    var regex = new RegExpObj("[?&]" + param + "=([^&#=]*)");
    return regex.test(url) ? url[matchFn](regex)[1] : false;
  }

  function parseJSON(jsonStr) {
    try {
      return JSONObj.parse(jsonStr);
    } catch (e) {
      return false;
    }
  }

  function checkWebpSupport(callback) {
    var img = new ImageObj();
    img.onload = img.onerror = function() {
      callback(2 == img.height);
    };
    img.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  checkWebpSupport(function(supported) {
    if (!supported) rwStr = "";
  });

  var header = documentObj[getElementByIdFn]("header"),
    searchToggle = documentObj[getElementByIdFn]("search-toggle"),
    searchHeader = documentObj[getElementByIdFn]("search-header"),
    navbarToggle = documentObj[getElementByIdFn]("navbar-toggle"),
    navbar = documentObj[getElementByIdFn]("navbar"),
    backToTop = documentObj[getElementByIdFn]("back-to-top"),
    adsPost = documentObj[getElementByIdFn]("ads-post"),
    postBody = documentObj[getElementByIdFn]("post-body"),
    relatedPosts = documentObj[querySelectorFn](".related-posts"),
    relatedInline = documentObj[querySelectorFn](".related-inline"),
    currentPage = getQueryParam("page", currentUrl),
    isLazy = localStorageObj !== null && localStorageObj["get" + ItemFn]("lazy") == 1;

  var lastScrollY = 0;
  windowObj["add" + EventListenerFn](scrollEvent, function() {
    var currentScrollY = this[pageYOffsetProp];
    var timeout;
    if (currentScrollY < lastScrollY && hasClass(header, "header-hidden")) {
      timeout = setTimeoutFn(function() {
        removeClass(header, "header-hidden");
      }, 500);
    } else if (lastScrollY < currentScrollY && hasClass(header, "header-animate")) {
      clearTimeoutFn(timeout);
      addClass(header, "header-hidden");
    }
    lastScrollY = currentScrollY;
  }, false);

  var processImage = function(element) {
    if (element[tagNameProp] == "IMG") {
      var dataSrc = element["get" + AttributeFn]("data-src");
      if (dataSrc[matchFn](/(bp.blogspot|googleusercontent)/)) {
        var pixelRatio = isLazy ? (windowObj[devicePixelRatioProp] && windowObj[devicePixelRatioProp] > 1 ? windowObj[devicePixelRatioProp] : 1.5) : 1;
        var width = (element[offsetWidthProp] * pixelRatio)[toFixedFn](0);
        var parentWidth = (element[parentElementProp][offsetWidthProp] * pixelRatio)[toFixedFn](0);
        var grandparentWidth = (element[parentElementProp][parentElementProp][offsetWidthProp] * pixelRatio)[toFixedFn](0);
        var height = (element.offsetHeight * pixelRatio)[toFixedFn](0);
        var parts = dataSrc[splitFn]("/");
        var sizeIndex = dataSrc[lastIndexOfFn]("=") + 1;
        var sizeStr = "";
        sizeStr = hasClass(element[parentElementProp], "ratio") ? "w" + ImgSize + "-e90" + rwStr : "w" + ImgSize + "-e90" + rwStr;
        dataSrc = dataSrc[matchFn](/(img\/a|proxy\/)/) ? (sizeIndex ? dataSrc[sliceFn](0, sizeIndex) + sizeStr : dataSrc + "=" + sizeStr) : dataSrc[replaceFn](parts[parts[lengthProp] - 2], sizeStr);
        element["set" + AttributeFn]("data-src", dataSrc);
      } else if (dataSrc[matchFn](/(img.youtube|i.ytimg)/)) {
        dataSrc = dataSrc[substrFn](0, dataSrc[lastIndexOfFn]("/")) + "/mqdefault.jpg";
        element["set" + AttributeFn]("data-src", dataSrc);
      }
    }
  };

  var createPagination = function(element) {
    if (element["get" + AttributeFn]("data-pagination") != falseStr) {
      var postsPerPage = element["get" + AttributeFn]("data-posts");
      var label = element["get" + AttributeFn]("data-label");
      var encodedLabel = encodeURIComponentFn(label);
      var labelPrefix = encodedLabel ? "-/" + encodedLabel + "/" : "";
      var labelPath = encodedLabel ? "/label/" + encodedLabel : "";
      Defer.js(siteUrl + "/feeds/posts/summary/" + labelPrefix + "?alt=json&callback=jo." + paginationStr + "_key&max-results=1");
      var maxResults = getQueryParam("max-results", currentUrl);
      var pageNum = getQueryParam("page", currentUrl);
      var pageSize = maxResults || postsPerPage;
      var currentPageNum = pageNum || 1;

      jo[paginationStr + "_key"] = function(data) {
        var feed = data.feed;
        var totalResults = parseIntFn(feed.openSearch$totalResults.$t);
        if (postsPerPage < totalResults) {
          var paginationInfo = (function(total, current, size, maxPages) {
            total = parseIntFn(total);
            current = parseIntFn(current);
            size = parseIntFn(size);
            maxPages = parseIntFn(maxPages);
            var totalPages = MathObj[ceilFn](total / size);
            if (current < 1) current = 1;
            else if (totalPages < current) current = totalPages;
            var startPage, endPage;
            if (totalPages <= maxPages) {
              startPage = 1;
              endPage = totalPages;
            } else {
              var halfMax = MathObj[floorFn](maxPages / 2);
              var halfMaxCeil = MathObj[ceilFn](maxPages / 2) - 1;
              if (current <= halfMax) {
                startPage = 1;
                endPage = maxPages;
              } else if (totalPages <= current + halfMaxCeil) {
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
              } else {
                startPage = current - halfMax;
                endPage = current + halfMaxCeil;
              }
            }
            var pages = [];
            for (var i = 0; i < endPage + 1 - startPage; i++) {
              pages[pushFn](i);
            }
            pages = pages.map(function(i) {
              return startPage + i;
            });
            return {
              totalItems: total,
              currentPage: current,
              pageSize: size,
              totalPages: totalPages,
              startPage: startPage,
              endPage: endPage,
              startIndex: (current - 1) * size,
              endIndex: MathObj.min((current - 1) * size + size - 1, total - 1),
              pages: pages
            };
          })(totalResults, currentPageNum, pageSize, 5);
          var ul = documentObj[createElementFn]("ul");
          var totalPages = paginationInfo.totalPages;
          if (paginationInfo.currentPage != 1) {
            var prevLi = createPageItem(paginationInfo.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>');
            ul[appendChildFn](prevLi);
          }
          if (!arrayIncludes(paginationInfo.pages, 1)) {
            var firstLi = createPageItem(1, paginationInfo.currentPage, "1 . .");
            ul[appendChildFn](firstLi);
          }
          for (var i = 0; i < paginationInfo.pages[lengthProp]; i++) {
            var pageLi = createPageItem(paginationInfo.pages[i], paginationInfo.currentPage);
            ul[appendChildFn](pageLi);
          }
          if (!arrayIncludes(paginationInfo.pages, totalPages)) {
            var lastLi = createPageItem(totalPages, paginationInfo.currentPage, ". . " + totalPages);
            ul[appendChildFn](lastLi);
          }
          if (paginationInfo.currentPage != totalPages) {
            var nextLi = createPageItem(paginationInfo.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>');
            ul[appendChildFn](nextLi);
          }
          element[innerHTMLProp] = "";
          addClass(ul, "pagination mb-0");
          element[appendChildFn](ul);
          removeClass(element, "visually-hidden");

          function createPageItem(page, currentPage, label) {
            var li = documentObj[createElementFn]("li");
            var span = documentObj[createElementFn]("span");
            addClass(span, "btn rounded-pill jt-icon-center");
            span[innerHTMLProp] = label || page;
            span["set" + AttributeFn]("data-page", page);
            if (page == currentPage) {
              addClass(span, "jt-btn-primary");
            } else {
              addClass(span, "jt-btn-light hover-btn-primary");
              span["add" + EventListenerFn](clickEvent, function(e) {
                e[preventDefaultFn]();
                var url;
                if (page == 1) {
                  url = encodedLabel ? siteUrl + "/search" + labelPath + "?max-results=" + postsPerPage + "&page=" + page : siteUrl;
                  windowObj[locationProp][hrefProp] = url;
                } else {
                  var startIndex = (page - 1) * postsPerPage;
                  Defer.js(siteUrl + "/feeds/posts/summary/" + labelPrefix + "?start-index=" + startIndex + "&alt=json&callback=jo." + paginationStr + "_date&max-results=1");
                }
              });
            }
            li[appendChildFn](span);
            return li;
          }
        }
      };

      jo[paginationStr + "_date"] = function(data) {
        var published = data.feed.entry[0].published.$t;
        var timestamp = published[substrFn](0, 19) + published[substrFn](23, 29);
        timestamp = timestamp[replaceFn]("+", "%2B");
        var url = siteUrl + "/search" + labelPath + "?updated-max=" + timestamp + "&max-results=" + pageSize + "&page=" + currentPageNum;
        windowObj[locationProp][hrefProp] = url;
      };
    } else {
      removeClass(element, "visually-hidden");
    }
  };

  function fetchTitle(url, element) {
    var xhr = new XMLHttpRequestObj();
    xhr[openFn]("get", url);
    xhr[setRequestHeaderFn](contentTypeHeader, "text/html");
    xhr[sendFn](null);
    xhr["add" + EventListenerFn](loadEvent, function() {
      var titleMatch = xhr[responseTextProp][matchFn](/<title>(.*?)<\/title>/);
      element[innerHTMLProp] = titleMatch[1][replaceFn](titleSeparator + blogTitle, "");
    });
  }

  jo[loadCustomPostsStr] = function(element) {
    var randomId = (MathObj[randomFn]() + 1).toString(36)[substrFn](7);
    var label = element["get" + AttributeFn]("data-label");
    var title = element["get" + AttributeFn]("data-title");
    var itemsCount = element["get" + AttributeFn]("data-items");
    var shuffle = element["get" + AttributeFn]("data-shuffle");
    var noItem = element["get" + AttributeFn]("data-no-item");
    var callbackFunc = element["get" + AttributeFn]("data-func");
    var callback = element["get" + AttributeFn]("data-callback");
    var maxResults = noItem ? parseIntFn(itemsCount) + 1 : itemsCount;
    var labels = label || element[innerHTMLProp];
    var labelArray = labels[splitFn](",");
    var feedUrl = "";
    feedUrl = labelArray[lengthProp] > 1 ? (labels ? "-/" + encodeURIComponentFn(labelArray[MathObj[floorFn](MathObj[randomFn]() * labelArray[lengthProp])]) + "/?" : "?") : (labels && labels != falseStr ? "-/" + encodeURIComponentFn(labels[trimFn]()) + "/?" : "?");
    Defer.js(siteUrl + "/feeds/posts/summary/" + feedUrl + "alt=json&callback=jo." + customPostsStr + "_key_" + randomId + "&max-results=" + maxResults);
    jo[customPostsStr + "_key_" + randomId] = function(data) {
      var totalPosts = parseIntFn(data.feed.openSearch$totalResults.$t);
      var categories = data.feed.category;
      if (totalPosts > 0) {
        var result = {
          title: title,
          posts: [],
          categories: categories
        };
        var entries = data.feed.entry;
        var count = 0;
        for (var i = 0; i < entries[lengthProp]; ++i) {
          var entry = entries[i];
          var link = entry.link[entry.link[lengthProp] - 1][hrefProp];
          if (count == itemsCount) break;
          if (link != noItem) {
            count++;
            var post = {};
            post.grup_id = randomId;
            post.url = link;
            post.title = entry[titleProp].$t;
            post.summary = entry.summary.$t[trimFn]();
            post.img = entry.media$thumbnail && entry.media$thumbnail.url;
            post.author = entry.author[0].name.$t;
            post.comment = entry.thr$total && entry.thr$total.$t;
            post.label = entry.category;
            var published = entry.published.$t;
            var date = new DateObj(published);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            post.date = year + "/" + month + "/" + day;
            result.posts[pushFn](post);
          }
        }
        if (typeof windowObj[callbackFunc] === functionStr && result.posts[lengthProp] > 0) {
          if (shuffle) {
            result.posts = (function shuffleArray(array) {
              var arr = array.slice();
              for (var i = arr[lengthProp] - 1; i > 0; i--) {
                var j = MathObj[floorFn](MathObj[randomFn]() * (i + 1));
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
              }
              return arr;
            })(result.posts)[sliceFn](0, shuffle);
          }
          element[innerHTMLProp] = windowObj[callbackFunc](result)[trimFn]();
          removeClass(element, "visually-hidden");
          Defer.domz(".lazy-" + randomId, 1, "loaded", processImage, null, { rootMargin: "300%" });
          if (callback && typeof windowObj[callback] === functionStr) {
            windowObj[callback]();
          }
        }
      }
    };
  };

  var processPostPager = function(element) {
    var links = element[querySelectorAllFn]("a");
    for (var i = 0; i < links[lengthProp]; ++i) {
      var link = links[i];
      var href = link[hrefProp];
      var span = documentObj[createElementFn]("span");
      addClass(span, "d-block pt-2");
      link[appendChildFn](span);
      fetchTitle(href, span);
    }
  };

  function toggleHeader() {
    (searchToggle && searchToggle[checkedProp] || navbarToggle && navbarToggle[checkedProp] ? removeClass : addClass)(header, "header-animate");
  }

  function handleClickOutside(container, callback) {
    function clickHandler(e) {
      if (!container.contains(e[targetProp])) {
        callback();
        removeClickHandler();
      }
    }
    function removeClickHandler() {
      documentObj[removeFn + EventListenerFn](clickEvent, clickHandler);
    }
    documentObj["add" + EventListenerFn](clickEvent, clickHandler);
  }

  if (searchToggle) {
    searchToggle["add" + EventListenerFn](changeEvent, function() {
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
    navbarToggle["add" + EventListenerFn](changeEvent, function() {
      toggleHeader();
      if (this[checkedProp]) {
        addClass(navbar, "d-block");
        setTimeoutFn(function() {
          addClass(navbar, "show");
        }, 100);
        handleClickOutside(navbar, function() {
          navbarToggle[checkedProp] = false;
          toggleHeader();
          toggleClassWithTimeout(navbar, "show");
        });
      } else {
        toggleClassWithTimeout(navbar, "show");
      }
    });
  }

  windowObj["add" + EventListenerFn](scrollEvent, function() {
    (this[pageYOffsetProp] >= 1 && header !== null ? addClass : removeClass)(header, "shadow-sm");
    (this[pageYOffsetProp] >= 1000 && backToTop !== null ? removeClass : addClass)(backToTop, "d-none");
  }, false);

  function initialize(shouldRemoveListeners) {
    if (shouldRemoveListeners) {
      documentObj[removeFn + EventListenerFn](mousemoveEvent, initialize);
      documentObj[removeFn + EventListenerFn](touchstartEvent, initialize);
      documentObj[removeFn + EventListenerFn](scrollEvent, initialize);
    }
    Defer.domz(".custom-posts", 1, null, jo[loadCustomPostsStr], null, { rootMargin: "300%" });
    if (postBody !== null) {
      if (relatedPosts !== null && relatedInline !== null) {
        relatedInline[innerHTMLProp] = relatedPosts[innerHTMLProp];
        relatedInline["set" + AttributeFn]("data-no-item", relatedPosts["get" + AttributeFn]("data-no-item"));
      }
      if (adsPost !== null) {
        var delimiters = postBody[querySelectorAllFn](innerAdsDelimiter + "," + ignoreAdsDelimiter);
        var adNodes = adsPost.childNodes;
        var adCount = adNodes[lengthProp];
        var validDelimiters = [];
        for (var i = 0; i < delimiters[lengthProp]; i++) {
          var closestIgnored = delimiters[i].closest(ignoreAdsDelimiter);
          if (!closestIgnored || delimiters[i] == closestIgnored) {
            validDelimiters[pushFn](delimiters[i]);
          }
        }
        for (var i = 0; i < adCount; i++) {
          var index;
          if (i == adCount - 1) {
            postBody[appendChildFn](adNodes[0]);
          } else {
            index = i == adCount - 1 ? validDelimiters[lengthProp] - 1 : MathObj.round(validDelimiters[lengthProp] / adCount) * i;
            var nextNode = i == 0 ? validDelimiters[0] : validDelimiters[index][nextSiblingProp];
            if (nextNode) {
              nextNode[parentElementProp][insertBeforeFn](adNodes[0], nextNode);
            }
          }
        }
      }
    }
  }

  if (currentPage) {
    documentObj[titleProp] = documentObj[titleProp][replaceFn](titleSeparator, titleSeparator + pageTitle + " " + currentPage + titleSeparator);
  }

  Defer.domz(".lazyload", 1, "loaded", processImage, null, { rootMargin: "300%" });
  Defer.domz("#post-pager", 1, null, processPostPager, null, { rootMargin: "300%" });
  Defer.domz("#pagination", 1, null, createPagination, null, { rootMargin: "300%" });

  if (isLazy) {
    initialize(false);
  } else {
    if (localStorageObj !== null) {
      localStorageObj["set" + ItemFn]("lazy", 1);
    }
    documentObj["add" + EventListenerFn](mousemoveEvent, initialize);
    documentObj["add" + EventListenerFn](touchstartEvent, initialize);
    documentObj["add" + EventListenerFn](scrollEvent, initialize);
  }
})();
