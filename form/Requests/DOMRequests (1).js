/**
 * @type RequestObj
 */
 var getElement = {
    reqName: "getElement", //CommanName
    objectModel: document,
    method: "getElementById",
    arguments: ["test"],
};

/**
* @type RequestObj
*/
var singleReq = {
    reqName: "singleReq",
    objectModel: document,
    method: "getElementById",
    arguments: ["test"],
    callBack: "convertToJSON",
};

/**
* @type RequestObj
*/
var convertToJSON = {
    objectModel: Entity,
    method: "toJSON",
    arguments: ["fromPrevious", entityModel4Html],
};

/**
 * @type RequestObj
 */
var displayJSON = {
    objectModel: Entity,
    method: "displayDOMJSON",
    arguments: ["fromPrevious"],
};

/**
 * @type {FlowRequest}
 */
var actionFlowModelReq = {
    flowRequest: [
        {
            reqName: "convertElementToJSON",
            objectModel: document,
            method: "getElementById",
            arguments: ["test"],
            callBack: "convertToJSON",
        },
        {
            reqName: "saveElementToLocalStorage",
            objectModel: Storage,
            method: "saveToLocalStorage",
            arguments: ["domJSON", "convertElementToJSON"],
        },
        {
            reqName: "displaySavedElement",
            objectModel: Storage,
            method: "getFromLocalStorage",
            arguments: ["domJSON"],
            callBack: "displayJSON"
        },
    ],
};

/**
 * @type {RequestObj}
 */
var nestedFlowModelReq = {
    reqName: "convertElementToJSON",
    objectModel: document,
    method: "getElementById",
    arguments: ["test"],
    callBack: "convertToJSON",
    andThen: {
        reqName: "saveElementToLocalStorage",
        objectModel: Storage,
        method: "saveToLocalStorage",
        arguments: ["domJSON", "convertElementToJSON"],
        andThen: {
            reqName: "displaySavedElement",
            objectModel: Storage,
            method: "getFromLocalStorage",
            arguments: ["domJSON"],
            callBack: "displayJSON"
        },
    },
};

