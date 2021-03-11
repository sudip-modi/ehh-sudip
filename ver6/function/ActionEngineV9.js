
var savetoStorageReq = {
    reqName: 'savetoStorage',//CommanName
    objectModel: StorageHelperV1,
    method: 'saveToStorage',
    arguments: [
        {
            reqName: 'resolveInClass',
            objectModel: window,
            method: 'activeFlow[0].response[0]',
            attribute:'id'
            
        },
        {
            reqName: 'resolveInClass',
            objectModel: window,
            method: 'activeFlow[0].response[0]',
            attribute: 'innerHTML'

        },],
         
    
    response: [],
    //  andThen: ['console.log("job Done well Done")', 'updateDomObject']
}
var setAttributesReq = {
    objectModel: 'previousResponse',
    method: 'setAttributes',
    arguments: ['fromPrevious.id.1', 'fromPrevious.innerHTML.1']

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
            response: [],
        },
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#2',
            actionStepReq: 'savetoStorageReq',
            response: [],
        },
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#3',
            actionStepReq: 'updateDomObject',
            // actionStepArgs: ['fromPrevious', `document.createElement('div')`],
            response: []

        },

    ],
}
class ActionEngineV9 {
    constructor() {
        console.log("I aka @ctionEngineV9, am here")

        this._flowsInAction = [];
    }
    runSyncStep(req) {
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        } else {
            //console.log(req);
            //console.log(req.objectModel, req.method, req.response)
            var response = req.objectModel[req.method](req.arguments)
            if (!operate.isUndefined(response)) {
            //    console.log(response,req.response,req)
                req.response.push(response);
                return response;
            } else {
              //  console.log(response, req.response, req)
                req.response.push("Success");
                return "Success";
            }
            
            
        }
        
    }
    runAsyncStep(req) {
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        } else {
            console.log(req);
                console.log(req.objectModel, req.method, req.arguments)
            var promise1 = req.objectModel[req.method]([req.arguments])
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
        // var promise1 = actionStep.class[actionStep.method](actionStep.arguments[0], actionStep.arguments[1])
        //     .then(response => {
        //         if (!response.ok) { throw new Error("Could not reach website."); }
        //         return response.text();
        //     })
        //     .then(data => {
        //         if (actionStep.stepParams) {
        //             //  console.log(actionStep.stepParams);
        //             //  console.log("Data", data);
        //             var callbackClass = actionStep.stepParams.output.callBackReq.callbackClass;
        //             var callback = actionStep.stepParams.output.callBackReq.callback;
        //             var args = actionStep.stepParams.output.callBackReq.args;
        //             var andThen = actionStep.stepParams.output.callBackReq.andThen;
        //             var andThenArgs = actionStep.stepParams.output.callBackReq.andThenArgs;
        //             andThenArgs.push(data);
        //             var response = this.executeSyncActionStep(callbackClass, callback, [args], andThen, andThenArgs)
        //             //    console.log("Data",  response);
        //             this.handleResponse(data);
        //         }

        //     })
        //     .catch(err => console.error(err))
    }
    runSyncFlow(req) {
        if (operate.is(req.flowRequest) != 'Array') return console.log("why do you keep making mistakes");
        //  console.log(flowReq);
        this._flowsInAction.push(req);
        var activeFlow = this._flowsInAction[this._flowsInAction.length-1].flowRequest;
        console.log(activeFlow,req.flowRequest)
        
      //  console.log(this._flowsInAction); req['state'] = "shunya";
        for (var activeReq = 0; activeReq < activeFlow.length; activeReq++) {
          //  console.log("req", req.state, req.flowRequest[activeReq].actionStepReq)
            var actionStep = window[activeFlow[activeReq].actionStepReq];
            console.log(">>>>>", actionStep)

            if (typeof actionStep.arguments[0]==='object') {
            
                
                var tempo = activeFlow;
                console.log("here", actionStep.arguments)
                //console.log(actionStep.arguments.length)

                for (var i = 0; i < actionStep.arguments.length; i++) {
                    console.log(actionStep.arguments[i]);
                    console.log(this._flowsInAction[0].flowRequest[i])
                    var tem = window[actionStep.arguments[i].method]
                    console.log(tem);

                }
                
                
            }
            
            var response = this.runSyncStep(actionStep);
           
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
        
    }

}
 


var actionEngineV9Instance = new ActionEngineV9();
console.log(actionEngineV9Instance)

var output = actionEngineV9Instance.runSyncFlow(actionFlowModelReq)