/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class actionController extends ActionEventEmitter  {
    constructor(elements) {
        super()
        //this._model = model;
        this._entity = elements;
        this.on('EntityModified', idx => this.updateSelected(idx));
        ActionEventEmitter.on('addButtonClicked', () => this.addentity());
        ActionEventEmitter.on('delButtonClicked', () => this.delentity());

        
    }

    addentity() {
        const entity = window.prompt('Add entity:', '');
        if (entity) {
            this._model.addentity(entity);
        }
    }

    delentity() {
        const index = this._model.selectedIndex;
        if (index !== -1) {
            this._model.removeentityAt(index);
        }
    }

    updateSelected(index) {
        this._model.selectedIndex = index;
    }
}