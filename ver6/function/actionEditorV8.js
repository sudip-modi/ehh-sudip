class EditorV8 {
  
    constructor() {
        this.caretIndex = 0;
        this.text = "";
        console.log(this.text)
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

function init() {
    var editor = new EditorV8();
    console.log(editor);
    updateHtml(editor);
    document.addEventListener("keydown", e => {
        
        console.log(e.key)
        if (e.which == 8 && editor.deleteChar()) {
            updateHtml(editor);
        };
        if (e.which == 37 && editor.moveLeft()) {
            updateHtml(editor);
        };
        if (e.which == 39 && editor.moveRight()) {
            updateHtml(editor);
        };
    }
        
    )
    document.addEventListener('keypress',
        function (e) {
            var c = String.fromCharCode(e.which);

            editor.type(c);
            updateHtml(editor);

        }
    )
}
// window.onload = (function () {
//     var editor = new EditorV8();
//     console.log(editor);
//     updateHtml();
//     document.keypress(function (e) {
//         var c = String.fromCharCode(e.which);
//         window.editor.type(c);
//         updateHtml();
//     });
//     document.keydown(function (e) {
//         console.log(e.key)
//         if (e.which == 8 && window.editor.deleteChar()) {
//             updateHtml();
//         };
//         if (e.which == 37 && window.editor.moveLeft()) {
//             updateHtml();
//         };
//         if (e.which == 39 && window.editor.moveRight()) {
//             updateHtml();
//         };
//     });
// });
var updateHtml = function (editor) {
    document.getElementById("editor").innerHTML = editor.generateHtml();
   // var cursorPos = document.getElementById("cursor-placeholder").position();
    //var delta = document.getElementById("cursor-placeholder").height() / 4.0;
    //document.getElementById("blinking-cursor").css({ top: cursorPos.top, left: cursorPos.left - delta });
};

window.onload = init();