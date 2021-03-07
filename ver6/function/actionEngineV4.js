
var reqEntity = {
    entityId: "action",
}

var actionRequest1 = {
    entityObjectModel: 'document',
    request: {
        method: 'get',
        entity: 'Element',
        entityIdentifier: 'ById',
        entityId: "(" + '"' + reqEntity.entityId + '"' + ")",
        test: {
            'ref': `entityObjectModel.request.method`
        }
    },
    and:'innerHTML',
    
}



var fetchReq = {
    entityObjectModel: 'clientNodeFetch',
    request: {
        method: 'fetchUrl',
        arguments: "(" +"testingServerServiceUrl" + ")",
       // entityId: "(" + '"' + reqEntity.entityId + '"' + ")"
    },
//    and: 'innerHTML',

}
var actionFlowRequestFetch = [
    {
        requestIndex: '1',
        "request":actionRequest1
    }
]

class ActionEngine {
    constructor() {
    }
//need to add an optional parameter of callback functions
    buildReq(jsonReq) {
        var response = [];
        for (var key in jsonReq) { //iterating Each key of req
            if (typeof jsonReq[key] === "object") {
                response.push(Object.values(jsonReq[key]).join(" ").replace(/\s/g, ""))
            } else {
                response.push(jsonReq[key]);
            }             
            }
       
       // console.log(response);
        /** 
         * cleanUpStage
         */
        var builtReq = "return "+response.join(".");
        
        //console.log(builtReq);
        return builtReq;
    }
    processRequest(reqObject) {
        var exeCommand = this.buildReq(reqObject);
        console.log("executing command",exeCommand);
      //  var codeToExecute = "return document.getElementById('action').innerHTML";
        var response = new Function(exeCommand)();
        console.log(response);
        return response;
    }
    processRequestFlow(requestFlow) {
        
    }
}


var actionSpaceEngineInstance = new ActionEngine();


var test2={
    "$schema": "http://json-schema.org/draft-07/schema#",

        "definitions": {
        "address": {
            "type": "object",
                "properties": {
                "street_address": { "type": "string" },
                "city": { "type": "string" },
                "state": { "type": "string" }
            },
            "required": ["street_address", "city", "state"]
        }
    },

    "type": "object",

        "properties": {
        "billing_address": { "$ref": "#/definitions/address" },
        "shipping_address": { "$ref": "#/definitions/address" }
    }
}
console.log(test2);