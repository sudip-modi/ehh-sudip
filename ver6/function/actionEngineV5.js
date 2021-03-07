
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
    processStringRequest(reqObject) {
         //var exeCommand = this.buildActionRequest(reqObject);
         console.log("executing command", reqObject);
        //  var codeToExecute = "return document.getElementById('action').innerHTML";
         var response = new Function(reqObject)();
          console.log("Processed String request",response);
        return response;
    }
    conductCallback(callbackClass, callback, args, andThen) {
        //console.log("conducting", callbackClass, callback, args);
        var classToCall = window[callbackClass];
         console.log(andThen)
         
         var response = classToCall[callback](args)[andThen];
         console.log("conduct call back response",response);
         return response;
    }
    executeActionFlow(actionFlow) {
       var newFlow = new Promise((resolve, reject) => {
            console.log('Initial');

            resolve();
        })
            .then(() => {
                throw new Error('Something failed');

                console.log('Do this');
            })
            .catch(() => {
                console.error('Do that');
            })
            .then(() => {
                console.log('Do this, no matter what happened before');
            });
        
        
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