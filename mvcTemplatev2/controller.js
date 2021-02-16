/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class Controller extends EventEmitter {
    constructor(actionEvent, actionSpaceElements) {
        super();
        this._actionEvent = actionEvent;
        this._actionSpaceElements = actionSpaceElements;
        console.log(this._actionSpaceElements)
       // attach listeners to HTML controls
        actionSpaceElements.actionSpace.addEventListener('change', e => this.emit('listModified', e.target.selectedIndex));
        actionSpaceElements.addButton.addEventListener('click',() => this.emit('addButtonClicked'));
        actionSpaceElements.delButton.addEventListener('click',() => this.emit('delButtonClicked'));
    } 
    addItem() {
        console.log("Add Button Clicked")
       // const item = window.prompt('Add item:', '');
        // if (item) {
        //   //  this._model.addItem(item);
        // }
    }

    delItem() {
        console.log("Del Button Clicked")
        //const index = this._model.selectedIndex;
     //   if (index !== -1) {
        //    this._model.removeItemAt(index);
       
//}
}
}