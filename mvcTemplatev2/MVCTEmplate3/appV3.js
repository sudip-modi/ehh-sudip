/**
 * Base class for all models
 */
class Model {
    constructor() {
        //array of change event listeners
        this._listeners = [];
    }

    /**
     * Adds a listener function that will be called when the model changes
     * @param {function} listener 
     * @returns {Model}
     */
    addChangeListener(listener) {
        //push the new listener function into the array
        this._listeners.push(listener);
        return this;
    }

    /**
     * Removes a change listener function
     * @param {function} listener 
     * @returns {Model}
     */
    removeChangeListener(listener) {
        //filter out the listener to remove
        this._listeners = this._listeners.filter(l => l !== listener);
        return this;
    }

    /**
     * Raises an change event
     * @returns {Model}
     */
    raiseChange() {
        //call the listener functions
        this._listeners.forEach(listener => listener());
        return this;
    }

    /**
     * Bubbles change events from another model up through this one
     * @param {Model} model 
     * @returns {Model}
     */
    bubbleChange(model) {
        model.addChangeListener(() => this.raiseChange());
        return this;
    }
}