

// Model.js
class Model {
    constructor(modelSchema) {
        this._entity = [modelSchema]

    }
    set(value, key) {

        //     console.log(key, value, key.value.operator.arguments)

        if (conductor.every1(key.value.operator, value, key.value.operator.arguments)) {
            key.value = value;
            return true;
        }
        return false;
    };
    setName(name) {

        console.log(name)

        this.set(name, this._entity[0].name);
        console.log(this._entity[0].name)
    };
    setId(id) {
        //  console.log('setting', id)
        this.set(id, this._entity[0].id);
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

// var newEntity = new Model(HTMLElementEntityModel);

// newEntity.setName("div", 'id');
// newEntity.setId("01", 'name');
// //newEntity.setName("temp", 'name');

// console.log("New Entity", newEntity);

