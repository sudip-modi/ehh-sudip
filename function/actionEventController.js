//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
let event = {
    "origin": ["mouse", "window", "ehh", "HTTP", "keyBoard"],
}

class actionEventController {

    constructor(context, elements) {
        //  super();
        this.elements = elements
        this.context = context
        this.createListeners(context)
    }

    createListeners(entity) {
        console.log(entity);
        var events = dataHelpers.find(entity, 'on');
        console.log("events Found", events);
        // if (events)
        var a = events.forEach(this.create);
        // console.log(a);
        this.save(events, this.context.constructor.name + "listeners");

        console.log("listeners created & Saved to local storage at ", new Date().toLocaleString().replace(',', ''), this.constructor.name);

    }

    create(entity) {
      //  console.log(entity, "entity created");

        window[entity] = actionEventController.onEvent;

    }
    static onEvent(e) {
        e.preventDefault(e);
        console.log("let Controller Know")
    }

}



