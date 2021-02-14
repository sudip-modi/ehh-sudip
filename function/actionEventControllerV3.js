
class actionEventEmitter {
    listeners = {};  // key-value pair

    addListener(event, fn) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        return this;
    }

    on(eventName, fn) { }

    removeListener(event, fn) {
        let lis = this.listeners[event];//Grab the array of listeners by ‘event’
        if (!lis) return this;//If none found return ‘this’ for chaining.
        /** 
         *If found, loop through all listeners.
          If the current listener matches with the ‘fn’ parameter use the splice method of the array to remove it. 
          Break from the loop.
         *
         */
        for (let i = lis.length; i > 0; i--) {
            if (lis[i] === fn) {
                lis.splice(i, 1);
                break;
            }
        }
        return this;// Return ‘this’ to continue chaining
    }

    off(eventName, fn) { }

    once(eventName, fn) { }

    emit(eventName, ...args) { }

    listenerCount(eventName) { }

    rawListeners(eventName) { }
}