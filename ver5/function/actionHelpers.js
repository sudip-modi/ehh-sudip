// Query for all available fonts and log metadata.
// const fonts = navigator.fonts.query();
// try {
//   for await (const metadata of fonts) {
//     console.log(`${metadata.family} (${metadata.fullName})`);
//   }
// } catch (err) {
//   console.error(err);
// }


class process {
    static processReq(input, output, key, value) {
     //   console.log(input, output)
        if (operate.is(input) === 'Object') {
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
            var value = input[key];
            //console.log("found",key,input[key])
            if (operate.is(value) === 'Object') {
                // console.log("Object",output);
                var buffer = Entity.create(input, output, key);
                process.iterateObj(input[key], buffer, key, value)
                Entity.append(buffer, output);
            } else if (operate.is(value) === 'Array') {
                //  console.log("foundArray", key)
                var buffer = Entity.create(input, output, key);
                process.iterateArr(input[key], buffer, key, value)
                Entity.append(buffer, output);
                // console.log('Array',key, value, buffer);
            } else if (operate.is(value) === 'String' || operate.is(value) === 'Boolean') {
                //  console.log('String',key, value,output);
                Entity.set(input, output, key, value);
                //Entity.set(input,this.entity,key,value);           
            }

        }
        // console.log('Iterate Objoutput',output)
        return output;
    }
    static iterateArr(input, output, key, value, callback, callbackClass) {
        //  console.log("Iterating Array", input, output, key, value);

        for (var i = 0; i < input.length; i++) {
            //console.log("Object found in array", input[i]);

            if (operate.is(input[i]) === 'Object') { //console.log("Object in array",response)

                var response = Entity.create(input[i], output, input[i].name);
                process.iterateObj(input[i], response, input[i].name,)
                Entity.append(response, output);

            } else if (operate.is(input[i]) === 'Array') { // console.log("found Array", key, input[key])

            } else if (operate.is(input[i]) == 'String') { //  console.log("found property, Set Attributes in output", key, input[key])

                // Entity.set(input,output,key,input[key])
            } else {

                //  console.log("stray found")
            }
            //console.log(callbackClass,callback)
            //   console.log(key, input[key])
            //var response = operate.isNotEmpty(callback) ? conductor.conduct(input, output, key, input[key], callback, callbackClass) : null;
            if (operate.isNotEmpty(callback)) {

                //  var response = conductor.conduct(input, output, key, input[key], callback, callbackClass);

            }
        }
        // console.log("iterator Array response", response);
        return response;
    }
    static act(callbackClass,method, a, b, c, d,) {
      //  console.log(callbackClass, method, a, b, c, d)
        //eval(callbackClass.callback(a, b))
        var response = callbackClass[method](a, b, c, d);
        console.log("act response",response)
        return response;
    }
    

}

class conductor {
    //this function calls a callback function with a and b parameter. Conducted Routes have to be registered before else will throw error.
    //  on param = [ anyEvent ]
  
    //    //arr.every(callback(element[, index[, array]])[, thisArg])
    static onEvery1(a, b, callbacks) { return callbacks.every(function (callback) { return operate[callback](a, b); }); }


    static conductForEachFlow(a, b, options) {


    }
}


class operate {

