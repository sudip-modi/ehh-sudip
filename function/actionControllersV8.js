//Clean up the eventListers. From a registerd Array. Store in LocalStorage.
const scriptURL = 'https://script.google.com/macros/s/AKfycbzKnhyfG0Bp820GhyGsyG0fxMIcOwKWRZDWfVHoZOqUuu39RxUC9_9aF8dfmdeJ23hv-w/exec';
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
        
            match['byCode'] = operate.find(replaceKeyPress, entity.code, 'keys');
            match['byKey'] = operate.find(replaceKeyPress, entity.key, 'keys');
          
            
            if (match['byCode'].length == 0 && match['byKey'].length == 0) {
               //console.log("No match", match, match.length, entity.code)
                entity.preventDefault(entity);
                var appendingBuffer = entity.key;
               // console.log("appending ", entity.key)
               
            } else {
                if (match['byCode'].length > 0) {
                    entity.preventDefault(entity);
                    var replaceContent = replaceKeyPress[entity.code]['content'];

                } else if (match['byKey'].length > 0) {
                    entity.preventDefault(entity);
                    var replaceContent = replaceKeyPress[entity.key]['content'];
                }
                
                
            console.log(replaceContent)

                var appendingBuffer = replaceContent;
              
            }
            console.log("appending ", appendingBuffer, appendingBuffer.length, currentSelection,entity.target)
            var response = currentSelection.anchorNode.data.substr(0, currentSelection.anchorOffset) + appendingBuffer + currentSelection.anchorNode.data.substr(currentSelection.anchorOffset);
            currentSelection.anchorNode.data = response;
            //console.log(response);
            Caret.moveCaret(window, currentCaret + 1);
          
            
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
                    this.SubmitInvoice(event);break;
                case 'NewItem':
                    this.NewItem(event);break;
                case 'RemoveItem':
                    this.RemoveItem(event);break;
                case 'form':
                    ActionView.viewForm(event,commandJson[0].entity);break;
                case 'modal':
                    ActionView.viewModal(event);break;
                case 'closeModal':
                    ActionView.closeModal(event);break;
                //sheet
                case 'SpreadsheetFlowGoogleClient':
                    engine.processReq(SpreadsheetGoogle_ClientFlowRequest);break;
                case 'CreateFileGoogleClient':
                    engine.processReq(createAFileInGoogle_ClientFlowRequest);break;
                case 'ActionStories':
                    event.preventDefault();engine.processReq(GetActionStoriesFlowRequest);break;
                case 'importFromSheet':
                    event.preventDefault();engine.processReq(importFromSheetFlowRequest);break;
                case 'KnowledgeCenter':
                    execute = true;this.KnowledgeCenter(event);break;
                case 'RssReader':
                    event.preventDefault();engine.processReq(RSSReaderFlowRequest);
                case 'exportToSheet':
                    engine.processReq(exportToSheetFlowRequest);break;
                case 'SearchFolder_GoogleServer':
                    engine.processReq(folderGoogle_ServerFlowRequest);break;
                //signup,login
                case 'Signup':
                    engine.processReq(SignUpFlowRequest);break;
                case 'Login':
                    engine.processReq(LoginFlowRequest);break;
                case 'GDrive_Client':
                    Authenticate.oAuth();break;
                //File System
                case "new":
                    engine.processReq(newActionStoryRequest); break;
                case 'OpenFile':
                    engine.processReq(openAFileRequest);break;
                case 'OpenDirectory':
                    event.preventDefault();engine.processReq(OpenADirectoryRequest);break;
                case 'file':
                    engine.processReq(everyFileRequest,{"event":event});break;
                case 'FS_Save':
                    engine.processReq(saveFileFlowRequest);break;
                case 'Redirect':
                    event.preventDefault();ActionController.onChangeRoute(commandJson[0].entity);break;
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
    async KnowledgeCenter(event){
        event.preventDefault();
        if(execute == true){
            try{
                execute = false;
                var result = await engine.processReq(GetKnowledgeCenterLinksFlowRequest);
                if(result !== undefined){
                    console.log(result.flowRequest.response.output.length);
                    var array = 
                    result.flowRequest.response.output
                    .map(link =>link.toString())
                    .filter(link => link.includes('https://') || link.includes('www.'));
                    console.log(array.length);
                    var urls = [... new Set(array)];
                    console.log(urls.length);
                    var index = urls.indexOf('http://www.collatebox.com/');
                    urls.splice(0,index + 1);
                    console.log(urls.length);
                    var urlsV2 = urls.filter(link=>{
                        if(link.includes("https://developers.google.com/")|| link.includes("https://stackoverflow.com/"))
                            return false;
                        else
                            return true;
                    });
                    console.log(urlsV2.length);
                    var arrayOfURLS = [];
                    while (urlsV2.length) {
                        arrayOfURLS.push(urlsV2.splice(0, 10));
                    }
                    for await(var data of arrayOfURLS){
                        console.log(data.length);
                        var body = await  HttpService.requestBuilder("POST",{'Accept':'application/json', 'Content-Type':'application/json'},JSON.stringify({'urls':data}));
                        var response =  await HttpService.fetchRequest("http://127.0.0.1:5502/functions/MetaData",body);//PUPETEER
                        console.log('Response');
                        await engine.processReq(sendDataToKnowledgeCenterFlowRequest,{'data':response.array});
                    }
                   
                }
            }catch(err){
                console.log(err);
            }
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
    RemoveItem(event){
            event.preventDefault();
            var Id = 'tr' + event.target.getAttribute('id');
            var element = document.getElementById(Id);
            if(element !== null)
                element.parentNode.removeChild(element);
    }
    NewItem(event){
        event.preventDefault();
        var ItemId = uid();
        var newItem = JSON.parse(JSON.stringify({}));
        newItem[ItemId] = JSON.parse(JSON.stringify(newItemJSON));
        newItem[ItemId]['td1']['a']['id'] = ItemId;newItem[ItemId]['id'] = 'tr'+ ItemId;
        var newItem = new Entity(newItem,document.getElementById('tbody'));
    }
}