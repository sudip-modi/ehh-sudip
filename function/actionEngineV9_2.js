

class ActionEngine {
    constructor() {
        this._flowResultState = {};
        this._request = [];// has to be synced with Local Storage or indexDb 
        this._request['StorageLimit'] = 20; // This denotates how many request will we save in buffer.
    }
    get(key,parent) {
       // console.log("for Initaition", key, objectModel, objectModel[key])
        if (parent[key]) {
           // console.log("for Initaition", key, objectModel, objectModel[key])
            var response = parent[key];
            return response;
        }else{
            return key;
        }
    }
    executeSynReq(req, result) {
        var response,argument;
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        }
        var objectModel = this.get(req.objectModel, window);//Getting the object Model from window Object
        if (result) {//Used for either callback cases, where 
            argument = result;
        } else {
            argument = req.argument;
        }
//Build Arguments
        // for (var i = 0; i < argument.length; i++) {
        //   //  console.log(argument[i]);
        //     argument[i] = this.get(argument[i], window);
        // }
        //    response = objectModel[req.method](argument);
        if(req.assign){
            console.log(req.assign);
            objectModel[req.method] = argument[0];
            response = objectModel[req.method];
            console.log(objectModel[req.method] +"->" + argument);
            console.log(response);
        }else if(operate.isObject(objectModel[req.method]))
            response = objectModel[req.method][argument];
        else if(objectModel[req.method]&&operate.isFunction(objectModel[req.method]))
            response = objectModel[req.method].apply(objectModel,argument);      
        else
            response = objectModel[req.method];
        if (req['andThen']) {
            if (operate.isArray(req['andThen']) && req['andThen'].length > 0) {
                switch (req['andThen'].length) {
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
                    // console.log("I don't know such values",event.type);
                }
                console.log(response);
            }else if(operate.isObject(req['andThen'])){
                response = this.executeSynReq(req.andThen);
            }
        }
        req[response] = response;
        if (req['callBack']) {
            var callBack = window[req['callBack']];
            response = this.reqProcessor(callBack, req[response]);
        }
        return response;
    }
     /**
   * This method is used for parallel requests
   * @param {FlowRequest} reqObj - request object containing array of objects
   */
  async processReqArray(reqObj,params) {
    const state = {};//this._flowResultState;
    console.log(params);
    if (operate.isFlowRequest(reqObj) && operate.isArray(reqObj.flowRequest)) {
      var flowRequest = reqObj.flowRequest;
      for (var i = 0; i < flowRequest.length; i++) {
        var request = flowRequest[i];var validateResult;
        if(request.validate){
            var validateRequest = this.handleObjectModelArguments(state,request.validate,params);
            console.log(validateRequest);
            validateResult = this.executeSynReq(validateRequest);
            console.log("Validated Result" + validateResult);
        }
        if(!request.validate || validateResult == request.validate.output){
            console.log("For request :- " + request.reqName);
            if(request.andThen && operate.isObject(request.andThen)){
                request.andThen = this.handleObjectModelArguments(state,request.andThen,params);
            }
            const result =await this.executeSynReq(this.handleObjectModelArguments(state,request,params));
            state[request.reqName] = result;
            console.log("");
            if(request.exit)
                break;
        }else{
            continue;
        }
      }
    }
    console.log("Done")
    return state;
  }
  handleObjectModelArguments(state,request,params){
      if(state[request.objectModel])
            request.objectModel = state[request.objectModel];
      else if(String(request.objectModel) == 'state'){
            request.objectModel = state;
            console.log(request.objectModel);
      }
      if(request.argument){
            for (var p = 0; p < request.argument.length; p++) {
                if(operate.isInsideArray('params',String(request.argument[p]))){
                    var arr = String(request.argument[p]).split('.');
                    request.argument[p] = params[arr[1]];
                }else if (state.hasOwnProperty(request.argument[p])) { 
                    request.argument[p] = state[request.argument[p]];    
                }else if(operate.isInsideArray('.',String(request.argument[p]))){
                    var arr = request.argument[p].split('.');
                    if(state.hasOwnProperty(arr[0])){
                        var arg0 = state[arr[0]];
                        var arg1 = arg0[arr[1]];
                        request.argument[p] = arg1;
                    }
                }
            }
      }
      return request;
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
//console.log(domGetReq);
