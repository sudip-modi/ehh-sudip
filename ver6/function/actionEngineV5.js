
//An eg  usage of BuildActionRequest || ProcessStringRequest || ConductCallBack
//var buildParams;
//This is a sample obj to be used to build a String Process Req.
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

var actionStepGetRequest = {
    class: httpServiceV2,
    method: 'serverNodeReqSwitcher',
    arguments: [serviceUrl, httpGetReqObject],
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

var actionStepPostRequest = {
    class: httpServiceV2,
    method: 'serverNodeReqSwitcher',
    arguments: [serviceUrl, httpPostReqObject],
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

var callBackReqModel = {
    callbackClass: 'document',
    callback: 'getElementById',
    args: "action",
    andThen: 'innerHTML'
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
            return console.error("not my job")//To be routed through BuildActionReq
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
    conductCallback(callbackClass, callback, args, andThen, andthenArgs) {
       // console.log("conducting", callbackClass, callback, args, andThen,andthenArgs);
     //   var classToCall = window[callbackClass];
      //  console.log("here", window[callbackClass],classToCall) //This needs to be looked inTo
        if (andThen) {
           // console.log("andThen", andThen, andthenArgs[0], andthenArgs[1])
            var response = callbackClass[callback](args[0])[andThen] = andthenArgs[1];
          //  console.log(response)
        } else {
            var response = callbackClass[callback](args[0]);
        }
        
       //  console.log("conduct call back response",response);
         return response;
    }
    executeAsynActionStep(actionStep) {
    //    console.log(JSON.parse(actionStep.arguments[1]))
        var promise1 = actionStep.class[actionStep.method](actionStep.arguments[0],actionStep.arguments[1])
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
                    var response = this.conductCallback(callbackClass, callback, [args],andThen,andThenArgs)
                //    console.log("Data",  response);
                    this.handleResponse(data);
                }
                
            })
            .catch(err => console.error(err))
       
    }
    // response.text() – read the response and return as text,
    //     response.json() – parse the response as JSON,
    //         response.formData() – return the response as FormData object(explained in the next chapter),
    //             response.blob() – return the response as Blob (binary data with type),
    //                 response.arrayBuffer()
    handleResponse(response) {

        console.log(response, operate.is(response));
        var responseJSON = JSON.parse(response);
        console.log("responseJson",responseJSON);
        var outputJson = mutate.arr2Object(response, response[0], {});
        console.log("Output :- Array To Object");
        console.log(outputJson);
        document.getElementById('output').value = outputJson;


      // 
      //  var responseUnbuild = httpServiceV2.unbuildEndodedUri(response);
       // 
        for (var key in (responseJSON)) {
            
         //   console.log(key, responseJSON[key], operate.is(responseJSON[key]))
        }

    }
    runSyncActionFlow(actionFlowReq) {
        
    }
    validateAll() {
        
    }
    validateSome() {
        
    }
    runAsyncActionFlow(actionFlow) {

        // for await (var key of actionFlow) {
            
        // }
    }
}






var actionEngineV5Instance = new ActionEngineV5();
