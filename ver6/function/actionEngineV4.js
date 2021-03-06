
var reqEntity = {
    entityId: "action",
}

var actionRequest1 = {
    entityObjectModel: 'document',
    request: {
        method: 'get',
        entity: 'Element',
        entityIdentifier: 'ById',
        entityId: "(" +'"'+ reqEntity.entityId +'"'+ ")"
    },
    and:'innerHTML',
    
}
var fetchReq = {
    entityObjectModel: 'clientNodeFetch',
    request: {
        method: 'fetchUrl',
        arguments: "(" +"testingServerServiceUrl" + ")",
        entityId: "(" + '"' + reqEntity.entityId + '"' + ")"
    },
    and: 'innerHTML',

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
}


var actionSpaceEngineInstance = new ActionEngine();
