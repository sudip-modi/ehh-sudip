class ActionEngine {
    constructor() {
      this._flowResultState = {};
    }
  
    processReq(reqObj, resultObj = null) {
      if (Validators.isNestedRequest(reqObj)) {
        return this.processReqNestedObject(reqObj);
      }
      if (Validators.isFlowRequest(reqObj)) {
        return this.processReqArray(reqObj);
      }
      if (Validators.isSingleRequest(reqObj)) {
        return this.processSingleReq(reqObj, resultObj);
      }
      throw new Error("Request type not supported")
    }
  
    /**
     * processes single request
     * @param {RequestObj} reqObj - request object
     * @param {unknown} [resultObj=null] - Optional parameter for passing result of previous requests
     * @returns {Promise}
     */
    processSingleReq(reqObj, resultObj = null) {
      var method = reqObj.objectModel[reqObj.method];
      if (reqObj.arguments) {
        for (var i = 0; i < reqObj.arguments.length; i++) {
          if (reqObj.arguments[i] === "fromPrevious") {
            reqObj.arguments[i] = resultObj;
          }
        }
      }
  
      var processResult;
  
      if (method && Operate.isFunction(method)) {
        processResult = method.apply(reqObj.objectModel, reqObj.arguments);
      }
      if (Operate.isObject(method)) {
        processResult = method[reqObj.arguments]
      }
      if (reqObj.callBack) {
        var callBack = window[reqObj.callBack];
        if (callBack) {
          processResult = this.processReq(callBack, processResult);
        }
      }
      return processResult;
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
              //  console.log(">>>>>>>>>>>>>>", req.objectModel, req.method)
              //  req.objectModel = window[req.objectModel];
//                console.log(req.objectModel)
                var response = req.objectModel[req.method](req.arguments);
               // console.log("response",response)
            }
            
//handle output
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
    buildActionRequest(buildReq) {
        console.log("BUildReq",buildReq)
       if (operate.isObject(buildReq) != true) {
           return console.error("Need a JSON, Please refer to the documentation", "Does this >", buildReq, "look like JSON to you. It's damn", operate.is(buildReq));
       } else {
           console.log("building", buildReq);
           var response = [];
           for (var key in buildReq.buildArguments) { //iterating Each key of req
               if (typeof buildReq.buildArguments[key] === "object") {
                   console.log("udi",Object.values(buildReq.buildArguments[key]));
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
               console.log(args)
               var callbackResponse = this.executeSyncnActionStep(classToCall, methodtoCall, args, andThen);
               
               return callbackResponse;
           } else {
               console.log('builtReq', builtReq);
               return builtReq;
           }
           
       }

   }
   processStringRequest(request) {
       console.log("request",request)
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
    /**
     * This method is used for parallel requests
     * @param {FlowRequest} reqObj - request object containing array of objects
     */
    processReqArray(reqObj) {
      const state = this._flowResultState;
      if (Operate.isFlowRequest(reqObj) && Operate.isArray(reqObj.flowRequest)) {
        var flowRequest = reqObj.flowRequest;
        for (var i = 0; i < flowRequest.length; i++) {
          var request = flowRequest[i];
          var args = request.arguments;
          var requestArgs = [];
          for (var p = 0; p < args.length; p++) {
            var reqArg = args[p];
            if (state[reqArg]) { requestArgs[p] = state[reqArg]; }
            else { requestArgs[p] = reqArg; }
          }
          var updatedRequest = { ...request, arguments: requestArgs };
          const result = this.processReq(updatedRequest);
          if (result) {
            state[request.reqName] = result;
          }
        }
      }
      return null;
    }
    /**
     * This method is used for nested requests
     * @param {RequestObj} reqObj - request object containing nested requests
     */
    processReqNestedObject(reqObj) {
      /**
       * This method is used for recursion and ensuring the requests are performed sequentially
       * @param {RequestObj} request - Current request object
       */
      function recursiveThen(request) {
        var reqArg = request.arguments;
        var requestArgs = [];
        for (var j = 0; j < reqArg.length; j++) {
          if (this._flowResultState[reqArg[j]]) {
            requestArgs[j] = this._flowResultState[reqArg[j]];
          } else {
            requestArgs[j] = reqArg[j];
          }
        }
  
        var updatedRequest = { ...request, arguments: requestArgs };
        var tempRequest = {};
        for (var [key, value] of Object.entries(updatedRequest)) {
          if (key !== "andThen") {
            tempRequest[key] = value
          }
        }
        var result = this.processReq(tempRequest);
        if (result) {
          this._flowResultState[request.reqName] = result;
        }
  
        if (request.andThen) {
          var nestedReq = request.andThen;
          if (!nestedReq.objectModel) {
            nestedReq.objectModel = result;
          }
          recursiveThen.call(this, nestedReq);
        }
      }
      recursiveThen.call(this, reqObj);
    }
  }
  
  var engine = new ActionEngine();
  var DOMJson = engine.processReq(singleReq);
  console.log(DOMJson)
  
  engine.processReq(actionFlowModelReq)
  
  engine.processReq(setInnerHTML)
  