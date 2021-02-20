var actionSpaceSchema = {


}

//console.log("app", app)
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
        this.on('click', e => this.handleEvent(e));
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
class Entity { 
    constructor(input, output) {
        console.log("entity",input,output)
        this.input = input;
        this.output = output;
        this.entity = process.processReq(input, output);
    }
    static create(input, output, key, value, callback, callbackClass) {
        // console.log('create request for ',output,key)
        if (operate.is(output).includes("HTML")) { //Only HTML creation
            // var response = Object.create(output.constructor.prototype)
            if (operate.isInt(parseInt(key))) {
                var response = document.createElement('option');
            }
            else {
                // console.log(operate.is())
                var response = document.createElement(key);
            }

            // Entity.set(input, response, 'id', key + entityIndex.next().value);
        }
        if (operate.is(output).includes("Object")) { //Only HTML creation
            //   console.log("create request for ", input, output, key, value)

            response = new Object()

            //response = key;
            //response.set(value,key)
            //var response = document.createElement(key);
            if (value) {
                //    process.iterateObj(value,response,key,value)
            }
            // entity.set(input, response, 'id', key + index.next().value);
        }
        if (operate.is(output).includes("Array")) { //Only HTML creation
            // console.log("create request for ", input, output, key, value)

            response = new Object()

            //response = key;
            //response.set(value,key)
            //var response = document.createElement(key);
            if (value) {
                //    process.iterateObj(value,response,key,value)
            }
            // entity.set(input, response, 'id', key + index.next().value);
        }
        if (!response) console.log("no response", output);
        return response;
    }
    static append(input, output, key, value, callback, callbackClass) {
        // console.log('appending', input,output)

        if (operate.is(output).includes("HTML")) { //Only HTML creation
            var response = output.appendChild(input);
        }
        if (operate.is(output).includes("Object")) { //Only HTML creation
            // console.log("append request for ",input,output)     
            output[key] = input;
            var response = output;
            //var response = document.createElement(key);

        }
        if (operate.is(output).includes("Array")) { //Only HTML creation
            // console.log("append request for ",input,output)     
            output.push(input);
            var response = output;
            //var response = document.createElement(key);

        }



        // console.log('appended',response)
        return response;
    }
    static set(input, output, key, value, callback, callbackClass) {
        //  console.log("setting",key, value,"in",output)
        if (operate.is(output).includes("HTML")) { //Only HTML creation
            output.setAttribute(key, value)
            if (operate.isInsideArray(key, htmlAttributesListV2)) {
                //console.log("setting",key, value,"in",output)
             

            } else {
                //  console.log(output,key);
                //var buffer = output;
                output[key] = input[key];
                //buffer=output;
            }

        }
        return output;
    }


    /**
     * 
     */
    static insert(str, index, value) {
        var response = str.substr(0, index) + value + str.substr(index);
        //  console.log("inserted",response)
        return response;

    }

    

}

class ActionController extends ActionEvent {
    constructor(model, view, actionEvent) {
        super()
        this.model = model
        this.view = view
        this.actionEvent = actionEvent
        window.addEventListener('change', e => this.emit('change', e));
        window.addEventListener('event', e => this.emit('click', e))
        window.addEventListener('click', e => this.emit('click', e));
        window.addEventListener('keypress', e => this.emit('keypress', e));
        window.addEventListener('keyup', e => this.emit('keyup', e));
    }

    handleEvent(event) {
        console.log(event.type)
        switch (event.type) {
            case 'click':
                //  console.log(this);
                //  console.log("click", event.type, event.target)
                break;
            case 'selectstart':
                //console.log("selectstart", event.type, event.target)
                break;
            case 'keypress':
                //  this.emit('keypress', event)
                //  this.onKeyPress(event)
                // console.log("keypress", event.type, event.target)
                break;
            case 'message':
                //  console.log("message", event.type, event.target)
                break;
            case 'mousemove':
                // console.log("mousemove", event.type, event.target)
                break;
            default:
            // console.log("I don't know such values",event.type);
        }
        // console.log("handler", event.type, event.target.getAttribute('name'))
        //  window.postMessage()

        //filter the registerd events paired with Target

    }

