/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class ActionController extends ActionEvent {
    constructor(actionSpaceElements) {
        super();
        this._actionSpaceElements = actionSpaceElements;
        console.log(actionSpaceElements._actionView.entity)
        // attach listeners to HTML controls
        //window.addEventListener('selectionchanged', e => this.emit('selection', e));
        window.addEventListener('change', e => this.emit('change', e));
        window.addEventListener('click', e => this.emit('click', e));
        window.addEventListener('keypress', e => this.emit('keypress', e));
        window.addEventListener('keyup', e => this.emit('keyup', e));

       // actionSpaceElements._actionView.addButton.addEventListener('click', e => this.emit('addButtonClicked', e));
      // actionSpaceElements.delButton.addEventListener('click', e => this.emit('delButtonClicked',e));
        var currentSelection = window.getSelection();
        var currentInputRange = [];

    }
    onSelection(entity) { 

      

    }
    onSelectionEnd(entity) { 
        var currentSelection = window.getSelection();
     //   console.log("SelectionChange", currentSelection)


    }
    onClick(entity) { 
        console.log("clicked On", entity.target)
      //  insertBreakAtPoint(entity);
        /**
         * check if the target entity has any click or data - command set, if yes, then process it.
         */
    
        var currentSelection = window.getSelection();
        var cartetAtPos = Caret.getCaretPos(entity.data);
        if (entity.target.hasAttribute('data')) { 


            var dataCommand = entity.target.getAttribute('data');
           
          //  var parseCommand=  JSON.parse(dataCommand);
          //  console.log(dataCommand)
           var commandArray = dataCommand.split(",")
        //    console.log(commandArray)
            var entityName = document.getElementById('sampleNote#1').getAttribute('name');
            var entityInnerHtml = document.getElementById('sampleNote#1').innerHTML;
            localStorage.setItem(entityName, entityInnerHtml);
       
        //    console.log(ActionSpace)
         //   ActionStorage.save(document.getElementById('sampleNote#1').getAttribute('name'), entityInnerHtml);
         
            //process.act(actionStorage, save, );
            //insertInTextarea()
          //  var methodToexecute = entity.target.data.value;
           // console.log(methodToexecute);

        }

//if(entity.target)





        //console.log("Clicked",currentSelection,cartetAtPos);
    }
    
    onKeyPress(entity) {

        var currentSelection = window.getSelection();
        var focusText = currentSelection.anchorNode.data;
        var focusTextEntity = entity.target.textContent; //Pure text
        var focusEntityInnerText = entity.target.innerText; // Rendered Text
       // console.log("focusEntityInnerText", currentSelection);
        var currentCaret = currentSelection.anchorOffset;
        if (entity.key == 'Enter') { 
            return;
        }
      //  entity.preventDefault(entity);
        //var response = currentSelection.anchorNode.data.substr(0, currentSelection.anchorOffset) + entity.key + currentSelection.anchorNode.data.substr(currentSelection.anchorOffset);
     
       // currentSelection.anchorNode.data = response;
        
      //  console.log("inserted", entity.key, "at", currentCaret, "in", entity.target);

       // Caret.moveCaret(window, currentCaret +1);
       //entity.target.innerText = response;
       
       



//         if (entity.keyCode == 32) { 
//       //     console.log("space key pressed")
           
//           //  var focusText = entity.target.innerText;
            
//             console.log("focusText",focusText)
//            // Caret.moveCaret(window, lastSpace);

//            

//             

//             var matches = snippets.filter(snippets => {
    

// })

//             // var match = isIn(lastWord, snippets);
    
//             // if (match.length === 1) { // is a exact Match. To be used for Space, {,[,(
//             //     entity.preventDefault();
//             //     console.log("match", match[0].prefix, match[0].body);
//             //     var response = Entity.insert(currentSelection.baseNode.textContent, currentSelection.anchorOffset, entity.key + match[0].body);
//             //     currentSelection.baseNode.textContent = response;
//             //     Caret.moveCaret(window, currentCaret + 1);
//             // }

//         }
        
    }

    onKeyUp(entity) {

        var currentSelection = window.getSelection();
        var focusText = currentSelection.anchorNode.data;
        var focusTextEntity = entity.target.textContent; //Pure text
        var focusEntityInnerText = entity.target.innerText; // Rendered Text
        // console.log("focusEntityInnerText", currentSelection);
        var currentCaret = currentSelection.anchorOffset;
        var preText = focusText.substring(0, currentCaret);
        // console.log(focusText, preText)

        if (preText.indexOf(" ") >= 0) {
            var words = preText.split(" ");
            var lastWordNegativeIndex = words.length - 2;
          //  console.log(words,words[lastWordNegativeIndex], lastWordNegativeIndex);
            var lastWord = words[words.length - 2]; //return second last word
            //  console.log("last word",lastWord)    
        }

        else {
            //   console.log('preText',preText);
        }
       // console.log("Last word", lastWord);
        var matches = isIn(lastWord, hotKeyList);
        // var matches = snippets.filter(key => {
        //     const regex = new RegExp(`^${lastWord}`, 'gi');
        //     return key.prefix.match(regex);
        // });
   
       // entity.preventDefault(entity);
        if (entity.keyCode == 32) {
            // console.log("space key pressed")
         //push matches to dom  
       
            if (matches.length >= 0) { 
                console.log("matches", matches)
                var autoCompleteElement = document.getElementById('autocomplete');
                autoCompleteElement.innerHTML = "";
                var matchesHTML = new Entity(matches, autoCompleteElement);
            //    console.log("matchesHTML",matchesHTML)   
               // document.getElementById('autocomplete').innerHTML=matchesHTML
                var caretXY = getCaretCoordinates();
             //   console.log(caretXY, currentCaret);
              //  console.log(caretXY.x)
                document.getElementById('autocomplete').style.left = (caretXY.x+13) + 'px';
                document.getElementById('autocomplete').style.top = (caretXY.y+21) + 'px';
                document.getElementById('autocomplete').style.visibility = 'visible';
                document.getElementById('autocomplete').setAttribute.tabindex = "0";
                //console.log(currentSelection.focusNode)
            }
      
        }
    }

    insertText(string, element,e) { 
        console.log("got the command");
        console.log("SelectionChange", currentSelection)
    }
    add(entity) {
        console.log("Add Button Clicked", entity.target.id)
       
    }
    del(entity) {
        console.log("Del Button Clicked", entity.target)
        //const index = this._model.selectedIndex;
        //   if (index !== -1) {
        //    this._model.removeItemAt(index);

        //}
    }
    createRange() { 
        console.log(creatingRange)
    }
}

