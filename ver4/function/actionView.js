class ActionView { 
    constructor(entity, element) { 
        console.log(element);
        this._actionView = new Entity(entity, element);
    }
    // this method updates any thing in the view
    append() { 
        console.log("appending")
    }

    set() { 

    }
    removeFromView() {
        
     }

}




/**
 * @file get/set caret position and insert text
 * @author islishude
 * @license MIT
 */
class Caret {
    /**
     * get/set caret position
     * @param {HTMLColletion} target
     */
    constructor(target) {
        this.isContentEditable = target && target.contentEditable
        this.target = target
        //console.log("CaretCreated ",target.tagName);
    }

    static moveCaret(win, charCount) {
        var sel, range;
        if (win.getSelection) {
            // IE9+ and other browsers
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var textNode = sel.focusNode;
                var newOffset = sel.focusOffset + charCount;
                sel.collapse(textNode, Math.min(textNode.length, newOffset));
            }
        } else if ((sel = win.document.selection)) {
            // IE <= 8
            if (sel.type != "Control") {
                range = sel.createRange();
                range.move("character", charCount);
                range.select();
            }
        }
    }

    static getCaretPos() {

        var currentSelection = window.getSelection();
        var position = currentSelection.anchorOffset;
        // console.log(currentSelection, position);
        return position;

    }

    static setCaretPos(currentSelection, pos) {
        var currentSelection = window.getSelection();
        var position = currentSelection.anchorOffset;
        //    console.log(currentSelection)
        currentSelection.selectionStart = currentSelection.selectionEnd = 10;
        return pos;
    }

    static insertInTextarea(text) {
        var sel, range, html;
        sel = window.getSelection();
        range = sel.getRangeAt(0);
        range.deleteContents();
        var textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    static getCaretIndex(element) {

        var caretOffset = 0;
        var doc = element.ownerDocument || element.document;
        var win = doc.defaultView || doc.parentWindow;
        var sel;
        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var range = win.getSelection().getRangeAt(0);
                var preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
            }
        } else if ((sel = doc.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;

    }

    /**
     * get caret position
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range}
     * @returns {number}
     */
    static getPos(e) {
        // for contentedit field
        //  if (this.isContentEditable) {
        console.log(this.target);
        this.target.focus()
        let _range = document.getSelection().getRangeAt(0)
        let range = _range.cloneRange()
        range.selectNodeContents(this.target)
        range.setEnd(_range.endContainer, _range.endOffset)
        return range.toString().length;
        //    }
        // for texterea/input element

        // return this.target.selectionStart
    }

    /**
     * set caret position
     * @param {number} pos - caret position
     */
    setPos(pos) {
        // for contentedit field
        if (this.isContentEditable) {
            this.target.focus()
            document.getSelection().collapse(this.target, pos)
            return
        }
        this.target.setSelectionRange(pos, pos)
    }

    static getLastWord(text, caretPos) {

        console.log(caretPos)
        let content = text.innerText.substring(0, caretPos);
        let input = content.split(/[^A-Za-z]/).filter((elm) => {
            if (elm !== "")
                return elm
        }

        );
        console.log(input)

        if (input[input.length - 1] === "")
            return input[input.length - 2]
        return input[input.length - 1]

    }
}