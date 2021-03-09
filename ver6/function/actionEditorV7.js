//https://tomassetti.me/writing-simple-js-editor/
//https://github.com/ftomassetti/simple-web-editor
//https://github.com/ftomassetti/kanvas

class EditorV7 {
    constructor(initialText, initialIndex) {
        if (initialText === void 0) { initialText = ""; }
        if (initialIndex === void 0) { initialIndex = 0; }
        if (initialIndex > initialText.length) {
            throw new Error("Invalid initial index");
        }
        this.caretIndex = initialIndex;
        this.text = initialText;
        this.nLines = (this.text.match(/\n/g) || []).length + 1;
    }
    static textBeforeCaret() {
        if (this.caretIndex == 0) {
            return "";
        }
        else {
            console.log(this.text, this.caretIndex)
            return this.text.substring(0, this.caretIndex);
        }

    }
    static textAfterCaret() {
        if (this.caretIndex == this.text.length) {
            return "";
        }
        else {
            return this.text.substring(this.caretIndex);
        }
    }
    static currentLine() {
        return (this.textBeforeCaret().match(/\n/g) || []).length;
    }
    static currentIndex() {
        return this.caretIndex;
    }
    static numberOfLines() {
        return this.nLines;
    }
    static currentColumn() {
        var i = this.textBeforeCaret().lastIndexOf("\n");
        if (i == -1) {
            return this.caretIndex;
        }
        return this.caretIndex - i - 1;
    }
    static numberOfColumnsForLine(line) {
        var lines = (this.text.match(/[^\r\n]+/g) || []);
        return lines[line].length;
    }
    static goTo(line, column) {
        var newIndex = 0;
        if (line >= this.numberOfLines()) {
            line = this.numberOfLines() - 1;
        }
        if (column > this.numberOfColumnsForLine(line)) {
            column = this.numberOfColumnsForLine(line);
        }
        for (var i = 0; i < line; i++) {
            newIndex = this.text.indexOf("\n", newIndex) + 1;
        }
        newIndex += column;
        this.caretIndex = newIndex;
    }
    static toHtml(text) {
        return text.replace(/\n/g, "<br/>");
    }
    static removeLine() {
        if (this.nLines == 0) {
            return;
        }
        this.nLines--;
    }
    static addLine() {
        this.nLines++;
    }
    static generateContentHtml() {
        console.log(this);
        return this.toHtml(this.textBeforeCaret())
            + "<span class='cursor-placeholder'>|</span>"
            + this.toHtml(this.textAfterCaret());
    }
    static generateLinesHtml() {
        var code = "";
        for (var i = 1; i <= this.nLines; i++) {
            code += "<span>" + i + "</span><br/>";
        }
        return code;
    }
    static type(c) {
        if (c == '\n') {
            this.addLine();
        }
        this.text = this.textBeforeCaret() + c + this.textAfterCaret();
        this.caretIndex = this.caretIndex + 1;
    }
    static deletePrevChar() {
        if (this.textBeforeCaret().length > 0) {
            if (this.text[this.caretIndex - 1] == '\n') {
                this.removeLine();
            }
            this.text = this.textBeforeCaret().substring(0, this.textBeforeCaret().length - 1) + this.textAfterCaret();
            this.caretIndex--;
            return true;
        }
        else {
            return false;
        }
    }
    static deleteNextChar() {
        if (this.textAfterCaret().length > 0) {
            if (this.text[this.caretIndex + 1] == '\n') {
                this.removeLine();
            }
            this.text = this.textBeforeCaret() + this.textAfterCaret().substr(1);
            return true;
        }
        else {
            return false;
        }
    }
    static moveLeft() {
        if (this.caretIndex == 0) {
            return false;
        }
        else {
            this.caretIndex--;
            return true;
        }
    }
    static moveRight() {
        if (this.caretIndex == this.text.length) {
            return false;
        }
        else {
            this.caretIndex++;
            return true;
        }
    }
     static moveUp() {
        if (this.currentLine() == 0) {
            return false;
        }
        else {
            this.goTo(this.currentLine() - 1, this.currentColumn());
            return true;
        }
    }
     static moveDown() {
        if (this.currentLine() == (this.numberOfLines() - 1)) {
            return false;
        }
        else {
            this.goTo(this.currentLine() + 1, this.currentColumn());
            return true;
        }
    }
     static goToStartOfLine() {
        this.goTo(this.currentLine(), 0);
    }
     static goToEndOfLine() {
        this.goTo(this.currentLine(), this.numberOfColumnsForLine(this.currentLine()));
    }

}


var updateHtml = function () {
    
    document.getElementById("#editor").innerHTML = EditorV7.generateContentHtml();
    var cursorPos = document.getElementById("cursor-placeholder").position();
    var delta = document.getElementById("cursor-placeholder").height() / 4.0;
    document.getElementById("blinking-cursor").css({ top: cursorPos.top, left: cursorPos.left - delta });
};
window.onload = (function () {
   var editor = new EditorV7();
    updateHtml();
    document.keypress(function (e) {
        var c = String.fromCharCode(e.which);
        editor.type(c);
        updateHtml();
    });
    document.keydown(function (e) {
        console.log("KD " + e.which);
        if (e.which == 46 && editor.deleteNextChar()) {
            updateHtml();
        }
        if (e.which == 8 && editor.deletePrevChar()) {
            updateHtml();
        }
        if (e.which == 37 && editor.moveLeft()) {
            updateHtml();
        }
        if (e.which == 39 && editor.moveRight()) {
            updateHtml();
        }
        if (e.which == 38 && editor.moveUp()) {
            updateHtml();
        }
        if (e.which == 40 && editor.moveDown()) {
            updateHtml();
        }
        if (e.which == 36) {
            editor.goToStartOfLine();
            updateHtml();
        }
        if (e.which == 35) {
            editor.goToEndOfLine();
            updateHtml();
        }
    });
});
   

