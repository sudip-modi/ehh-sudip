
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
            callBackArguments: { //Inside Entity defineing the request to build. 
                entityObjectModel: 'ActionEngine',
                request: {
                    method: 'processStringRequest',
                    args: "(" + '"' + this.response + '"' + ")",
                },

            }
        }


    }
}
/***    
 * This ActionEngine is a workflow Conductor. It uses methods from differant class of ehh to execute any kind of task/command. 
 * Here we call them story. every story has a step, group of steps are actionflows and they all begin at a simple req.
 * Client/System can use this to create 
 *  1. Sequntial ActionStory Pipeline defined in a structured JSON.
 *  2. Parralel ActionStory Pipeline 
 * Both the pipelines can be synchronous || asynchronous
 * It has methods as below.
 *  constructor() : primarly used to create an Instance of the actionEngine. 
 *  When an Instance is always created in the Global Context.ie. this for eg :  let newActionEngineInstance = new ActionEngine(this);
 * 2. buildReq. : It takes in a predefined SchemaModel call BuildActionReq as input and creates a string which can be executed using processStringReq method of the ActionEngine Class.
 * requires a JSON Input, validation for model has to be added. A temporary Implementation of Callback has been done.
 * 3. processStringReq : It does nothing beyond executing a string command in a private scope, with all the arguments and optionally returns the output.
 *  you can call him. cousin of the next one. Is a temporary plugin , has to be replaced with a stronger concept.
 * 4. conductCallback : Takes in a defined Req and executes the function
 * 5. processActionFlow: Takes in a array of req and conduts them sequentially
 * 6. buildPromise: takes in a req creates it into a State based Asyn function and executes it's. Core behind every Validation. 
 it usage setTimeOut(callbackk) method to invoke a method right after the current que is done. UseCases Signup Login Fetch HTTP DATA. Building conditional logics which are dependent on external resource
 7. conductOnEvery1: a synchronous execution of a method on an array of arguments.returns true if output of all is true.
 cousin of the next() one. Has similar sibling  conductOneSome : which should return true, if even one is true.
  8.  buildPromissAll: Cousin of the previousOne(). does the same job, only you can add a callback and is Async in operation. Does a handful Job.
 */
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
          //  console.log(buildReq.buildParams.output.outputType);
            if (buildReq.buildParams.output.outputType === 'callback') {
              //  this[buildReq.buildParams.output.callBackArguments.request.method](buildReq);
                //console.log(buildReq.buildParams.output.callBackArguments, response);
                return;
               // buildReq.buildParams.output.outputArg.callback.call(buildReq.buildParams.output.outputArg)    
            }
            console.log('builtReq', builtReq);
            return builtReq;
        }
        
    }
    processStringRequest(reqObject) {
        var exeCommand = this.buildReq(reqObject);
        console.log("executing command",exeCommand);
      //  var codeToExecute = "return document.getElementById('action').innerHTML";
        var response = new Function(exeCommand)();
      //  console.log(response);
        return response;
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