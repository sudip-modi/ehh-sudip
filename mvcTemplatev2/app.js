

window.addEventListener('load', () => { 
   // const model = new ListModel(['node.js', 'react']),
        actionSpace = {
            'actionSpace': document.getElementById('actionSpace'),
            'addButton': document.getElementById('plusBtn'),
            'delButton': document.getElementById('minusBtn')
        }
    console.log(actionSpace);
    actionEvent = new EventEmitter(actionSpace);
    //console.log("actionEvent", actionEvent);
    //view = new View(model, actionSpace),
    controller = new Controller(actionEvent, actionSpace);
    //console.log(controller)
    //view.show();
});