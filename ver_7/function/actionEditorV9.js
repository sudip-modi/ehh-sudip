class ActionEditorV9 {
    constructor(element) {
        
        
    }
    getCaretIndex(element) {
        let position = 0;
        const isSupported = typeof window.getSelection !== "undefined";
        if (isSupported) {
            const selection = window.getSelection();
            if (selection.rangeCount !== 0) {
                const range = window.getSelection().getRangeAt(0);
                const preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                position = preCaretRange.toString().length;
            }
        }
        console.log("carretPostion",position)
        return position;
    }
    textBeforeCaret() {
        if (this.caretIndex == 0) {
            return "";
        } else {
            return this.text.substring(0, this.caretIndex);
        }
    }
    textAfterCaret() {
        if (this.caretIndex == this.text.length) {
            return "";
        } else {
            return this.text.substring(this.caretIndex);
        }
    }
    generateHtml() {
        console.log("text Beofre caret", this.textBeforeCaret())
        return this.textBeforeCaret()
            + "<span id='cursor-placeholder'>|</span>"
            + this.textAfterCaret();
    }
    type(c) { //is a boolean
        this.text = this.textBeforeCaret() + c + this.textAfterCaret();
        this.caretIndex = this.caretIndex + 1;
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


var editorElement = document.getElementById('editor');
function init(element) {
    var editor = new ActionEditorV9(element);
    console.log("here", editor);
    // updateHtml(editor);
 
   
        document.addEventListener('keypress',
            function (e) {
                var currentSelection = window.getSelection();
                var focusText = currentSelection.anchorNode.data;
                  var focusTextEntity = e.target.textContent; //Pure text
                var focusEntityInnerText = e.target.innerText; // Rendered Text
                // console.log("focusEntityInnerText", currentSelection);
                var currentCaret = currentSelection.anchorOffset;
                console.log(currentCaret)
                
            
    //    if (e.which == 8 && editor.deleteChar()) {
    //         editor.updateHtml(e.target);
    //     };
    //     if (e.which == 37 && editor.moveLeft()) {
    //         editor.updateHtml(e.target);
    //     };
    //     if (e.which == 39 && editor.moveRight()) {
    //         editor.updateHtml(e.target);
    //     };
                console.log("keypress",e.key)
                var c = String.fromCharCode(e.which);
                console.log(e.target);
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