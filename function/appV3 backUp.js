class EventEmitter {
    constructor() {
        this._events = {};
    }
    on(evt, listener) {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }
    emit(evt, arg) {
        (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }
}

/**
 * The View. View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interaction.
 */
class ListView extends EventEmitter {
    constructor(model, elements) {
        super();
        this._model = model;
        this._elements = elements;

        // attach model listeners
        model.on('itemAdded', () => this.rebuildList())
            .on('itemRemoved', () => this.rebuildList());

        // attach listeners to HTML controls
        elements.list.addEventListener('change',
            e => this.emit('listModified', e.target.selectedIndex));
        elements.addButton.addEventListener('click',
            () => this.emit('addButtonClicked'));
        elements.delButton.addEventListener('click',
            () => this.emit('delButtonClicked'));
    }

    show() {
        this.rebuildList();
    }

    rebuildList() {
        const list = this._elements.list;
        list.options.length = 0;
        this._model.getItems().forEach(
            item => list.options.add(new Option(item)));
        this._model.selectedIndex = -1;
    }
}
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
        const item = window.prompt('Add item:', '');
        if (item) {
            this._model.addItem(item);
        }
    }

    delItem() {
        const index = this._model.selectedIndex;
        if (index !== -1) {
            this._model.removeItemAt(index);
        }
    }

    updateSelected(index) {
        this._model.selectedIndex = index;
    }
}
/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
class ListModel extends EventEmitter {
    constructor(items) {
        super();
        this._items = items || [];
        this._selectedIndex = -1;
    }

    getItems() {
        return this._items.slice();
    }

    addItem(item) {
        this._items.push(item);
        this.emit('itemAdded', item);
    }

    removeItemAt(index) {
        const item = this._items.splice(index, 1)[0];
        this.emit('itemRemoved', item);
        if (index === this._selectedIndex) {
            this.selectedIndex = -1;
        }
    }

    get selectedIndex() {
        return this._selectedIndex;
    }

    set selectedIndex(index) {
        const previousIndex = this._selectedIndex;
        this._selectedIndex = index;
        this.emit('selectedIndexChanged', previousIndex);
    }
}



function loadAPP() { 
    window.addEventListener('load', () => {
        const model = new ListModel(['node.js', 'react']),
            view = new ListView(model, {
                'list': document.getElementById('list'),
                'addButton': document.getElementById('plusBtn'),
                'delButton': document.getElementById('minusBtn')
            }),
            controller = new ListController(model, view);

        view.show();
    });
}

loadAPP();

