class Operate {
    static isArray(value) {
        return (
            value&&
            Array.isArray(value)&&
            typeof value==="object"&&
            value.constructor===Array
        );
    }

    static isIterable(obj) {
        // checks for null and undefined
        if(obj==null) {
            return false;
        }
        return typeof obj[Symbol.iterator]==='function';
    }

    static isObject(value) {return value&&typeof value==='object'&&value.constructor===Object;}

    static isIn(argA,argB) {
        return argB.indexOf(argA)>-1? true:false;
    }

    static isString(str) {
        return typeof str==='string';
    }

    static isFunction(obj) {
        return typeof obj==='function';
    }

    static isPromise(obj) {
        return typeof obj==="object"&&"then" in obj;
    }

    static isNamedNodeMap(obj) {
        return (obj&&typeof obj==='object'&&obj.constructor===NamedNodeMap);
    }

    static isNode(obj,type) {
        return (
            typeof Node==="object"? obj instanceof Node:
                obj&&typeof obj==="object"&&typeof obj.nodeName==="string"&&typeof obj.nodeType==="number"&&obj.nodeType===type
        );
    }

    static isHTMLCollection(obj) {
        return obj instanceof HTMLCollection||(value&&typeof value==='object'&&value.constructor==='HTMLCollection');
    }
    static isFlowRequest(obj) {
        return "flowRequest" in obj;
    }
    static handlePromise(process) {
        if(this.isPromise(process)) {
            process
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return err;
                });
        } else {
            return new Promise(function(resolve,_) {
                resolve(process);
            });
        }
    }
}