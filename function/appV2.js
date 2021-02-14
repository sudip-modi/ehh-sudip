//this class act's like a Wrapper class along with few self Initation Method


class dataHelpers {

    static find(entity, keyTofind) {
          //console.log("finding", keyTofind, "in", entity);
        var result = Object.keys(entity).filter(function (key, index, self) {
            return !key.indexOf(keyTofind);
        });
        return result;
    }


}

class process {
    static processReq(input, output, key, value) {
        console.log(input, output)
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

}

class operate {

    // operate to check if the input is not null or undefined to be added
    static isEmpty(argA) { return Object.keys(argA).length === 0 ? true : false }
    static isNotEmpty(argA) { return argA !== '' && argA !== null && typeof argA !== 'undefined' ? true : false }
    //returs the data Type of the input.
    static is(argA) { return Object.getPrototypeOf(argA).constructor.name; }
    static isInt(argA) { return Number.isInteger(argA); }
    static isNumber(argA) { return Number.parseFloat(argA).toString() !== 'NaN' }
    static isString(argA) { return typeof argA === 'string' ? true : false }
    /**
     * returns if the input is a key/value in the object options.argB
     * @param {*} argA
     * @param {*} argB  is required to be not empty
     * 
     */
    static isIn(argA, argB) { return argB.indexOf(argA) > -1 ? true : false; }
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
}

class operator {
    //    //arr.every(callback(element[, index[, array]])[, thisArg])
    static onEvery1(a, b, callbacks) { return callbacks.every(function (callback) { return operate[callback](a, b); }); }
    //similar function for some to be coded.

}

class conductor {
    //this function calls a callback function with a and b parameter. Conducted Routes have to be registered before else will throw error.
    //  on param = [ anyEvent ]
    static conduct(a, b, c, d, callback, callbackClass) {
        // console.log(a, b, callback)
        //eval(callbackClass.callback(a, b))
        var response = callbackClass[callback](a, b, c, d);
        //  console.log("conduct response",response)
        return response;
    }

    static conductForEachFlow(a, b, options) {


    }
}

function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}

class ActionEventController {
    constructor(context) {
        this._events = {};
        this.context = context
        //this.createListeners(context)
    }
    addListener(event, fn) {
        /** 
         * The addListener event checks if the event is already registered.
         * If yes, returns the array, otherwise empty array.
         * A note: Multiple callbacks can be registered against that same event.
         */
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        return this;
    }

    createListeners(entity) {
        console.log("creatingListernfor", entity)
        let events = dataHelpers.find(entity, 'on')
        //  console.log(events)
        events.forEach((evt) => {
          //  this.addListener(evt, this.conductEvent);
            // this.addListener(evt,this.conductEvent)
            window[evt] = this.conductEvent // to be changed to add Listerner
        })
    }

    on(event, fn) {
        return this.addListener(event, fn);
    }

    static emit(eventName, ...args) {
        let fns = this.listeners[eventName]; //Get the functions for said eventName parameter
        if (!fns) return false; //If no listeners, return false
        fns.forEach((f) => {
            f(...args); // For all function listeners, invoke the function with the arguments
        });
        return true; //Return true when done
    }

    conductEvent(e) {
        var currentTarget = e.target;

      //  var currentCaret = new Caret(e.target);
       // var newCaretPosition = currentCaret.setPos(currentCaretPosition - 2);
       
       
        if (e.type === 'keydown') { 
            console.log(e.key);
            if (e.key === "Enter") {
                console.log("EnterKey Detected")
                Caret.moveCaret(window, 5)
               // insertInTextarea("lol", currentTarget);
            }
        }
        
    }
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
}

class ActionSpace {
    constructor(input) {
        var actionSpaceInstance = document.getElementsByTagName("actionSpace")[0];
        this.entity = new Entity(input, actionSpaceInstance);
    }

}

class ActionSpaceDataController extends ActionSpace {
    constructor(context, view, model) {
        super(context);
        this.view = view;
        this.model = model;
        this.on('updateEditor', this.view.updateDomContent)
        view.on('saveButtonClicked', () => this.save())
    }

