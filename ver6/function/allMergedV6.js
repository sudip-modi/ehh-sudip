class actionState {
    static initState(e) {
        var nodes = [];
        //currentState = e.type;
        document.documentElement.querySelectorAll('*').forEach(function (node) {
            node.setAttribute("currentstate", "inDom"); node.setAttribute("prevstate", "");
            //  console.log(node);
        });
    }
    static changeState(e) {
        var targetElement = e.target;       //console.log("changing state for event");
        let currentState = targetElement.getAttribute('currentstate'); //console.log("current state", currentState);  //console.log("prev state",prevState);
        let prevState = targetElement.getAttribute('prevstate');
        if (prevState === currentState) {
            targetElement.setAttribute('currentstate', e.type); //console.log(prevState);
        } else {
            targetElement.setAttribute('prevstate', currentState); //console.log(prevState);
            targetElement.setAttribute('currentstate', e.type); //console.log(prevState);
            // console.log("New State",targetElement);
        }
        ehhEvent.conductEvent(e);
        //console.log(targetElement.getAttributes(prevstate));

    }
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

class ActionController extends ActionEvent {
    constructor(model, view, actionEvent) {
        super()
        this.model = model
        this.view = view
        this.actionEvent = actionEvent
        //   window.addEventListener('change', e => this.emit('change', e));
        //window.addEventListener('event', e => this.emit('click', e))
        window.addEventListener('storage', e => this.emit('handleEvent', e));
        window.addEventListener('mouseover', e => this.emit('handleEvent', e));
        window.addEventListener('click', e => this.emit('handleEvent', e));
        window.addEventListener('keypress', e => this.emit('handleEvent', e));
        window.addEventListener('keyup', e => this.emit('handleEvent', e));
    }

    handleEvent(event) {
        // console.log(event.type)
        switch (event.type) {
            case 'click':
                this.onClick(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'selectstart':
                //console.log("selectstart", event.type, event.target)
                break;
            case 'keypress':
                //  this.emit('keypress', event)
                this.onKeyPress(event)
                // console.log("keypress", event.type, event.target)
                break;
            case 'keyup':
                this.onKeyUp(event)
                //  console.log("message", event.type, event.target)
                break;
            case 'mouseover':
                this.onMouseOver(event);
                //console.log("mouseover", event.type, event.target)
                break;
            case 'storage':
                console.log("storage", event.type, event.target)
                console.log(Object.keys(actionStorageInstance.entity))

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

        if (entity.key == 'Enter') {
            return;
        }
        /// Directly entering the key In the view
        entity.preventDefault(entity);
        var response = currentSelection.anchorNode.data.substr(0, currentSelection.anchorOffset) + entity.key + currentSelection.anchorNode.data.substr(currentSelection.anchorOffset);
        currentSelection.anchorNode.data = response;
        Caret.moveCaret(window, currentCaret + 1);




    }
    onKeyUp(entity) {
        console.log("key was up")
    }
    onClick(event) {


        //   console.log("clicked On", entity.target)
        /**
         * check if the target entity has any click or data - command set, if yes, then process it.
         */
        //'data-command': `[{"command":"new","entity": "actionContent","value":"innerHTML"}]`

        if (event.target.hasAttribute("data-command")) {
            var dataCommandT = event.target.getAttribute('data-command');
            var commandJSOn = JSON.parse(dataCommandT);
            console.log(commandJSOn)
            // var entityName = document.getElementById(commandJSOn[0].entity).getAttribute(commandJSOn[0].identifier);

            switch (commandJSOn[0].command) {
                case 'addFile':
                    this.addFile(event);
                    //  console.log("new", event.type, event.target)
                    break;

                case 'new':
                    this.new1(event);
                    //  console.log("new", event.type, event.target)
                    break;
                case 'save':
                    this.save(event);
                    //console.log("selectstart", event.type, event.target)
                    break;
                case 'load':
                    //  this.emit('keypress', event)
                    this.load(event)
                    // console.log("keypress", event.type, event.target)
                    break;
                case 'keyup':
                    this.onKeyUp(event)
                    //  console.log("message", event.type, event.target)
                    break;
                case 'mouseover':
                    this.onMouseOver(event);
                    //console.log("mouseover", event.type, event.target)
                    break;
                case 'storage':
                    console.log("storage", event.type, event.target)
                    console.log(Object.keys(actionStorageInstance.entity))
                    break;
                
                default:
                // console.log("I don't know such values",event.type);
            }


        }
        if (event.target.classList.contains('editable')) {
            // console.log("clickedOn", entity.target.id, entity.target.classList.contains('editable')) // TO check if it's content
            event.target.setAttribute('contentEditable', 'true');
            //entity.target.setAttribute('State', "contentEditable");
        }

       
    }
    onMouseOver(event) {
        if (event.target.id) {
            event.target.setAttribute('State', "mouseover");

        }
        if (event.target.classList.contains('editable')) {

            event.target.previousElementSibling.style = 'visibility:visible'

            console.log(event.target.previousElementSibling.innerHTML)
            //event.target.previousElementSibling('visibility',true)

            //console.log("yo")
        }
    }
    new1(event) {
        var dataCommandT = event.target.getAttribute('data-command');
        var commandJSOn = JSON.parse(dataCommandT);
        var entity = document.getElementsByTagName('actioncontent')[0];
        new Entity(actionStoryTemplate, entity);
        entity.previousElementSibling.innerText = actionStoryTemplate.name;

        //  entity.previousElementSibling.innertext = actionStoryTemplate.name;

    }
    save(event) {

        //    var dataCommandT = event.target.getAttribute('data-command');
        //  var commandJSOn = JSON.parse(dataCommandT);
        var entity = document.getElementsByTagName('actioncontent')[0];
        //new Entity(actionStoryTemplate, entity);
        // entity.previousElementSibling.innerText = actionStoryTemplate.name;
        var entityName = entity.previousElementSibling.innerText;
        console.log(entityName)
        var entityValue =
        {
            name: entityName,
            id: entity.getAttribute('id'),
            'innerHtml': entity.innerHTML
        };
        StorageHelper.saveToStorage(entityName, entityValue);


    }
    load(event) {

        var dataCommandT = event.target.getAttribute('data-command');
        var commandJSOn = JSON.parse(dataCommandT);
        var entity = document.getElementsByTagName('actioncontent')[0];
        var entitytValue = StorageHelper.getFromStorage(event.target.getAttribute('name'));
        console.log("entitytValue", entitytValue)
        var newEntity = new Entity(entitytValue, entity);
        console.log("newEntity", newEntity);
        //   entity.innerHTML = JSON.stringify(entitytValue);
        //  entity.previousElementSibling.innerText = actionStoryTemplate.name;
        // var entity = document.getElementsByTagName('actioncontent')[0].innerHTML = entitytValue;

        // console.log(entity)

        //new Entity(actionStoryTemplate, entity);
        //entity.previousElementSibling.innerText = actionStoryTemplate.name;

    }
    static async addFile(event) { 
        console.log("called")
        var entity = document.getElementById("actionStoryBlockCollection");
        var newFile = document.createElement("div");
        newFile.class = "content item";
        newFile.id = "actionBlock";
        let fileHandle;
        [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const contents = await file.text();
        console.log("content", contents)
        newFile.innerHTML = contents
        entity.appendChild(newFile);
        
    }
    static async saveFile(event,elementID,fileHandle) { 
        var blob = document.getElementById(elementID).innerHTML;
        

        console.log(blob)
        try {
            // code...
            var handle = await window.showSaveFilePicker();
            event.preventDefault();
            localStorage.setItem(handle.name, handle);
            ActionController.writeFile(handle, blob);
        } catch (err) {
            console.log(err);
            // error handling

        } finally { 
           // console.log(err);
         //   localStorage.setItem(err.name, err);
        }
       
        //debugger;
    }
    static async writeFile(fileHandle,contents) { 
        // Create a FileSystemWritableFileStream to write to.
        const writable = await fileHandle.createWritable();

        // Write the contents of the file to the stream.
        await writable.write(contents);

        // Close the file and write the contents to disk.
        await writable.close();
    }
    static saveFile2IndexDb(event, elementId) { 
        console.log(elementId)
        var blob = document.getElementById(elementId).innerHTML;

        actionDataSets.add2Store("files",3, "openFileStore", elementId.name, blob)

    }
}

class ActionView {
    constructor(entity, element) {
        console.log("Request for new View ", entity, element);
        this._actionView = new Entity(entity, element);
        //  console.log(" new View ", this._actionView.entity);
    }
    updateView(event, key, value) {

    }
    updateTitle(name) {
        document.getElementById('loadedRouteTitle').innerText = name;
    }
    getTitle() {
        return document.getElementById('loadedRouteTitle').innerText;
    }
    updateText(data) {
        document.getElementsByTagName('block')[0].innerHTML = data;
    }
    getText() {
        return document.getElementsByTagName('block')[0].innerHTML;
    }
}


//window.onload = test1;

async function  test1() { 
    var entity = document.getElementById("actionStoryBlockCollection");
    var newFile = document.createElement("div");
    newFile.class = "content item";
    newFile.id = "actionBlock";
    const [fileHandle] = await window.showOpenFilePicker();
    actionDataSets.add2Store("files", "recentFileStore", fileHandle.name, [fileHandle])

}
//USe case
// Highlight first 100 lines, then schedule setTimeout (with zero-delay) for the next 100 lines, and so on.
function autoSave() { 

    // repeat with the interval of 2 seconds
  //  let timerId = setInterval(func | code, 2000, [arg1], [arg2], ...)
    // repeat with the interval of 2 seconds

    // let timerId = setInterval(() => alert('tick'), 2000);
//     // after 5 seconds stop
//     setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);



//     let delay = 5000;

//     let timerId = setTimeout(function request() {
//   ...send request...

//   if (request failed due to server overload) {
//         // increase the interval to the next run
//         delay *= 2;
//     }

//     timerId = setTimeout(request, delay);

// }, delay);
}
autoSave();


class actionEngine { 
    
}