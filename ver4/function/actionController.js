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
        if (!currentInputRange) { var currentInputRange = [] };
        // console.log(currentSelection)
        //   console.log(entity.type,entity.key);
        if (entity.type === 'keypress') {

            var cartetAtPosIndex = Caret.getCaretIndex(entity.target);
            var cartetAtPos = Caret.getCaretPos(entity);
            
            
            // var lastKeyPressed = {
            //     lastKeyCaret: cartetAtPos,
            //     lastKeyPressedCharode: entity.charCode,
            //     lastKeyPressed: entity.key,
            //     lastKeytargetId: entity.target.id 
            // }
            
            //  console.log(lastKeyPressed)
           let _lastWordFromCaret = Caret.getLastWord(entity.target, cartetAtPosIndex)
            console.log("LastWordFromCaret", _lastWordFromCaret)
            if (_lastWordFromCaret) { 
                
            }
            AutoComplete.checkSuggestion(_lastWordFromCaret, entity.target)

            // if (entity.keyCode == 32) {
               
            //     }
            // }

        
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

