/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class Controller extends EventEmitter {
    constructor(actionSpaceElements, actionEvent) {
        super();
        this._actionSpaceElements = actionSpaceElements;
        console.log(this._actionSpaceElements)
        // attach listeners to HTML controls
        actionSpaceElements.actionSpace.addEventListener('change', e => this.emit('listModified', e.target.selectedIndex));
        actionSpaceElements.addButton.addEventListener('click', e => this.emit('addButtonClicked', e));
        actionSpaceElements.delButton.addEventListener('click', e => this.emit('delButtonClicked',e));
    }
    add(entity) {
        console.log("Add Button Clicked", entity.target)
       
    }

    del(entity) {
        console.log("Del Button Clicked", entity.target)
        //const index = this._model.selectedIndex;
        //   if (index !== -1) {
        //    this._model.removeItemAt(index);

        //}
    }
}