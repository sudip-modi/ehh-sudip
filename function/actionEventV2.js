<<<<<<< Updated upstream

=======
<<<<<<<< Updated upstream:function/actionEventV2.js
>>>>>>> Stashed changes

//console.log("app", app)
class ActionEvent {
    constructor(activeListners,entity) {
        this._activeListners =[ activeListners];
<<<<<<< Updated upstream
        console.log(this._activeListners);
        this._elements;
        //  this.on('click', e => this.handleEvent(e));
          this.createListeners(activeListners);
=======
       // console.log(this._activeListners);
        this._elements;
        this.on('click', e => this.handleEvent(e));
      //    this.createListeners(activeListners);
>>>>>>> Stashed changes
        //  console.log(elements4Event)

        // this.on('selection', e => this.onSelection(e));
        // //  this.on('mouseenter', e => this.onMouseEnter(e));
        // //   this.on('mouseleave', e => this.onMouseLeave(e));
        // this.on('change', e => this.onSelection(e));
        // // this.on('keypress', e => this.onKeyPress(e));
        // //this.on('keyup', e => this.onKeyUp(e));
        // this.on('handleEvent', e => this.handleEvent(e));
        // this.on('insertText', e => this.insertText(e));
        // this.on('delButtonClicked', e => this.del(e));

    }

    createListeners(entity) {
        console.log("herer",entity.events)
        let events = operate.find(entity.events, 'event', 'values')
          console.log("events",events)
        events.forEach((evt) => {
              console.log(evt)
           // this.on(evt, e => this.handleEvent(e));
            //window[evt] = this.handleEvent
        })
        //  console.clear()
    }
    // kind of a subscriber
    addListener(eventName, fn) {
        this._events[eventName] = this._events[eventName] || [];
        this._events[eventName].push(fn);
        return this;
    }
    
    on(eventName, fn) {
        return this.addListener(eventName, fn);
    }
    //kind of a publish
    emit(eventName, ...args) {
        let fns = this._events[eventName];
        //  console.log("Emitted",eventName)
        if (!fns) return false;
        fns.forEach((f) => {
            f(...args);
        });
        return true;
    }

}
<<<<<<< Updated upstream
=======
========

//console.log("app", app)
class ActionEvent {
    constructor(elements4Event, entity) {
        this._events = {};
        this._elements = elements4Event;
        //  this.on('click', e => this.handleEvent(e));
        //  this.createListeners(entity);
        //  console.log(elements4Event)

        this.on('selection', e => this.onSelection(e));
        //  this.on('mouseenter', e => this.onMouseEnter(e));
        //   this.on('mouseleave', e => this.onMouseLeave(e));
        this.on('change', e => this.onSelection(e));
        // this.on('keypress', e => this.onKeyPress(e));
        //this.on('keyup', e => this.onKeyUp(e));
        this.on('handleEvent', e => this.handleEvent(e));
        this.on('insertText', e => this.insertText(e));
        this.on('delButtonClicked', e => this.del(e));

    }

    createListeners(entity) {
        // console.log(entity)
        let events = operate.find(window, 'on', 'keys')
        //  console.log(events)
        events.forEach((evt) => {
            //  console.log(evt.substring(2))
            this.on(evt.substring(2), e => this.handleEvent(e));
            //window[evt] = this.handleEvent
        })
        //  console.clear()
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
        //  console.log("Emitted",eventName)
        if (!fns) return false;
        fns.forEach((f) => {
            f(...args);
        });
        return true;
    }

}
>>>>>>>> Stashed changes:function/actionEventV1.js
>>>>>>> Stashed changes