    // operate to check if the input is not null or undefined to be added
    static isEmpty(argA) { return Object.keys(argA).length === 0 ? true : false }
    static isNotEmpty(argA) { return argA !== '' && argA !== null && typeof argA !== 'undefined' ? true : false }
    //returs the data Type of the input.
    static is(argA) {
      //  console.log(argA);
        return Object.getPrototypeOf(argA).constructor.name;
    }
    static isInt(argA) { return Number.isInteger(argA); }
    static isNumber(argA) { return Number.parseFloat(argA).toString() !== 'NaN' }
    static isString(argA) { return typeof argA === 'string' ? true : false }
    /**
     * returns if the input is a key/value in the object options.argB
     * @param {*} argA
     * @param {*} argB  is required to be not empty
     * 
     */
    static isInsideArray(argA, argB) { return argB.indexOf(argA) > -1 ? true : false; }
    //curently works only for string numbers
    static isEqualStrict(argA, argB) { return argA === argB ? true : false; }
    //for array's one sided value existence check, return true if each element of a is present in b
    static isGreaterThan(argA, argB) { return argA > argB ? true : false }
    static isGreaterthanOrEqual(argA, argB) { return argA => argB ? true : false }
    static isSmallerthan(argA, argB) { return argA < argB ? true : false }
    static isSmallerthanOrEqual(argA, argB) { return argA <= argB ? true : false }
    static instanceof(argA, argB) { return console.log("work in process"); }
    //validate 2 Object, with key's and values
    static isSameObject(argA, argB) {

        return console.log("work in process");
    }
    //check if argB has all the keys from argA // only for array.
    static hasAllof(argA, argB) { return argA.every(function (value) { console.log(value, argB); return operate.isIn(value, argB) }); }
    static arrayIncludes(argA, argB) { return argA.includes(function (value) { return operate.isIn(value, argB); }); }
    //Check for bothArgument to be Number and Integer to be added.
    static isInRangeNumbers(argA, argB) { return argA.every(function (value) { return operate.isGreaterthanOrEqual(value, argB.min) && operate.isSmallerthanOrEqual(value, argB.max); }); }
    //return true if all items are the same in two unordered Array need to add a return of mismatch values as option.
    static isSameArray(argA, argB) {
        argA.sort(); argB.sort(); if (argA.length !== argB.length) return false;
        for (let i = 0; i < argA.length; i++) { if (argA[i] !== argB[i]) return false; } return true;
    }
    // Returns if a value is an array
    static isArray(value) { return value && Array.isArray(value) && typeof value === 'object' && value.constructor === Array; }
    // Returns if a value is a static
    static isstatic(value) { return typeof value === 'static'; }
    // Returns if a value is an object
    static isObject(value) { return value && typeof value === 'object' && value.constructor === Object; }
    static isHTML(argA) { return operate.is(argA).includes("HTML") }
    // Returns if a value is null
    static isNull(value) { return value === null; }
    // Returns if a value is undefined 
    static isUndefined(value) { return typeof value === 'undefined'; }
    // Returns if a value is a boolean 
    static isBoolean(value) { return typeof value === 'boolean'; }
    //Returns if a value is a regexp
    static isRegExp(value) { return value && typeof value === 'object' && value.constructor === RegExp; }
    // Returns if value is an error object
    static isError(value) { return value instanceof Error && typeof value.message !== 'undefined'; }
    // Returns if value is a date object
    static isDate(value) { return value instanceof Date; }
    //Returns if the value is a Prototyp
    static isPrototype(value) { console.log(Object.getPrototypeOf(value) === prototype1); }
    // Returns if a Symbol
    static isSymbol(value) { return typeof value === 'symbol'; }
    //This function validates a valid Url, Returns True or false
    static isValidUrl(string) { try { new URL(string); } catch (_) { return false; } return true; }
    static isValidJSONString(str) { try { JSON.parse(str); } catch (e) { return false; } return true; }
    /**
     *  * Returns true if the given test value is an array containing at least one object; false otherwise.
     * */
    static isObjectArray_(argA) {
        for (var i = 0; i < argA.length; i++) {
            if (operate.isObject(argA[i])) {
                return true;
            }
        }
        return false;
    }
    static isChild(argA, argB) { }
    static isParent(argA, argB) { }
    static isEven(argA) { return numbers.every(function (e) { return e % 2 == 0; }); }
    static isOdd(argA) { return numbers.every(function (e) { return Math.abs(e % 2) == 1; }); }
    /**
     * 
     * @param {*} argA This is the input argument, it has to be a string operate.enforce(operate.isString(value), true)
     * @param {*} Object The Object to search this string in .
     * @param {*} options Currently there are 3 optional Parameters.
     *  options.Recurse : true [true,false] Work In progress
     * optoins.filter()
     * options.Lookin : keys [keys, values, all]
     * 
     */
   
}

var reqest = {
    method: 'get',// [ get,set,create,put,delete]
    entity: {
        entityIdentifier: '	ObjectID',
        entityModel: 'document',
        entityLocation: 'currentTab',
        entityType: 'HTML',
        entityName: "NameofEntity",
        entityId: 'entityId',
        entityLocation: 'Dom',
        entityServiceClass: "Particular Class which has it's Crud operators, for eg. document is one service class, similarly SpreadsheetApp is a service class in AppScript and ActionEntity is a service classfor any entity in actionSpace "
    },
    //a generic Optional Parameter for every method in across classes		
    options: {
        recurse: true, // operate.isoneof(value,[true,false])
        'and': {

        }


    }
}

class dataHelpers {

    static find(entity, keyTofind) {
        //console.log("finding", keyTofind, "in", entity);
        var result = Object.keys(entity).filter(function (key, index, self) {
            return !key.indexOf(keyTofind);
        });
        return result;
    }


}


function isIn(argA, entity, options) {
    var valuesArray = Object.values(entity)
    var result = Object.values(entity).filter(function (key, index, self) {
      //  console.log(argA,!key.prefix.indexOf(argA), key.prefix)
        if (!key.keyIdentifier.indexOf(argA) === true) {
           // console.log("tentative match found",key)
            if (argA.length === key.keyIdentifier.length) { 
              //  console.log("matchFound", key.prefix)    //To get strict Match To be enabled using options.
                var response = true;
              //  return true;
            }  
        }
        return !key.keyIdentifier.indexOf(argA);
    });
   // console.log("result",result);
    return result;

}


/**
 * AutComplete
 */

class AutoComplete {
    static checkSuggestion(keyword, editor) {
      //  console.log("keyword In testing",keyword,typeof keyword)
        keyword = this.removeSpecialCharacters(keyword.trim());
        if (this._isContains(snippets, keyword)) {

             console.log("editor",editor)
            for (let i = 0; i < snippets.length; ++i) {

                const obj = snippets[i];
                // console.log(obj.prefix+" "+keyword)

                if (obj.prefix === keyword.trim()) {

                   // console.log(editor.innerText.substring(0, editor.innerText.length - keyword.trim().length))

                    console.log("Found",obj.prefix);
                   // Caret.insertInTextarea(obj.body)
                    return true;
                    // this.setCaretToEnd(editor)
                }
            }
        } else {
         //   console.log("Nope");
            return false;
        }
    }

    static removeSpecialCharacters(keyword) {
        // console.log(keyword)
        const desired = keyword.replace(/[^\w\s]/gi, '');
        // console.log(desired.trim())
        return desired
    }

    static _isContains(json, value) {
        // console.log(value.trim())
        let contains = false;
        Object.keys(json).some(key => {
            contains = typeof json[key] === 'object' ? this._isContains(json[key], value.trim()) : json[key] === value.trim();
            return contains;
        });
        return contains;
    }

    static setCaretToEnd(target) {
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(target);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
        target.focus();
        range.detach(); // optimization

        // set scroll to the end if multiline
        target.scrollTop = target.scrollHeight;
    }
}


function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}


