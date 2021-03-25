//https://javascript.info/indexeddb
//https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#version_changes_while_a_web_app_is_open_in_another_tab
if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

// In the following line, you should include the prefixes
// of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't
//  need window.mozIDB*)
    dbVersion = 1.0;

// Let us open our database
//var request = window.indexedDB.open("actionDataBase", dbVersion);


var dataBaseModel = {
    databaseName: "databaseName",
    dbVersion:"dbVersion",
    objectStore: { //Collection || tables 
        object: {
            key: "keyName",
            value:"value"
        }
    }
}
class actionDataBase { 

    /**
     * 
     * @param {*} databaseName - a string, the database name.
     * @param {*} dbVersion – a positive integer version, by default 1 (explained below).
     */
    static openDataBase(databaseName, dbVersion) { 
      var request = window.indexedDB.open(databaseName, dbVersion);
            request.onerror = function (event) {
            // Do something with request.errorCode!
            console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = function (event) {
            // Do something with request.result!
            var db = request.result;
            console.log(db);
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
            console.log(db);
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
/**
     * 
     * @param {*} db  Name of the Database
     * @param {*} entityName  is the store name, e.g. "books" for books,
     * @param {*} keyOptions keyOptions is an optional object with one of two properties:
     * keyPath – a path to an object property that IndexedDB will use as the key, e.g. id.
        autoIncrement – if true, then the key for a newly stored object is generated automatically, as an ever-incrementing number.
        eg -db.createObjectStore('books', {keyPath: 'id'});
     */
    static createObjectStore(databaseName, entityName, keyOptions) { 

        let request = indexedDB.open(databaseName,1);

        // create/upgrade the database without version checks
        request.onupgradeneeded = function () {
            let db = request.result;
            if (!db.objectStoreNames.contains(entityName)) { // if there's no "books" store
                db.createObjectStore(entityName); // create it
                console.log(db.objectStoreNames)
            } else { 
                if (db.objectStoreNames.contains(entityName)) { // if there's no "books" store
                    //db.createObjectStore(entityName); // create it
                    console.log(db.objectStoreNames)
                }
            }
        };
       // console.log(db.objectStoreNames)
    
    }
    static add2ObjectStore(databaseName,entity, value) { 
        let request = indexedDB.open(databaseName, 1);
        // create/upgrade the database without version checks
        request.onsuccess = function () {
           
            let db = request.result;


            let transaction = db.transaction(entity, "readwrite"); // (1)
            // get an object store to operate on it
            let entityTransaction = transaction.objectStore(entity); // (2)


            let request = entityTransaction.add(value); // (3)
            return transaction.complete;
        };


        
    }
    static put2ObjectStore() { 

    }

    static getObj(objectStore,primaryKey) { 
        objectStore.get(primaryKey);
    }
    static getObjectStore() { 
        var response = db.objectStoreNames;
    }
    static deleteDatabase(databaseName) { 
        let deleteRequest = indexedDB.deleteDatabase(name);

    }
}

//actionDataBase.openDataBase("actionSpace")

{
//    IDBKeyRange.lowerBound(lower, [open]) means: ≥lower(or > lower if open is true)
  //  IDBKeyRange.upperBound(upper, [open]) means: ≤upper(or < upper if open is true)
//    IDBKeyRange.bound(lower, upper, [lowerOpen], [upperOpen]) means: between lower and upper.If the open flags is true, the corresponding key is not included in the range.
  //      IDBKeyRange.only(key) – a 

}


// store.get(query) – search for the first value by a key or a range.
//     store.getAll([query], [count]) – search for all values, limit by count if given.
//         store.getKey(query) – search for the first key that satisfies the query, usually a range.
//             store.getAllKeys([query], [count]) – search for all keys that satisfy the query, usually a range, up to count if given.
//                 store.count([query]) – get the total count of keys that satisfy the query, usually a range.