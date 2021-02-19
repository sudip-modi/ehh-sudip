class ActionView { 
    constructor(entity, element) { 
        console.log("Request for new View ", entity,element);
        this._actionView = new Entity(entity, element);
        console.log(" new View ", this._actionView.entity);
    }
    
    updateView(entity, value, method) { 
          process.act(entity, key, value, method, 'document')
    }

    append() { 
        console.log("appending")
    }

    set() { 

    }
    removeFromView() {
        
     }

}

function insertBreakAtPoint(e) {
    let range;
    let textNode;
    let offset;

    if (document.caretPositionFromPoint) {
        range = document.caretPositionFromPoint(e.clientX, e.clientY);
        textNode = range.offsetNode;
        offset = range.offset;
    } else if (document.caretRangeFromPoint) {
        range = document.caretRangeFromPoint(e.clientX, e.clientY);
        textNode = range.startContainer;
        offset = range.startOffset;
    }
    // Only split TEXT_NODEs
    if (textNode && textNode.nodeType == 3) {
        let replacement = textNode.splitText(offset);
        let br = document.createElement('br');
        textNode.parentNode.insertBefore(br, replacement);
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
        console.log(range);
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
            console.log('textRange',textRange);
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;

    }

   //This gets the last word from the caret position.
    static getLastWord(element, caretPos,currentSelection) {
        //var lastWordsArray = e
        
        console.log("getting last word",element.innerText)
        
        var lastSpace = element.innerText.lastIndexOf('\n');
       // var lastWord = currentSelection.focusNode.data.substring(currentSelection.focusNode.data.lastIndexOf('\n'));
        console.log(lastSpace)
        var splitters = [' ', '\n', '۔'];
      //  var caretPosition = element.value.slice(0, element.selectionStart).length;
      //  var tempLastWord = element.value.substring(0, caretPos);
      //  console.log(tempLastWord)
     //   var lastWord = tempLastWord.substring(tempLastWord.lastIndexOf(splitters) + 1);
    //    var lastWord = tempLastWord.substring(tempLastWord.lastIndexOf('\n') + 1);
//console.log(lastWord)

  
    }
}

function getCaretCoordinates() {
    let x = 0,
        y = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
        const selection = window.getSelection();
        if (selection.rangeCount !== 0) {
            const range = selection.getRangeAt(0).cloneRange();
            range.collapse(true);
            const rect = range.getClientRects()[0];
            if (rect) {
                x = rect.left;
                y = rect.top;
            }
        }
    }
    return { x, y };
}