    save() {
        this._model.setData(this._view._elements.text.innerText);
    }
    static processRanges() {
        //this function might be needed to work on ranges
    }
}

class ActionSpaceView {
    constructor(model, elements) {
        this.model = model
        this.elements = elements
    }

    updateDomContent = (data) => {
        this.model.updateJson(data)
        document.getElementById('actionOutput-block').innerHTML = data
    }

    getDomContent() {

    }
    
    updateDom(cmd) {
       

    }

    clearDom() {
    }
    static insertAtCaretIndex() {
        
     }

}
/**
 * @file get/set caret position and insert text
 * @author islishude
 * @license MIT
 */
class Caret {
    /**
     * get/set caret position
     * @param {HTMLColletion} target 
     */
    constructor(target) {
        this.isContentEditable = target && target.contentEditable
        this.target = target
        //console.log("CaretCreated ",target.tagName);
    }

    static moveCaret(win, charCount) {
    var sel, range;
    if (win.getSelection) {
        // IE9+ and other browsers
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var textNode = sel.focusNode;
            var newOffset = sel.focusOffset + charCount;
            sel.collapse(textNode, Math.min(textNode.length, newOffset));
        }
    } else if ((sel = win.document.selection)) {
        // IE <= 8
        if (sel.type != "Control") {
            range = sel.createRange();
            range.move("character", charCount);
            range.select();
        }
    }
    }
    
    static getCaretPos() { 
        
        var currentSelection = window.getSelection();
        var position =  currentSelection.anchorOffset;
       // console.log(currentSelection, position);
        return position;

    }
    static setCaretPos(currentSelection, pos) { 
        var currentSelection = window.getSelection();
        var position = currentSelection.anchorOffset;
   //    console.log(currentSelection)
        currentSelection.selectionStart = currentSelection.selectionEnd = 10;
        return pos;
    }

    static insertInTextarea(newText, currentTarget) {
            var el = currentTarget;
            const start = el.selectionStart;
            const end = el.selectionEnd;
            const text = el.value;
            const before = text.substring(0, start)
            const after = text.substring(end, text.length)
            el.value = (before + newText + after)
            el.selectionStart = el.selectionEnd = start + newText.length
        el.focus();
}



    static getCaretIndex(element) {

        let position = 0;

        const isSupported = typeof window.getSelection !== "undefined";

        if (isSupported) {
            const selection = window.getSelection();
            console.log(selection);
            if (selection.rangeCount !== 0) {
                const range = window.getSelection().getRangeAt(0);
                const preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                position = preCaretRange.toString().length;
            }
        }
       // console.log("Caret at", position, element)
        return position;
    }
    /**
     * get caret position
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range}
     * @returns {number}
     */
    static getPos(e) {
        // for contentedit field
      //  if (this.isContentEditable) {
            console.log(this.target);
            this.target.focus()
            let _range = document.getSelection().getRangeAt(0)
            let range = _range.cloneRange()
            range.selectNodeContents(this.target)
            range.setEnd(_range.endContainer, _range.endOffset)
            return range.toString().length;
    //    }
        // for texterea/input element
        
       // return this.target.selectionStart
    }

    /**
     * set caret position
     * @param {number} pos - caret position
     */
    setPos(pos) {
        // for contentedit field
        if (this.isContentEditable) {
            this.target.focus()
            document.getSelection().collapse(this.target, pos)
            return
        }
        this.target.setSelectionRange(pos, pos)
    }
}

/**
 * insert text or orther to editor
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
 * @module Editor
 */
 class Editor {
    constructor() {
    }
    /**
     * @param {string} content - your insert text
     * @returns {boolean} 
     */
    insertText(content) {
        document.execCommand('insertText', false, content)
    }
}
window.onload = loadActionEventController;

function loadActionEventController() {
    var actionEventInstance = new ActionEventController();
    //actionEventInstance.createListeners(this);

    actionEventInstance.createListeners(window);
    console.log("loaded ActionEvents", actionEventInstance);

    var actionSpaceInstance = new ActionSpace(actionSpaceV2);
    console.log("loaded ActinSpace", actionSpaceInstance);
}



class actionEngine extends ActionSpace {

}