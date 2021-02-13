//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
//this file handles all the events that are Initialised during Init.


class actionEventController {
    constructor(context) {
        this._events = {};
        this.context = context
      //  this.createListeners(context)
    }


    on(evt, listener) {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }

    emit(evt, arg) {
        (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }

    


}
