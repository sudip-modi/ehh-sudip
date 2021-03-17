

var HTMLElementEntityModel = {
    "name": {
        "value": {
            'operator': [
                {
                    'method': 'isInsideArray',
                    'arguments': 'HTMLElementList'
                }
            ]
        }
    },
    "id": {
        "value": {
            'operator': [
                {
                    'method': 'isInt',

                }
            ]
        }
    }
}
var entityModelV2 = {
    'name': {
        value: 'input.nameTagName',
        'process': [
            {
                'objectModel': 'operate',
                'method': 'isInsideArray',
                'arguments': 'HTMLElementList'
            }
        ]
    },
    // description : "",
    'id': {
        value: 'input.id',
        'operator': [
            {
                'method': 'isInsideArray',
                'arguments': 'HTMLElementList'
            }
        ]
    },
    'entityType': {
        value: 'operate.is(input)',
        'operator': [
            {
                'method': 'isOptional',
                'arguments': 'value',
            }
        ]
    },
    resource: {
        value: 'input.url',
        operate: ['isUrl'],
    },
    attributes: {
        value: null,
        operate: [find('input.attributes', ['class', 'style', 'src'])],
    },
    content: '',
    'contentMimeType': '',//[HTML,JSON,TEXT,JAVASCRIPT],
    resourceBinding: ''
}

var reqObjectVer2 = {

    reqName: 'getElement',//CommanName
    objectModel: document,
    method: 'getElementById',
    arguments: ['editor'],
    response: [],
    //  andThen: ['savetoStorageReq']
}
var entityModel4Html = {
    tagName: "input.tagName",
    attributes: ['class', 'style', 'src'],
    children: ['All'],
}

var getObjectVer2 = {
    reqName: 'getElement',//CommanName
    objectModel: document,
    method: 'getElementById',
    arguments: ['navigationSection'],
    response: [],
    andThen: ['copy2']
}




/**
 * This is kind of a model class, it interacts with controller and external services using helper classes
 * Every Registered Models is validatated from a model inside Json / ModelName.js file //we need to think this through
 */

class Entity {
    constructor(input, output) {
        this.entity = process.processReq(input, output);
        console.log("Entity Created", this);
    }
    static create(input, output, key, value, callback, callbackClass) {
        // console.log('create request for ',output,key)
        if (operate.is(output).includes("HTML")) { //Only HTML creation
            // var response = Object.create(output.constructor.prototype)
            var response = document.createElement(key);
            // Entity.set(input, response, 'id', key + entityIndex.next().value);
        }
        if (operate.is(output).includes("Object")) { //Only HTML creation
            console.log("create request for ", input, output, key, value)

            response = new Object()

            //response = key;
            //response.set(value,key)
            //var response = document.createElement(key);
            if (value) {
                //    process.iterateObj(value,response,key,value)
            }
            // entity.set(input, response, 'id', key + index.next().value);
        }
        if (operate.is(output).includes("Array")) { //Only HTML creation
            // console.log("create request for ", input, output, key, value)

            response = new Object()

            //response = key;
            //response.set(value,key)
            //var response = document.createElement(key);
            if (value) {
                //    process.iterateObj(value,response,key,value)
            }
            // entity.set(input, response, 'id', key + index.next().value);
        }
        if (!response) console.log("no response", output);
        return response;
    }
    static append(input, output, key, value, callback, callbackClass) {
        // console.log('appending', input,output)

        if (operate.is(output).includes("HTML")) { //Only HTML creation
            var response = output.appendChild(input);
        }
        if (operate.is(output).includes("Object")) { //Only HTML creation
            // console.log("append request for ",input,output)     
            output[key] = input;
            var response = output;
            //var response = document.createElement(key);

        }
        if (operate.is(output).includes("Array")) { //Only HTML creation
            // console.log("append request for ",input,output)     
            output.push(input);
            var response = output;
            //var response = document.createElement(key);

        }



        // console.log('appended',response)
        return response;
    }
    static set([input, output, key]) {
        console.log("setting", input[key],"in",output)
        if (operate.is(output).includes("HTML") && operate.isIn(key, htmlAttributesList)) { //Only HTML creation
            //console.log("setting",key, value,"in",output)
            output.setAttribute(key, value)
                //console.log(output);
            } else {
                //var buffer = output;
                output[key] = input[key];
                //buffer=output;
            

        }
        console.log("output from set",output)
        return output;
    }
 