    onKeyPress(entity) {
        
        console.log("key pressed")
        
        var currentSelection = window.getSelection();
        
        var focusText = currentSelection.anchorNode.data;
        
        var focusTextEntity = entity.target.textContent; //Pure text
        
        var focusEntityInnerText = entity.target.innerText; // Rendered Text
        // console.log("focusEntityInnerText", currentSelection);
        var currentCaret = currentSelection.anchorOffset;

    }
    onKeyUp(entity) { 
        console.log("keywas up")
    }
      
    onClick(entity) {
        //   console.log("clicked On", entity.target)
        //  insertBreakAtPoint(entity);
        /**
         * check if the target entity has any click or data - command set, if yes, then process it.
         */

        var currentSelection = window.getSelection();
        var cartetAtPos = Caret.getCaretPos(entity.data);
        if (entity.target.hasAttribute('data')) {


            var dataCommand = entity.target.getAttribute('data');

            //  var parseCommand=  JSON.parse(dataCommand);
            //  console.log(dataCommand)
            var commandArray = dataCommand.split(",")
            //    console.log(commandArray)
            var entityName = document.getElementById('sampleNote#1').getAttribute('name');
            var entityInnerHtml = document.getElementById('sampleNote#1').innerHTML;

            localStorage.setItem(entityName, entityInnerHtml);

            //    console.log(ActionSpace)
            //   ActionStorage.save(document.getElementById('sampleNote#1').getAttribute('name'), entityInnerHtml);

            //process.act(actionStorage, save, );
            //insertInTextarea()
            //  var methodToexecute = entity.target.data.value;
            // console.log(methodToexecute);

        }

        //if(entity.target)





        //console.log("Clicked",currentSelection,cartetAtPos);
    }

}
class ActionView {
    constructor(entity, element) {
        console.log("Request for new View ", entity, element);
        this._actionView = new Entity(entity, element);
        //  console.log(" new View ", this._actionView.entity);
    }
    updateView() {


    }

}
class StorageHelper {
    constructor(entity) { 
      //  this.entity = getEntityFromStorage()
       StorageHelper.saveToStorage(entity.name, entity);    //Can we store Objects  
        this.entity = StorageHelper.getFromStorage(entity.name);
    }
     static saveToStorage(key, data) {
        console.log("I was called", key)
        // data=JSON.stringify(data)
         localStorage.setItem(key, JSON.stringify(data));
    }

    static getFromStorage(key) {
        let data = localStorage.getItem(key)
        return JSON.parse(data);
    }

    static clearStorage() {
        localStorage.clear()
    }
    static export(fileName, json) {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(json, null, 2)], {
            type: "application/json"
        }));
        a.setAttribute("download", `${fileName}.json`);
        document.body.appendChild(a);
        a.click();
    }
}



var actionSpaceElement = document.getElementById('actionSpace#1');
//console.log(actionSpaceElement);
const actionEntity = new Entity(actionSpaceBasicV1, {});
const actionViewInstance = new ActionView(actionSpaceBasicV1, actionSpaceElement);
const actionEventInstance = new ActionEvent(actionSpaceElement, window);
const actionSpaceInstanceApp = new ActionController(actionEntity, actionViewInstance, actionEventInstance);



// console.log("actionSpaceInstanceApp : >>>>>", actionSpaceInstanceApp)
// console.log("actionSpaceInstanceView : >>>>>", actionViewInstance._actionView.entity)
// console.log("actionSpaceInstanceView.inner HTML : >>>>>", actionSpaceInstanceApp)


var actionSpaceviewInstanceName = actionViewInstance._actionView.entity.getAttribute('id')
//console.log(actionSpaceviewInstanceName);

var storageEntityModel = {
    name: actionSpaceviewInstanceName,
    id: 'actionSpaceviewInstanceName_InLocalStorage_1',
    innerHTML: actionViewInstance._actionView.entity.innerHTML,
    storageClass: "localStorage",
    innerText: actionViewInstance._actionView.entity.innerHTML
}
var actionStorageInstance = new StorageHelper(storageEntityModel)

// const actionSpaceApp = new ActionController(), new ActionView(basicLayout, actionSpaceElement), new ActionEvent(actionSpaceElement,window))
// console.log("actionSpaceApp", actionSpaceApp)
