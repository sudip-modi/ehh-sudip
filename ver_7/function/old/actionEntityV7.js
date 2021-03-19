

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
    tagName: "tagName",
    attributes: { 'class':"class.value", 'style':"style.value", 'src':""},
    children: ['all'],
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
    static create([input, output, key, value]) {
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
    static append([input, output, key, value]) {
     //   console.log('appending', input,output)

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
    static set([input, output, key,value]) {
     console.log("setting", key,input[key],"in",output)
        if (operate.is(output).includes("HTML") && operate.isIn(key, htmlAttributesList)) { //Only HTML creation
            //console.log("setting",key, value,"in",output)
            output.setAttribute(key, value)
                //console.log(output);
            } else {
            var buffer = input[key];           
            if (value) {
                console.log("value")
                var buffer2 = value.split('.');
                var buffer = input[buffer2[0]][buffer2[1]];
            }
           // console.log("buffer", buffer, typeof buffer);
            if (typeof buffer === 'object') {
                output = {};
                output[key] = {};
              //  console.log("here>>>>>",output,buffer)
                output[key] = buffer.value;// optional check to be applied
                
            } else {
                output[key] = buffer;
            }
        }
     //  console.log("output from set",output)
        return output;
    }
   
    
}

// This request Object to be used to copy properties from one object to another.

class processV5 {

    static iterateObj2(args) {
        var response;
        
        console.log("iterating", args.requestKeys)
        
        var depth = 0; var index = 0; var response;
        for (var key in args.requestKeys) {

            if (typeof args.requestKeys[key] == 'string') { // Testing if the Value in the requested output is string or not, if string
                
                //console.log("here", key, args.output[key])
                var req = window[args.callback];

                req.arguments = [args.input, args.output, key];
                if (args.output[key].includes('value')) { //check where its a registerd optional parameter. This allows us to navigate further in an object if the input is an object
                   // console.log("value found", args.output[key]);
                    req.arguments.push(args.output[key]);
                }
                //console.log("req",req)
                response = actionEngineV9Instance.runSyncStep(req);
                
            //   console.log("response", response);
                
            } else if (typeof args.output[key] == 'object') { // need to check if recurse is true
              //  console.log(args.output[key], operate.is(args.output[key]));
                var args2 = {};
                args2['input'] = args.input[key]
                args2['output'] = args.output[key]
                args2['callback'] = args.callback;
              //  console.log(args2);
                var buffer = processV5.iterateObj(args2)
                
            }

        }
    // console.log(args.output,entityModel4Html)
        return args.output;    
    }
    /**
     * 
     * @param {*} args  args[0] == input
     * args[1] == requestModel on which it will iterate
     * args[2] ==  Params
     * args2.maxDepth == max depth allowed
     * args2.recurse == true;
     * args2.maxChildren == max maxChildren allowed
     */
    static iterate2(args, depth, index) {
        if (!depth) { var depth = 0 };if (!index) { var index = 0 };         
        console.log("iterating>>",args,depth)
  //      console.log(args[0], args[1], args[2].params.response)
        if (args[2].params.response) { var buffer = args[2].params.response };
        if (!args[2].params.response) { var response = {} };
        
        for (var key in args[1]) { // Look for keys in req
            buffer[key]
            
            
          //  console.log(args[0][key]);
            if (operate.isString(args[1][key]) == true) { // if the value of the key in input is a string set it in Response
              console.log(args);
             
                var req = window[args.callback];
                req.arguments = [args[0], buffer, key];               
                //buffer[key] = args[0][key];
              //  console.log(depth)
                
               
                if (operate.isString(args[0][key]) == true) {
                    buffer = actionEngineV9Instance.runSyncStep(req); index = index + 1;
                    console.log("here",buffer);
                }
                
                
             //  console.log("buffer >>>", buffer, key)
                
            } else if (typeof args[1][key] === 'object') {

             //   console.log("Object", buffer, args[0][key], key)
                
                var bufferResponse;
                var bufferReq = args;
                bufferReq[0] = args[0][key];
                bufferReq[1] = args[1][key];
                bufferReq[2].params.response = key;
                console.log("bufferReq", bufferReq, args,key)
                
                bufferResponse = processV5.iterate(bufferReq, depth);
                 console.log("buffer response", bufferResponse)
              

            }

        }
        console.log(buffer)
        return buffer;
    }
    static iterate3(args) {
      //  console.log(">>>>>> itearate >>>", args)
        
        for (var key in args[1]) { //Iterating for key in request Model

            //console.log("iterating",key,typeof args[0][key]);
            var value = args[0][key];
            //  console.log("found",key,input[key])
            if (typeof args[1][key] === 'object') {

            
                var buffer = {};
                buffer[key] = args[1][key];
                var req = [];
                req.push(value);
                req.push(args[1][key]);
                req.push(JSON.parse(JSON.stringify(args[2])));
                req['callback'] = args.callback;

                //req = [value, buffer, args[2]];
                req[2].params.response = buffer;
               // console.log(">>> req >", req,buffer,args);
                
                
                
                
//                
                // var buffer = Entity.create(args[0], args[2].params.response, value.name);
                args[2].params.response[key] = processV5.iterate(req)
                
                // Entity.append(buffer, args[2].params.response);
              

              //  console.log("Object", args[2].params.response);


            } else if (operate.is(args[1][key]) === 'String' || operate.is(args[1][key]) === 'Boolean') {
                
             //   console.log(args[0][key], args[1][key])
                
                var req = window[args.callback];

                buffer = args[2].params.response;

                req.arguments = [args[0], buffer, key];

           //  console.log("stringssssssssssssssssss",key,args[0][key],buffer);
                //buffer[key] = args[0][key];

               if (operate.isString(args[0][key]) == true) {
                    buffer = actionEngineV9Instance.runSyncStep(req);
               //    console.log("here", buffer);
                }
                args[2].params.response[key] = buffer[key];
            // console.log('String',args[2].params.response, key);
               // Entity.set([args[0], args[2].params.response, key]);
                //Entity.set(input,this.entity,key,value);           
            }

        }
    //  console.log('Iterate Objoutput', buffer, args[2].params.response)
        return args[2].params.response;
    }
    static iterate(args) {
        console.log("iterating", args)
        for (var key in args[1]) {
            console.log("--------------key----------",key)
            var buffer;
            args[2].params.response[key] = args[1][key];
        //   console.log(key, args[1][key],typeof args[1][key] ,args[0][key], typeof args[0][key]);
            if (typeof args[1][key] == 'object' && operate.isArray(args[1][key])) {

                 console.log("Array Found", args[1][key], typeof args[1][key], args[0][key], typeof args[0][key])
                if (args[1][key][0] == "all") {
                    console.log("AllFound", args[1]);
                    
                }
                var req = [];
                
                req.push(args[0][key]);
                req.push(args[1][key]);
                req.push(JSON.parse(JSON.stringify(args[2])));
                req[2].params.response = buffer[key];
                //console.log("buffer here ------------", key, buffer, req[2].params.response)
                
                var temp = processV5.iterate(req);
                
                console.log("temp", temp)


            } else if (typeof args[1][key] == 'object' && operate.is(args[1][key]) === 'Object') {
                                
                    // console.log("object Found", args[1][key], typeof args[1][key], args[0][key], typeof args[0][key])
                    var req = [];
                    req.push(args[0][key]);
                    req.push(args[1][key]);
                    req.push(JSON.parse(JSON.stringify(args[2])));
                    req[2].params.response = buffer[key];
//                console.log("buffer here ------------", key, buffer,req[2].params.response)
                    var temp = processV5.iterate(req);
                //console.log("temp",temp)
               
                
            } else if (operate.is(args[1][key]) === 'String' || operate.is(args[1][key]) === 'Boolean') {
                if (typeof args[0][key] != 'undefined') {
                    
                    var req = window[args[2].params.callback];
                    buffer = args[2].params.response;
                    req.arguments = [args[0], buffer, key];
                    buffer = actionEngineV9Instance.runSyncStep(req);
                    //  console.log("[ buffer recived ]", key, buffer);
                    //if (operate.isString(args[0][key]) == true) {}
                    args[2].params.response[key] = buffer[key];
  //              console.log('String',args[2].params.response, key);
                } 

              //  console.log(args[2].params.response)               
            }  
        }

        console.log("[ iteratorReturn ]",args[2].params.response)
        return args[2].params.response;
    }


}

class process3 {
    static processReq(input, output, key, value) {
        console.log("process req", input, output, operate.is(input), typeof input)
        if (typeof input === 'object') {
            console.log("process req", input, output)
            var buffer = process.iterateObj(input, output, key);
        } else if (operate.is(input) === 'Array') {
            var buffer = process.iterateObj(input, output, key);
        } else if (operate.is(input) === 'String') {
            console.log('String >>>', key, value);
            //Entity.set(input,this.output,key,value);           
        }
        return buffer;
    }
    static iterateObj(input, output) {
        for (var key in input) {
            var value = input[key];
            //  console.log("found",key,input[key])
            if (operate.is(value) === 'Object') {
                // console.log("Object",output);
                var buffer = Entity.create(input, output, value.name);
                process.iterateObj(input[key], buffer, key, value)
                Entity.append(buffer, output);
            } else if (operate.is(value) === 'Array') {
                //  console.log("foundArray", key)
                var buffer = Entity.create(input, output, key);
                process.iterateArr(input[key], buffer, key, value)
                Entity.append(buffer, output);
                // console.log('Array',key, value, buffer);
            } else if (operate.is(value) === 'String' || operate.is(value) === 'Boolean') {
                //  console.log('String',key, value,output);
                Entity.set(input, output, key, value);
                //Entity.set(input,this.entity,key,value);           
            }

        }
        // console.log('Iterate Objoutput',output)
        return output;
    }
    static iterateArr(input, output, key, value, callback, callbackClass) {
        //  console.log("Iterating Array", input, output, key, value);

        for (var i = 0; i < input.length; i++) {
            //console.log("Object found in array", input[i]);

            if (operate.is(input[i]) === 'Object') { //console.log("Object in array",response)

                var response = Entity.create(input[i], output, input[i].name);
                process.iterateObj(input[i], response, input[i].name,)
                Entity.append(response, output);

            } else if (operate.is(input[i]) === 'Array') { // console.log("found Array", key, input[key])

            } else if (operate.is(input[i]) == 'String') { //  console.log("found property, Set Attributes in output", key, input[key])

                // Entity.set(input,output,key,input[key])
            } else {

                //  console.log("stray found")
            }
            //console.log(callbackClass,callback)
            //   console.log(key, input[key])
            //var response = operate.isNotEmpty(callback) ? conductor.conduct(input, output, key, input[key], callback, callbackClass) : null;
            if (operate.isNotEmpty(callback)) {

                //  var response = conductor.conduct(input, output, key, input[key], callback, callbackClass);

            }
        }
        // console.log("iterator Array response", response);
        return response;
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
                  //   console.log("and then", req.andThen.arguments)
                    //var previous = operate.isInside(req.andThen.arguments,"previous",'values')// Need to write a method that searches for a string inside any kind of object
                  //  console.log("here", req.andThen.arguments[0].previous)
                    for (var i = 0; i < req.andThen.arguments.length; i++) {

                        if (typeof req.andThen.arguments[i] === 'object') {
                        //   console.log( req.andThen.arguments[i]);
                        }

                    }
                    //  console.log("here yo", req.andThen.method, req.andThen.arguments)
                    var buffer = req.objectModel[req.method](req.arguments);
                  //  console.log(buffer)
                    req.andThen.arguments[0] = buffer;
                  //  console.log(req.andThen)
                    var response = this.runSyncStep(req.andThen);
                  
                }
            } else {
          //    console.log(">>>>>>>>>>>>>>", req, req.method)
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

var copy2 = {
    reqName: 'copy2',
    objectModel: processV5,
    method: 'iterate',
    arguments: [
        { 'previous': 'response' },
        entityModel4Html,
        {
            params: {
                maxDepth: 5,
                maxChildren: 120,
                response: {},// option to choose what kind of response do we want. isOneOf([",{},[],an HTML element,"andSelf means return the output"])
                callback: 'setEntityReq',
            }
        }
    ],
   
}


var setEntityReq = {
    objectModel: Entity,
    method: 'set',
    arguments: [{ 'previous': 'response' }, 'output', 'key']
}
var appendReq = {
    objectModel: Entity,
    method: 'append',
    arguments: [{ 'previous': 'response' }, 'output', 'key']
}

var actionEngineV9Instance = new ActionEngineV9();
//console.log(actionEngineV9Instance);

var response = actionEngineV9Instance.runSyncStep(getObjectVer2);
console.log(response);


