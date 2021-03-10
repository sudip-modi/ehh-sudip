
var savetoStorageReq = {
    reqName: 'savetoStorage',//CommanName
    objectModel: StorageHelperV1,
    method: 'saveToStorage',
    arguments: ['fromPrevious.id', 'fromPrevious.innerHTML'],
    andThen: ['console.log("job Done well Done")', 'updateDomObject']
}
var setAttributesReq ={
    objectModel: 'previousResponse',
    method: 'setAttributes',
    arguments: ['fromPrevious.id','fromPrevious.innerHTML']
    
}
var updateDomObject = {
    reqName: 'updateDomObject',//CommanName
    
    objectModel: document,
    method: 'getElementById',
    arguments: ['output'],
    andThen: ['setAttributes'],

}
var reqObjectVer2 = {
    reqName: 'getElement',//CommanName
    objectModel: document,
    method: 'getElementById',
    arguments: ['editor'],
    response:{},
    andThen: ['savetoStorageReq']
}
var actionFlowModelReq = {
    flowRequest: [
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#1',
            actionStepReq: 'reqObjectVer2',
         //   response: {},
        },
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#2',
            actionStepReq: 'savetoStorageReq',
        },
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#3',
            actionStepReq: 'updateDomObject',
           // actionStepArgs: ['fromPrevious', `document.createElement('div')`],
            response: {}

        },

    ],
    actionFlowParams: {
        flowAction: 'sync',//Can be ASync,
        ifError: 'ignore',//
        runtimeStorage: 'localStorage',
        outPutCondition: null,//an operator can be added,if True, if False
        output: {
            outputType: 'callback',// [isOneof ( response, callback//operator) ]
            callBackReq: {
                callbackClass: 'actionEngineV5Instance',
                callback: 'processStringRequest',
                args: "cleanReq",
                andThen: 'innerHTML',
                //      test: buildActionRequest.buildParams.recurse
            }
        }
    }
}
//console.log(reqObjectVer2)

class ActionEngineV9{

