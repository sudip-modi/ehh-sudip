var app = {};

app.version = function () {return chrome.runtime.getManifest().version};
app.homepage = function () {return chrome.browser ? config.welcome.page : chrome.runtime.getManifest().homepage_url};
chrome.runtime.setUninstallURL(app.homepage() + "?v=" + app.version() + "&type=uninstall", function () {});

app.tab = {
  "open": function (url) {
    if (chrome.browser) chrome.browser.openTab({"url": url});
    else chrome.tabs.create({"url": url, "active": true});
  }
};

chrome.runtime.onInstalled.addListener(function (e) {
  window.setTimeout(function () {
    var previous = e.previousVersion !== undefined && e.previousVersion !== app.version();
    var doupdate = previous && parseInt((Date.now() - config.welcome.lastupdate) / (24 * 3600 * 1000)) > 45;
    if (e.reason === "install" || (e.reason === "update" && doupdate)) {
      var parameter = (e.previousVersion ? "&p=" + e.previousVersion : '') + "&type=" + e.reason;
      app.tab.open(app.homepage() + "?v=" + app.version() + parameter);
      config.welcome.lastupdate = Date.now();
    }
  }, 3000);
});

app.storage = (function () {
  var objs = {};
  window.setTimeout(function () {
    chrome.storage.local.get(null, function (o) {
      objs = o;
      var script = document.createElement("script");
      script.src = "../common.js";
      document.body.appendChild(script);
    });
  }, 300);
  /*  */
  return {
    "read": function (id) {return objs[id]},
    "write": function (id, data) {
      var tmp = {};
      tmp[id] = data;
      objs[id] = data;
      chrome.storage.local.set(tmp, function () {});
    }
  }
})();

app.UI = (() => {
  var r = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.path === "ui-to-background") {
      for (var id in r) {
        if (r[id] && (typeof r[id] === "function")) {
          if (request.method === id) r[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "window": null,
    "receive": function (id, callback) {r[id] = callback},
    "url": chrome.browser ? "data/interface/index.html" : chrome.runtime.getURL("data/interface/index.html"),
    "send": function (id, data) {chrome.runtime.sendMessage({"path": "background-to-ui", "method": id, "data": data})},
    "create": function () {
      var top = config.interface.size.top;
      var left = config.interface.size.left;
      var width = config.interface.size.width;
      var height = config.interface.size.height;
      var alwaysOnTop = config.interface.alwaysOnTop;
      var outerBounds = {"top": top, "left": left, "width": width, "height": height};
      /*  */
      if (chrome.app && chrome.app.window) {
        var options = {"id": "text-editor", "alwaysOnTop": alwaysOnTop, "outerBounds": outerBounds};
        chrome.app.window.create(app.UI.url, options, function (e) {
          app.UI.window = e;
          /*  */
          app.UI.window.onBoundsChanged.addListener(function () {
            config.interface.size = {
              "top": app.UI.window.outerBounds.top,
              "left": app.UI.window.outerBounds.left,
              "width": app.UI.window.outerBounds.width,
              "height": app.UI.window.outerBounds.height
            };
          });
        });
      } else {
        var options = {"url": app.UI.url, "type": "popup", "width": width, "height": height, "top": top, "left": left};
        chrome.windows.create(options, function (e) {
          app.UI.window = e;
        });
      }
    }
  }
})();
