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
    arguments: ["fromPrevious", copy2HTMLModel],
};

/**
 * @type RequestObj
 */
var displayJSON = {
    objectModel: DOMConversion,
    method: "displayDOMJSON",
    arguments: ["fromPrevious"],
};

var saveElementToLocalStorage = {
    reqName: "saveElementToLocalStorage",
    objectModel: Storage,
    method: "saveToLocalStorage",
    arguments: ["domJSON", "convertElementToJSON"],
}

var displaySavedElement = {
    reqName: "displaySavedElement",
    objectModel: Storage,
    method: "getFromLocalStorage",
    arguments: ["domJSON"],
    callBack: "displayJSON"
}

/**
 * @type {FlowRequest}
 */
var actionFlowModelReq = {
    flowRequest: [{
            reqName: "convertElementToJSON",
            objectModel: document,
            method: "getElementById",
            arguments: ["test"],
            callBack: "convertToJSON",
            response: [],
        },
        {
            reqName: "saveElementToLocalStorage",
            objectModel: Storage,
            method: "saveToLocalStorage",
            arguments: ["domJSON", "convertElementToJSON"],
            response: [],
        },
        {
            reqName: "displaySavedElement",
            objectModel: Storage,
            method: "getFromLocalStorage",
            arguments: ["domJSON"],
            callBack: "displayJSON",
            response: [],
        },
    ],
};

var actionFlowModelReq2 = {
    flowRequest: [{
        reqName: "getNestedElement",
        objectModel: document,
        method: "getElementById",
        arguments: ["nestedP"],
        response: [],
    }, ],
};

var addSecondToFirst = {
    reqName: "addSecondToFirst",
    objectModel: DOMConversion,
    method: "addHTMLElementProperty",
    arguments: ["fromParent", "innerHTML", "<div>I am nested</div>"],
}

/**
 * @type {RequestObj}
 */
var nestedFlowModelReq = {
    reqName: "convertElementToJSON",
    objectModel: document,
    method: "getElementById",
    arguments: ["test"],
    callBack: "convertToJSON",
    andThen: ["saveElementToLocalStorage", "displaySavedElement"]
};

var getInnerHTML = {
    reqName: "getFirstElement",
    objectModel: document,
    method: "getElementById",
    arguments: ["first"],
    andThen: ["innerHTML"]
};

var getStyles = {
    reqName: "getFirstElement",
    objectModel: document,
    method: "getElementById",
    arguments: ["nestedP"],
    andThen: ["attributes", "style", "nodeValue"]
};

var setAttributesReq = {
    method: "setAttribute",
    arguments: [
        "style", {
            "$ref": [
                ['flowRequest'],
                ['getNestedElement'],
                ['attributes'],
                ['style'],
                ['nodeValue']
            ],
        },
    ],


}
var updateDomObject = {
    reqName: 'updateDomObject',
    objectModel: document,
    method: 'getElementById',
    arguments: ['output'],
    response: [],
    andThen: ['setAttributesReq'],

}
