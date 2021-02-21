
/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
class ListController {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        view.on('listModified', idx => this.updateSelected(idx));
        view.on('addButtonClicked', () => this.addItem());
        view.on('delButtonClicked', () => this.delItem());
    }

    addItem() {
        console.log("Add Button Clicked")

        const item = window.prompt('Add item:', '');
        if (item) {
            this._model.addItem(item);
        }
    }

    delItem() {
        console.log("Del Button Clicked")
        const index = this._model.selectedIndex;
        if (index !== -1) {
            this._model.removeItemAt(index);
        }
    }

    updateSelected(index) {
        this._model.selectedIndex = index;
    }
}