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
    objectModel: DOMConversion,
    method: "toJSON",
    arguments: ["fromPrevious", entityModel4Html],
};

/**
 * @type RequestObj
 */
var displayJSON = {
    objectModel: DOMConversion,
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
        objectModel: DOMConversion,
        method: "addInnerHTML",
        arguments: ["getFirstElement", "<div>I am nested</div>"],
    }
};
//New File Flow - 1.get Editor element 2.get a randome uid 3.Assign it to editor's fileid,4.Change the content of editor
var newFileFlowRequest = {
     flowRequest:[{
        reqName: "Editor",
        objectModel: document,
        method: "getElementById",
        arguments: ["inlineContent"],
    },{
        reqName:'UID',
        objectModel:processFS,
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
    }
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
        reqName:"FileHandleFromIndexDB",//4
        objectModel:indexDB,
        method:'get',
        arguments:["fileID_File"]
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
            objectModel:processFS,
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
            reqName:'jsonForFile',
            objectModel:processFS,
            method:'jsonForFile',
            arguments:["UID","myFiles","GetAFile"]
        },
        {
            reqName:'Editor',
            objectModel:document,
            method:'getElementById',
            arguments:['inlineContent']
        },
        {
            reqName:'assigningFileID',
            objectModel:'Editor',
            method:'setAttribute',
            arguments:['fileid','UID']
        },
        {
            reqName:"FileInEditor",
            objectModel:processFS,
            method:'OpenFileInEditor',
            arguments:['UID']
        },
    ]
}
var OpenADirectoryRequest = {
    flowRequest:[
        {
            reqName:'DirectoryHandle',
            objectModel:window,
            method:'showDirectoryPicker',
           // andThen:["0"]
        },
        {
            reqName:"TakeUserPermissionsandGetUID",
            validate:{
                objectModel:processFS,
                method:'verifyPermission',
                arguments:['DirectoryHandle',true],
                output:true
            },
            exitBeforeExecutingRequest:true,
            objectModel:processFS,
            method:'uid'
        },
        {
            reqName:'FileHandleToFileID',
            objectModel:indexDB,
            method:'set',
            arguments:["TakeUserPermissionsandGetUID",'DirectoryHandle']
        },
        {
            reqName:'StringifyDirectoryJSON',
            objectModel:JSON,
            method:'stringify',
            arguments:[directoryJSON]
        },
        {
            reqName:'input',
            objectModel:JSON,
            method:'parse',
            arguments:['StringifyDirectoryJSON']
        },
        {
            reqName:'DirHandleName',
            objectModel:Entity,
            method:'set',
            arguments:['input.li.span','DirectoryHandle.name','textContent']
        },
        {
            reqName:"DirHandleId",
            objectModel:Entity,
            method:'set',
            arguments:["input.li.list","TakeUserPermissionsandGetUID",'id']
        },
        {
            reqName:"jsonForDirectory",
            objectModel:processFS,
            method:'jsonForDirectory',
            arguments:['input.li.list','DirectoryHandle']
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
//RecentFiles flow
var recentFilesFlowRequest = {
    flowRequest:[
        {
            reqName:'id',
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
                output: '',
            },
            objectModel:indexDB,
            method:'set',
            arguments:['RecentFiles', []]
        },
        {
            reqName:'Array',
            objectModel:indexDB,
            method:'get',
            arguments:['RecentFiles']
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
                arguments:["id",'Array'],//'Array'
                output:false
            },
            objectModel:'Array',
            method:'unshift',
            arguments:['id'],
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
            arguments:['id']
        },
        {
            reqName:'JSONForFile',
            objectModel:processFS,
            method:'jsonForFile',
            arguments:['id','RecentFiles','FileHandle']
        },
        {
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
            objectModel:Entity,
            method:'set',
            arguments:[paramsJSON,'GetUsername','Username'],
        },
        {
            reqName:'SetPassword',
            objectModel:Entity,
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
            objectModel:Entity,
            method:'set',
            arguments:[paramsJSON,'GetUsername','Username'],
        },
        {
            reqName:"SetPassword",
            objectModel:Entity,
            method:'set',
            arguments:[paramsJSON,'GetPassword','Password']
        },
        {
            reqName:'PostContent',
            objectModel:JSON,
            method:'stringify',
            arguments:[paramsJSON]
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
var GetDataFlowRequest = {
    flowRequest:{

    }
}

