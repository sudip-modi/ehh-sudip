//indexedDB === database
//contains object === tables 

var dbVersion = 1;
class actionDataSets { 
    static openDataBase(databaseName, dbVersion) {
        var databaseWip = window.indexedDB.open(databaseName, dbVersion);
        databaseWip.onerror = function (event) {
            // Do something with request.errorCode!
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        databaseWip.onsuccess = function (event) {
            // Do something with request.result!
            var db = databaseWip.result;
            console.log("open DataBase success",db);
            db.onerror = function (event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                console.error("Database error: " + event.target.errorCode);
            };
            return db;
        };
        databaseWip.onupgradeneeded = function (event) {
            // the existing database version is less than 2 (or it doesn't exist)
            let db = databaseWip.result;
            console.log("onupgrade", db);
         //   var objectStore = db.createObjectStore("entity");
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
    static createStore(databaseName, dbVersion, storeName) { 
        console.log("creating store")
        var databaseWip = window.indexedDB.open(databaseName, dbVersion);
        databaseWip.onerror = function (event) {
            // Do something with request.errorCode!
            console.log(request.error.message)
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        databaseWip.onsuccess = function (event) {
            // Do something with request.result!
            var db = databaseWip.result;
            console.log(" databaseWip open success", db);
            db.onerror = function (event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                console.error("Database error: " + event.target.errorCode);
            };
            return db;
        };
        databaseWip.onupgradeneeded = function (event) {
            // the existing database version is less than 2 (or it doesn't exist)
            let db = databaseWip.result;
            console.log("onupgrade", db);

            var oldVersion = databaseWip.oldVersion;
            var newVersion = databaseWip.newVersion || db.version;
            console.log('db updated fro version ,', oldVersion, "to", newVersion);
            if (db.objectStoreNames.contains(storeName)) {
                console.log("dublicate found for ", storeName)
            }
            if (!db.objectStoreNames.contains(storeName)) {
                var objectStore = db.createObjectStore(storeName, { autoIncrement: true });
               // db.close();
            }
            
          //  return objectStore;
            
        };

    }
    static deleteStore(databaseName, dbVersion, storeName) {
        var request = window.indexedDB.open(databaseName, dbVersion);
        request.onerror = function (event) {
            // Do something with request.errorCode!
            console.log(request.error.message)
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
           // return db;
        };
        request.onupgradeneeded = function (event) {
            // the existing database version is less than 2 (or it doesn't exist)
            let db = request.result;
        
            if (db.objectStoreNames.contains(storeName)) {
               
                db.deleteObjectStore(storeName);

                console.log("Store Deleted ",storeName)
            } else if (!db.objectStoreNames.contains(storeName)) {
                //var objectStore = db.createObjectStore(storeName, { autoIncrement: true });
            }

        };
    }
    
    static makeTransaction(storeName, mode) {
    let tx = db.transaction(storeName, mode);
    tx.onerror = (err) => {
        console.warn(err);
    };
        return tx;
    }
    static add2Store(databaseName,storeName,entity,entityValue) { 
        
        console.log("add2Store")
        var databaseWip = window.indexedDB.open(databaseName, dbVersion);
        databaseWip.onerror = function (event) {
            // Do something with request.errorCode!
            console.log(request.error.message)
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        databaseWip.onsuccess = function (event) {
            // Do something with request.result!
            var db = databaseWip.result;
            console.log(" databaseWip open success", db);
            let transaction = db.transaction(storeName, "readwrite"); // (1)
            console.log(transaction)
            // get an object store to operate on it
            let entityTransaction = transaction.objectStore(storeName); // (2)
            let request = entityTransaction.add(entityValue);
            request.onsuccess = function (event) { 
                console.log("successFull transaction");
            }







            db.onerror = function (event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                console.error("Database error: " + event.target.errorCode);
            };
            return db;
        };
        databaseWip.onupgradeneeded = function (event) {
            // the existing database version is less than 2 (or it doesn't exist)
            let db = databaseWip.result;
            console.log("onupgrade", db);

            var oldVersion = databaseWip.oldVersion;
            var newVersion = databaseWip.newVersion || db.version;
            console.log('db updated fro version ,', oldVersion, "to", newVersion);
            if (db.objectStoreNames.contains(storeName)) {
                console.log("dublicate found for ", storeName)
            }
            if (!db.objectStoreNames.contains(storeName)) {
                var objectStore = db.createObjectStore(storeName, { autoIncrement: true });
                // db.close();
            }

            //  return objectStore;

        };
    }

}


//var filesDatabase = actionDataSets.openDataBase("filesDatabase", 1);
//var objectStoreLive = actionDataSets.createStore("filesDatabase",3, "recentFilesStore");
actionDataSets.add2Store("files","recentFileStore","filename","fileContent")
//actionDataSets.deleteStore("filesDatabase", 11, "recentFiles");
//actionDataSets.deleteDatabase("filesDatabase");
//var request = objectStore.clear();
//console.log("fileDataBase",filesDatabase)
//actionDataSets.openDataBase("folders");
//actionDataSets.openDataBase("systemDataSet");


