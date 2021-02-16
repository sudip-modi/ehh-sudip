/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class Controller extends EventEmitter {
    constructor(actionEvent, elements) {
        super();
        this._actionEvent = actionEvent;
        this._elements = elements;
        console.log(this._elements)
       
       
       // attach listeners to HTML controls
        elements.actionSpace.addEventListener('change', e => this.emit('listModified', e.target.selectedIndex));
        elements.addButton.addEventListener('click',() => this.emit('addButtonClicked'));
        elements.delButton.addEventListener('click',() => this.emit('delButtonClicked'));
    } 
    addItem() {
        console.log("Add Button Clicked")
        const item = window.prompt('Add item:', '');
        if (item) {
          //  this._model.addItem(item);
        }
    }

    delItem() {
        console.log("Del Button Clicked")
        //const index = this._model.selectedIndex;
     //   if (index !== -1) {
        //    this._model.removeItemAt(index);
       
//}
}
}