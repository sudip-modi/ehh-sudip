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
        argument: ["inlineContent"],
        response:{}
    },{
        reqName:'UID',
        objectModel:processFS,
        method:'uid'
    },{
        reqName:"fileID_File",//2
        objectModel:'Editor',
        method:'setAttribute',
        argument:['fileid','UID']
    },{
        reqName: "NewActionStory",
        objectModel: ActionView,
        method: "addInnerHTML",
         argument: [ehhIntro,"Editor"],
        response:{}
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
        argument: ["inlineContent"],
    },
    {
        reqName:"fileID_File",//2
        objectModel:'Editor',
        method:'getAttribute',
        argument:['fileID']
    },
    {
        reqName:"getInnerText",//3
        objectModel:'Editor',
        method:'innerText'
    },
    {
        //validator
        reqName:"FileHandleFromIndexDB",//4
        objectModel:indexDB,
        method:'get',
        argument:["fileID_File"]
    },
    {
        validate:{
            objectModel:operate,
            method:'isNotEmpty',
            argument:['FileHandleFromIndexDB'],
            output:false
        },
        reqName:'LocalStorage',//5
        objectModel:localStorage,
        method:'setItem',
        argument:['fileID_File','getInnerText'],
        exit:true
    },
    {
        reqName:"createWritable",//6
        objectModel:"FileHandleFromIndexDB",
        method:"createWritable",
    },
    {
        reqName:"writeinFile",//7
        objectModel:"createWritable",
        method:'write',
        argument:['getInnerText']
    },
    {
        reqName:"closeWritable",//8
        objectModel:"createWritable",
        method:'close'
    },
    ]
}
//Open a File Flow -1.Show file Picker 2.Generate a uid 3.Set that uid to fileHandle 4. make a file entry in myFiles 5.,open in the editor
var OpenAFileFlowRequest ={
    flowRequest:[
        {
            reqName:'filePicker',
            objectModel:window,
            method:'showOpenFilePicker'
        },{
            reqName:'UID',
            objectModel:processFS,
            method:'uid'
        },{
            reqName:'setFileHandleToFileID',
            objectModel:indexDB,
            method:'set',
            argument:['UID',"filePicker"]
        },{
            reqName:'jsonForFile',
            objectModel:processFS,
            method:'jsonForFile',
            argument:['UID','myFiles','filePicker']
        },
        {
            reqName:"FileInEditor",
            objectModel:processFS,
            method:'OpenFileInEditor',
            argument:['UID']
        },
    ]
}
//RecentFiles flow
var recentFilesFlowRequest = {
    flowRequest:[
        {
            reqName:'Array',
            objectModel:indexDB,
            method:'get',
            argument:['RecentFiles']
        },
        {
                reqName:'Element',//1
                objectModel: document,
                method: "getElementById",
                argument: ["RecentFiles"],
        },
        {
            reqName:'SetArrayValue',
            validate:{
                objectModel:operate,
                method:'isNotEmpty',
                argument:['Array'],
                output:false
            },
            objectModel:'state',
            method:'Array',
            assign:true,
            argument:[ [], ]
        },
        {
            reqName:'FirstChildOfElement',
            objectModel:'Element',
            method:'childNodes',
            andThen:['0']
        },
        {
            reqName:'RemovingAnItem',
            validate:{
                objectModel:operate,
                method:'isEqualStrict',
                argument:['Array.length',10],
                output:true,
            },
            objectModel:'Array',
            method:'shift',
            andThen:{
                objectModel:'Element',
                method:'removeChild',
                argument:['FirstChildOfElement']
            }
        },
        {
            reqName:'IncludeFileIDOfTheFile',
            validate:{
                objectModel:operate,
                method:'isInsideArray',
                argument:["params.id",'Array'],//'Array'
                output:false
            },
            objectModel:'Array',
            method:'unshift',
            argument:['params.id']//id
        },
        {
            objectModel:processFS,
            method:'jsonForFile',
            argument:['params.id','RecentFiles','params.fileHandle']
        },
        {
            objectModel:indexDB,
            method:'set',
            argument:['RecentFiles','Array']
        }

    ]
}
var LoginFlowRequest = {
    flowRequest:[
        {
            reqName:'GetUsername',
            objectModel:document,
            method: "getElementById",
            argument: ["username"],
            andThen:['value']
        },
        {
            reqName:'GetPassword',
            objectModel:document,
            method: "getElementById",
            argument: ["password"],
            andThen:['value']
        },
        {
            reqName:'SetData',
            objectModel:Entity,
            method:'set',
            argument:[paramsJSON,'GetUsername','Username'],
            andThen:{
                objectModel:Entity,
                method:'set',
                argument:[paramsJSON,'GetPassword','Password']
            }
        },
        {
            reqName:'URLBuilder',
            objectModel:HttpService,
            method:'urlBuilder',
            argument:[scriptURL,paramsJSON]
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            argument:["GET"]
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            argument:['URLBuilder','RequestBuilder']
        },
        {
            reqName:'alert',
            objectModel:window,
            method:'alert',
            argument:['response.output']
        },
        {
            validate:{
                objectModel:operate,
                method:'isEqual',
                argument:['response.result','Success'],
                output:true
            },
            reqName:'RedirectToActionSpaceEditor',
            objectModel:localStorage,
            method:'setItem',
            argument:['LoggedIn',true],
            andThen:{
                objectModel:location,
                method:'href',
                argument:['#action'],
                assign:true
            }
        },
    ]
}
var SignUpFlowRequest = {
    flowRequest:[
        {
            reqName:'GetUsername',
            objectModel:document,
            method: "getElementById",
            argument: ["username"],
            andThen:['value']
        },
        {
            reqName:'GetPassword',
            objectModel:document,
            method: "getElementById",
            argument: ["password"],
            andThen:['value']
        },
        {
            reqName:'SetUsername',
            objectModel:Entity,
            method:'set',
            argument:[paramsJSON,'GetUsername','Username'],
            andThen:{
            objectModel:Entity,
            method:'set',
            argument:[paramsJSON,'GetPassword','Password']
            }
        },
        {
            reqName:'PostContent',
            objectModel:JSON,
            method:'stringify',
            argument:[paramsJSON]
        },
        {
            reqName:'RequestBuilder',
            objectModel:HttpService,
            method:'requestBuilder',
            argument:["POST",undefined,'PostContent']
        },
        {
            reqName:'response',
            objectModel:HttpService,
            method:'fetchRequest',
            argument:[scriptURL,'RequestBuilder']
        },
        {
            reqName:'alert',
            objectModel:window,
            method:'alert',
            argument:['response.output']
        },
        {
            validate:{
                objectModel:operate,
                method:'isEqual',
                argument:['response.result','Success'],
                output:true
            },
            reqName:'RedirectToActionSpaceEditor',
            objectModel:localStorage,
            method:'setItem',
            argument:['LoggedIn',true],
            andThen:{
                objectModel:location,
                method:'href',
                argument:['#action'],
                assign:true
            }
        }
    ]
}
