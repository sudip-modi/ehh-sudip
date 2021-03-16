class EditorV8 {
  
    constructor(target) {
        this.caretIndex = 0;
        this.text = "";
        this.element = target;
        
        console.log(this.text)
    }
    textBeforeCaret(target) {
        if (window.getSelection().anchorOffset == 0) {
            console.log("am here")
            return "";
         } else {
          //   console.log(target.innerText, target.selection, window.getSelection())
           //  console.log("text beore caret", target.innerText.substring(0, 50), window.getSelection().anchorOffset);
             return target.innerText.substring(0, window.getSelection().anchorOffset);
        }
    }
    textAfterCaret(target) {
        if (window.getSelection().anchorOffset == target.innerText.length) {
            console.log("am here")
            return "";
        } else {
            return target.innerText.substring(window.getSelection().anchorOffset);
        }
    }
    generateHtml(target) {
        console.log("text Beofre caret", this.textBeforeCaret(target))
        console.log("text after caret", this.textAfterCaret(target))
        return this.textBeforeCaret(target)
        //    + "<span id='cursor-placeholder'>|</span>"
            + this.textAfterCaret(target);
    }
    updateHtml(target) {
        target.innerHTML = this.generateHtml(target);
   
        // var cursorPos = document.getElementById("cursor-placeholder").position();
    //var delta = document.getElementById("cursor-placeholder").height() / 4.0;
    //document.getElementById("blinking-cursor").css({ top: cursorPos.top, left: cursorPos.left - delta });
    }
    type(c,target) { //is a boolean
        target.innerText = this.textBeforeCaret(target) + c + this.textAfterCaret(target);
       // window.getSelection().anchorOffset = window.getSelection().anchorOffset + 1;
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

function init() {
    var editor = new EditorV8();
    console.log("here",editor);
   // updateHtml(editor);
    document.addEventListener("keydown", e => {
        
        console.log(e.key)
        if (e.which == 8 && editor.deleteChar()) {
            editor.updateHtml(e.target);
        };
        if (e.which == 37 && editor.moveLeft()) {
            editor.updateHtml(e.target);
        };
        if (e.which == 39 && editor.moveRight()) {
            editor.updateHtml(e.target);
        };
    }
        
    )
    document.addEventListener('keypress',
        function (e) {
            var c = String.fromCharCode(e.which);
            console.log(e.target);
            editor.type(c,e.target);
            editor.updateHtml(e.target);

        }
    )
}



window.onload = init();