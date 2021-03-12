/**
 * Todo : Need to simplfy $Ref
 */
var savetoStorageReq = {
    reqName: 'savetoStorage',//CommanName
    objectModel: StorageHelperV1,
    method: 'saveToStorage',
    arguments: [ { "$ref": [['flowRequest'],[0],['response'],[0],['id']] },{ "$ref": [['flowRequest'], [0], ['response'], [0], ['innerHTML']],},],
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
var getObjectVer2 = {
    reqName: 'getElement',//CommanName
    objectModel: document,
    method: 'getElementById',
    arguments: ['navigationSection'],
    response: [],
   // andThen: ['savetoStorageReq']
}
var actionFlowModelReq = {
    flowRequest: [
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#1',
            actionStepReq: 'reqObjectVer2',
            actionRoute:'runSyncStep',
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
console.log(testingServerServiceUrl)

var entity= {
    name: "",
    type: "",
    nodeType:'',
    attributes: {
        style: "",
        class: '',
        innerText:'',
    },
    content:[],
}
var html2JsonactionFlowModelReq = {
    flowRequest: [
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#1',
            actionStepReq: 'getObjectVer2',
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
     

    ],
}
class ActionEngineV9 {
    constructor() {
        console.log("I aka @ctionEngineV9, am here")

        this._flowsInAction = [];
    }
    runSyncStep(req, activeFlowIndex) {
        req['state'] = "ek";
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        } else {
            if (req.andThen) {
               // console.log("andThenFound", req.andThen);
                //test if their is an live obejct in the current Scope, if yes, use that.
                if (window[req.andThen]) {
                   
                    req.andThen = window[req.andThen];

                    for (var i = 0; i < req.andThen.arguments.length; i++) {
                        
                        if (typeof req.andThen.arguments[i] === 'object') {
                          //  console.log( req.andThen.arguments[i]);
                            var argss = req.andThen.arguments[i]['$ref'];
                            console.log("here", argss, activeFlowIndex, this._flowsInAction[activeFlowIndex][argss[0]][argss[1]][argss[2]][argss[3]])
                            var parsedArgss = this._flowsInAction[activeFlowIndex][argss[0]][argss[1]][argss[2]][argss[3]][argss[4]];
                          console.log("here", parsedArgss)
                            req.andThen.arguments[i] = parsedArgss;
                          
                        }
                    
                    }
                  //  console.log("here yo", req.andThen.method, req.andThen.arguments)
                    var response = req.objectModel[req.method](req.arguments);
                    response[req.andThen.arguments[0]] = req.andThen.arguments[1];
                   
                   // console.log(response)
                }               
            } else {
                
                var response = req.objectModel[req.method](req.arguments);
            }
            

            if (!operate.isUndefined(response)) {
              //  console.log(response,"now")
                req.response.push(response);
                return response;
            } else {
              //  console.log(response, req.response, req)
                req.response.push("Success");
                return "Success";
            }
            
            
        }
        
    }
    runSyncFlow(req) {
        if (operate.is(req.flowRequest) != 'Array') return console.log("why do you keep making mistakes");
        //  console.log(flowReq);
        req['state'] = "shunya";
        var response;

        this._flowsInAction.push(req);
        var activeFlowIndex = this._flowsInAction.length - 1;
        var activeFlow = this._flowsInAction[activeFlowIndex].flowRequest;
        
        //console.log(activeFlow,req.flowRequest)
        
      //  console.log(this._flowsInAction); req['state'] = "shunya";
        for (var activeReq = 0; activeReq < activeFlow.length; activeReq++) {
          //  console.log("req", req.state, req.flowRequest[activeReq].actionStepReq)
            var actionStep = window[activeFlow[activeReq].actionStepReq];
            if (typeof actionStep.arguments[0]==='object') {              
                for (var i = 0; i < actionStep.arguments.length; i++) {
                    var argss = actionStep.arguments[i]['$ref'];
                   var parsedArgss = this._flowsInAction[activeFlowIndex][argss[0]][argss[1]][argss[2]][argss[3]][argss[4]];
                   // console.log(parsedArgss);
                    actionStep.arguments[i] = parsedArgss;
                }
              
                var response = this[activeFlow[activeReq].actionRoute](actionStep, activeFlowIndex);
            } else {
                //console.log("actionStep", activeFlow[activeFlowIndex].actionRoute)
                var response = this[activeFlow[activeReq].actionRoute](actionStep, activeFlowIndex);
                //var response = this.runSyncStep(actionStep, activeFlowIndex);
            }
            
            
            console.log(response);
           //Building reponse
            if (!operate.isUndefined(response)) {
                //    console.log(response,req.response,req)
                activeFlow[activeReq].response.push(response);
               // return response;
            } else {
                //  console.log(response, req.response, req)
                activeFlow.response.push("Success");
               // return "Success";
            }
          //  console.log("response", activeFlow, actionStep);
        }
        req['state'] = "ek";
console.log(this._flowsInAction)
        return response;
    }
    runAsyncStep(req) {
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        } else {
            console.log(req);
                console.log(req.objectModel, req.method, req.arguments)
            var promise1 = this.runSyncStep(req)
            .then(response => {
                if (!response.ok) { throw new Error("Could not reach website."); }
                return response.text();
            })
            .then(data => {
                if (actionStep.stepParams) {
                    
                    this.handleResponse(data);
                }

            })
            .catch(err => console.error(err))
               
        }
        var promise1 = actionStep.class[actionStep.method](actionStep.arguments[0], actionStep.arguments[1])
            .then(response => {
                if (!response.ok) { throw new Error("Could not reach website."); }
                return response.text();
            })
            .then(data => {
                if (actionStep.stepParams) {
                    //  console.log(actionStep.stepParams);
                    //  console.log("Data", data);
                  
                    andThenArgs.push(data);
                  //  var response = this.executeSyncActionStep(callbackClass, callback, [args], andThen, andThenArgs)
                    //    console.log("Data",  response);
                    this.handleResponse(data);
                }

            })
            .catch(err => console.error(err))
    }
    handleResponse(response) {
        console
    }
    async runAsyncStep2(req, activeFlowIndex) {
        
        var response = await this.runSyncStep(req, activeFlowIndex)
            .then(response => {
                return Promise.resolve(response);
            })
        
           

    }
}
class processV5 {
    iterateObj(args) {
        for (var key in args.input) {
            if (args.callback)
                var response = runSyncStep(req);
        }
    }
}
 


var actionEngineV9Instance = new ActionEngineV9();
console.log(actionEngineV9Instance)

//var output = actionEngineV9Instance.runSyncFlow(actionFlowModelReq)
var output = actionEngineV9Instance.runSyncFlow(html2JsonactionFlowModelReq)
console.log(output);
