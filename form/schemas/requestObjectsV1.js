/**
 * The RequestObj object.
 * @typedef {Object} RequestObj
 * @property {string} [reqName] - requset name.
 * @property {string} [index] - requset index.
 * @property {Object} objectModel -namespace.
 * @property {string} method - request method available on name space.
 * @property {Array.<String>} arguments - arguments to be passed into the method.
 * @property {Operate.isOneOf[object,Array,String]} response -this is where the output will be stored during runtime or till in buffer arguments to be passed into the method.
 * @property {RequestObj} [andThen] - nested request object which isn't a callback.
 * @property {string} [callBack] - call back for single requests.
 */

/**
 * The flow Request Object
 * @typedef {Object} FlowRequest
 * @property {Array.<RequestObj>} flowRequest - Array of requests
 */



/**
* @type RequestObj
*/
var domGetReq = {
    reqName: "getElementandCopy2",
    objectModel: 'document',
    method: "getElementById",
    arguments: ["test"],
    callBack: "convertToJSON",
};

/**
* @type RequestObj
*/
var convertToJSON = {
    objectModel: 'DOMConversion',
    method: "toJSON",
    arguments: ["fromPrevious", entityModel4Html],
};

var openFolderReqModel = {
    objectModel: 'processFS',
    method: 'OpenDirectory',
    arguments: ['req'],
    andThen: 'set2IndexDb',
    callback: '',// call back to recive update in storage.
}

var openFileReqModel = {
    objectModel: 'processFS',
    method: 'Open',
    arguments: 'event',
    andThen: 'set2IndexDb',
    callback: '',// call back to recive update in storage.
}
var savetoStorageReq = {
    reqName: 'savetoStorage',//CommanName
    objectModel: 'StorageHelperV1',
    method: 'saveToStorage',
    arguments: [{ "$ref": [['flowRequest'], [0], ['response'], [0], ['id']] }, { "$ref": [['flowRequest'], [0], ['response'], [0], ['innerHTML']], },],
    response: [],
    //  andThen: ['console.log("job Done well Done")', 'updateDomObject']
}
var setAttributesReq = {
    method: 'setAttribute',
    arguments: ["innerHTML", { "$ref": ['flowRequest'[0],'response'[0],'innerHTML'], },],


}
var updateDomObject = {
    reqName: 'updateDomObject',//CommanName

    objectModel: document,
    method: 'getElementById',
    arguments: ['output'],
    response: [],
    andThen: ['setAttributesReq'],

}
var getObjectVer2 = {
    reqName: 'getElement',//CommanName
    objectModel: document,
    method: 'getElementById',
    arguments: ['navigationSection'],
    response: [],
    // andThen: ['savetoStorageReq']
}
var entityModelV2 = {
    'name': {
        value: 'input.nameTagName',
        'process': [
            {
                'objectModel': 'operate',
                'method': 'isInsideArray',
                'arguments': 'HTMLElementList'
            }
        ]
    },
    // description : "",
    'id': {
        value: 'input.id',
        'operator': [
            {
                'method': 'isInsideArray',
                'arguments': 'HTMLElementList'
            }
        ]
    },
    'entityType': {
        value: 'operate.is(input)',
        'operator': [
            {
                'method': 'isOptional',
                'arguments': 'value',
            }
        ]
    },
    resource: {
        value: 'input.url',
        operate: ['isUrl'],
    },
    attributes: {
        value: null,
        operate: [find('input.attributes', ['class', 'style', 'src'])],
    },
    content: '',
    'contentMimeType': '',//[HTML,JSON,TEXT,JAVASCRIPT],
    resourceBinding: ''
}

var entityModel4Html = {
    tagName: "tagName",
    attributes: { 'class': "class.value", 'style': "style.value", 'src': "" },
    children: ['all'],
}

var copy2 = {
    reqName: 'copy2',
    objectModel: 'processV6',
    method: 'iterate',
    arguments: [
        { 'previous': 'response' },
        entityModel4Html,
        {
            params: {
                maxDepth: 5,
                maxChildren: 120,
                response: {},// option to choose what kind of response do we want. isOneOf([",{},[],an HTML element,"andSelf means return the output"])
                callback: 'setEntityReq',
            }
        }
    ],

}
