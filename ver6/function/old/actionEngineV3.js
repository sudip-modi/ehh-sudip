//Requests are objects that receive the success or failure DOM events that were mentioned previously.
//They have onsuccess and onerror properties, and you can call addEventListener() and removeEventListener() on them.
//They also have readyState, result, and errorCode properties that tell you the status of the request.
//The result property is particularly magical, as it can be many different things, depending on how the request was generated
//(for example, an IDBCursor instance, or the key for a value that you just inserted into the database).


//Object Model's define the resource Parameter of an entity

/**
 * this class handles execution of a Req made by client with a reqObject.
 * It handles
 * 1. a single Req.
 * 2. a sequential req.
 * 3. a parallel req.
 * 4. Nested Req.
 * All the classes, method's and entity will be defined in a schema and a validator will be implemented in it.
 *  
 */
let objectModel,method2Call,args;
let globalObjectModels = [
    {
        name: "dom", 'globalObjectName': document,
        methods: [
            {
                methodName: 'getElementbyId',
                arguments: 'id'
            },
            {
                methodName: 'getElementbyId',
                arguments: 'id'
            },
            
        ]
    },
    {
        name: 'wom','globalObjectName': window,
    },
    {
        name: 'com', 'globalObjectName': chrome,
    }


]






var actionRequest = {
    'entityObjectModel': document,
    'entityId': "action",
    //'methodTests': `${actionRequest.entityId}`,
    'methodName': 'getElementById',
    'arguments': ['action'],
    'and': {
        'methodName2': 'getAttribute',
        'arguments': 'innerHTML',
    },
   

}

var messEntity = {
    'entityId':'action',
}
var messMethod = {
    entity: {
        entityId: "actionMessy",
    },
//    messyMethod:messMethod.entity[entityId],
    methodName : messEntity.entityId
}

//console.log(messMethod)


class ActionEngine {
    constructor() {
      
    }
    buildReq(jsonReq) {
        console.log(jsonReq);
        Object.entries(jsonReq);
        var builtReq = jsonReq
    }

    processRequest(reqObject) {
      //  console.log("this", this)
        

        var response;
        for (var i = 0; i < reqObject.length; i++) {
            this.objectModel = reqObject[i].entityObjectModel;
            //  console.log("now", reqObject[i].methodTests)
            this.method2Call = reqObject[i].methodName;
            this.args = reqObject[i].arguments;
          
        //    console.log("this", params)
            //var response = reqObject;
          
            var response = this.objectModel[this.method2Call](this.args);
          //  console.log(response);
            if (reqObject[i].and) {
              //  this.methodNameAnd = 
              //  console.log("andFound")
                this.method2CallAnd = reqObject[i].and.methodName2;
                this.args2 = reqObject[i].and.arguments;
               // console.log(this.method2CallAnd,this.args2)
                var response = this.objectModel[this.method2Call](this.args)[this.method2CallAnd](reqObject[i].and.arguments);
              //  console.log("andResponse",response)
            }
        }
        return response;
    }



    static every1(methods, arg1) {
        var self = this;
        return methods.every(function (method) {
            //    console.log(method.method, arg1, method.arguments)
            return operate[method.method](arg1, method.arguments);
        });
    }

    
}

var actionSpaceEngineInstance = new ActionEngine();
actionSpaceEngineInstance.processRequest(actionRequest);

//console.log("here",actionSpaceEngineInstance)


var tempoReq = {
    entityId:'action',
    class1: document,
  //  method: `getElementById(${entityId})`,
    and:'innerHTML'
}
actionSpaceEngineInstance.buildReq(tempoReq);
console.log("tempo",tempoReq)


var codeToExecute = "return document.getElementById('action').innerHTML";
var tmpFunc = new Function(codeToExecute);
var t = tmpFunc();
//console.log(t)


