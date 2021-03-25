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



/*
 * Setup
 */


// this is the method performing execution of functions
function execFn(fnName, ctx /*, args */) {
    // get passed arguments except first two (fnName, ctx)
    var args = Array.prototype.slice.call(arguments, 2);
    // execute the function with passed parameters and return result
    return ctx[fnName].apply(ctx, args);
}




class ActionEngine {
    constructor(actionReq) {
        this._entity = [actionReq]

    }
    static execFn(fnName, ctx /*, args */) {
        // create context object
        var context = {};

        // assign functions to the object
        context["document"] = document;
        context["window"] = window;

    // get passed arguments except first two (fnName, ctx)
    var args = Array.prototype.slice.call(arguments, 2);
    // execute the function with passed parameters and return result
    return ctx[fnName].apply(ctx, args);
}

    static conduct(callbackClass, callback, a, b, c, d,) {
    //    var temp = new function ()
        // console.log(a, b, callback)
      //  eval(callbackClass.callback(a, b))
       // var response = new function (callbackClass, callback, a, b, c, d)
      //  var response = callbackClass[callback](a, b, c, d);
         // console.log("conduct response",response)
        //return response();
    }
    //Executes a req
    static executeReq(actionReq) {
        console.log("actionReq Recived", actionReq);
        var reqMethod = actionReq.methodName;
        console.log(reqMethod, typeof reqMethod);

      //  var response = reqMethod.apply(reqMethod,actionReq.entity);
        console.log(response);
    }
    executeEvery1() {
        
    }

}

var actionRequest = {
    'entityObjectModel': 'document',
    'methodName': 'getElementById',
    'entity': 'actionStory1'

}

/*
 * Usage
 */

execFn(strfn, context, "user2", "pwd2");
execFn("fnLogout", context);