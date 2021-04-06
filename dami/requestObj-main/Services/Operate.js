class Operate {
    static isArray(value) {
        return (
            value &&
            Array.isArray(value) &&
            typeof value === "object" &&
            value.constructor === Array
        );
    }

    static isIterable(obj) {
        // checks for null and undefined
        if (obj == null) {
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }

    static isObject(value) { return value && typeof value === 'object' && value.constructor === Object; }

    static isIn(argA, argB) {
        return argB.indexOf(argA) > -1 ? true : false;
    }

    static isString(str) {
        return typeof str === 'string';
    }

    static isFunction(obj) {
        return typeof obj === 'function';
    }

    static isPromise(obj) {
        return typeof obj === "object" && "then" in obj;
    }
    static isFlowRequest(obj) {
        return "flowRequest" in obj;
    }
    //To be converted to an Every1 method
    static isSingleRequest(obj) {
        return obj && Operate.isObject(obj) && obj.objectModel && obj.method && !obj.andThen && !obj.flowRequest;
    }

    static isFlowRequest(obj) {
        return obj && Operate.isObject(obj) && obj.flowRequest && Operate.isArray(obj.flowRequest);
    }


    static isNestedRequest(obj) {
        return obj && Operate.isObject(obj) && obj.andThen && Operate.isObject(obj.andThen);
    }
    static handlePromise(process) {
        if (this.isPromise(process)) {
            process
                .then(function (res) {
                    return res;
                })
                .catch(function (err) {
                    return err;
                });
        } else {
            return new Promise(function (resolve, _) {
                resolve(process);
            });
        }
    }
}