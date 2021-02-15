
class dataHelpers {

    static find(entity, keyTofind) {
        //console.log("finding", keyTofind, "in", entity);
        var result = Object.keys(entity).filter(function (key, index, self) {
            return !key.indexOf(keyTofind);
        });
        return result;
    }


}


/**
 *  This ActionEventController Works like an event Controller on an Object.
 * When Intiates  via a actionEventInstance = new ActionEventController(arg = isOptional({object}))
 * it creates listners for all the event that can be listened to this object, by finding all the key's with keyName "on" in them as a string.
 * Optional parameter to filter Events while passed as an optional arguments to be implemented.
 * It has a listners Object which acts like a registry of all the events listened to along with an array of all the callback functions registered.
 * 
 */

class ActionEventController {
    constructor(entity) {
        this._events = {};
        this.createListeners(entity);
    }
    on(evt, listener) {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }
    emit(evt, arg) {
        (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }
    createListeners(entity) {
        console.log("creatingListernfor", entity)
        let events = dataHelpers.find(entity, 'on')
        //  console.log(events)
        events.forEach((evt) => {
            window[evt] = this.conductEvent // to be changed to add Listerner
        })
    }

    conductEvent(e) {
        var currentTarget = e.target;

        //  var currentCaret = new Caret(e.target);
        // var newCaretPosition = currentCaret.setPos(currentCaretPosition - 2);
        if (e.type === 'mouseover') {
           // console.log(e.target);
            if (e.key === "Enter") {
             //   console.log("EnterKey Detected")
                Caret.moveCaret(window, 5)
                // insertInTextarea("lol", currentTarget);
            }
        }

        if (e.type === 'keydown') {
            console.log(e.key);
            if (e.key === "Enter") {
                console.log("EnterKey Detected")
                Caret.moveCaret(window, 5)
                // insertInTextarea("lol", currentTarget);
            }
        }

    }

}


/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class EntityController extends ActionEventController{
    constructor(elements) {
      //  this._model = model;
        this._view = elements;
        this.on('addButtonClicked', () => this.buttonClicked());

        view.on('listModified', idx => this.updateSelected(idx));
        elements.addButton.addEventListener('click',
            () => this.emit('addButtonClicked'));
        view.on('delButtonClicked', () => this.delItem());
    }

    addItem() {
        const item = window.prompt('Add item:', '');
        if (item) {
            this._model.addItem(item);
        }
    }
    buttonClicked() {
        const item = window.prompt('Clicked:', '');
        if (item) {
            this._model.addItem(item);
        }
    }

    delItem() {
        const index = this._model.selectedIndex;
        if (index !== -1) {
            this._model.removeItemAt(index);
        }
    }

    updateSelected(index) {
        this._model.selectedIndex = index;
    }
}



/**
 * Ideal Setup
 */
function loadAPP() {
    window.addEventListener('load', () => {
        const _actionSpace = document.getElementsByTagName('actionSpace')[0].__proto__;
        
        console.log('actionSpace', _actionSpace);
        
        const _actionEventController = new ActionEventController(this);
        
        console.log(_actionEventController)

        // const actionEntity = new actionEntity(['node.js', 'react']),
        // view = new ListView(controller,document.getElementsByTagName('actionSpace')[0]),
        // controller = new ListController(model, view);
        // view.show();
    });
}
loadAPP();


