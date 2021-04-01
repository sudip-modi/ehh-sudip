
class ActionView {
    constructor(viewModel, parent) {
     //   console.log("Request for new View ", viewModel, parent);
        this._actionView = new Entity(viewModel, parent);
        //  console.log(" new View ", this._actionView.entity);
    }
    static setAttribute(input, key, value) {
        input.key = value;
        return input;
    }
    appendChild(input,target){
        target.appendChild('input');
        return input;
    }
    replaceChild(input, target) {
        console.log("replaceChild",input,target)
        var newChild = new Entity(input, document.createElement('div'));
//        console.log("here", newChild.entity, "target", target.entity.innerHTML);
        target.entity.innerHTML = newChild.entity.innerHTML;   
     }

    /**
     * Validtions to be added.
   * This method is used for adding InnerHTML to DOM Elements
   * @param {HTMLElement} DOMElement - HTML DOM Element to add HTML to
   * @param {HTMLElement} inputElem - HTML Input Element to be added into DOMElement
   */ 
  static addInnerHTML(inputElem,target){

    target.innerHTML = inputElem;
  }
}


/**
 * @file get/set caret position and insert text
 * @author islishude
 * @license MIT
 */
 class Caret extends ActionView {
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

  static getCaretCoordinates() {
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
}

    
