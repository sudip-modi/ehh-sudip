
//An eg  usage of BuildActionRequest || ProcessStringRequest || ConductCallBack
//var buildParams;
var buildActionRequest = {
    buildArguments: { //Inside Entity defineing the request to build. 
        entityObjectModel: 'document',
        request: {
            method: 'get',
            entity: 'Element',
            entityIdentifier: 'ById',
            entityId: "(" + '"' + reqEntity.entityId + '"' + ")",
        },
      //  and: 'innerHTML',
    },
    'buildParams': { // defining the parameters of recusiosn and output
        'recurse': true,// this is to check if arguments have to be recursed or not.
        outPutCondition: null,//an operator can be added,if True, if False
        output: {
            outputType: 'callback',// [isOneof ( response, callback//operator) ]
            callBackReq : {
                callbackClass: 'actionEngineV5Instance',
                callback: 'processStringRequest',
                args: "cleanReq",
                andThen: 'innerHTML',
         //      test: buildActionRequest.buildParams.recurse
            }
        }


    }
}
let url = testingServerServiceUrl;

console.log(url)

var actionStepRequest = {
    class: httpServiceV2,
    method: 'fetchHttpRequest',
    arguments: [url],
    'stepParams': { // defining the parameters of recusiosn and output
        'Every1': false,// this is to check if Need to apply same method on all the argument individually.
        outPutCondition: null,//an operator can be added,if True, if False
        output: {
            outputType: 'callback',// [isOneof ( response, callback//operator) ]
            callBackReq: {
                callbackClass: document,
                callback: 'getElementById',
                args: "output",
               // andThen: 'setAttribute(innerHTML,"this.response")',
                //      test: buildActionRequest.buildParams.recurse
            }
        }


    }
}

//console.log("test",buildActionRequest.buildParams.output.callBackReq.test)
class ActionEngineV5 {
    constructor() {
        
    }

    buildActionRequest(buildReq) {
         console.log(buildReq)
        if (operate.isObject(buildReq) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", buildReq, "look like JSON to you. It's damn", operate.is(buildReq));
        } else {
         //   console.log("building", buildReq);
            var response = [];
            for (var key in buildReq.buildArguments) { //iterating Each key of req
                if (typeof buildReq.buildArguments[key] === "object") {
                    response.push(Object.values(buildReq.buildArguments[key]).join(" ").replace(/\s/g, ""))
                } else {
                    response.push(buildReq.buildArguments[key]);
                }
            }

            /**
            * cleanUpStage
            */
            //  console.log(response);
            this.cleanReq = "return " + response.join(".");
            var builtReq = "return " + response.join(".");
            //  console.log(buildReq.buildParams.output.outputType);
            if (buildReq.buildParams.output.outputType === 'callback') {
                var classToCall = buildReq.buildParams.output.callBackReq.callbackClass;
                var methodtoCall = buildReq.buildParams.output.callBackReq.callback;
                var andThen = buildReq.buildParams.output.callBackReq.andThen;
                var paraArg = buildReq.buildParams.output.callBackReq.args
                var args = this[paraArg];
                var callbackResponse = this.conductCallback(classToCall, methodtoCall, args,andThen);
                return callbackResponse;
            } else {
                console.log('builtReq', builtReq);
                return builtReq;
            }
            
        }

    }
    processStringRequest(request) {
        console.log(request)
        if (operate.isString(request) != true) {
            return console.error("not my job")
        } else {
            //var exeCommand = this.buildActionRequest(reqObject);
            console.log("executing command", request)
            //  var codeToExecute = "return document.getElementById('action').innerHTML";
            var response = new Function(request)();
            console.log("Processed String request", response);
            return response;
        }
         
    }
    //SetTimeOut(Now) optional attribute to be added to this method, which allows to conduct this callback Immidietly in the que.
    conductCallback(callbackClass, callback, args, andThen) {
       console.log("conducting", callbackClass, callback, args);
     //   var classToCall = window[callbackClass];
      //  console.log("here", window[callbackClass],classToCall) //This needs to be looked inTo
         
        var response = callbackClass[callback](args[0]);
         console.log("conduct call back response",response);
         return response;
    }
    executeAsynActionStep(actionStep) {
   //     console.log("here")
        var promise1 = actionStep.class[actionStep.method](actionStep.arguments[0])
            .then(response => {
                if (!response.ok) { throw new Error("Could not reach website."); }
                return response.text();
            })
            .then(data => {
                if (actionStep.stepParams) {
                  //  console.log(actionStep.stepParams);
                    console.log("Data", data);
                    var callbackClass = actionStepRequest.stepParams.output.callBackReq.callbackClass;
                    var callback = actionStepRequest.stepParams.output.callBackReq.callback;
                    var args = actionStepRequest.stepParams.output.callBackReq.args;
                   // var andThen = actionStepRequest.stepParams.output.callBackReq.andThen;
                    
                    var response  = this.conductCallback(callbackClass,callback,[args])
                    console.log("Data", data, response);
                }
                
            })
            .catch(err => console.error(err))
       
    }

    runActionFlow(actionFlow) {
        // for await (var key of actionFlow) {
            
        // }
    }
}






var actionEngineV5Instance = new ActionEngineV5();

//var tempoOut = actionEngineV5Instance.buildActionRequest(buildActionRequest)

var callBackReqModel = {
    callbackClass: 'document',
    callback: 'getElementById',
    args: "action",
    andThen:'innerHTML'
}
//var tempo = ActionEngineV5.conductCallback(request2.callbackClass, request2.callback, request2.args);
//console.log(tempo);