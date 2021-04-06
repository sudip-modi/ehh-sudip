class Validators {
    constructor() {}

    static isSingleRequest(obj) {
        return obj && Operate.isObject(obj) && obj.objectModel && obj.method && !obj.andThen && !obj.flowRequest;
    }

    static isFlowRequest(obj) {
        return obj && Operate.isObject(obj) && obj.flowRequest && Operate.isArray(obj.flowRequest);
    }


    static isNestedRequest(obj) {
        return obj && Operate.isObject(obj) && obj.andThen && Operate.isArray(obj.andThen);
    }

    static validate(obj, model) {
        var process = model.process;
        var method = process.objectModel[process.method];
        process.arguments[0] = obj;
        return method.apply(process.objectModel, process.arguments)
    }
}