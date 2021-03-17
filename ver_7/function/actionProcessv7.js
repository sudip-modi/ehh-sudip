var processReqModelV2 = {
    processName: 'ObjMutate',//Common title
    processClass: 'processV3',
    processMethod: 'create',
    methodArgument: ['input',],
    processParams: {
        recurse: true,
        output: {
            outputType: 'set',// [isOneof ( response, callback//operator) ]
            outputDummy: 'reqOutputModel'
        }

    },
    andThen: ''
}
class processV3 {
    static processReq(input, output,) {
        //   console.log(input, output)
        if (typeof input === 'object') {
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
