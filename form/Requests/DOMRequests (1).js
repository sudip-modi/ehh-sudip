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
var newFileFlowRequest = {
     flowRequest:[{
        reqName: "getEditorElement",
        objectModel: document,
        method: "getElementById",
        argument: ["inlineContent"],
        response:{}
    },{
        reqName: "NewActionStory",
        objectModel: ActionView,
        method: "addInnerHTML",
         argument: [ehhIntro,"getEditorElement"],
        response:{}
    }
    ]
}
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
        //validator
        reqName:"FileHandleFromIndexDB",//3
        objectModel:indexDB,
        method:'get',
        argument:["fileID_File"]
    },{
        reqName:"createWritable",//4
        objectModel:"FileHandleFromIndexDB",
        method:"createWritable",
    },
    {
        reqName:"getInnerText",//5
        objectModel:'Editor',
        method:'innerText'
    },
    {
        reqName:"writeinFile",//6
        objectModel:"createWritable",
        method:'write',
        argument:['getInnerText']
    },
    {
        reqName:"closeWritable",//7
        objectModel:"createWritable",
        method:'close'
    }
    ]
}
var OpenAFileFlowRequest ={
    flowRequest:[
        {
            reqName:"filePicker",
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
            argument:["filePicker",'UID']
        }
    ]
}
