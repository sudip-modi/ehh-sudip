var background = (function () {
  var r = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.path === 'background-to-ui') {
      for (var id in r) {
        if (request.method === id) r[id](request.data);
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {r[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": 'ui-to-background', "method": id, "data": data})}
  }
})();

document.addEventListener("keydown", config.listeners.keydown, false);

window.addEventListener("load", config.listeners.load, false);
window.addEventListener("click", config.listeners.click, false);
window.addEventListener("resize", config.listeners.resize, false);
window.addEventListener("mouseup", config.listeners.mouseup, false);
window.addEventListener("mousemove", config.listeners.mousemove, false);
window.addEventListener("mousedown", config.listeners.mousedown, false);
