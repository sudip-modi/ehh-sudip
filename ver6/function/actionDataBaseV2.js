//indexedDB === database
//contains object === tables 


class actionDataSets { 
    static openDataBase(databaseName, dbVersion) {
        var request = window.indexedDB.open(databaseName, dbVersion);
        request.onerror = function (event) {
            // Do something with request.errorCode!
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = function (event) {
            // Do something with request.result!
            var db = request.result;
            console.log("success",db);
            db.onerror = function (event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                console.error("Database error: " + event.target.errorCode);
            };
            return db;
        };
        request.onupgradeneeded = function (event) {
            // the existing database version is less than 2 (or it doesn't exist)
            let db = request.result;
            console.log("onupgrade", db);
            var objectStore = db.createObjectStore("entity");
            return db;
            switch (event.oldVersion) { // existing db version
                case 0:
                // version 0 means that the client had no database
                // perform initialization
                case 1:
                // client had version 1
                // update
            }
        };

    }
   
    static deleteDatabase(databaseName) {
        let deleteRequest = indexedDB.deleteDatabase(databaseName);

    }
    static createStore(databaseName, dbVersion,storeName) { 
        var request = window.indexedDB.open(databaseName, dbVersion);
        request.onerror = function (event) {
            // Do something with request.errorCode!
            console.log(request.error.message)
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = function (event) {
            // Do something with request.result!
            var db = request.result;
            console.log("success", db);
            db.onerror = function (event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                console.error("Database error: " + event.target.errorCode);
            };
            return db;
        };
        request.onupgradeneeded = function (event) {
            // the existing database version is less than 2 (or it doesn't exist)
            let db = request.result;
            console.log("onupgrade", db);

            var oldVersion = request.oldVersion;
            var newVersion = request.newVersion || db.version;
            console.log('db updated fro version ,', oldVersion, "to", newVersion);
            if (db.objectStoreNames.contains(storeName)) {
                console.log("dublicate found for ", storeName)
            }else if (!db.objectStoreNames.contains(storeName)) {
                var objectStore = db.createObjectStore(storeName, { autoIncrement: true });
                db.close();
            }
            
            return objectStore;
            
        };

    }
    static deleteStore(databaseName, dbVersion, storeName) {
        var request = window.indexedDB.open(databaseName, dbVersion);
        request.onerror = function (event) {
            // Do something with request.errorCode!
            console.log(request.error.message)
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = function (event) {
            // Do something with request.result!
            var db = request.result;
         //   console.log("success", db);
            db.onerror = function (event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                console.error("Database error: " + event.target.errorCode);
            };
            return db;
        };
        request.onupgradeneeded = function (event) {
            // the existing database version is less than 2 (or it doesn't exist)
            let db = request.result;
            //console.log("onupgrade", db);

         //   var oldVersion = request.oldVersion;
           // var newVersion = request.newVersion || db.version;
            //console.log('db updated fro version ,', oldVersion, "to", newVersion);
            if (db.objectStoreNames.contains(storeName)) {
               
                db.deleteObjectStore(storeName);

                console.log("Store Deleted ",storeName)
            } else if (!db.objectStoreNames.contains(storeName)) {
                //var objectStore = db.createObjectStore(storeName, { autoIncrement: true });
            }

        };

    }
    static add2Store(storeName,mode) { 
        let tx = db.transaction(storeName, mode);
        tx.onerror = function (event) {
            // Do something with request.errorCode!
            console.warn(err)
            //console.log("Why didn't you allow my web app to use IndexedDB?!");
        }
        tx.onsuccess = function (event) {
            // Do something with request.result!
            console.log("successful transaction",event, );
        }
        let store = tx.objectStore(storeName);
        var txRequest = store.add("value");
        tx.onsuccess = function (event) { 
            console.log("successful TransactionReq");
        }

    }

}


//var filesDatabase = actionDataSets.openDataBase("filesDatabase", 1);
//var objectStoreLive = actionDataSets.createStore("filesDatabase", 3, "recentFilesStore");

actionDataSets.deleteStore("filesDatabase", 11, "recentFiles");
actionDataSets.deleteDatabase("filesDatabase");
var request = objectStore.clear();
//console.log("fileDataBase",filesDatabase)
//actionDataSets.openDataBase("folders");
//actionDataSets.openDataBase("systemDataSet");


