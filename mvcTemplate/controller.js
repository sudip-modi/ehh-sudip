/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class ActionController extends ActionEventEmitter  {
    constructor(elements) {
        super()
        //this._model = model;
        this._entity = elements;
        this.on('EntityModified', idx => this.updateSelected(idx));
        this.on('addButtonClicked', () => this.addentity());
        this.on('delButtonClicked', () => this.delentity());

        
    }

    addentity() {
        console.log("Add Button Clicked")

        // const entity = window.prompt('Add entity:', '');
        // if (entity) {
        //     this._model.addentity(entity);
        // }
    }

    delentity() {
        console.log("Del Button Clicked")

      
    }

    updateSelected(index) {
        this._model.selectedIndex = index;
    }
}