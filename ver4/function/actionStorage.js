//'use strict';

class actionStorage {

    loadTabs(name, callback, callbackIsUndefined) {
      //  chrome.storage.local.get(name, function (entity)
       localStorage.get(name, function (entity) {
            
           if (entity[name] !== undefined) {
                
                var result = entity[name];
                if (result !== undefined)
                    callback(result);
            } else {
                if (callbackIsUndefined !== undefined)
                    callbackIsUndefined();
            }
        });
    }

    saveTabs(value, callback) {
        //chrome.storage.local.set
        localStorage.set({ tabs: value });
        if (callback !== undefined)
            callback();
    }

    saveValue(name, value) {
        chrome.storage.local.set({
            [name]: value
        });
    }

    getValue(name, callback) {
      //  chrome.storage.local.get(name, function (entity)
        localStorage.get(name, function (entity) {
            if (item !== undefined) {
                callback(entity[name]);
            }
        });
    }

    getMemoryUse(name, callback) {
        chrome.storage.local.getBytesInUse(name, callback);
    };
}