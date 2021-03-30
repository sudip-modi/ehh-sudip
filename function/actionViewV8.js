
class ActionView {
    constructor(viewModel, parent) {
     //   console.log("Request for new View ", viewModel, parent);
        this._actionView = new Entity(viewModel, parent);
        //  console.log(" new View ", this._actionView.entity);
    }
    appendChild(input,target){
        target.appendChild('input');
        return input;
    }
    replaceChild(input, target) {
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
    
