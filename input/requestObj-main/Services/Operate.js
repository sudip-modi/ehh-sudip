class Operate {
    static isArray(value) {
        return (
            value &&
            Array.isArray(value) &&
            typeof value === "object" &&
            value.constructor === Array
        );
    }
   // checks for null and undefined
    static isIterable(obj) {
     
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