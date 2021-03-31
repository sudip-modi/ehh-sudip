
class Validators {
    constructor() { }

    static isSingleRequest(obj) {
        return obj && Operate.isObject(obj) && obj.objectModel && obj.method && !obj.andThen && !obj.flowRequest;
    }

    static isFlowRequest(obj) {
        return obj && Operate.isObject(obj) && obj.flowRequest && Operate.isArray(obj.flowRequest);
    }


    static isNestedRequest(obj) {
        return obj && Operate.isObject(obj) && obj.andThen && Operate.isObject(obj.andThen);
    }
}
