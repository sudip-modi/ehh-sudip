
class ActionView {
    constructor(viewModel, parent) {
     //   console.log("Request for new View ", viewModel, parent);
        this._actionView = new Entity(viewModel, parent);
        //  console.log(" new View ", this._actionView.entity);
    }
    replaceChild(input, target) {
        var newChild = new Entity(input, document.createElement('div'));
//        console.log("here", newChild.entity, "target", target.entity.innerHTML);
        target.entity.innerHTML = newChild.entity.innerHTML;   
     }
    
}