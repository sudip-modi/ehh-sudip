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
        reqName:'fromLocalStorage',
        objectModel:'Editor',
        method:'setAttribute',
        arguments:['from','LocalStorage']
    },{
        reqName:'fromLocalStorage',
        objectModel:'Editor',
        method:'setAttribute',
        arguments:['nameoffile','UID']
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
var saveFileFSFlowRequest = {
    flowRequest:[
    {
        reqName:"FileHandleFromIndexDB",//0
        objectModel:indexDB,
        method:'get',
        arguments:["FileID"],
    },
    {
        reqName:"Writable",//2
        objectModel:"FileHandleFromIndexDB",
        method:"createWritable",
    },
    {
        reqName:"writeinFile",//3
        objectModel:"Writable",
        method:'write',
        arguments:['editor.innerText']
    },
    {
        reqName:"closeWritable",//4
        objectModel:"Writable",
        method:'close'
    },
    ]
}
var saveFileGDriveFlowRequest = {
    flowRequest:[
        {
            reqName:'setFILEID',
            objectModel:engine,
            method:'set',
            arguments:[JSON.parse(JSON.stringify({})),'FileID','FileId']
        },
        {
            reqName:'body',
            objectModel:engine,
            method:'set',
            arguments:['setFILEID','editor.innerText','content']
        },
        {
            reqName:'StringifyBody',
            objectModel:JSON,
            method:'stringify',
            arguments:['body']
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            arguments:["POST",undefined,'StringifyBody']
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            arguments:[scriptURL,'RequestBuilder']
        },
        {
            reqName:"checkV1",
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response',undefined],
                output:true
            },
            objectModel:window,
            method:'alert',
            arguments:["Couldn't update File in Google Drive !Try Again :-)"],
            exitAfterExecutingRequest:true
        },
        {
            reqName:"checkV2",
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.result','Success'],
                output:false
            },
            objectModel:window,
            method:'alert',
            arguments:['response.message'],
            exitAfterExecutingRequest:true
        },
        {
            reqName:'RequestSuccessful',
            objectModel:console,
            method:'log',
            arguments:['Updated in File in Google Drive :-)']
        }
    ]
}
var saveFileFlowRequest = {
    flowRequest:[
        {
            reqName:'EditorElement',//1
            objectModel: document,
            method: "getElementById",
            arguments: ["inlineContent"],
        },
        {
            reqName:"ID",//2
            objectModel:'EditorElement',
            method:'getAttribute',
            arguments:['fileid']
        },
        {
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['ID.length',0],
                output:false,
            },
            reqName:'SetFileEventObject',
            objectModel:engine,
            method:'set',
            arguments:[JSON.parse(JSON.stringify({})),'EditorElement','editor'],
            exitBeforeExecutingRequest:true
        },
        {
            reqName:'parameters',
            objectModel:engine,
            method:'set',
            arguments:['SetFileEventObject','ID','FileID']
        },
        {
            validate:{
                objectModel:'EditorElement',
                method:'getAttribute',
                arguments:['from'],
                output:'LocalStorage',
            },
            reqName:'SaveInLocalStorage',
            objectModel:localStorage,
            method:'setItem',
            arguments:['ID','EditorElement.innerText'],
            exitAfterExecutingRequest:true
        },
        {
            validate:{
                objectModel:'EditorElement',
                method:'getAttribute',
                arguments:['from'],
                output:'FS',
            },
            reqName:'FSSaveFile',
            objectModel:engine,
            method:'processReq',
            arguments:[saveFileFSFlowRequest,'parameters'],
            exitAfterExecutingRequest:true
        },
        {
            validate:{
                objectModel:'EditorElement',
                method:'getAttribute',
                arguments:['from'],
                output:'GDrive',
            },
            reqName:'GDriveSaveFile',
            objectModel:engine,
            method:'processReq',
            arguments:[saveFileGDriveFlowRequest,'parameters'],
        }
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
            reqName:'File_JSON',
            objectModel:engine,
            method:'set',
            arguments:[JSON.parse(JSON.stringify(fileJSON)),"UID","id",]
        },
        {
            reqName:'file',
            objectModel:"GetAFile",
            method:'getFile'
        },
        {
            reqName:'SetNameToFSFile',
            objectModel:engine,
            method:'set',
            arguments:['File_JSON',"file.name","textContent"]
        },
        {
            reqName:'STRINGIFYJSON',
            objectModel:JSON,
            method:'stringify',
            arguments:[{}]
        },
        {
            reqName:'PARSEJSON',
            objectModel:JSON,
            method:'parse',
            arguments:['STRINGIFYJSON']
        },
        {
            reqName:'input',
            objectModel:engine,
            method:'set',
            arguments:['PARSEJSON','SetNameToFSFile',"UID"]
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
var GetGDriveFileContentFlowRequest = {
    flowRequest:[
        {
            reqName:'CheckWhetherFileTypeSupportedOrNot',
            objectModel:ActionView,
            method:'GDriveFileSupportedInEditor',
            arguments:['EVENT.target.innerText']
        },
        {
            reqName:'Alert User',
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['CheckWhetherFileTypeSupportedOrNot',false],
                output:true,
            },
            objectModel:window,
            method:'alert',
            arguments:['Work In Progress !'],
            exitAfterExecutingRequest:true
        },
        {
            reqName:'paramsForFileID',
            objectModel:engine,
            method:'set',
            arguments:[{},'EVENT.target.id','FileId']
        },
        {
            reqName:'URLBuilder',
            objectModel:HttpService,
            method:'urlBuilder',
            arguments:[scriptURL,'paramsForFileID']
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
            reqName:"checkV1",
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
            reqName:"checkV2",
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['response.result','Success'],
                output:false
            },
            objectModel:window,
            method:'alert',
            arguments:['response.message'],
            exitAfterExecutingRequest:true
        },
        {
            reqName:'EditorElement',
            objectModel:document,
            method:'getElementById',
            arguments:['inlineContent']
        },
        {
            objectModel:'EditorElement',
            method:'setAttribute',
            arguments:['fileid','EVENT.target.id']
        },
        {
            reqName:'SetWhereFileIsFrom',
            objectModel:'EditorElement',
            method:'setAttribute',
            arguments:['from','GDrive']
        },
        {
            reqName:'SetWhereFileIsFrom',
            objectModel:'EditorElement',
            method:'setAttribute',
            arguments:['nameoffile','EVENT.target.innerText']
        },
        {
            reqName:'SetEditorText',
            objectModel:engine,
            method:'set',
            arguments:['EditorElement','response.content','innerText']
        }
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
var folderGoogle_ServerFlowRequest = {
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
                    validate:{
                        objectModel:'CollectionElement.innerHTML',
                        method:'includes',
                        arguments:['HTML_JSON.li.list.id'],
                        output:false,
                    },
                    reqName:'newEntity',
                    objectModel:ActionView,
                    method:'newEntity',
                    //new Entity
                    arguments:['HTML_JSON','CollectionElement'],
                    exitBeforeExecutingRequest:true
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
            reqName:'Editor',
            objectModel:document,
            method: 'getElementById',
            arguments:['inlineContent'],
        },
        {
            reqName:'FileID',
            objectModel:'Editor',
            method:'getAttribute',
            arguments:['fileid']
        },
        {
            reqName:'FileFrom',
            objectModel:'Editor',
            method:'getAttribute',
            arguments:['from']
        },
        {
            reqName:'NameOfFile',
            objectModel:'Editor',
            method:'getAttribute',
            arguments:['nameOfFile']
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
                arguments:['FileID.length',0],
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
                arguments:["FileID",'Array'],//'Array'
                output:false
            },
            objectModel:'Array',
            method:'unshift',
            arguments:['FileID'],
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
            reqName:'IncludeFileID',
            objectModel:engine,
            method:'set',
            arguments:[JSON.parse(JSON.stringify(fileJSON)),"FileID","id",]
        },
        {
            reqName:"IncludeTextContent",
            objectModel:engine,
            method:'set',
            arguments:['IncludeFileID',"NameOfFile","textContent"]
        },
        {
            reqName:'IncludeFileIsFrom',
            objectModel:engine,
            method:'set',
            arguments:["IncludeTextContent",'FileFrom','from']
        },
        {
            reqName:'STRINGIFYJSON',
            objectModel:JSON,
            method:'stringify',
            arguments:[{}]
        },
        {
            reqName:'PARSEJSON',
            objectModel:JSON,
            method:'parse',
            arguments:['STRINGIFYJSON']
        },
        {
            reqName:'inputJSON',
            objectModel:engine,
            method:'set',
            arguments:['PARSEJSON','IncludeFileIsFrom',"FileID"]
        },
        {
            reqName:"newEntity",
            objectModel:ActionView,
            method:'newEntity',
            arguments:['inputJSON',"Element"]
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
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['from','GDrive'],
                output:false,
            },
            reqName:"OpenInEditor",
            objectModel:processFSInstance,
            method:'OpenFileInEditor',
            arguments:['event.target.id']//event.target.id to be pushed
        },
        {
            reqName:'SetParamsToGetGDriveFile',
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['from','GDrive'],
                output:true,
            },
            objectModel:engine,
            method:'set',
            arguments:[JSON.parse(JSON.stringify({})),'event','EVENT']
        },
        {
            validate:{
                objectModel:operate,
                method:'isEqual',
                arguments:['from','GDrive'],
                output:true,
            },
            reqName:'OpenGDriveFileInEditor',
            objectModel:engine,
            method:'processReq',
            arguments:[GetGDriveFileContentFlowRequest,'SetParamsToGetGDriveFile']
        },
        {
            reqName:"Current",
            objectModel:engine,
            method:'processReq',
            arguments:[ActionStoryFlowRequest]
        }  
    ]
}