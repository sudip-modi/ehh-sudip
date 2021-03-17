

var HTMLElementEntityModel = {
    "name": {
        "value": {
            'operator': [
                {
                    'method': 'isInsideArray',
                    'arguments': HTMLElementList
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
var entityModel = {
    'name': {
        value: 'input.nameTagName',
        'process': [
            {
                'objectModel': operate,
                'method': 'isInsideArray',
                'arguments': HTMLElementList
            }
        ]
    },
    // description : "",
    'id': {
        value: 'input.id',
        'operator': [
            {
                'method': 'isInsideArray',
                'arguments': HTMLElementList
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
        operate: [isUrl],
    },
    attributes: {
        value: null,
        operate: [find(input.attributes, ['class', 'style', 'src'])],
    },
    content: '',
    'contentMimeType': '',//[HTML,JSON,TEXT,JAVASCRIPT],
    resourceBinding: ''
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
    static set(input, output, key, value, callback, callbackClass) {
        //  console.log("setting",key, value,"in",output)
        if (operate.is(output).includes("HTML")) { //Only HTML creation

            if (operate.isIn(key, htmlAttributesList)) {
                //console.log("setting",key, value,"in",output)
                output.setAttribute(key, value)
                //console.log(output);
            } else {
                //var buffer = output;
                output[key] = input[key];
                //buffer=output;
            }

        }
        return output;
    }
    static setEntity([input, output, key]) {

        //console.log(input, output, output?.constructor.name);
        var outputType = operate.is(output);
        output[key] = input[key];
        //  console.log("lkj",output)

        //return output;
    }
    static copy2(req) {
        var args = {
            input: req[0],
            output: req[1],
            callback: 'setEntityReq',
            maxDepth: 5,
        }

        if (!operate.isObject(req[1])) {

            response = req[0][req[1]];
            console.log(response);
            // processV5.iterateObj(args);
        } else if (operate.isObject(req[1])) {

            processV5.iterateObj(args);
            console.log(args);
        }
    }
}


class processV5 {

    static iterateObj(args) {
        var response;
        for (var key in args.output) {

            if (!operate.isUndefined(args.input[key])) { // if there is no value in input


                if (typeof args.output[key] != 'object') { //If the 
                    //                  console.log(key, args.input[key], ">>>>")


                    // args.output[key] = args.input[key];
                    response = args.input[key];
                    //console.log(">>>>>>>>>>>>>>>>",response)


                } else if (operate.isObject(args.output[key])) {

                    console.log(key, args.input[key], operate.is(args.input[key]));

                }


            }


            // console.log(key, args.data[key], operate.is(args.data[key]),typeof args.data[key]);
            // if (typeof args.data[key] != 'object') {

            //     console.log(key, args.data[key], operate.is(args.data[key]));
            //     args.input[key] = args.data[key];
            // }
            // if (operate.isObject(args.data[key])) {

            //   console.log(key, args.data[key])
            // }

            if (args.callback) {
                if (window[args.callback]) {
                    args.callback = window[args.callback];
                    args.callback.arguments[0] = args.input;
                    args.callback.arguments[1] = args.output;
                    args.callback.arguments[2] = key;

                }
                //console.log(args.callback.arguments);
                var response = args.callback.objectModel[args.callback.method](args.callback.arguments)
                //console.log("here",response,args.output);
            }

        }

    }
}

var setEntityReq = {
    objectModel: ActionEntityV9,
    method: 'setEntity',
    arguments: ['input', 'output', 'key']
}


var copy2Req = {
    objectModel: ActionEntityV9,
    method: 'copy2',
    arguments: [{ "$ref": [['flowRequest'], [0], ['response'], [0]] }, entity2,],
    response: [],
}