    constructor(objectModelsNMethods) {
        console.log("I aka @ctionEngineV9, am here")
        //this._response = new Map();
        this._req = [];
        this._FlowQue = [];
    }
    //This function maintains a register of executing steps
    queSteps(req) {
        
    }
//This is where user input meets the model.
    handleInput(req) {
        req['state'] = "shunya";
        var currentReqIndex = this._req.push(req);
        
        var request = this._req[currentReqIndex - 1];
     //   console.log(request);
        var inputReq = {
            objectModel: request.objectModel,
            method: request.method,
            arguments: request.argument,
            andThen: request.andThen
        }
        request.response = this.executeSyncStep(inputReq);
        if (request.response) request['previousState']= request['state'], request['state'] = 'done';
     //   console.log(this._req)
        return request.response;
        
    }
    executeSyncStep(req) {
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        } else {
        //    console.log("got request",req)
            if (req.andThen) {
             //   console.log(req.andThen,operate.isString(req.andThen), operate.is(req.andThen))
                if (operate.is(req.andThen)!='String') {
                    
                 //   console.log("yo dude, single and then allowed here, for long chaining use my sibling"), console.error("being generous now, sending you to the right service worker")
                    //var bufferResponse = req.objectModel[req.method](req.arguments);
                  //  var output = this.handleResponse()
                 //   console.log(req)
                   return response = req.objectModel[req.method](req.arguments);
                }
              //  console.log('andThenFound', req.andThen);
                return response = req.objectModel[req.method](req.arguments)[req.andThen];
            } else {
              //  console.log(req)
                return response = req.objectModel[req.method](req.arguments);
            }
            //console.log(req, req.arguments);
            
        }
    }
    executeSyncFlow(flowReq) {
    // console.log("flowReq.flowRequest", flowReq.flowRequest, operate.is(flowReq.flowRequest))
        if (operate.is(flowReq.flowRequest) != 'Array') return console.log("why do you keep making mistakes");
      //  console.log(flowReq);
        flowReq['state'] = "shunya";
        this._FlowQue.push(flowReq);

        for (var i = 0; i < flowReq.flowRequest.length; i++) {

            flowReq.flowRequest[i]['state'] = "shunya";
          //  console.log("yo", window[flowReq.flowRequest[i].actionStepReq].arguments)
            
            var previousArgs = dataHelpers.find(window[flowReq.flowRequest[i].actionStepReq].arguments, 'fromPrevious', 'values');

            
            //check classes and methods || validation with the model here.
           
                         
            
            var currentReq = window[flowReq.flowRequest[i].actionStepReq];
            flowReq.flowRequest[i].actionStepReq = window[flowReq.flowRequest[i].actionStepReq];;
            //console.log("current", currentReq.response)
            var inputReq = {
                objectModel: currentReq.objectModel,
                method: currentReq.method,
                arguments: currentReq.arguments,
                andThen: currentReq.andThen
            }
            if (previousArgs.length > 0) {
             //   console.log(i,"found previous", previousArgs);

                for (var p = 0; p < previousArgs.length; p++) {

                   // console.log(">>>>>>>>>>>>>", this._FlowQue[0].flowRequest[i - 1].actionStepReq.response)
                    var currentProp = inputReq.arguments[p].split(".");
                   // console.log(currentProp[1])
                   // console.log(this._FlowQue[0].flowRequest[i - 1].actionStepReq.response[currentProp[1]])
                   // console.log(inputReq.arguments[p])
                    inputReq.arguments[p] = this._FlowQue[0].flowRequest[i - 1].actionStepReq.response[currentProp[1]]
//                    this._FlowQue[0].flowRequest[i].actionStepReq[response]
                }
            }
            
           // console.log(i,inputReq.arguments)
          // console.log(inputReq)
           currentReq.response = this.executeSyncStep(inputReq);
         //   this._FlowQue[0].flowRequest[i].actionStepReq[response] = this.executeSyncStep(inputReq);
          //  console.log("response",this._FlowQue[0].flowRequest[i].actionStepReq.response);
            if (this._FlowQue[0].flowRequest[i].actionStepReq[response]) flowReq.flowRequest[i].actionStepReq['previousState'] = flowReq.flowRequest[i].actionStepReq['state'], flowReq.flowRequest[i].actionStepReq['state'] = 'done';
         // console.log(i,flowReq.flowRequest[i],currentReq)
          //  console.log(this._FlowQue)

        }


      
    }
    executeAsyncActionStep(actionStep) {
        //    console.log(JSON.parse(actionStep.arguments[1]))
        var promise1 = actionStep.class[actionStep.method](actionStep.arguments[0], actionStep.arguments[1])
            .then(response => {
                if (!response.ok) { throw new Error("Could not reach website."); }
                return response.text();
            })
            .then(data => {
                if (actionStep.stepParams) {
                    //  console.log(actionStep.stepParams);
                    //  console.log("Data", data);
                    var callbackClass = actionStep.stepParams.output.callBackReq.callbackClass;
                    var callback = actionStep.stepParams.output.callBackReq.callback;
                    var args = actionStep.stepParams.output.callBackReq.args;
                    var andThen = actionStep.stepParams.output.callBackReq.andThen;
                    var andThenArgs = actionStep.stepParams.output.callBackReq.andThenArgs;
                    andThenArgs.push(data);
                    var response = this.executeSyncActionStep(callbackClass, callback, [args], andThen, andThenArgs)
                    //    console.log("Data",  response);
                    this.handleResponse(data);
                }

            })
            .catch(err => console.error(err))
    }
    handleResponse() {
        
    }


}

class ActionEntityV6  {
    constructor(req) {
        this._entity = {
            $schema: '',
            type: 'entityType',
            title: 'name',
            'description': 'shortNote',
            'defaults':'[Array of values that will always be default values]',
            'required': '[array of values that are required to be present]',
            'properties': {
                'class': ['list of Classes'],
                'id': "ID",
                'State': 'styate',
                'style': {
                    position: "",
                    backgroundColor:"",
                },
                type: "HTML",
                reource_url:window.location,
           },
        resource_binding:""
        }
        
        //   this._entity = processV3.processReq(req);
    }
    create(req) {
        if ("condition") {

        }

    }
    get(req) {
    }
    static set(input,output,key) {
        console.log("yu", input,output,key)
        output[key] = input[key];
        console.log(output);
    }
    static append(req) {

    }
    delete(req) {
    }
}

var actionEngine = new ActionEngineV9();
//console.log(actionEngine)
var response = actionEngine.executeSyncFlow(actionFlowModelReq);
console.log("response out",response)