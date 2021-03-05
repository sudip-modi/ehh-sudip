/**
 * Action Engine is a wrapper for all the req made it it's action api
 * 
 */

let actionClasses = [
    {
        'className': "",
        'methods': [
            {
                'methodName': "methodName",
                'methodArguments': `[...arg]`,
            }
        ]
    },
    
]



var actionRequest = {
    methodName: document.getElementById,
    entity: 'actionStory1'
    
}



class actionEngine {
    constructor(actionReq) {
        this._entity = [actionReq]

    }
    //Executes a req
    static executeReq(actionReq) {
        console.log("actionReq Recived", actionReq);
        var reqMethod = actionReq.methodName;
        console.log(reqMethod, typeof reqMethod);
        var response = reqMethod.apply(reqMethod,actionReq.entity);
        console.log(response);
    }
    executeEvery1() {
        
    }

}


var b = actionEngine.executeReq(actionRequest);

