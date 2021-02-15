/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class actionController extends ActionEventEmitter  {
    constructor(entity) {
        super()
        //this._model = model;
        this._entity = entity;

        this.on('listModified', idx => this.updateSelected(idx));
        this.on('addButtonClicked', () => this.addentity());
        this.on('delButtonClicked', () => this.delentity());
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