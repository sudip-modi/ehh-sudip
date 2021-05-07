// Query for all available fonts and log metadata.
// const fonts = navigator.fonts.query();
// try {
//   for await (const metadata of fonts) {
//     console.log(`${metadata.family} (${metadata.fullName})`);
//   }
// } catch (err) {
//   console.error(err);
// }
function getFuncName() {
    return getFuncName.caller.name
}
function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}

function uid() {
    let timmy = Date.now().toString(36).toLocaleUpperCase();
    let randy = parseInt(Math.random() * Number.MAX_SAFE_INTEGER);
    randy = randy.toString(36).slice(0, 12).padStart(12, '0').toLocaleUpperCase();
    return ''.concat(timmy, '-', randy);
}


//console.log("Generate Unique Id's Like these>>>>>", uid(), 'call me at actionHelper.uid');

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

//console.log("orLIke this",uuidv4());
//console.log(JSON.stringify({ alpha: 'A', beta: 'B' }, null, '\t'));
// Result:
// '{
//     "alpha": A,
//     "beta": B
// }'
function obj_to_array(arg) {
    return Object.entries(arg).map(([key, value]) => `${key}: ${value}`);
}

class process {
    static processReq(input, output, key, value) {
       // console.log("process req", input, output, operate.is(input),typeof input)
        if (typeof input === 'object') {
          //  console.log("process req", input, output)
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
          //  console.log("found",key,input[key])
            if (operate.is(value) === 'Object') {
                // console.log("Object",output);
                var buffer = Entity.create(input, output, value.name);
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
/**
 * 
Mutate - converts json 2 Array and vice-versa
 */
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
var row = new Array('ehhid', 'd', 'parent', 'entity', "typeOf", "path");

class mutate { 

    static fillEmptyDepth(input, output) {
        // console.log("filling gap",input,output)
        for (var j = 1; j <= output[0].length - input.length; j++) {
            input.push("");
        }
        return input;
    }
    
    //this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
    static validateNupdate(input, output) {

        if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
           output[0].push(input);
        }
        // console.log(output[0], input);
        return output;
    }
    static createRow(input, output, previousRow, currentKey, d, path) {
        var id = output.length;
        var newRow = [id, d, previousRow[3], currentKey, input?.constructor.name, path];
        return newRow;
    }

    static updateRow(input, output, previousRow, currentRow, currentKey, d, path) {
        mutate.fillEmptyDepth(currentRow, output)
        // console.log("current Key in updation",currentKey,input,currentRow,previousRow)
        //Adding the inputValue in the currentRow at the index of the currentKey, also deletes an empty space from before.
        currentRow.splice(output[0].indexOf(currentKey), 1, input);
        //console.log("updated Row",currentRow)
        return currentRow;
    }
    static setEntity(input, output, key) { 
       var  outputType = getEntityType(output);
      //  console.log(outputType);
        switch (output?.constructor) { 
            case Object:
                output[key] = input[key];
            case Array:
                if (key) {
                    output.push(input[key])
                } else { 
                    output.push(input);
                }
            case String:
                default:
        }

        return output;
    }
    static Obj2(input, output, previousRow, currentRow, currentKey, d, path, parent) {
        if (!previousRow) {
            mutate.setEntity(row, output);
            
            previousRow = output[0];
            //  parent = "root";
          //  console.log(previousRow);
            path = '';
        };
        if (!d) { var d = 0; }
        d = d + 1;
        switch (input?.constructor) {
            case Object:
                path = path + '.' + previousRow[3];
                mutate.processObj(input, output, previousRow, currentRow, currentKey, d, path, previousRow[3]);
            case Array:
           
                path = path + '.' + previousRow[3];
                mutate.processArr(input, output, previousRow, currentRow, currentKey, d, path, previousRow[3]);
            default:
            // return
        }
        //  console.log(output)
        return output;
    }
    static processObj(input, output, previousRow, currentRow, currentKey, d, path, parent) {
        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;
            if (getEntityType(input[key]) === 'Object' || getEntityType(input[key]) === 'Array') {
                // console.log(path)
                var currentRow = mutate.createRow(input[key], output, previousRow, key, d, path, previousRow[3]);
                mutate.setEntity(currentRow, output);
                mutate.Obj2(input[key], output, currentRow, currentRow, currentKey, d, path, currentRow[3]);

            } else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean'|| getEntityType(input[key])=== 'Number') {
                mutate.validateNupdate(key, output);
                mutate.updateRow(input[key], output, previousRow, previousRow, key, d, path);
            } else {
                //   console.log("errand", key, input[key],typeof key)
            }
        }
        return output;
    }
    static processArr(input, output, previousRow, currentRow, currentKey, d, path, parent) {
        for (var i = 0; i < input.length; i++) {
            if (typeof input[i] === "object" && input[i] !== null) {
                if (typeof currentRow[3] === 'undefined') {
                    //      console.log(currentRow)   
                    
                    mutate.updateRow(currentKey, output, previousRow, currentRow, 'root', d, path);
                 //   console.log("Finding Array Values", previousRow)
                } else {
                   // console.log("Finding Array Values",currentRow)

                    var currentRow = mutate.createRow(input[i], output, previousRow, previousRow[3] + i, d, path);
                    mutate.setEntity(currentRow, output);
//                    output.push(currentRow);
                }
                mutate.Obj2(input[i], output, currentRow, currentRow, currentKey, d, path);

            } else {
                //creating Value Row for Array Parent
                var currentRow = mutate.createRow(input[i], output, previousRow, input[i], d, path);
                mutate.setEntity(currentRow, output);
           //     console.log(currentRow)
              //  output.push(currentRow);
            }
        }
        return output
    }
    static arr2Object (input ,parent,output){
        for(var j in input){ 
         var index;      
          if(input[j][2] === parent[3]&&((input[j][5].includes(parent[5]) && parseInt(input[j][1]) === 1+ parseInt(parent[1]))||((input[j][1]=== "1"||input[j][1]===1)&&parent[1]==="d"))){
            if(parent[4] === "Array" && (input[j][4] === "String"|| input[j][4] === "Number")){
              output.unshift(input[j][3]);
            }else if(input[j][4] === "Object"){
                var obj = {};
                if(input[j].length > 6){
                    for(var k = 6;k < input[j].length;k++){
                        if(input[j][k] !== "")
                            obj[input[0][k]] = input[j][k];
                    }
                }
                if(parent[4]=== "Array"){
                        var index = input[j][3].replace(input[j][2],"");
                        output[index] = obj;
                }else
                        output[input[j][3]] = obj;
            }else if(input[j][4] === "Array"){
              output[input[j][3]] = [];
            }
            if(input[j][4] === "Object" && parent[4] === "Array")
                this.arr2Object(input,input[j],output[index]);
            else
                this.arr2Object(input,input[j],output[input[j][3]]);
          }
        }
        return output;
      }
    static TWODARRAY(array){
        var sample = array[0];
        for(var i = 1;i < array.length;i++){
            var arr = array[i];
            if(arr.length !== sample.length){
                for(var j = 0; j < (sample.length - arr.length);j++){
                    arr[arr.length + j] = "";
                }
            }
            array[i] = arr;
        }
        return array;
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
    static uniqueArray(array) {
        const uniqueArray = [...new Set(array)];
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


let cache = new Map();

function loadCached(url) {
    if (cache.has(url)) {
        return Promise.resolve(cache.get(url)); // (*)
    }

    return fetch(url)
        .then(response => response.text())
        .then(text => {
            cache.set(url, text);
            return text;
        });
}