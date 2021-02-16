class ActionEvent {
    constructor(elements4Event) {
        this._events = {};
        this._elements = elements4Event;
        console.log(elements4Event)
        this.on('addButtonClicked', e => this.add(e));
        this.on('delButtonClicked', e => this.del(e));
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