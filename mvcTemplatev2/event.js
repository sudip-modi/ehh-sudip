class EventEmitter {
    constructor(elements) {
        this._events = {};
        this.on('listModified', idx => this.updateSelected(idx));
        this.on('addButtonClicked', () => this.addItem());
        this.on('delButtonClicked', () => this.delItem());
    }
    on(evt, listener) {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }
    emit(evt, arg) {
        (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }
}