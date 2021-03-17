//console.log("app", app)

/**
 * This class works like a pub/sub, act notify model, 
 * it takes in an array of Object Model and an object with events to be listened to along with it's callback command with argument.
 */

class ActionEvent {
    constructor(elements4Event, entity) {
        this._events = {};
        this._elements = elements4Event;
        //  this.on('click', e => this.handleEvent(e));
        //  this.createListeners(entity);
        //  console.log(elements4Event)
        this.on('selection', e => this.onSelection(e));
        this.on('change', e => this.onSelection(e));

        this.on('keypress', e => this.onKeyPress(e));
        this.on('keyup', e => this.onKeyUp(e));
        this.on('handleEvent', e => this.handleEvent(e));
        this.on('insertText', e => this.insertText(e));
        this.on('delButtonClicked', e => this.del(e));

    }

    createListeners(entity) {
        // console.log(entity)
        let events = dataHelpers.find(window, 'on')
        //  console.log(events)
        events.forEach((evt) => {
            //     console.log(evt.substring(2))
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
var activeListnersGroup = [
    {
        objectModel: 'window',
        events: [ // An Array of Object of Events to be listened to . Value can be an Array String, which will trigger a default
            //Handle Click Function while passing the event as a parameter. 

        ],
    },
    {
        objectModel: 'document',
        events: [
            {
                eventName: '',
                callback: {
                    objectModel: "document",
                    method: 'whichEver',
                    args: ['argumensts'],
                },

            }
        ],
    }
]
    
   
    
    
}