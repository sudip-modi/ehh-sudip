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
    async processReq(reqObj,resultObj) {
        // if (Validators.isNestedRequest(reqObj)) {
        //     return this.processReqNestedObject(reqObj);
        // }
        if(Validators.isFlowRequest(reqObj)) {
            return await this.processReqArray(reqObj);
        }
        if(Validators.isSingleRequest(reqObj)) {
            return await this.action(reqObj,resultObj)
        }
        throw new Error("Request type not supported")
    }
    get(key,parent) {
         if(parent[key])
            console.log('Nothing');
         if (parent[key]) {
            // console.log("for Initaition", key, objectModel, objectModel[key])
             var response = parent[key];
            // console.log("Initaites found",response)
             return response;
         }else{
             return key;
         }
 
 
     }
    /**
     * 
     * @param {State} state - results of previous requests in an object
     * @param {RequestObj} reqObj - request obj
     * @returns {RequestObj}
     */
    handleRequiredPreviousResults(state,reqObj){
        var argument = [];var model;
        if(state.hasOwnProperty(String(reqObj.objectModel)))
            model = state[reqObj.objectModel];
        else
            model = reqObj.objectModel;
        if(reqObj.arguments){
            for(var p = 0;p < reqObj.arguments.length;p++){
                var arg = reqObj.arguments[p];
                if(state.hasOwnProperty(String(arg))){
                    argument[p] = state[arg]; 
                }else if(state.hasOwnProperty(String(arg).substring(0,String(arg).indexOf(".")))){
                    var arr = arg.split(".");
                    switch(arr.length){
                        case 2:argument[p] = state[arr[0]][arr[1]];break;
                        case 3:argument[p] = state[arr[0]][arr[1]][arr[2]];break;
                        case 4:argument[p] = state[arr[0]][arr[1]][arr[2]][arr[3]];break;
                        case 5:argument[p] = state[arr[0]][arr[1]][arr[2]][arr[3]][arr[4]];break;
                        default:
                    }
                }else
                    argument[p] = arg;  
            }
        }
        var updatedRequest = {...reqObj,objectModel:model,arguments:argument};
        console.log(updatedRequest);
        return updatedRequest;
    }
    /**
     * action
     * @param {RequestObj} reqObj - request object
     * @param {state} state - parameter for passing results of previous requests
     * @returns {Promise}
     */
    async action(req, state) {
        if (operate.isObject(req) != true) {
          return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        }
        req = this.handleRequiredPreviousResults(state,req);
        var response,validateResult;
        if(req.hasOwnProperty('validate')){
            validateResult = await this.action(req.validate,state);
            console.log("validateResult" + validateResult + " and it's output should be equal to " + req.validate.output);
        }
        if(req.hasOwnProperty('validate') && !operate.isEqual(validateResult,req.validate.output)){
            return null;
        }
        var objectModel = this.get(req.objectModel, window);//Getting the object Model from window Object
        var method = objectModel[req.method];
        // if (result) {//Used for either callback cases, where 
        //   var argument = result;
        // } else {
        //   var argument = req.arguments;
        // }
        // //Build Arguments
        // for (var i = 0; i < argument.length; i++) {
        //   //  console.log(argument[i]);
        //   argument[i] = Entity.get(argument[i], window);
        //   //  console.log(argument[i]);
    
        // }
        response = await method.apply(objectModel,req.arguments);
        if (req.hasOwnProperty('andThen')) {
          var andThenLength = req['andThen'].length;
          if (andThenLength > 0) {
            switch (andThenLength) {
              case 1:
                response = response[req['andThen']?.[0]];
                break;
              case 2:
                response = response[req['andThen']?.[0], req['andThen']?.[1]];
                break;
              case 3:
                response = response[req['andThen']?.[0], req['andThen']?.[1], req['andThen']?.[2]];
                break;
              case 4:
                response = response[req['andThen']?.[0], req['andThen']?.[1], req['andThen']?.[2], req['andThen']?.[3]];
                break;
              default:
            }
          }
        } 
        // req['response'] = response;
        // console.log()
        if (req['callBack']) {
          var callBack = window[req['callBack']];
          var callBackrequest = {...callBack,objectModel:response};
          response = await this.action(callBackrequest, state);
        }
        return response;
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
                var result= await this.action(request,state.flowRequest);
                console.log(result);
                //  if(result) {
                    state.flowRequest={
                        ...state.flowRequest,
                        [request.reqName]: result
                    };
                //  }
                if(request.exitBeforeExecutingRequest && operate.isEqual(result,null))
                        break;
                if(request.exitAfterExecutingRequest && result !== null){
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