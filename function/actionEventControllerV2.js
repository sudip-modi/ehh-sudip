
class actionEventController {
    constructor(context) {
        this._events = {};
        this.context = context
        this.createListeners(context)
    }


    on(evt, listener) {
        console.log(evt);
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }

    emit(evt, arg) {
        (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }
    createListeners(entity) {
        console.log(entity)
        let events = dataHelpers.find(entity, 'on')
        console.log(events)

        events.forEach((evt) => {
            window[evt] = this.onEvent
        })
    }


    onEvent = (e) => {

        if (e.type === "mouseover") {
            // console.log("Mouse moved")
            //TODO
            // this.emit(e.type, e.target)
        } else if (e.type === "click") {
            // console.log("click")
            console.log(e.target)
            this.emit("click", e.target)
            if (e.target.hasAttribute('data-cmd')) {
                var cmd = e.target.getAttribute('data-cmd');

                if (cmd === "heading") {
                    this.emit('richTextWrap', 'h1')
                } else if (cmd === "justifyRight") {
                    this.emit('richTextStyle', 'text-align:right')
                } else if (cmd === "justifyLeft") {
                    this.emit('richTextStyle', 'text-align:left')

                } else if (cmd === "justifyCenter") {
                    this.emit('richTextStyle', 'text-align:center')

                } else if (cmd === "Bold") {

                    this.emit('richTextWrap', 'b')
                } else if (cmd === "italic") {

                    this.emit('richTextWrap', 'i')
                } else if (cmd === "underline") {

                    this.emit('richTextWrap', 'u')
                } else if (cmd === "insertUnorderedList") {

                    this.emit('richTextWrap', 'li')
                } else if (cmd === "insertOrderedList") {
                    this.emit('richTextWrap', 'ol')

                } else if (cmd === "createLink") {
                    this.emit('richTextWrap', 'a')

                } else if (cmd === "showCode") {
                    //TODO
                } else if (cmd === "undo") {
                    //    TODO
                } else if (cmd === "redo") {
                    //TODO
                }

            }
        }
        if (e.type === "contextmenu") {
            e.preventDefault();

        } else if (e.type === "input") {
            console.log(e.target)
            this.emit('updateEditor', e.target.innerText)
            console.log(e.target.innerText)
        }

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




