
class ActionEventController {
    constructor(context) {
        this._events = {};
        this.context = context
        this.createListeners(context)
        console.log("this at actionEvenController",this)
    }

    createListeners(entity) {
      //  console.log(entity)
        let events = dataHelpers.find(entity, 'on')
     //   console.log(events)
        events.forEach((evt) => {
            window[evt] = this.onEvent
        })
    }
    onEvent(e) {
     // e.preventDefault(e)
    }
}



window.onload = loadActionEventController();

function loadActionEventController() {
    console.log("actionEventController Loaded")

    //Though we are directly creating listeners on the window Interface and implementing our view
    //we should be able to create listenrs on each Object that has a data-Cmd attribute of "on" with some value/callback.
    var actionEventControllerInstance = new ActionEventController(this);
    console.log("actionEventController Instance", actionEventControllerInstance);
}




