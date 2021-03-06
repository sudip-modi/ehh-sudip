var actionRequest = [ {
    entityObjectModel: document,
    method: 'get',
    entity: 'element',
    entityIdentifier: 'byId',
    entityId: 'action',
    
} ]



class ActionEngine {
    constructor() {

    }
    buildReq(jsonReq) {
      
        for (var i = 0; i < jsonReq.length; i++) {
            console.log(jsonReq[i]);
            var response = Object.entries(jsonReq[i]);
            console.log(response);
        }
       
       
    }

    processRequest(reqObject) {
        this.buildReq(reqObject);
    }
}

var actionSpaceEngineInstance = new ActionEngine();
