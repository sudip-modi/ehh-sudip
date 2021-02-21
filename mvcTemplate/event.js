

class ActionEventEmitter {
    constructor(elements) {
        this._events = {};

        elements.addButton.addEventListener('click', () => this.emit('addButtonClicked'));
        elements.delButton.addEventListener('click',() => this.emit('delButtonClicked'));
        this.on('addButtonClicked', () => this.emit('addButtonClicked'));
        this.on('delButtonClicked', () => this.emit('delButtonClicked'));
      
    }
    on(evt, listener) {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }
    emit(evt, arg) {
        (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }
    conduct() { 


    }
}