    static copy2(req) {
        console.log(req);
        var args = {
            input: req[0],
            output: req[1],
            callback: 'setEntityReq',
        }

        if (!operate.isObject(req[1])) {

            response = req[0][req[1]];
            console.log(response);
            // processV5.iterateObj(args);
        } else if (operate.isObject(req[1])) {

             processV5.iterateObj(args);
          // console.log(args);
        }
        return "success";
    }
    
}

// This request Object to be used to copy properties from one object to another.

var copy2 = {
    reqName: 'copy2',
    objectModel: Entity,
    method: 'copy2',
    arguments: [{ 'previous': 'response' }, entityModel4Html],
    response: [],
    maxDepth: 5,
    maxChildren: 120,
   // andThen: ['setEntityReq']
}

class processV5 {

    static iterateObj(args) {
        var response;
        console.log("iterating",args)
        var depth = 0; var index = 0; var response;
        for (var key in args.output) {

            if (typeof args.output[key] == 'string') {
                
                var req = window[args.callback];
                req.arguments = [args.input, args.output, key];
                response = actionEngineV9Instance.runSyncStep(req);
                //                console.log(response);
            } else if (typeof args.output[key] == 'object') {
                console.log(args.output[key], operate.is(args.output[key]))
            }

        }
  //      console.log(args.output)
        return args.output;    
    }
}


class ActionEngineV9 {
    constructor() {
        // console.log("I aka @ctionEngineV9, am here")

        this._flowsInAction = [];
        this._req = [];
    }
//This method executes a Predefined reqObject
    // It validator has to be added.
    // it allows user to add a callback req.
    //differant callbacks are treated differantly.

     runSyncStep(req, activeFlowIndex) {
        if (!req) { console.log("dont send empty req   Please"); return "error : yo";}
        req['state'] = "ek";
        if (operate.isObject(req) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", req, "look like JSON to you. It's damn", operate.is(req));
        } else {
            if (req.andThen) {
                //If then is found then Check if the AndThen is an Object or String,
                //if string, check for live object. ?? Possible conflict with other Objects.
                //if andThen argument has previousKey. 
                //store current response in andThen Arguments
                // console.log("andThenFound", req.andThen);
                //test if their is an live obejct in the current Scope, if yes, use that.
                if (window[req.andThen]) {
                    
                    req.andThen = window[req.andThen];
                  //  console.log("and then", req.andThen.arguments)
                    //var previous = operate.isInside(req.andThen.arguments,"previous",'values')// Need to write a method that searches for a string inside any kind of object
                  //  console.log("here", req.andThen.arguments[0].previous)
                    for (var i = 0; i < req.andThen.arguments.length; i++) {

                        if (typeof req.andThen.arguments[i] === 'object') {
                        //   console.log( req.andThen.arguments[i]);
                        }

                    }
                    //  console.log("here yo", req.andThen.method, req.andThen.arguments)
                    var buffer = req.objectModel[req.method](req.arguments);
                   // console.log(buffer)
                    req.andThen.arguments[0] = buffer;
                   // console.log(req.andThen)
                    var response = this.runSyncStep(req.andThen);
                  
                }
            } else {
                console.log(">>>>>>>>>>>>>>", req, req.method)
            //      req.objectModel = window[req.objectModel];
                      //  console.log(req.objectModel)
                var response = req.objectModel[req.method](req.arguments);
               // console.log("response",response)
            }



            //handle output
            if (!operate.isUndefined(response)) {
                //  console.log(response,"now")
              //  req.response.push(response);
                return response;
            } else {
               // console.log(response, req.response, req)
               // req.response.push("Success");
                return "Success";
            }


        }

    }
  
}

var setEntityReq = {
    objectModel: Entity,
    method: 'set',
    arguments: [{ 'previous': 'response' }, 'output', 'key']
}

var actionEngineV9Instance = new ActionEngineV9();
console.log(actionEngineV9Instance);

var response = actionEngineV9Instance.runSyncStep(getObjectVer2);
console.log(response);


