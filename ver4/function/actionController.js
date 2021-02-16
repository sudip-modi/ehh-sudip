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
       actionSpaceElements._actionView.entity.addEventListener('click', e => this.emit('clickOnActionSpace', e));
        actionSpaceElements._actionView.entity.addEventListener('keypress', e => this.emit('keypress', e));
       // actionSpaceElements._actionView.addButton.addEventListener('click', e => this.emit('addButtonClicked', e));
      // actionSpaceElements.delButton.addEventListener('click', e => this.emit('delButtonClicked',e));
    }
    onClick(entity) { 
        console.log("clicked On", entity.target)
        
        var currentSelection = window.getSelection();
        console.log(currentSelection);

    }
    onKeyPress(entity) { 
        console.log(entity.type,entity.key);

            if (entity.type === 'keypress') {
                if (entity.keyCode == 32) {
                    console.log("EnterKey Detected")
                   // entity.preventDefault()
                    let val = entity.target.innerText.trim()
                    let editor = entity.target
                    // const input=val.split(/[^A-Za-z]/);
                    let keyword = Caret.getLastWord(editor, Caret.getCaretIndex(editor))
                    console.log("lastword",keyword)
                    AutoComplete.checkSuggestion(keyword, editor)

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

