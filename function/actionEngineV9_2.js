

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
        if (req['andThen']) {
            var andThenLength = req['andThen'].length;
            console.log(req['andThen']);
            if (andThenLength > 0) {
                console.log(andThenLength);
                switch (andThenLength) {
                    case 1:
                        var response = objectModel[req.method](argument)[req['andThen']?.[0]];
                        console.log("response ", response);
                        //  console.log("click", event.type, event.target)
                        break;
                    case 2:
                        var response = objectModel[req.method](argument)[req['andThen']?.[0], req['andThen']?.[1]];
                        console.log("response ", response);
                        //  console.log("click", event.type, event.target)
                        break;
                    case 3:
                        var response = objectModel[req.method](argument)[req['andThen']?.[0], req['andThen']?.[1], req['andThen']?.[2]];
                        console.log("response ", response);
                        //  console.log("click", event.type, event.target)
                        break;
                    case 4:
                        var response = objectModel[req.method](argument)[req['andThen']?.[0], req['andThen']?.[1], req['andThen']?.[2], req['andThen']?.[3]];
                        console.log("response ", response);
                        //  console.log("click", event.type, event.target)
                        break;
                    default:
                    // console.log("I don't know such values",event.type);
                }
            }
        } else {
        //    response = objectModel[req.method](argument);
        if(operate.isObject(objectModel[req.method]))
            response = objectModel[req.method][argument];
        else if(objectModel[req.method]&&operate.isFunction(objectModel[req.method]))
            response = objectModel[req.method].apply(objectModel,argument);      
        else if(operate.isString(objectModel[req.method]))
            response = objectModel[req.method];
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
  async processReqArray(reqObj) {
    const state = [];//this._flowResultState;
    if (operate.isFlowRequest(reqObj) && operate.isArray(reqObj.flowRequest)) {
      var flowRequest = reqObj.flowRequest;
      for (var i = 0; i < flowRequest.length; i++) {
        var request = flowRequest[i];var validateResult;
        if(request.validate){
            if(state[request.validate.objectModel])
                request.validate.objectModel = state[request.validate.objectModel];
            if(request.validate.argument){
                for (var p = 0; p < request.validate.argument.length; p++) {
                    if (state.hasOwnProperty(request.validate.argument[p])){ 
                        request.validate.argument[p] = state[request.validate.argument[p]]; 
                    }
                }
                console.log(request.validate.argument);
            }
            validateResult = this.executeSynReq(request.validate);
        }
        if(!request.validate || validateResult == request.validate.output){
            console.log("For request :- " + request.reqName);
            if(state[request.objectModel])
                request.objectModel = state[request.objectModel];
            if(request.argument){
                for (var p = 0; p < request.argument.length; p++) {
                    if (state[request.argument[p]]) { 
                        request.argument[p] = state[request.argument[p]]; 
                    }
                }
            }
            const result =await this.executeSynReq(request);
            // if (result) {
            state[request.reqName] = result;
            console.log(state);
            // }
        }else{
            continue;
        }
      }
    }
    return state;
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
