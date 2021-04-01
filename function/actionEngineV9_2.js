class ActionEngine {
    constructor() {
        this._flowResultState = {};
        this._request = [];// has to be synced with Local Storage or indexDb 
        this._request['StorageLimit'] = 20; // This denotates how many request will we save in buffer.
    }

    intiate(key) {
        console.log(key)
        
        if (window[key]) {
        
            key = window[key];
            console.log(key);
            return key;
        }


    }

    processReq(req) {
        

        console.log('req', req);
        req = this.intiate(req);
        console.log(req)
        req['reqUniqueId'] = uid();
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
console.log(engine);
var DOMJson = engine.processReq('domGetReq');
console.log(DOMJson)
