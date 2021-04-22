class Validators {
    constructor() {}

    static isSingleRequest(obj) {
        console.log()
        return obj && operate.isObject(obj) && obj.objectModel && obj.method && !obj.flowRequest;
    }

    static isFlowRequest(obj) {
        return obj && operate.isObject(obj) && obj.flowRequest && operate.isArray(obj.flowRequest);
    }


    static isNestedRequest(obj) {
        return obj && operate.isObject(obj) && obj.andThen && operate.isArray(obj.andThen);
    }

    static validate(obj, model) {
        var process = model.process;
        var method = process.objectModel[process.method];
        process.arguments[0] = obj;
        return method.apply(process.objectModel, process.arguments)
    }
}
class ActionEngine {
    constructor() {
        this._flowResultState={};
    }
//This can easily be replaced by operate.isin(key,object)
    async processReq(reqObj,resultObj=null) {
        // if (Validators.isNestedRequest(reqObj)) {
        //     return this.processReqNestedObject(reqObj);
        // }
        if(Validators.isFlowRequest(reqObj)) {
            return await this.processReqArray(reqObj);
        }
        if(Validators.isSingleRequest(reqObj)) {
            return await this.processSingleReq(reqObj,resultObj)
        }
        throw new Error("Request type not supported")
    }

    /**
     * 
     * @param {State} state - results of previous requests in an object
     * @param {RequestObj} reqObj - request obj
     * @returns {RequestObj}
     */
    async handleRequiredPreviousResults(state,reqObj){
        var argument = [];var model;
        if(state.hasOwnProperty(String(reqObj.objectModel)))
            model = state[reqObj.objectModel];
        else
            model = reqObj.objectModel;
        if(reqObj.arguments){
            for(var p = 0;p < reqObj.arguments.length;p++){
                if(state.hasOwnProperty(String(reqObj.arguments[p]))){
                    argument[p] = state[reqObj.arguments[p]]; 
                }else
                    argument[p] = reqObj.arguments[p];  
            }
        }
        var updatedRequest = {...reqObj,objectModel:model,arguments:argument};
        return updatedRequest;
    }
    /**
     * processes single request
     * @param {RequestObj} reqObj - request object
     * @param {unknown} [resultObj=null] - Optional parameter for passing result of previous requests
     * @returns {Promise}
     */
    async processSingleReq(reqObj,state,resultObj=null) {
        reqObj = await this.handleRequiredPreviousResults(state,reqObj);
        var processResult,validateResult;
        if(reqObj.hasOwnProperty('validate')){
                console.log(reqObj.validate);
                validateResult =await this.processSingleReq(reqObj.validate,state);
                console.log("validateResult" + validateResult + " and it's output should be equal to " + reqObj.validate.output);
        }
        if(reqObj.hasOwnProperty('validate') && !operate.isEqual(validateResult,reqObj.validate.output)){
            return null;
        }
        if(reqObj.hasOwnProperty('andThen')) {
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
        //what are you trying to do here?
        var method=reqObj.objectModel[reqObj.method];
        // if(reqObj.arguments&&operate.isArray(reqObj.arguments)) {
        //     for(var i=0;i<reqObj.arguments.length;i++) {
        //         if(!operate.isObject(reqObj.arguments[i])&&reqObj.arguments[i]==="fromPrevious") {
        //             reqObj.arguments[i]=resultObj;
        //         } else if(operate.isObject(reqObj.arguments[i])&&reqObj.arguments[i].$ref) {
        //             var request=this.processSingleReq(reqObj.arguments[i].$ref);
        //             reqObj.arguments[i]=request;
        //         }
        //     }

        // }


        if(method&&operate.isFunction(method)) {
            if(reqObj.andThen) {
                var tempResult= await method.apply(reqObj.objectModel,reqObj.arguments);
                for(var i=0;i<reqObj.andThen.length;i++) {
                    if(!operate.isObject(reqObj.andThen[i])) {
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
                processResult= method.apply(reqObj.objectModel,reqObj.arguments);

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
    async processReqArray(reqObj) {
        var state= {};
        if(!state.flowRequest) {
            state.flowRequest={}
        }

        if(operate.isFlowRequest(reqObj)&&operate.isArray(reqObj.flowRequest)) {
            var flowRequest=reqObj.flowRequest;
            for(var i=0;i<flowRequest.length;i++) {
                var request=flowRequest[i];
                console.log(request.reqName);
               // var args=request.arguments;
               // var requestArgs=getRequestArgs.apply(this,[args,state.flowRequest]);
               // var updatedRequest = {...request,arguments:requestArgs};
                var result= await this.processReq(request,state.flowRequest);
                console.log(result);
                //  if(result) {
                    state.flowRequest={
                        ...state.flowRequest,
                        [request.reqName]: result
                    };
                //  }
                if(request.exit && operate.isEqual(null,result)){
                    break;
                }
            }
        }
        console.log(state);
        return state;
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

            if(request.andThen&&operate.isArray(request.andThen)) {
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
    //Executes an array of conditions of a values and returns true if all are true.Used for more than one validation with &&
    validateAllTrue(value, rules) {
        var self = this;
        return rules.every(function (rule) {
            return self[rule](value);
        });
    };
    validateSomeTrue(value, rules) {
        var self = this;
        return rules.some(function (rule) {
            return self[rule](value);
        });
    };

    validate (value, key,params) {
        if (this.validateAllTrue(value, key.validator)) {
            if (params['onTrue'] === 'true') {
                //doThis
                return true;
            } 
           // key.value = value;
            
        }
        else if (params['onFalse'] === 'false'){
            //do This
            return false;
        }
        
    };
   
    /**
     * This method, walks through all the key's of an javascript object.
     * Be it a string || object ||array || Object, 
     *
     * 
     * @param {*} req.Input input argument if no options it just initiates it by finding it in default ObjectModel of actionSpaceInstance. 
     * In Development window is treated as the default object.
     * @param {*} req.params: optional parameters for when visiting each key
     * @param {*} req.params
     * 
     */
    eachKey(req) {
      //  if (!req['currentDepth']) { req['currentDepth'] = 0;console.log("it's a fresh start")}     
        if (typeof req === 'object'){
            for (var key in req) {
              //  req['currentDepth'] = req['currentDepth'] + 1; // add a break || continue condition to exit if more than max Depth
                if (req.hasOwnProperty(key)) {

                    var buffer = this.get(req[key], window);
                    if (operate.isUseless(buffer) === false) {
                       // console.log("iam Here raw", key, req[key]);
                        req[key] = buffer;
                        console.log("iam Here Intiated", key, req[key]);
                    }
                    
                    if (operate.isString(req[key])) {
                  //  console.log("found string",key,req[key]) 
                     }
                    else if (operate.isObject(req[key])) {
                      //  console.log("found Object", key, req[key])
                     }
                    else if (operate.isArray(req[key])) {
                      //  console.log("found Array", key, req[key])
                     }
                }
                   //f(m,loc,expr,val,path);
             }
        }
       // console.log(req);
        return req;
    }
      
    static promisifyRequest(request) {
        return new Promise((resolve, reject) => {
            // @ts-ignore - file size hacks
            request.oncomplete = request.onsuccess = () => resolve(request.result);
            // @ts-ignore - file size hacks
            request.onabort = request.onerror = () => reject(request.error);
        });
    }
}
var engine = new ActionEngine();