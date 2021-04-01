var eachKeyReqModel = {
    name: 'eachKey',
    objectModel: 'ActionEngine',
    method: 'eachKey',
    argument: ['input'],
    params: {
        response: {},// If present the response is stored here. If an object returned as an object, if an array return as an array.
        maxDepth: 5,
        maxItem:10,   
    }   
}

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
           // console.log("Initaites found",response)
            return response;
        }


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
                        //console.log("iam Here Intiated", key, req[key]);
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

    processReq(req) {
       
       // console.log("recieved req", req, typeof req, operate.isString(req), this.get(req, window), window['domGetReq'])
        if (operate.isString(req) === true) { req = this.get(req, window); }
       console.log('req', req);
     //  req = this.eachKey(req);
      // console.log("process",req)
      //  req['reqUniqueId'] = uid();
       // console.log(req);
        this._request.push(req);
           // console.log(this._request)
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        } else {
            
            var objectModel = this.get(req.objectModel,window);
           // var method = req.objectModel[req.method];
           var method = req.method;
            var argument = req.argument.join().trim();
            if (req['andThen'].length > 0) {
                console.log(req['andThen'].join().trim(), objectModel, method, argument);
                var tempoResponse = objectModel[method]('actionSpaceBody');
                var response = document.getElementById('actionSpaceBody');
                console.log("here",response,tempoResponse);
            
            
            } else {

//                var response = req.objectModel[req.method](req.arguments);
            }
          //  console.log("executing Request",req)
          


         //   console.log('req', req); 
          
        }
        if (req.callBack) {
            var callBack = window[req.callBack];
            if (callBack) {
             //   this.processReq(callBack, response);
            }
        }



    }
    reqProcessor(req) {
        console.log(req)
        var response = this.get(req.objectModel,window)[req.method];
        console.log("response ",response);
        return response;
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
