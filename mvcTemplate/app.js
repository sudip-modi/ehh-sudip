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