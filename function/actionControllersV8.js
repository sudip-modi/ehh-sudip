//Clean up the eventListers. From a registerd Array. Store in LocalStorage.
const scriptURL = `https://script.google.com/macros/s/AKfycbzOBsKbeUSr99-TQkgjI0JJQYcN8VzGiU3wm-fJzzbhuRNbVYe2Y5owNzMIgMCGrORuxw/exec`;
var execute = false;
class ActionController extends ActionEvent {
    constructor(view,model,actionEvent) {
        super()
        this.model = model
        this.view = view
        this.actionEvent = actionEvent;
        this.bufferRange = '';
      //  this.createListeners(document);
        //this.activeListerners = this.createListeners(window);
        //console.log("Listeners",this.activeListerners);
        //   window.addEventListener('change', e => this.emit('change', e));
        //window.addEventListener('event', e => this.emit('click', e))
        document.addEventListener('mouseenter', e => this.emit('handleEvent', e));
        document.addEventListener('readystatechange', e => this.emit('handleEvent', e));
        document.addEventListener('DOMContentLoaded', e => this.emit('handleEvent', e));
        document.addEventListener('mouseleave', e => this.emit('handleEvent', e));
        document.addEventListener('mouseout', e => this.emit('handleEvent', e));
        window.addEventListener('load', e => this.emit('handleEvent', e));
        window.addEventListener('beforeunload', e => this.emit('handleEvent', e));
        window.addEventListener('hashchange', e => this.emit('handleEvent', e));
        window.addEventListener('popstate', e => this.emit('handleEvent', e));
        window.addEventListener('mouseover', e => this.emit('handleEvent', e));
        window.addEventListener('storage', e => this.emit('handleEvent', e));
        window.addEventListener('click', e => this.emit('handleEvent', e));
        window.addEventListener('keydown', e => this.emit('handleEvent', e));
        window.addEventListener('keypress', e => this.emit('handleEvent', e));
        window.addEventListener('keyup', e => this.emit('handleEvent', e));

    }
    handleEvent(event) {
      
      //  console.log(event.type)
        switch (event.type) {
            case 'load':
                 // console.log(event.type)

                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'beforeunload':
               // console.log(event.type)

                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'readystatechange':
             //   console.log(event.type)
                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'DOMContentLoaded':
               // console.log(event.type)
                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
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
            case 'keydown':
              
                this.onKeyDown(event)
              // console.log("keydown", event.type,event.key, event.target)
                break;
            case 'keypress':
                // this.emit('keypress', event)
                this.onKeyPress(event)
               // console.log("keypress", event.type,event.key ,event.target)
                break;
            case 'keyup':
                this.onKeyUp(event)
                //  console.log("message", event.type, event.target)
                break;
            case 'mouseover':
                this.onMouseOver(event);
                //console.log("mouseover", event.type, event.target)
                break;
            case 'mouseenter':
                this.onMouseEnter(event);
                //console.log("mouseover", event.type, event.target)
                break;
            case 'mouseleave':
                this.onMouseLeave(event);
                //console.log("mouseover", event.type, event.target)
                break;
            case 'mouseout':
                this.onMouseLeave(event);
                //console.log("mouseover", event.type, event.target)
                break;
            // case 'storage':
            //     console.log("storage", event.type, event.target)
            //     console.log(Object.keys(actionStorageInstance.entity))

//                break;
            default:
            // console.log("I don't know such values",event.type);
        }
        // console.log("handler", event.type, event.target.getAttribute('name'))
        //  window.postMessage()

        //filter the registerd events paired with Target

    }
    onRouteChange(e) {
        var routeKeyword;
        if (document.location.hash) {
           // console.log("it's a hash Change", document.location.hash.substring(1));
            routeKeyword = document.location.hash.substring(1);
        } else if (document.location.search) {
          //  console.log("it's a search Change", document.location.search.substring(1));
            routeKeyword = document.location.search.substring(1);
        } else {
           // console.log("no idea");
        }

      //  const hashLocation = window.location.hash.substring(1);
      
        if (routeKeyword) {
           // console.log(hashLocation);
            var routeModel = operate.findMatchingInArrayOfObject(actionSpaceViewModel, 'keyword', routeKeyword, 'values');
           // console.log(routeModel[0].model, this.view._actionView)
            //console.log(routeModel)
            if (routeModel.length !=0) {
                this.view.replaceChild([routeModel[0].model, this.view._actionView.entity]);
            } else {
                console.log('no route found');
            }  
        }
    }
    static onChangeRoute(routeKeyword){
        console.log("onChangeRoute :- " + routeKeyword);
        if (routeKeyword) {
             var routeModel = operate.findMatchingInArrayOfObject(actionSpaceViewModel, 'keyword', routeKeyword, 'values');
             if (routeModel.length !== 0) {
                 window.location.hash =  routeKeyword;
             } else {
                 console.log('no route found');
             }  
         }

    }
    onKeyPress(entity) {//used for typing
        var match = {};
        var currentSelection = window.getSelection();
        var currentCaret = currentSelection.anchorOffset;
        //console.log("key pressed",entity.target,)
     //  console.log(entity.code + ":::: key pressed");
     
        
        if (entity.key) {
        
           // console.log(this.bufferRange, entity.code);
           // this.bufferRange = this.bufferRange + entity.code;
            //console.log(this.bufferRange, entity.code);
        
            // match['byCode'] = operate.find(replaceKeyPress, entity.code, 'keys');
            // match['byKey'] = operate.find(replaceKeyPress, entity.key, 'keys');
          
            
            // if (match['byCode'].length == 0 && match['byKey'].length == 0) {
            //    //console.log("No match", match, match.length, entity.code)
            //     entity.preventDefault(entity);
            //     var appendingBuffer = entity.key;
            //    // console.log("appending ", entity.key)
               
            // } else {
            //     if (match['byCode'].length > 0) {
            //         entity.preventDefault(entity);
            //         var replaceContent = replaceKeyPress[entity.code]['content'];

            //     } else if (match['byKey'].length > 0) {
            //         entity.preventDefault(entity);
            //         var replaceContent = replaceKeyPress[entity.key]['content'];
            //     }
                
                
            // console.log(replaceContent)

            //     var appendingBuffer = replaceContent;
              
            // }
            // console.log("appending ", appendingBuffer, appendingBuffer.length, currentSelection,entity.target)
            // var response = currentSelection.anchorNode.data.substr(0, currentSelection.anchorOffset) + appendingBuffer + currentSelection.anchorNode.data.substr(currentSelection.anchorOffset);
            // currentSelection.anchorNode.data = response;
            // console.log(response);
            // Caret.moveCaret(window, currentCaret + 1);
          
            
        }
        
    }
    onKeyDown(entity) { //other stuff
        var match;
        //console.log("key pressed",entity.target,)
        // console.log(entity.key + ":::: key pressed");
       // entity.preventDefault(entity);
        // if (entity.key) {

        //     //  console.log("bufferRange", this.bufferRange);
        //     var autoSuggestWindow = window['autoSuggest'];
        //     if (entity.keyCode == 32) {
        //        //   console.log('space bar found',this.bufferRange);
        //         if (this.bufferRange.length > 0) {
        //             this.bufferRange = '';
        //         }
        //         if (autoSuggestWindow.style.display == 'block') {
        //             autoSuggestWindow.style.display = 'none';

        //         }
        //     } else {
        //         this.bufferRange = this.bufferRange + entity.key;
        //         match = operate.find(hotKeyList, this.bufferRange, 'keys');
        //         //   console.log("match Found", this.bufferRange, match);

        //         if (autoSuggestWindow.style.display == 'block') {
        //             autoSuggestWindow.style.display = 'none';
        //         }
        //     }
        //     if (entity.keyCode == 9) {


        //         // console.log("tab pressed", this.bufferRange);
        //     }

        //     //  console.log(match)

        //     if (operate.isUseless(match) === false && match.length > 0) {


        //         var autoSuggestWindow = window['autoSuggest'];
        //         var caretViewCordinates = Caret.getCaretCoordinates();
        //         // console.log(autoSuggestWindow, caretViewCordinates['y']);
        //         autoSuggestWindow.style.left = caretViewCordinates['x'] + 'px';
        //         autoSuggestWindow.style.top = caretViewCordinates['y'] + 20 + 'px';
        //         autoSuggestWindow.style.display = 'block';
        //     }
        //     // console.log("key pressed", Caret.getCaretCoordinates(), Object.keys(hotKeyList));


        // }

    }
    onKeyUp(entity) {
       // console.log("key was up")
    }
    async onClick(event) {
        /**
         * check if the target entity has any click or data - command set, if yes, then process it.
         */
        console.log("Clicked" + event.target.hasAttribute("data-command"));
     //   event.preventDefault();
        if (event.target.hasAttribute("data-command")) {
  
            var dataCommand = event.target.getAttribute('data-command');
//          console.log(dataCommandT);
            var commandJson = JSON.parse(dataCommand);
            console.log("Command " + commandJson[0].command);
            switch (commandJson[0].command) {
            //invoice operations
                case 'SubmitInvoice':
                    event.preventDefault();await this.SubmitInvoice(event);break;
                case 'NewItem':
                    event.preventDefault();await this.NewItem(event);break;
                case 'RemoveItem':
                    event.preventDefault();await this.RemoveItem(event);break;
                case 'form':
                    event.preventDefault();await engine.processReq(viewFormRequest,{'event':event,'entity':commandJson[0].entity});break;
                case 'modal':
                    await ActionView.viewModal(event);break;
                case 'closeModal':
                    await ActionView.closeModal(event);break;
                //sheet
                case 'ActionStories':
                    event.preventDefault();await engine.processReq(GetActionStoriesFlowRequest);break;
                case 'importFromSheet':
                    event.preventDefault();await engine.processReq(importFromSheetFlowRequest);break;
                case 'exportToSheet':
                    event.preventDefault();await engine.processReq(exportToSheetFlowRequest);break;
                case 'SearchFolder_Google':
                    event.preventDefault();await engine.processReq(folderGoogle_ServerFlowRequest);break;
                //signup,login
                case 'Signup':
                    event.preventDefault();await engine.processReq(SignUpFlowRequest);break;
                case 'SelfInvite':
                    event.preventDefault();Authorization.oAuth(event, 'google');break;
                case 'Login':
                    event.preventDefault();await engine.processRequest('loginRequest',{},true);break;//await engine.processReq(LoginFlowRequest);
                //File System
                case "new":
                    await engine.processReq(newActionStoryRequest);break;
                case 'OpenFile':
                    event.preventDefault();await engine.processReq(openAFileRequest);break;
                case 'OpenDirectory':
                    event.preventDefault();await engine.processReq(OpenADirectoryRequest);break;
                case 'file':
                    event.preventDefault();await engine.processReq(everyFileRequest,{"event":event,'from':event.target.getAttribute('from')});break;
                case 'FS_Save':
                    event.preventDefault();await engine.processReq(saveFileFlowRequest);break;
                case 'Redirect':
                    event.preventDefault();await ActionController.onChangeRoute(commandJson[0].entity);break;
                default:
                // console.log("I don't know such values",event.type);
            }
        }
        if (event.target.classList.contains('editable')) {
            // console.log("clickedOn", entity.target.id, entity.target.classList.contains('editable')) // TO check if it's content
            event.target.setAttribute('contentEditable', 'true');
            //entity.target.setAttribute('State', "contentEditable");
        }
        if(event.target.classList.contains('parent')){
            console.log("yo")
            event.target.parentElement.querySelector(".nested").classList.toggle("active");
            event.target.classList.toggle("parent-down");
        }
        if(event.target.id == 'MainHeaderHamburger1'){
            document.getElementById('navigationSection').classList.toggle('hide')
            document.getElementById('navigationSection').classList.toggle('active')  
        }

    }
    onMouseEnter(event){
       // console.log('onMouseEnter',event.target,event.type)
        if (event.target.id) {
            event.target.setAttribute('State', event.type);
           // console.log('onMouseEnter',event.target,event.type)

        }
    }
    onMouseLeave(event){
      //  console.log('onMouseLeave',event.target,event.type)
        if (event.target.id) {
          //  console.log('onMouseLeave',event.target.id,event.type)
            event.target.setAttribute('State', event.type);
            //console.log('onMouseLeave',event.target.id,event.type)

        }
    }
    onMouseOver(event) {
        //console.log('onMouseOver',event.target.id,event.type)
        if (event.target.id) {
           // console.log('onMouseOver',event.target.classList,event.type)
           // event.target.setAttribute('State', event.type);
           // event.target.classList.add('event.type');
        }
        if (event.target.classList.contains('inlineContent')) {
            //event.target.classList.add(event.type);
            event.target.setAttribute('State', event.type);
          //  console.log('onMouseOver',event.target.classList,event.type)
        }
        if (event.target.classList.contains('editable')) {

           // event.target.previousElementSibling.style = 'visibility:visible'

          //  console.log(event.target.previousElementSibling.innerHTML)
            //event.target.previousElementSibling('visibility',true)

            //console.log("yo")
        }
    }
    async SubmitInvoice(event){
        try{
            event.preventDefault();
            var children = document.getElementById('tbody').childNodes;
            var InvoiceItems = [];
            var DocNumber = document.getElementById('DocNumber').textContent;
            for(var i = 0;i < children.length ; i++){
                var item = [DocNumber,document.getElementsByClassName('Description')[i].textContent,document.getElementsByClassName('Amount')[i].textContent,
                            document.getElementsByClassName('DetailType')[i].textContent,document.getElementsByClassName('Ref')[i].textContent,
                            document.getElementsByClassName('Account')[i].textContent,document.getElementsByClassName('LineStatus')[i].textContent,];
                InvoiceItems.push(item);
            }
            var json = {'array':InvoiceItems};
            ActionView.addInnerHTML('',document.getElementById('viewForm'));
            var response = await HttpService.fetchRequest(scriptURL,HttpService.requestBuilder("POST",undefined,JSON.stringify(json)));
            alert(response.output);
            ActionView.addInnerHTML(sampleIntroStory,document.getElementById('inlineContent'));
            
        }catch(err){
            console.log(err);  
        }
    }
    async RemoveItem(){
            event.preventDefault();
            var Id = 'tr' + event.target.getAttribute('id');
            var element = document.getElementById(Id);
            if(element !== null)
                element.parentNode.removeChild(element);
    }
    async NewItem(){
        var ItemId = uid();
        var newItem = JSON.parse(JSON.stringify({}));
        newItem[ItemId] = JSON.parse(JSON.stringify(newItemJSON));
        newItem[ItemId]['td1']['a']['id'] = ItemId;newItem[ItemId]['id'] = 'tr'+ ItemId;
        var newItem = new EntityV1(newItem,document.getElementById('tbody'));
    }
    static async createScripts(){
        var scriptPaths = ['ClientSideAppsScriptFiles/appsscript.json','ClientSideAppsScriptFiles/operate.gs','ClientSideAppsScriptFiles/GDriveFileFolders.gs', 'ClientSideAppsScriptFiles/actionEngineEhh.gs','ClientSideAppsScriptFiles/userRequestModels.gs','ClientSideAppsScriptFiles/Server.gs'];
        var scripts = [];
        await EntityV1.walk(scriptPaths,
          {
            value: {
              func: async function(scriptPaths, key, scripts){
                var contentOfFile = await HttpService.fetchRequest(scriptPaths[key], {},true);
                var nameOfFile = getFileNameFromPath(scriptPaths[key]);
                var extensionOfFile = nameOfFile.split(".").pop();
                nameOfFile = nameOfFile.split(".")[0];
      
                var typeOfFile;
      
                switch(extensionOfFile){
                  case "js":
                  case "gs":
                    typeOfFile = "SERVER_JS";
                    break;
                  
                  case "json":
                    typeOfFile = "JSON";
                    break;
                  
                  case "html":
                  case "htm":
                    typeOfFile = "HTML";
                    break;
      
                  default:
                    typeOfFile = "ENUM_TYPE_UNSPECIFIED";
                }
      
                scripts.push({
                  'name' : nameOfFile,
                  'type' : typeOfFile,
                  'source': contentOfFile
                });
                console.log('we are here', nameOfFile);
              },
              args: [scripts],
              wait: true
            }
          }
        );
        var obj = {};
        obj.files = scripts;
        return obj;
    }
}