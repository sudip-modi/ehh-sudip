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
    dbVersion: "dbVersion",
    objectStore: { //Collection || tables 
        object: {
            key: "keyName",
            value: "value"
        }
    }
}

let defaultGetStoreFunc;

class actionIndexDB{

    static promisifyRequest(request) {

        return new Promise((resolve, reject) => {
         // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
    }
    
    static createStore(dbName, storeName) {
        const request = indexedDB.open(dbName);
        request.onupgradeneeded = () => request.result.createObjectStore(storeName);
        const dbp = actionIndexDB.promisifyRequest(request);
        return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
    }
    static defaultGetStore() {
        if (!defaultGetStoreFunc) {
            defaultGetStoreFunc = actionIndexDB.createStore('ActionSpaceEditor', 'Store');
        }
        return defaultGetStoreFunc;
    }
    
    /**
     *  * Get a value by its key.
     *  *
     *  * @param key
     *  * @param customStore Method to get a custom store. Use with caution (see the docs).
     *  */

    static get(key, customStore = actionIndexDB.defaultGetStore()) {
        return customStore('readonly', (store) => actionIndexDB.promisifyRequest(store.get(key)));
    }
    /**
     *  * Set a value with a key.
     * *
     *  * @param key
     *  * @param value
     *  * @param customStore Method to get a custom store. Use with caution (see the docs).
     *  */
    
    static set(key, value, customStore = actionIndexDB.defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return actionIndexDB.promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
 static setMany(entries, customStore = actionIndexDB.defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return actionIndexDB.promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
static getMany(keys, customStore = actionIndexDB.defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => actionIndexDB.promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
 static update(key, updater, customStore = actionIndexDB.defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(actionIndexDB.promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
 static del(key, customStore = actionIndexDB.defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return actionIndexDB.promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
 static clear(customStore = actionIndexDB.defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return actionIndexDB.promisifyRequest(store.transaction);
    });
}
static eachCursor(customStore, callback) {
    return customStore('readonly', (store) => {
        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // And openKeyCursor isn't supported by Safari.
        store.openCursor().onsuccess = function () {
            if (!this.result)
                return;
            callback(this.result);
            this.result.continue();
        };
        return actionIndexDB.promisifyRequest(store.transaction);
    });
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
 static keys(customStore = actionIndexDB.defaultGetStore()) {
    const items = [];
    return actionIndexDB.eachCursor(customStore, (cursor) => items.push(cursor.key)).then(() => items);
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
 static values(customStore = actionIndexDB.defaultGetStore()) {
    const items = [];
    return actionIndexDB.eachCursor(customStore, (cursor) => items.push(cursor.value)).then(() => items);
    }
    
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
 static entries(customStore = actionIndexDB.defaultGetStore()) {
    const items = [];
    return actionIndexDB.eachCursor(customStore, (cursor) => items.push([cursor.key, cursor.value])).then(() => items);
}

}