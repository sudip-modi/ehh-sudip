class ActionEditorV9 {
    constructor(element) {
        this._currentSelection = window.getSelection();
      //  this._focusText = this._currentSelection.anchorNode.data;
       this._currentCaret = this._currentSelection.anchorOffset;
        
    }

    textBeforeCaret() {
        var currentSelection = window.getSelection();
        var focusText = currentSelection.anchorNode.data;
        var currentCaret = currentSelection.anchorOffset;
        if (currentCaret == 0) {
            return "";
        } else {
          
            return focusText.substring(0, currentCaret);
        }
    }
    textAfterCaret() {
        var currentSelection = window.getSelection();
        var focusText = currentSelection.anchorNode.data;
        var currentCaret = currentSelection.anchorOffset;

        if (currentCaret == focusText.length) {
            return "";
        } else {
           return focusText.substring(currentCaret);

            
        }
    }
    generateHtml() {
        console.log("text Beofre caret", this.textBeforeCaret())
        return this.textBeforeCaret()
            + "<span id='cursor-placeholder'>|</span>"
            + this.textAfterCaret();
    }
    type(c,e) { //is a boolean
       console.log(c,e.target.innerText)
        this.text = this.textBeforeCaret() + c + this.textAfterCaret();
        var currentSelection = window.getSelection();
        var focusText = currentSelection.anchorNode.data;
        console.log("old text", focusText,currentSelection)
        focusText = this.text;
        console.log("new text", focusText)
        this._currentCaret = this._currentCaret + 1;
    }
    deleteChar() { //is a boolean
        if (this.textBeforeCaret().length > 0) {
            this.text = this.textBeforeCaret().substring(0, this.textBeforeCaret().length - 1) + this.textAfterCaret();
            this.caretIndex--;
            return true;
        } else {
            return false;
        }
    }
    moveLeft() { //is a boolean
        if (this.caretIndex == 0) {
            return false;
        } else {
            this.caretIndex--;
            return true;
        }
    }
    moveRight() {//is a boolean
        if (this.caretIndex == this.text.length) {
            return false;
        } else {
            this.caretIndex++;
            return true;
        }
    }

}
class ActionEntityV9 {
    constructor() {
        
    }
    insert() {
        
    }

}


var editorElement = document.getElementById('editor');
function init(element) {
    var editor = new ActionEditorV9(element);
    console.log("here", editor);
    // updateHtml(editor);
 
   
        document.addEventListener('keypress',
            function (e) {
                console.log(editor.textBeforeCaret())
                console.log(editor.textAfterCaret())
                e.preventDefault();
                editor.type(e.key,e);
              
                // console.log("focusEntityInnerText", currentSelection);
              
                //console.log(currentCaret,focusText.length,e.target.innerText.length)
               

               
                //var textBeforeCaret = focusText.substring(0, currentCaret);
                //console.log(textBeforeCaret,caretIndex);
            
    //    if (e.which == 8 && editor.deleteChar()) {
    //         editor.updateHtml(e.target);
    //     };
    //     if (e.which == 37 && editor.moveLeft()) {
    //         editor.updateHtml(e.target);
    //     };
    //     if (e.which == 39 && editor.moveRight()) {
    //         editor.updateHtml(e.target);
    //     };
                
                
             
             //   console.log(e.target);
                // editor.type(c, e.target);
                // editor.updateHtml(e.target);

            }
        ),
        document.addEventListener('keyup',
            function (e) {
               console.log("keyup",e.key, "ignoredEvent currently")
                // var c = String.fromCharCode(e.which);
                // console.log(e.target);
                // editor.type(c, e.target);
                // editor.updateHtml(e.target);

            }
        )
}

  




window.onload = init(editorElement);