var simpleReq = {
    class: 'className',
    method: 'methodName',
    arguments: ['input', 'otherArguments'],
    options: {
        recurse: true,
        output: 'self'//[self,callback,both]
    }

}

var optionsModelSchema = {
    recurse: {
        value: {
            entityObjectModel: 'Operate',
            request: {
                method: 'ifTrue',

                entity: 'input',
                
            },
        }
    },
    output: {
        value: null,
        operate: ['isOneof']
    }
}
var reqEntity = {
    entityId: "action",
}

var actionRequest1 = {
    entityObjectModel: 'document',
    request: {
        method: 'get',
        entity: 'Element',
        entityIdentifier: 'ById',
        entityId: "(" + '"' + reqEntity.entityId + '"' + ")",
    },
    and: 'innerHTML',

}

var buildActionRequest = {
    buildArguments: {
        entityObjectModel: 'document',
        request: {
            method: 'get',
            entity: 'Element',
            entityIdentifier: 'ById',
            entityId: "(" + '"' + reqEntity.entityId + '"' + ")",
        },
        and: 'innerHTML',
    },
    buildOptions: {
        recurse:null,// this is to check if arguments have to be recursed or not.
        outPutCondition:null,//an operator can be added,if True, if False
        output: {
            outputType: 'callback',// [isOneof ( response, callback//operator) ]
            outputArg: {
                callback: 'ActionEngine.processReq',
                callbackArg:'this.response'
            }
        } 

        
    }
}

var fetchStringReq = {
    entityObjectModel: 'clientNodeFetch',
    request: {
        method: 'fetchUrl',
        arguments: "(" + "testingServerServiceUrl" + ")",
        // entityId: "(" + '"' + reqEntity.entityId + '"' + ")"
    },
    //    and: 'innerHTML',

}
var actionFlowRequestFetch = [
    {
        requestIndex: '1',
        "request": actionRequest1
    }
]
var objectModelsNmethods = {
    'objectModels': 'ActionEngine',
    'objectModelsInterface': 'ActionEngineV9',
    
    methods: [
        {
            method: 'executeSyncReq',
            arguments: {
                value: null,
                methods: [
                    {
                        objectModel:'operate',
                        method: 'isObject',
                        arguments: 'value'
            }        
                ]
            }
        },   
    ]   
}
var actionStepGetRequest = {
    class: 'httpServiceV2',
    method: 'serverNodeReqSwitcher',
    arguments: ['testingServerServiceUrl', httpGetReqObject],
    'stepParams': { // defining the parameters of recusiosn and output
        'Every1': false,// this is to check if Need to apply same method on all the argument individually.
        outPutCondition: null,//an operator can be added,if True, if False
        output: {
            outputType: 'callback',// [isOneof ( response, callback//operator) ]
            callBackReq: {
                callbackClass: document,
                callback: 'getElementById',
                args: "output",
                andThen: 'innerHTML',
                andThenArgs: ['innerHTML'],
                //      test: buildActionRequest.buildParams.recurse
            }
        }


    }
}
var savetoStorageReq = {
    reqName: 'savetoStorage',//CommanName
    objectModel: StorageHelperV1,
    method: 'saveToStorage',
    arguments: [{ "$ref": [['flowRequest'], [0], ['response'], [0], ['id']] }, { "$ref": [['flowRequest'], [0], ['response'], [0], ['innerHTML']], },],
    response: [],
    //  andThen: ['console.log("job Done well Done")', 'updateDomObject']
}
var setAttributesReq = {
    method: 'setAttribute',
    arguments: ["innerHTML", { "$ref": [['flowRequest'], [0], ['response'], [0], ['innerHTML']], },],


}
var updateDomObject = {
    reqName: 'updateDomObject',//CommanName

    objectModel: document,
    method: 'getElementById',
    arguments: ['output'],
    response: [],
    andThen: ['setAttributesReq'],

}
var reqObjectVer2 = {
    reqName: 'getElement',//CommanName
    objectModel: document,
    method: 'getElementById',
    arguments: ['editor'],
    response: [],
    //  andThen: ['savetoStorageReq']
}
var actionFlowModelReq = {
    flowRequest: [
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#1',
            actionStepReq: 'reqObjectVer2',
            actionRoute: 'runSyncStep',
            response: [],
        },
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#2',
            actionStepReq: 'savetoStorageReq',
            actionRoute: 'runSyncStep',
            response: [],
        },
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#3',
            actionStepReq: 'updateDomObject',
            actionRoute: 'runSyncStep',
            response: []

        },

    ],
}

var requestBody = {
    resourceID: '1LIFMxfGptICuOEoPZAd-IrKLy1dhN3s9Fem4SDweSJk',
    entityName: 'signUpFromSchemaModel',

}
var httpGetReqObject = {
    method: 'GET',
    mode: 'no-cors',
    body: requestBody,
}
var httpPostReqObject = {
    method: 'POST', // or 'PUT'
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
    },
    // cache: 'no-cache',
    //  body: requestBody,
}