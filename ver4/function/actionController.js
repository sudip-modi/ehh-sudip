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
        window.addEventListener('selectstart', e => this.emit('selection', e));
        actionSpaceElements._actionView.entity.addEventListener('click', e => this.emit('clickOnActionSpace', e));
        actionSpaceElements._actionView.entity.addEventListener('keypress', e => this.emit('keypress', e));
       // actionSpaceElements._actionView.addButton.addEventListener('click', e => this.emit('addButtonClicked', e));
      // actionSpaceElements.delButton.addEventListener('click', e => this.emit('delButtonClicked',e));
        var currentSelection = window.getSelection();
        var currentInputRange = [];

    }
    onSelection(entity) { 

       // console.log("SelectionChange",currentSelection)

    }
    onSelectionEnd(entity) { 
        var currentSelection = window.getSelection();
     //   console.log("SelectionChange", currentSelection)


    }
    onClick(entity) { 
     //  console.log("clicked On", entity.target)
        var currentSelection = window.getSelection();
        var cartetAtPos = Caret.getCaretPos(entity);
        //console.log("Clicked",currentSelection,cartetAtPos);
    }

    onKeyPress(entity) {
        var currentSelection = window.getSelection();
        var currentCaret = currentSelection.anchorOffset;

        entity.preventDefault(entity);

        var response = Entity.insert(currentSelection.baseNode.textContent, currentSelection.anchorOffset, entity.key);
      //  console.log(response)
        currentSelection.baseNode.textContent = response;
        Caret.moveCaret(window, currentCaret + 1);

        if (entity.keyCode == 32) { 
      //     console.log("space key pressed")
            var focusText = currentSelection.focusNode.textContent;
          //  var focusText = entity.target.innerText;
            
            console.log("focusText",focusText)
           // Caret.moveCaret(window, lastSpace);

            var index = focusText.indexOf(currentCaret);
            var preText = focusText.substring(0, currentCaret);

            if (preText.indexOf(" ") > 0) {
                var words = preText.split(" ");
                var lastWord = words[words.length - 1]; //return last word
               // console.log(lastWord)
            }
            
            else {
                console.log(preText) ;
            }
            console.log("space key pressed", lastWord);
            var match = isIn(lastWord, snippets);
    
            if (match.length === 1) { // is a exact Match. To be used for Space, {,[,(
                entity.preventDefault();
                console.log("match", match[0].prefix, match[0].body);
                var response = Entity.insert(currentSelection.baseNode.textContent, currentSelection.anchorOffset, entity.key + match[0].body);
                currentSelection.baseNode.textContent = response;
                Caret.moveCaret(window, currentCaret + 1);
            }

        }
        
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

