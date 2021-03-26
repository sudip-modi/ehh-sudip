
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
    constructor(view,model, actionEvent) {
        super()
        this.model = model
        this.view = view
        this.actionEvent = actionEvent
        //   window.addEventListener('change', e => this.emit('change', e));
        //window.addEventListener('event', e => this.emit('click', e))
        window.addEventListener('hashchange', e => this.emit('handleEvent', e));
        window.addEventListener('popstate', e => this.emit('handleEvent', e));
        window.addEventListener('mouseover', e => this.emit('handleEvent', e));
        window.addEventListener('mouseover', e => this.emit('handleEvent', e));
        window.addEventListener('storage', e => this.emit('handleEvent', e));
        window.addEventListener('mouseover', e => this.emit('handleEvent', e));
        window.addEventListener('click', e => this.emit('handleEvent', e));
        window.addEventListener('keypress', e => this.emit('handleEvent', e));
        window.addEventListener('keyup', e => this.emit('handleEvent', e));

    }
    onRouteChange(e) {
        var routeKeyword;
        if (document.location.hash) {
            console.log("it's a hash Change", document.location.hash.substring(1));
            routeKeyword = document.location.hash.substring(1);
        } else if (document.location.search) {
            console.log("it's a search Change", document.location.search.substring(1));
            routeKeyword = document.location.search.substring(1);
        } else {
            console.log("no idea");
        }

      //  const hashLocation = window.location.hash.substring(1);
      
        if (routeKeyword) {
           // console.log(hashLocation);
            var routeModel = operate.findMatchingInArrayOfObject(actionSpaceViewModel, 'keyword', routeKeyword, 'values');
           // console.log(routeModel[0].model, this.view._actionView)
            console.log(routeModel)
            if (routeModel.length !=0) {
                this.view.replaceChild(routeModel[0].model, this.view._actionView);
            } else {
                console.log('no route found');
            }  
        }
    }
    updateView() {
        
    }
    formSubmit(event) {
        if (!isValid)
            event.preventDefault();
        console.log('Target ID :- ' + e.getAttribute('id'));
        switch (event.getAttribute('id')) {
            case 'get':
                Sync.get(e); console.log(event.target); break;
            case 'set':
                Sync.send(e); console.log(event.target); break;
        }
    }
    handleEvent(event) {
      //  console.log(event.type)
        switch (event.type) {
            case 'hashchange':
                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'click':
                this.onClick(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'submit':
                this.onSubmit(event);
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
        console.log(entity.key + ":::: key pressed");
        var currentSelection = window.getSelection();
        //        console.log("Current selection :-" + currentSelection.toString()); 
        var focusText = currentSelection.anchorNode.data;
        //        console.log("Focus text :-" + focusText);
        var focusTextEntity = entity.target.textContent; //Pure text
        //        console.log("FocusTextEntity :-" + focusTextEntity);
        var focusEntityInnerText = entity.target.innerText; // Rendered Text
        //       console.log("focusEntityInnerText :-" + focusEntityInnerText);
        // console.log("focusEntityInnerText", currentSelection);
        var currentCaret = currentSelection.anchorOffset;
        if (entity.key) {
            return;
        }
        // if(entity.key == 'Enter'){return;}
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
        /**
         * check if the target entity has any click or data - command set, if yes, then process it.
         */
        console.log("Clicked" + event.target);
        if (event.target.hasAttribute("data-command")) {
            var dataCommandT = event.target.getAttribute('data-command');
            console.log(dataCommandT);
            var commandJSOn = JSON.parse(dataCommandT);
            //           console.log( "Command "+ JSON.stringify(commandJSOn));
            switch (commandJSOn[0].command) {
                //home page
                case 'signup':
                    window.location.href = './html/signup.html'; break;
                case 'signin':
                    window.location.href = './html/signin.html'; break;
                case 'google':
                    Authorization.oAuth(event, 'json'); break;
                //sheet
                case 'view':
                    ActionView.showModal(commandJSOn[0].entity); break;
                case 'get':
                    Sync.get(event); console.log(event.target); break;
                case 'set':
                    Sync.send(event); console.log(event.target); break;
                //File System
                case 'FSOpenDirectory':
                    processFS.OpenDirectory(event); break;
                case 'FSNew':
                    processFS.NewFile(event); break;
                case 'FSOpen':
                    processFS.readFile(event); break;
                case 'FS_Save':
                    processFS.saveFile(event); break;
                case 'FS_SaveAs':
                    processFS.saveAsFile(event); break;
                // case 'file':
                //     this.file(event);break;
                // case 'caret':
                //     this.caret(event);break;
                // local storage
                case 'new':
                    this.new1(event); break;
                case 'save':
                    this.save(event); break;
                case 'cloud':
                    this.load(event); break;
                case 'download':
                    this.download(event); break;
                case 'delete':
                    this.delete(event); break;
                case 'logout':
                    this.logout(event); break;
                case 'keyup':
                    this.onKeyUp(event); break;
                case 'mouseover':
                    this.onMouseOver(event); break;
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
        console.log("New One");
        //   var item = document.getElementById('editor');
        //    var newentity = document.createElement('ol');
        //    new Entity(actionUserContent,newentity);
        ActionView.updateTitle(actionStoryTemplate.name);
        ActionView.updateText(actionUserContent[0]['innerHTML']);
        //    this.view.updateText(actionUserContent[0]['innerHTML']);
        //    item.replaceChild(newentity , item.childNodes[1]);
    }
    save(event) {
        var entityName = ActionView.getTitle();
        console.log(entityName);
        var entityValue = ActionView.getText();
        StorageHelper.saveToStorage(entityName, entityValue);
    }
    load(event) {
        const entityName = window.prompt('Enter name of the Action Story you want to load', '');
        const entitytValue = StorageHelper.getFromStorage(entityName);
        console.log(entityName + ":::::" + entitytValue);
        if (entitytValue !== null) {
            ActionView.updateTitle(entityName);
            ActionView.updateText(entitytValue);
            //   this.view.updateText(entitytValue);
            console.log("Loaded successfully");
        } else {
            alert(entityName + " doesn't exist");
        }
    }
    delete(event) {
        const entityName = window.prompt('Enter name of the Action Story you want to delete', '');
        console.log("entityName:- " + entityName);
        const entitytValue = StorageHelper.getFromStorage(entityName);
        console.log(entityName + ":::::" + entitytValue);
        if (entitytValue !== null) {
            StorageHelper.removeFromStorage(entityName);
            console.log("Deleted successfully");
        } else {
            alert(entityName + " doesn't exist");
        }
    }
    download(event) {
        const entityName = window.prompt('Enter name of the Action Story you want to download', '');
        console.log("entityName:- " + entityName);
        const entitytValue = StorageHelper.getFromStorage(entityName);
        console.log(entityName + ":::::" + entitytValue);
        if (entitytValue !== null) {
            StorageHelper.export(entityName, entitytValue);
            console.log("Downloaded successfully");
        } else {
            alert(entityName + " doesn't exist");
        }
    }
    async logout(event) {
        console.log("Logout");
        event.preventDefault();
        if (localStorage.getItem('LoginEhh' + localStorage.getItem('emailID')) === 'true') {
            localStorage.removeItem('LoginEhh' + localStorage.getItem('emailID'));
            alert('Logged out through ehh');
        } else if (localStorage.getItem('LoginEhhGoogle' + localStorage.getItem('emailID')) === 'true') {
            localStorage.removeItem('LoginEhhGoogle' + localStorage.getItem('emailID'));
            var response = await Credentials.actions(event, "LOGOUT");
            if (!response.error) {
                console.log("You have been logged out successfully");
            }
            alert('Logged out through ehh Google');
        }
        localStorage.removeItem('emailID');
        window.location.href = '../';
    }
}