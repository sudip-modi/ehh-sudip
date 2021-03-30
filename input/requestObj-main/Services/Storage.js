
class Storage {
    constructor() { }
    static saveToLocalStorage = (name, value) => {
        try {
            window.localStorage.setItem(name, JSON.stringify(value));
        } catch (e) {
            console.log("local storage unavailable");
        }
    };
    static getFromLocalStorage = (name) => {
        try {
            return JSON.parse(window.localStorage.getItem(name));
        } catch (e) {
            console.log("Error in retrieving Info", e);
        }
    };
}
