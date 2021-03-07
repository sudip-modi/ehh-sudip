
var buildActionRequest = {
    buildArguments: { //Inside Entity defineing the request to build. 
        entityObjectModel: 'document',
        request: {
            method: 'get',
            entity: 'Element',
            entityIdentifier: 'ById',
            entityId: "(" + '"' + reqEntity.entityId + '"' + ")",
        },
        and: 'innerHTML',
    },
    buildParams: { // defining the parameters of recusiosn and output
        recurse: null,// this is to check if arguments have to be recursed or not.
        outPutCondition: null,//an operator can be added,if True, if False
        output: {
            outputType: 'callback',// [isOneof ( response, callback//operator) ]
            outputArg: {
                callback: {
                    callbackClass: 'ActionEngine',
                    callbackMethod: 'processReq',
                    callbackArg: 'this.response'
                }
                
            }
        }


    }
}

class ActionEngine {
    constructor() {
    }
//need to add an optional parameter of callback functions
    buildReq(buildReq) {
      //  console.log(buildReq)
        if (operate.isObject(buildReq) != true) {
            return console.error("Need a JSON, Please refer to the documentation", "Does this >", buildReq,"look like JSON to you. It's damn",operate.is(buildReq));
        } else {
            console.log("building", buildReq);

            var response = [];
            for (var key in buildReq.buildArguments) { //iterating Each key of req
                if (typeof buildReq.buildArguments[key] === "object") {
                    response.push(Object.values(buildReq.buildArguments[key]).join(" ").replace(/\s/g, ""))
            } else {
                    response.push(buildReq.buildArguments[key]);
            }             
            }
               
            /**
            * cleanUpStage
            */
            //  console.log(response);
            var builtReq = "return "+response.join(".");
            console.log(builtReq);
            if (buildReq.buildParams.output.outputType === 'callback') {
                //console.log(buildReq.buildParams.output.outputArg);
                return this.conductCallback(buildReq.buildParams.output.outputArg);
               // buildReq.buildParams.output.outputArg.callback.call(buildReq.buildParams.output.outputArg)    
            }
            return builtReq;
        }
        
    }
    processRequest(reqObject) {
        var exeCommand = this.buildReq(reqObject);
        console.log("executing command",exeCommand);
      //  var codeToExecute = "return document.getElementById('action').innerHTML";
        var response = new Function(exeCommand)();
      //  console.log(response);
        return response;
    }
    conductCallback(callback) {
        
        
    }
    processRequestFlow(requestFlow) {
        
    }
}

class iterators {
     iterateReq(input, output, key, value,options) {
        //   console.log(input, output)
        if (operate.is(input) === 'Object') {
            var buffer = this.iterateObj(input, output, key);
        } else if (operate.is(input) === 'Array') {
            var buffer = this.iterateObj(input, output, key);
        } else if (operate.is(input) === 'String') {
            console.log('String >>>', key, value);
            //Entity.set(input,this.output,key,value);           
        }
        return buffer;
    }
     iterateObj(input, output) {
        for (var key in input) {
            var value = input[key];
            //console.log("found",key,input[key])
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

    
}

class process1 {
   
    static iterateObj(input, output) {
        for (var key in input) {
            var value = input[key];
            //console.log("found",key,input[key])
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


var actionSpaceEngineInstance = new ActionEngine();