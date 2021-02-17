class ActionView { 
    constructor(entity, element) { 
        console.log(element);
        this._actionView = new Entity(entity, element);
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
    
    static setCaret(entity, pos) {
        console.log(entity,pos)
      //  var el = document.getElementById("editable")
        // var range = document.createRange()
        // var currentSelection = window.getSelection()

        // range.setStart(currentSelection, 5)
        // range.collapse(true)

        // currentSelection.removeAllRanges()
        // currentSelection.addRange(range)
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
            console.log('textRange',textRange);
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;

    }

   //This gets the last word from the caret position.
    static getLastWord(element, caretPos) {
        //var lastWordsArray = e
console.log("getting last word")
//      //  console.log(text,caretPos)
//         let content = element.innerText.substring(0, caretPos);
//       // console.log("content : ",content)
//         let input = content.split(/[^A-Za-z]/).filter((elm) => {
//            // console.log("Something here",elm)
//             if (elm !== "") {
//                 console.log("spaceKeyPressed")
//                 return elm 
//             }
                
//         }

//         );
//    //  console.log(input) //Input here is the array os text in the text.

//         if (input[input.length - 1] === "")
//             console.log("yo",input[input.length - 2]);
//             return input[input.length - 2]
//         return input[input.length - 1]

    }
}