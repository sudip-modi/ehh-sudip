var config = {};

config.welcome = {
  "page": "https://mybrowseraddon.com/text-editor.html",
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};

config.interface = {
  set size (val) {app.storage.write("size", val)},
  set alwaysOnTop (val) {app.storage.write("alwaysOnTop", val)},
  get alwaysOnTop () {return app.storage.read("alwaysOnTop") !== undefined ? app.storage.read("alwaysOnTop") : false},
  get size () {
    var tmp = {"top": null, "left": null, "width": 900, "height": 600};
    return app.storage.read("size") !== undefined ? app.storage.read("size") : tmp;
  }
};
