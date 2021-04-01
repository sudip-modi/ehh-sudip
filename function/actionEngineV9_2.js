var eachKeyReqModel = {
    name: 'eachKey',
    objectModel: 'ActionEngine',
    method: 'eachKey',
    argument: ['input'],
    params: {
        response: {},
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
  
    intiate(key,objectModel) {
       console.log("for Initaition",key)
        if (objectModel[key]) {
            return objectModel[key];   
        }


    }
//Executes an array of conditions of a values and returns true if all are true.
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
        this.intiate(req, window);
      //  console.log("intiated",req)
        if (typeof req === 'object'){
            for (var key in req.input){
                console.log("iam Here", req.input[key]);
                if (req.input.hasOwnProperty(key)) {
                    if (operate.isString(req.input[key])) {
        
                        req.input[key] = this.intiate(req.input[key], window);
                        console.log("iam Here Intiated", req.input[key]);
                     }
                    else if (operate.isObject(req.input[key])) { }
                    else if (operate.isArray(req.input[key])) { }
                }
                   //f(m,loc,expr,val,path);
             }
        }
        return req;
    }

    processReq(req) {
        
        console.log('req', req);
       req = this.eachKey(req);
       console.log("process",req)
      //  req['reqUniqueId'] = uid();
       // console.log(req);
        this._request.push(req);
           // console.log(this._request)
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        } else {
            if (window[req]) req = window[req];

            console.log('req', req); 
            var response = req.objectModel[req.method](req.arguments);
        }
        if (req.callBack) {
            var callBack = window[req.callBack];
            if (callBack) {
                this.processReq(callBack, response);
            }
        }



    }
}

var engine = new ActionEngine();
// console.log(engine);
// var DOMJson = engine.processReq('domGetReq');
// console.log(DOMJson)
