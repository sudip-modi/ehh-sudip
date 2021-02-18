//'use strict';

class ActionStorage {
    constructor(entityID,entityValue) {
        console.log(entityID)
        this.entity = JSON.parse(localStorage.getItem(entityID)) || [];
      //  console.log(this.entity);
    }

    static save(entityID, entityValue, callback) {
        console.log("save called")
        window.localStorage.setItem(entityID,entityValue);
        //chrome.storage.local.set
       
        if (callback !== undefined)
            callback();
    }
   
}