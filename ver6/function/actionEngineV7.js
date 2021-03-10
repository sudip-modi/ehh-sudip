var reqObjectVer2 = {
    reqName: 'getElement',//CommanName
    executeSyncReq: {
        objectModel: document,
        method: 'getElementById',
        argument: ['editor']
    }
}

var reqObject = {
    inputEntity: {
        value: {
            objectModel: document,
            method: 'getElementById',
            argument: ['editor']
        }
    },
    reqParams: {
        
    },
    response: {
        
    }
}



class ActionEngineV9{

    constructor(objectModelsNMethods) {
        console.log("I aka @ctionEngineV9, am here")
        //this._response = new Map();
        this._req = [];
    }

    handleReq(req) {
        var currentReq = this._req.push(req);
        var request = this._req[currentReq - 1];
        var inputReq = { objectModel: request.inputEntity.value.objectModel,method: request.inputEntity.value.method,arguments: request.inputEntity.value.argument,andThen:'andThen' }
        var reqInput = this.executeSyncReq(inputReq);
        request.response = reqInput;
        console.log(this._req)
        return reqInput;
        
    }
    executeSyncReq(req) {
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        } else {
            if (req.andThen) console.log('andThenFound');
            //console.log(req, req.arguments);
            return response = req.objectModel[req.method](req.arguments);
        }
    }
    executeASyncReq(req) {
        
    }
    handleResponse() {
        
    }


}


var actionEngine = new ActionEngineV9();
var response = actionEngine.handleReq(reqObject);
console.log("response out",response)