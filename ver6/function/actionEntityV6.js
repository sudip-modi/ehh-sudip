
//this Object is istended to work as a req for any kind of process related with any kind of entity.
var reqOutputModel = {
    entityName: 'entityName',
    entityId: 'entityId',
    depth: '1',
    parent: "parent",
    entityAttributes: {
        key: ['selected Array of Keys ', "or an condition"],
        value: ['all of selected type of Values', "or an condiotn"]
    }
}
var processReqModelV2 = {
    processName: 'ObjeMutate',
    processClass: 'processV3',
    processMethod: 'create',
    methodArgument: ['input',],
    processParams: {
        recurse: true,
        output: {
            outputType: 'response',// [isOneof ( response, callback//operator) ]
            outputDummy: ''
        }

    },
    andThen: ''
}
class processV3 {
    static processReq(input, output, key, value) {
        //   console.log(input, output)
        if (typeof input === 'object') {
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


        }
        // console.log('Iterate Objoutput',output)
        return output;
    }
    static iterateArr(input, output, key, value, callback, callbackClass) {
        //  console.log("Iterating Array", input, output, key, value);

        for (var i = 0; i < input.length; i++) {

        }
        // console.log("iterator Array response", response);
        return response;
    }
}
