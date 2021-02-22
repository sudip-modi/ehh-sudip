/**
 * This class is to be replace/merge actionEntity in the future.
 * This class acts like a entity Process.
 * It has basic implementation of operate class, interacting with raw Data Objects.
 * 
 */



class ActionSpaceSchema { 
    constructor(input, output) { 
        this._inputEntity 
        this._outputEntity

    }

    createEntity() { 

    }


}

class operate1 {
    static every1(methods,arg1) {
        var self = this;
        return methods.every(function (method) {
            console.log(method.method, arg1, method.arguments)
            return operate[method.method](arg1, method.arguments);
        });
    }

    static isString(value) {
        if (typeof value === 'string') {
            return true;
        }
        return false;
    }
    static isNotEmpty(value) {
        if (value !== '' && value !== null && typeof value !== 'undefined') {
        
            return true;
        }
        console.log("is Empty")
        return false;
    }
    static isInt = function (value) {
        return Number.isInteger(value);
    };

    // any other rule you want to add
}

// Model.js
class Model {
    constructor(modelSchema) {
        this._entity = new Object(modelSchema)
        console.log(this._entity)
        // this.name = {
        //     value: null,
        //     Validator: ['isString', 'isNotEmpty']
        // };
        // this.age = {
        //     value: null,
        //     Validator: ['isInt']
        // };
    }
    set(value, key) {
      
        console.log(key,value)
      
        if (operate1.every1(key.value.operator, value, key.value.operator.arguments)) {
            key.value = value;
            return true;
        }
        return false;
    };
    setName (name) {

       console.log(name)
        
        this.set(name, this._entity.name);
        console.log(this._entity.name)
    };
    setId = function (id) {
      //  console.log('setting', id)
        this.set(id, this._entity.id);
        //console.log(this._entity.id);
    };
}


var entity = {

    "name": {
        "value": null,
        "validator": ['isString', 'isNotEmpty']
    },
    "age": {
        value: null,
        "validator": ['isInt']
    }


}
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

var newEntity = new Model(HTMLElementEntityModel);

newEntity.setName("div", 'name');
newEntity.setId("01", 'name');
console.log("New Entity", newEntity);
newEntity.setName("23we", 'name');

