app.UI.receive("support", function () {
  app.tab.open(app.homepage());
});

app.UI.receive("donation", function () {
  app.tab.open(app.homepage() + "?reason=support");
});

if (chrome.app && chrome.app.runtime) {
  chrome.app.runtime.onLaunched.addListener(app.UI.create);
} else {
  chrome.browserAction.onClicked.addListener(function () {
    app.UI.window ? chrome.windows.update(app.UI.window.id, {"focused": true}) : app.UI.create();
  });
  /*  */
  chrome.windows.onRemoved.addListener(function (e) {
    if (e === app.UI.window.id) {
      app.UI.window = null;
    }
  });
  /*  */
  app.UI.receive("resize", function (e) {
    chrome.windows.get(app.UI.window.id, function (e) {
      config.interface.size = {
        "top": e.top,
        "left": e.left,
        "width": e.width,
        "height": e.height
      };
    });
  });
}
