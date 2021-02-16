class EventEmitter {
    constructor(elements) {
        this._events = {};
        this._elements = elements;
        console.log(elements)
        this.on('addButtonClicked', e => this.addItem(e));
        this.on('delButtonClicked', e => this.delItem(e));
    }

    addListener(eventName, fn) {
        this._events[eventName] = this._events[eventName] || [];
        this._events[eventName].push(fn);
        return this;
    }

    on(eventName, fn) {
        return this.addListener(eventName, fn);
    }
    
    emit(eventName, ...args) {
        let fns = this._events[eventName];
        if (!fns) return false;
        fns.forEach((f) => {
            f(...args);
        });
        return true;
    }
}