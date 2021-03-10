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
    'objectModelsInterface': ActionEngineV9,
    
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