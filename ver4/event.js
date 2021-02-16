class EventEmitter {
    constructor(elements) {
        this._events = {};
        this._elements = elements;
        console.log(elements)
        this.on('addButtonClicked', e => this.addItem(e));
        this.on('delButtonClicked', e => this.delItem(e));
    }
    on(evt, listener) {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }
    // emit(evt, arg) {
    //     (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    // }

    emit(eventName, ...args) {
        let fns = this._events[eventName];
        if (!fns) return false;
        fns.forEach((f) => {
            f(...args);
        });
        return true;
    }
}