var setInnerHTML = {
    reqName: "getFirstElement",
    objectModel: document,
    method: "getElementById",
    arguments: ["first"],
    andThen: {
        reqName: "addSecondToFirst",
        objectModel: ActionView,
        method: "addInnerHTML",
        arguments: ["getFirstElement", "<div>I am nested</div>"],
    }
};
//New File Flow - 1.get Editor element 2.get a uid 3.Assign it to editor's fileid,4.Change the content of editor
var newFileFlowRequest = {
     flowRequest:[
    {
        reqName: "Editor",
        objectModel: document,
        method: "getElementById",
        arguments: ["inlineContent"],
    },{
        reqName:'UID',
        objectModel:window,
        method:'uid'
    },{
        reqName:"fileID_File",//2
        objectModel:'Editor',
        method:'setAttribute',
        arguments:['fileid','UID']
    },{
        reqName: "NewActionStory",
        objectModel: ActionView,
        method: "addInnerHTML",
        arguments: [ehhIntro,"Editor"],
    },
    ]
}
//save file Flow -  1.get Editor element 2.get FileID from editor attribute 3.getInnerText of editor 4.get file handle from indexDB
//5. check whether result of (4.) length greater than 0 and stores it in localStorage(new actionStory) 6.create writable 7.update innerText of file using FS8.close writable
var saveFileFlowRequest = {
    flowRequest:[
    {

        reqName:'Editor',//1
        objectModel: document,
        method: "getElementById",
        arguments: ["inlineContent"],
    },
    {
        reqName:"fileID_File",//2
        objectModel:'Editor',
        method:'getAttribute',
        arguments:['fileid']
    },
    {
        validate:{
            objectModel:operate,
            method:'isEqual',
            arguments:['fileID_File.length',0],
            output:false,
        },
        reqName:"FileHandleFromIndexDB",//4
        objectModel:indexDB,
        method:'get',
        arguments:["fileID_File"],
        exitBeforeExecutingRequest:true
    },
    {
        reqName:"getInnerText",//3
        objectModel:document,
        method: "getElementById",
        arguments: ["inlineContent"],
        andThen:['innerText']
    },
    {
        validate:{
            objectModel:operate,
            method:'isNotEmpty',
            arguments:['FileHandleFromIndexDB'],
            output:false
        },
        reqName:'LocalStorage',//5
        objectModel:localStorage,
        method:'setItem',
        arguments:['fileID_File','getInnerText'],
        exitAfterExecutingRequest:true
    },
    {
        reqName:"Writable",//6
        objectModel:"FileHandleFromIndexDB",
        method:"createWritable",
    },
    {
        reqName:"writeinFile",//7
        objectModel:"Writable",
        method:'write',
        arguments:['getInnerText']
    },
    {
        reqName:"closeWritable",//8
        objectModel:"Writable",
        method:'close'
    },
    ]
}
//Open a File Flow -1.Show file Picker 2.Generate a uid 3.Set that uid to fileHandle 4. make a file entry in myFiles 5.,open in the editor
var OpenAFileFlowRequest ={
    flowRequest:[
        {
            reqName:'GetAFile',
            objectModel:window,
            method:'showOpenFilePicker',
            andThen:["0"]
        },
        {
            reqName:'UID',
            objectModel:window,
            method:'uid'
        },
        {
            reqName:'FileHandleToFileID',
            objectModel:indexDB,
            method:'set',
            arguments:["UID","GetAFile"]
        },
        {
            reqName:'GetFileHandleToFileID',
            objectModel:indexDB,
            method:'get',
            arguments:["UID"]
        },
        {
            reqName:'SetUIDToFileJSON',
            objectModel:engine,
            method:'set',
            arguments:[fileJSON,"UID","id",]
        },
        {
           reqName:"SetNameToLocalStorageFile",
            validate:{
                objectModel:operate,
                method:'isNotEmpty',
                arguments:["GetAFile"],
                output:false
            },
            objectModel:engine,
            method:'set',
            arguments:[fileJSON,"UID","textContent"]
        },
        {
            reqName:'file',
            validate:{
                objectModel:operate,
                method:'isNotEmpty',
                arguments:["GetAFile"],
                output:true
            },
            objectModel:"GetAFile",
            method:'getFile'
        },
        {
            reqName:'SetNameToFSFile',
            validate:{
                objectModel:operate,
                method:'isNotEmpty',
                arguments:["GetAFile"],
                output:true
            },
            objectModel:engine,
            method:'set',
            arguments:[fileJSON,"file.name","textContent"]
        },
        {
            reqName:'input',
            objectModel:engine,
            method:'set',
            arguments:[JSON.parse(JSON.stringify({})),fileJSON,"UID"]
        },
        {
            reqName:"myFilesElement",
            objectModel:document,
            method:'getElementById',
            arguments:['myFiles']
        },
        {
            reqName:"newEntity",
            objectModel:ActionView,
            method:'newEntity',
            arguments:['input',"myFilesElement"]
        },
        {
            reqName:'SetUsermyFilesLocalStorage',
            objectModel:localStorage,
            method:'setItem',
            arguments:['UsermyFiles',"myFilesElement.innerHTML"]
        },
        {
            reqName:'Editor',
            objectModel:document,
            method:'getElementById',
            arguments:['inlineContent'],
            callBack:{  method:'setAttribute',arguments:['fileid','UID']}
        },
        {
            reqName:"FileInEditor",
            objectModel:processFSInstance,
            method:'OpenFileInEditor',
            arguments:['UID']
        },
    ]
}
var OpenADirectoryRequest = {
    flowRequest:[
        {
            reqName:'parentHandle',
            objectModel:window,
            method:'showDirectoryPicker',
           // andThen:["0"]
        },
        {
            reqName:"TakeUserPermissionsandGetUID",
            validate:{
                objectModel:processFSInstance,
                method:'verifyPermission',
                arguments:['parentHandle',true],
                output:true
            },
            exitBeforeExecutingRequest:true,
            objectModel:window,
            method:'uid'
        },
        {
            reqName:'FileHandleToFileID',
            objectModel:indexDB,
            method:'set',
            arguments:["TakeUserPermissionsandGetUID",'parentHandle']
        },
        {
            reqName:'Stringify',
            objectModel:JSON,
            method:'stringify',
            arguments:[directoryJSON]
        },
        {
            reqName:'input',
            objectModel:JSON,
            method:'parse',
            arguments:['Stringify']
        },
        {
            reqName:'DirHandleName',
            objectModel:engine,
            method:'set',
            arguments:['input.li.span','parentHandle.name','textContent']
        },
        {
            reqName:"DirHandleId",
            objectModel:engine,
            method:'set',
            arguments:["input.li.list","TakeUserPermissionsandGetUID",'id']
        },
        {
            reqName:"jsonForDirectory",
            objectModel:processFSInstance,
            method:'jsonForDirectory',
            arguments:['input.li.list','parentHandle']
        },
        {
            reqName:'CollectionElement',
            objectModel:document,
            method:'getElementById',
            arguments:['myCollection']
        },
        {
            reqName:'newEntity',
            objectModel:ActionView,
            method:'newEntity',
            //new Entity
            arguments:['input','CollectionElement']
        },
        {
            reqName:'SetUsermyCollection',
            objectModel:localStorage,
            method:'setItem',
            arguments:['UsermyCollection','CollectionElement.innerHTML']
        }
    ]
}
var ActionStoryFlowRequest = {
    flowRequest:[
        {
            reqName: "Editor",
            objectModel: document,
            method: "getElementById",
            arguments: ["inlineContent"],
        },
        {
            validate:{
                objectModel:operate,
                method:'isNotEmpty',
                arguments:["Editor"],
                output:true
            },
            exitBeforeExecutingRequest:true,
            reqName:"fileid",
            objectModel:"Editor",
            method:"getAttribute",
            arguments:['fileid']
        },
        {
            reqName:'json',
            objectModel:Entity,
            method:'toJSON',
            arguments:["Editor",actionStory2HTML]
        },
        {
            reqName:"Stringify",
            objectModel:JSON,
            method:"stringify",
            arguments:[directoryJSON]
        },
        {
            reqName:"input",
            objectModel:JSON,
            method:'parse',
            arguments:["Stringify"]
        },
        {
            reqName:'SetName',
            objectModel:engine,
            method:'set',
            arguments:['input.li.span','json.tagName','textContent']
        },
        {
            reqName:'SetId',
            objectModel:engine,
            method:'set',
            arguments:['input.li.list','fileid','id']
        },
        {
            reqName:"jsonForActionStory",
            objectModel:processFSInstance,
            method:'CurrentActionStory',
            arguments:['input.li.list','json.children']
        },
        {
            reqName:"ActionStory",
            objectModel:document,
            method:'getElementById',
            arguments:['CurrentActionStory'] 
        },
        {
            reqName:'Remove previous Children',
            objectModel:engine,
            method:'set',
            arguments:["ActionStory",'','innerHTML']
        },
        {
            reqName:'newEntity',
            objectModel:ActionView,
            method:'newEntity',
            //new Entity
            arguments:['input','ActionStory']
        },    
    ]
}
//RecentFiles flow
var recentFilesFlowRequest = {
    flowRequest:[
        {
            reqName:'Fileid',
            objectModel:document,
            method: 'getElementById',
            arguments:['inlineContent'],
            callBack:{method:'getAttribute',arguments:['fileid']}
        },
        {
            reqName:'SetArrayValue',
            validate:{
                objectModel:indexDB,
                method:'get',
                arguments:['RecentFiles'],
                output: undefined,
            },
            objectModel:indexDB,
            method:'set',
            arguments:['RecentFiles', []]
        },
        {
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['Fileid.length',0],
                output:false
            },
            reqName:'Array',
            objectModel:indexDB,
            method:'get',
            arguments:['RecentFiles'],
            exitBeforeExecutingRequest:true
        },
        {
            reqName:'Element',//1
            objectModel: document,
            method: "getElementById",
            arguments: ["RecentFiles"],
        },
        {
            reqName:'IncludeFileIDOfTheFile',
            validate:{
                objectModel:operate,
                method:'isInsideArray',
                arguments:["Fileid",'Array'],//'Array'
                output:false
            },
            objectModel:'Array',
            method:'unshift',
            arguments:['Fileid'],
            exitBeforeExecutingRequest:true
        },
        {
            reqName:'RemovingAnItem',
            validate:{
                objectModel:operate,
                method:'isEqualStrict',
                arguments:['Array.length',11],
                output:true,
            },
            objectModel:'Array',
            method:'shift',
        },
        {
            reqName:'RemovingChildNodeRecentFiles',
            validate:{
                objectModel:operate,
                method:'isEqualStrict',
                arguments:['Element.childNodes.length',10],
                output:true,
            },
            objectModel:'Element',
            method:'removeChild',
            arguments:['Element.childNodes.0']
        },
        {
            reqName:'FileHandle',
            objectModel:indexDB,
            method:'get',
            arguments:['Fileid']
        },
        {
            reqName:'SetUIDToFileJSON',
            objectModel:engine,
            method:'set',
            arguments:[fileJSON,"Fileid","id",]
        },
        {
            reqName:"SetNameToLocalStorageFile",
             validate:{
                 objectModel:operate,
                 method:'isNotEmpty',
                 arguments:["FileHandle"],
                 output:false
             },
             objectModel:engine,
             method:'set',
             arguments:[fileJSON,"Fileid","textContent"]
        },
        {
            reqName:'file',
            validate:{
                objectModel:operate,
                method:'isNotEmpty',
                arguments:["FileHandle"],
                output:true
            },
            objectModel:"FileHandle",
            method:'getFile'
        },
        {
            reqName:'SetNameToFSFile',
            validate:{
                objectModel:operate,
                method:'isNotEmpty',
                arguments:["FileHandle"],
                output:true
            },
            objectModel:engine,
            method:'set',
            arguments:[fileJSON,"file.name","textContent"]
        },
        {
            reqName:"StringifyJSON",
            objectModel:JSON,
            method:'stringify',
            arguments:[{}]
        },
        {
            reqName:"ParseJSON",
            objectModel:JSON,
            method:'parse',
            arguments:["StringifyJSON"]
        },
        {
            reqName:'input',
            objectModel:engine,
            method:'set',
            arguments:["ParseJSON",fileJSON,"Fileid"]
        },
        {
            reqName:"newEntity",
            objectModel:ActionView,
            method:'newEntity',
            arguments:['input',"Element"]
        },
        {
            reqName:'SetRecentFilesLocalStorage',
            objectModel:localStorage,
            method:'setItem',
            arguments:['UserRecentFiles',"Element.innerHTML"]
        },
        {
            reqName:"setRecentFilesInIndexDB",
            objectModel:indexDB,
            method:'set',
            arguments:['RecentFiles','Array']
        },
    ]
}
var LoginFlowRequest = {
    flowRequest:[
        {
            reqName:'GetUsername',
            objectModel:document,
            method: "getElementById",
            arguments: ["username"],
            andThen:['value']
        },
        {
            reqName:'GetPassword',
            objectModel:document,
            method: "getElementById",
            arguments: ["password"],
            andThen:['value']
        },
        {
            reqName:'SetUsername',
            objectModel:engine,
            method:'set',
            arguments:[paramsJSON,'GetUsername','Username'],
        },
        {
            reqName:'SetPassword',
            objectModel:engine,
            method:'set',
            arguments:[paramsJSON,'GetPassword','Password'],
        },
        {
            reqName:'URLBuilder',
            objectModel:HttpService,
            method:'urlBuilder',
            arguments:[scriptURL,paramsJSON]
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            arguments:["GET"]
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            arguments:['URLBuilder','RequestBuilder']
        },
        {
            reqName:"check",
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response',undefined],
                output:true
            },
            objectModel:window,
            method:'alert',
            arguments:["Clouldn't send request to the server . Try Again !"],
            exitAfterExecutingRequest:true
        },
        {

            reqName:'alert',
            objectModel:window,
            method:'alert',
            arguments:['response.output']
        },
        {
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.result','Success'],
                output:false
            },
            reqName:'getFormElement',
            objectModel:document,
            method:'getElementById',
            arguments:['regForm'],
            callBack:{method:'reset'}
        },
        {
            reqName:"SetLoggedIn",
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.result','Success'],
                output:true
            },
            objectModel:localStorage,
            method:'setItem',
            arguments:['LoggedIn',true],
        },
        {
            reqName:'RedirectingToActionSpaceEditor',
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.result','Success'],
                output:true
            },
            objectModel: ActionController,
            method:'onChangeRoute',
            arguments:["action"],
        }
    ]
}
var SignUpFlowRequest = {
    flowRequest:[
        {
            reqName:'GetUsername',
            objectModel:document,
            method: "getElementById",
            arguments: ["username"],
            andThen:['value']
        },
        {
            reqName:'GetPassword',
            objectModel:document,
            method: "getElementById",
            arguments: ["password"],
            andThen:['value']
        },
        {
            reqName:'SetUsername',
            objectModel:engine,
            method:'set',
            arguments:[paramsJSON,'GetUsername','Username'],
        },
        {
            reqName:"SetPassword",
            objectModel:engine,
            method:'set',
            arguments:[paramsJSON,'GetPassword','Password']
        },
        {
            reqName:'PostContent',
            objectModel:JSON,
            method:'stringify',
            arguments:["SetPassword"]
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            arguments:["POST",undefined,'PostContent']
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            arguments:[scriptURL,'RequestBuilder']
        },
        {
            reqName:"check",
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response',undefined],
                output:true
            },
            objectModel:window,
            method:'alert',
            arguments:["Clouldn't send request to the server . Try Again !"],
            exitAfterExecutingRequest:true
        },
        {
            reqName:'alert',
            objectModel:window,
            method:'alert',
            arguments:['response.output']
        },
        {
            reqName:"SetLoggedIn",
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.result','Success'],
                output:true
            },
            objectModel:localStorage,
            method:'setItem',
            arguments:['LoggedIn',true],
        },
        {
            reqName:'RedirectingToActionSpaceEditor',
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.result','Success'],
                output:true
            },
            objectModel: ActionController,
            method:'onChangeRoute',
            arguments:["action"],
        }
    ]
}
var importFromSheetFlowRequest = {
    flowRequest:[
        {
            reqName:'GetSpreadsheetId',
            objectModel:document,
            method: "getElementById",
            arguments: ["spreadsheetID"],
            andThen:['value']
        },  
        {
            reqName:'GetNamedRange',
            objectModel:document,
            method: "getElementById",
            arguments: ['NamedRange'],
            andThen:['value']
        },
        {
            reqName:'SetSpreadsheetId',
            objectModel:engine,
            method:'set',
            arguments:[importFromSheetparamsJSON,'GetSpreadsheetId','SpreadsheetId']
        },
        {
            reqName:'SetNamedRange',
            objectModel:engine,
            method:'set',
            arguments:[importFromSheetparamsJSON,'GetNamedRange','NamedRange']
        },
        {
            reqName:'URLBuilder',
            objectModel:HttpService,
            method:'urlBuilder',
            arguments:[scriptURL,importFromSheetparamsJSON]
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            arguments:["GET"]
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            arguments:['URLBuilder','RequestBuilder']
        },
        {
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.result','Success'],
                output:false
            },
            objectModel:window,
            method:'alert',
            arguments:['response.output'],
        },
        {
            reqName:"formElement",
            objectModel:document,
            method:'getElementById',
            arguments:['viewForm']
        },
        {
            reqName:"RemoveForm",
            objectModel:engine,
            method:'set',
            arguments:["formElement",'','innerHTML']
        },
        {
            reqName:"Element",
            objectModel:document,
            method:'getElementById',
            arguments:['inlineContent']
        },
        { 
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.result','Success'],
                output:false
            },
            reqName:"Set sample story",
            objectModel:engine,
            method:'set',
            arguments:['Element',sampleIntroStory,'innerHTML'],
            exitAfterExecutingRequest:true
        },
        {
            reqName:"SetDatafromSheet",
            objectModel:engine,
            method:'set',
            arguments:['Element','response.output','innerText'],
        }
    ]
}
var GetActionStoriesFlowRequest = {
    flowRequest:[
        {
            reqName:'GetNamedRange',
            objectModel:document,
            method: "getElementById",
            arguments: ["NamedRange"],
            andThen:['value']
        },
        {
            reqName:'GetSpreadsheetId',
            objectModel:document,
            method: "getElementById",
            arguments: ["SpreadsheetId"],
            andThen:['value']
        },
        {
            reqName:'StoreSpreadsheetId',
            objectModel:localStorage,
            method:'setItem',
            arguments:['SpreadsheetId', 'GetSpreadsheetId']
        },
        {
            reqName:'StoreNamedRange',
            objectModel:localStorage,
            method:'setItem',
            arguments:['NamedRange','GetNamedRange']
        },
        {
            reqName:'SetSpreadsheetId',
            objectModel:engine,
            method:'set',
            arguments:[importFromSheetparamsJSON,'GetSpreadsheetId','SpreadsheetId']
        },
        {
            reqName:'SetNamedRange',
            objectModel:engine,
            method:'set',
            arguments:[importFromSheetparamsJSON,'GetNamedRange','NamedRange']
        },
        {
            reqName:'URLBuilder',
            objectModel:HttpService,
            method:'urlBuilder',
            arguments:[scriptURL,importFromSheetparamsJSON]
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method : 'requestBuilder',
            arguments:["GET"]
        },
        {
            reqName:'Response',
            objectModel:HttpService,
            method:'fetchRequest',
            arguments:['URLBuilder',"RequestBuilder"]
        },
        {
            reqName:"Couldn't Make Request",
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['Response',undefined],
                output:true
            },
            objectModel:window,
            method:'alert',
            arguments:["Couldn't make a request. Try Again !"],
            exitAfterExecutingRequest:true
        },
        {
            reqName:'RequestNotSuccessful',
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['Response.result','Success'],
                output:false
            },
            objectModel:window,
            method:'alert',
            arguments:["Response.output"],
            exitAfterExecutingRequest:true
        },
        {
            reqName:'WrapperCardView',
            objectModel:document,
            method:'getElementsByClassName',
            arguments:['cards_wrap'],
            andThen:[0]
        },
        {
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['WrapperCardView',null],
                output:true
            },
            reqName:'Element',
            objectModel:document,
            method:'getElementById',
            arguments:['inlineContent'],
            exitBeforeExecutingRequest:true
        },
        {
            reqName:'Card_View',
            objectModel:'Element',
            method:'setAttribute',
            arguments:['fileid','cardView']
        },
        {
            reqName:'JSONForCards',
            objectModel:processFSInstance,
            method:'ActionStories',
            arguments:['Response.output']
        },
        {
            reqName:'AutoSync',
            objectModel:processFSInstance,
            method:'AutoSync',
        }
    ]
}
var RSSReaderFlowRequest = {
    flowRequest:[
        {
            reqName:'GetURL',
            objectModel:document,
            method: "getElementById",
            arguments: ["url"],
            andThen:['value']
        },  
        {
            reqName:'BodyJSON',
            objectModel:engine,
            method:'set',
            arguments:[JSON.parse(JSON.stringify({})),'GetURL','url']
        },
        {
            reqName:'StringifyBodyJSON',
            objectModel:JSON,
            method:'stringify',
            arguments:['BodyJSON']
        },
        {
            reqName:'BodyBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            arguments:["POST",JSON.parse(JSON.stringify({'Accept':'application/json', 'Content-Type':'application/json'})),'StringifyBodyJSON']
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            arguments:["http://127.0.0.1:5502/functions/RssReader",'BodyBuilder']
        },
        {
            reqName:"Element",
            objectModel:document,
            method:'getElementById',
            arguments:['inlineContent']
        },
        {
            reqName:'IfRequestNotSuccessful',
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.status',200],
                output:false
            },
            reqName:"Set sample story",
            objectModel:engine,
            method:'set',
            arguments:['Element',sampleIntroStory,'innerHTML'],
            exitAfterExecutingRequest:true
        },
        {
            reqName:"formElement",
            objectModel:document,
            method:'getElementById',
            arguments:['viewForm']
        },
        {
            reqName:"RemoveForm",
            objectModel:engine,
            method:'set',
            arguments:["formElement",'','innerHTML']
        },
        {
            reqName:'content',
            objectModel:JSON,
            method:'stringify',
            arguments:['response.RSSReader']
        },
        {
            reqName:"SetDatafromSheet",
            objectModel:engine,
            method:'set',
            arguments:['Element','content','innerText'],
        }
    ]
}
var GetKnowledgeCenterLinksFlowRequest = {
    flowRequest:[
        {
            reqName:'SetSpreadsheetId',
            objectModel:engine,
            method:'set',
            arguments:[importFromSheetparamsJSON,'1ffczYrBikoQ49ijbqRHrAkZc0mJl4Ezb9fHfeocstmw','SpreadsheetId']
        },
        {
            reqName:'SetNamedRange',
            objectModel:engine,
            method:'set',
            arguments:[importFromSheetparamsJSON,'KnowledgeCenter!C3:C3323','NamedRange']
        },
        {
            reqName:'URLBuilder',
            objectModel:HttpService,
            method:'urlBuilder',
            arguments:[scriptURL,importFromSheetparamsJSON]
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            arguments:["GET",undefined,undefined]
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            arguments:['URLBuilder','RequestBuilder']
        },
    ]
}
var sendDataToKnowledgeCenterFlowRequest = {
    flowRequest:[
        {
            reqName:'SetSpreadsheetId',
            objectModel:engine,
            method:'set',
            arguments:[exportToSheetparamsJSON,'1ffczYrBikoQ49ijbqRHrAkZc0mJl4Ezb9fHfeocstmw','SpreadsheetId']
        },
        {
            reqName:'SetNamedRange',
            objectModel:engine,
            method:'set',
            arguments:[exportToSheetparamsJSON,'KnowledgeCenterData','SheetName']
        },
        {
            reqName:'SetArray',
            objectModel:engine,
            method:'set',
            arguments:[exportToSheetparamsJSON,'data','array']
        },
        {
            reqName:'stringifyParams',
            objectModel:JSON,
            method:'stringify',
            arguments:[exportToSheetparamsJSON]
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            arguments:["POST",undefined,'stringifyParams']
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            arguments:[scriptURL,'RequestBuilder']
        },
    ]
}
var exportToSheetFlowRequest = {
    flowRequest:[
        {
            reqName:'GetSpreadsheetId',
            objectModel:document,
            method: "getElementById",
            arguments: ["spreadsheetID"],
            andThen:['value']
        },  
        {
            reqName:'GetSheetName',
            objectModel:document,
            method: "getElementById",
            arguments: ['sheetName'],
            andThen:['value']
        },
        {
            reqName:'SetSpreadsheetId',
            objectModel:engine,
            method:'set',
            arguments:[exportToSheetparamsJSON,'GetSpreadsheetId','SpreadsheetId']
        },
        {
            reqName:'SetNamedRange',
            objectModel:engine,
            method:'set',
            arguments:[exportToSheetparamsJSON,'GetSheetName','SheetName']
        },
        {
            reqName:'stringifyParams',
            objectModel:JSON,
            method:'stringify',
            arguments:[exportToSheetparamsJSON]
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            arguments:["POST",undefined,'stringifyParams']
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            arguments:[scriptURL,'RequestBuilder']
        },
        {
            validate:{
                objectModel:operate,
                method:'isNotEmpty',
                arguments:['response'],
                output:true
            },
            reqName:'Alert',
            objectModel:window,
            method:'alert',
            arguments:['response.output']
        },
        {
            reqName:"formElement",
            objectModel:document,
            method:'getElementById',
            arguments:['data']
        },
        {
            reqName:"RemoveForm",
            objectModel:ActionView,
            method:'addInnerHTML',
            arguments:['','formElement']
        },
        {
            reqName:'RemoveModal',
            objectModel:engine,
            method:'set',
            arguments:['formElement.style','none','display']
        }

    ]
}
var newActionStoryRequest = {
    flowRequest:[
        {
            reqName:"Save",
            objectModel:engine,
            method:'processReq',
            arguments:[saveFileFlowRequest]
        },
        {
            reqName:'RecentFiles',
            objectModel:engine,
            method:'processReq',
            arguments:[recentFilesFlowRequest]
        },
        {
            reqName:"New",
            objectModel:engine,
            method:'processReq',
            arguments:[newFileFlowRequest]
        },
        {
            reqName:"Current",
            objectModel:engine,
            method:'processReq',
            arguments:[ActionStoryFlowRequest]
        }
    ]
}
var openAFileRequest = {
    flowRequest:[
        {
            reqName:"Save",
            objectModel:engine,
            method:'processReq',
            arguments:[saveFileFlowRequest]
        },
        {
            reqName:'RecentFiles',
            objectModel:engine,
            method:'processReq',
            arguments:[recentFilesFlowRequest]
        },
        {
            reqName:"OpenFile",
            objectModel:engine,
            method:'processReq',
            arguments:[OpenAFileFlowRequest]
        },
        {
            reqName:"Current",
            objectModel:engine,
            method:'processReq',
            arguments:[ActionStoryFlowRequest]
        }
    ]
}
var everyFileRequest = {
    flowRequest:[
        {
            reqName:"Save",
            objectModel:engine,
            method:'processReq',
            arguments:[saveFileFlowRequest]
        },
        {
            reqName:'RecentFiles',
            objectModel:engine,
            method:'processReq',
            arguments:[recentFilesFlowRequest]
        },
        {
            reqName:"EditorElement",
            objectModel:document,
            method:'getElementById',
            arguments:['inlineContent'],
            callBack:{method:'setAttribute',arguments:['fileid','event.target.id']}//event.target.id to be pushed
        },
        {
            reqName:"OpenInEditor",
            objectModel:processFSInstance,
            method:'OpenFileInEditor',
            arguments:['event.target.id']//event.target.id to be pushed
        },
        {
            reqName:"Current",
            objectModel:engine,
            method:'processReq',
            arguments:[ActionStoryFlowRequest]
        }  
    ]
}
var folderGoogle_ServerFlowRequest = {
    flowRequest:[
        {
            flowRequest:[
                {
                    reqName:'GetfolderName',
                    objectModel:document,
                    method: "getElementById",
                    arguments: ["folderName"],
                    andThen:['value']
                },
                {
                    validate:{
                        objectModel:operate,
                        method:'isEqual',
                        arguments:['','GetfolderName'],
                        output:false
                    },
                    exitBeforeExecutingRequest:true,
                    reqName:'SetfolderName',
                    objectModel:engine,
                    method:'set',
                    arguments:[JSON.parse(JSON.stringify({'SearchFolderName':''})),'GetfolderName','SearchFolderName']
                },
                {
                    reqName:'UrlBuilder',
                    objectModel:HttpService,
                    method:'urlBuilder',
                    arguments:[scriptURL,'SetfolderName']
                },
                {
                    reqName:'RequestBuilder',
                    objectModel:HttpService,
                    method:'requestBuilder',
                    arguments:["GET"]
                },
                {
                    reqName:'Response',
                    objectModel:HttpService,
                    method:'fetchRequest',
                    arguments:['UrlBuilder','RequestBuilder']
                }, 
                {
                    validate:{
                        objectModel:operate,
                        method:'isEqual',
                        arguments:['Response',undefined],
                        output:false
                    },
                    reqName:'CollectionElement',
                    objectModel:document,
                    method:'getElementById',
                    arguments:['myCollection'],
                    exitBeforeExecutingRequest:true
                },
                {
                    reqName:'UnSuccessfulAttempt',
                    validate:{
                        objectModel:operate,
                        method:'isEqual',
                        arguments:['Response.result','Success'],
                        output:false
                    },
                    objectModel:window,
                    method:'alert',
                    arguments:['Response.output'],
                    exitAfterExecutingRequest:true
                },
                {
                    reqName:'HTML_JSON',
                    objectModel:processFSInstance,
                    method:'jsonForGDriveFolder',
                    arguments:['Response.output',JSON.parse(JSON.stringify({}))]
                },
                {
                    reqName:'newEntity',
                    objectModel:ActionView,
                    method:'newEntity',
                    //new Entity
                    arguments:['HTML_JSON','CollectionElement']
                },
                {
                    reqName:'SetUsermyCollection',
                    objectModel:localStorage,
                    method:'setItem',
                    arguments:['UsermyCollection','CollectionElement.innerHTML']
                }
            ]
        },
        {
            reqName:"formElement",
            objectModel:document,
            method:'getElementById',
            arguments:['viewForm']
        },
        {
            reqName:"RemoveForm",
            objectModel:engine,
            method:'set',
            arguments:["formElement",'','innerHTML']
        },
        {
            reqName:"Element",
            objectModel:document,
            method:'getElementById',
            arguments:['inlineContent']
        },
        { 
            reqName:"Set sample story",
            objectModel:engine,
            method:'set',
            arguments:['Element',sampleIntroStory,'innerHTML'],
        },
    ]
    
}