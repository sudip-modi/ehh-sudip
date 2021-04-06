
class Storage {
    constructor() { }
      /**
     * This method is used for saving items in local storage
     * @param {string} name - identifier of saved item in storage
     * @param {object} value - object to be saved in storage
     */ 
    static saveToLocalStorage = (name, value) => {
        try {
            window.localStorage.setItem(name, JSON.stringify(value));
        } catch (e) {
            console.log("local storage unavailable");
        }
    };

         /**
     * This method is used for retrieving items from local storage
     * @param {string} name - identifier of saved item in storage
     */ 
    static getFromLocalStorage = (name) => {
        try {
            return JSON.parse(window.localStorage.getItem(name));
        } catch (e) {
            console.log("Error in retrieving Info", e);
        }
    };
}
