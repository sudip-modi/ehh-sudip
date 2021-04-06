class ActionEngine {
    constructor() {
        this._flowResultState={};
    }

    processReq(reqObj,resultObj=null) {
        // if (Validators.isNestedRequest(reqObj)) {
        //     return this.processReqNestedObject(reqObj);
        // }
        if(Validators.isFlowRequest(reqObj)) {
            return this.processReqArray(reqObj);
        }
        if(Validators.isSingleRequest(reqObj)) {
            return this.processSingleReq(reqObj,resultObj);
        }
        throw new Error("Request type not supported")
    }

    /**
     * processes single request
     * @param {RequestObj} reqObj - request object
     * @param {unknown} [resultObj=null] - Optional parameter for passing result of previous requests
     * @returns {Promise}
     */
    processSingleReq(reqObj,resultObj=null) {
        var processResult;
        if(reqObj.andThen) {
            for(var p=0;p<reqObj.andThen.length;p++) {
                if(window[reqObj.andThen]) {
                    reqObj.andThen[p]=window[reqObj.andThen]
                    for(var i=0;i<reqObj.andThen[p].arguments.length;i++) {
                        if(typeof reqObj.andThen[p].arguments[i]==='object') {
                            var args=reqObj.andThen[p].arguments[i].$ref;
                            var tempArgs=this._flowResultState;
                            for(var j=0;j<args.length;j++) {
                                console.log(args[j])
                                tempArgs=tempArgs[args[j][0]];
                                console.log(tempArgs)

                            }
                            reqObj.andThen[p].arguments[i]=tempArgs;
                        }
                    }
                }
            }
        }
        var method=reqObj.objectModel[reqObj.method];
        if(reqObj.arguments&&Operate.isArray(reqObj.arguments)) {
            for(var i=0;i<reqObj.arguments.length;i++) {
                if(!Operate.isObject(reqObj.arguments[i])&&reqObj.arguments[i]==="fromPrevious") {
                    reqObj.arguments[i]=resultObj;
                } else if(Operate.isObject(reqObj.arguments[i])&&reqObj.arguments[i].$ref) {
                    var request=this.processSingleReq(reqObj.arguments[i].$ref);
                    reqObj.arguments[i]=request;
                }
            }

        }


        if(method&&Operate.isFunction(method)) {
            if(reqObj.andThen) {
                var tempResult=method.apply(reqObj.objectModel,reqObj.arguments);
                for(var i=0;i<reqObj.andThen.length;i++) {
                    if(!Operate.isObject(reqObj.andThen[i])) {
                        tempResult=tempResult[reqObj.andThen[i]]
                    } else {
                        var args=reqObj.andThen[i].arguments;
                        if(!reqObj.andThen[i].method) {
                            tempResult[args[0]]=args[1]
                        } else {
                            tempResult[reqObj.andThen[i].method].apply(tempResult,args);
                        }
                    }
                }
                processResult=tempResult
            } else {
                processResult=method.apply(reqObj.objectModel,reqObj.arguments);

            }

        }

        if(reqObj.callBack) {
            var callBack=window[reqObj.callBack];
            if(callBack) {
                processResult=this.processReq(callBack,processResult);
            }
        }


        return processResult;
    }

    /**
     * This method is used for parallel requests
     * @param {FlowRequest} reqObj - request object containing array of objects
     */
    processReqArray(reqObj) {
        const state=this._flowResultState;
        if(!state.flowRequest) {
            state.flowRequest={}
        }

        if(Operate.isFlowRequest(reqObj)&&Operate.isArray(reqObj.flowRequest)) {
            var flowRequest=reqObj.flowRequest;
            for(var i=0;i<flowRequest.length;i++) {
                var request=flowRequest[i];
                var args=request.arguments;
                var requestArgs=getRequestArgs.apply(this,[args,state.flowRequest]);
                var updatedRequest={...request,arguments: requestArgs};
                const result=this.processReq(updatedRequest);
                if(result) {
                    state.flowRequest={
                        ...state.flowRequest,
                        [request.reqName]: result
                    };
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
            var reqArg=request.arguments;
            var requestArgs=getRequestArgs.apply(this,[reqArg,this._flowResultState])
            var updatedRequest={...request,arguments: requestArgs};
            var tempRequest={};
            for(var [key,value] of Object.entries(updatedRequest)) {
                if(key!=="andThen") {
                    tempRequest[key]=value
                }
            }
            var result=this.processReq(tempRequest);
            if(result) {
                this._flowResultState[request.reqName]=result;
            }

            if(request.andThen&&Operate.isArray(request.andThen)) {
                var nestedReqArray=request.andThen;
                for(var i=0;i<nestedReqArray.length;i++) {
                    var nestedReq=window[nestedReqArray[i]];
                    if(nestedReq) {
                        if(nestedReq.objectModel==='fromParent') {
                            nestedReq.objectModel=result;
                        }
                        var indexOfFromPrevious=nestedReq.arguments.indexOf("fromPrevious");
                        var indexOfParentResult=nestedReq.arguments.indexOf("fromParent");
                        if(indexOfParentResult!=-1) {
                            nestedReq.arguments[indexOfParentResult]=result
                        }
                        if(indexOfFromPrevious!=-1&&i>0) {
                            nestedReq.arguments[indexOfFromPrevious]=this._flowResultState[window[nestedReqArray[i-1]].reqName]
                        }
                    }
                    recursiveThen.call(this,nestedReq);
                }
            }
        }
        recursiveThen.call(this,reqObj);
    }
}

var engine=new ActionEngine();
var DOMJson=engine.processReq(singleReq);
console.log(engine.processReqArray(actionFlowModelReq))

// var html = engine.processSingleReq(updateDomObject)

// var html = engine.processSingleReq(getStyles)
// console.log(html)

// engine.processReq(nestedFlowModelReq)