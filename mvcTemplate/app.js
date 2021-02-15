/**
 * 
 */
var list = document.getElementById('list');

window.addEventListener('load', () => {



 //   const model = new ListModel(['node.js', 'react']),
        actionSpace = {
            'list': document.getElementById('list'),
            'addButton': document.getElementById('plusBtn'),
            'delButton': document.getElementById('minusBtn')
        }
    actionEvent = new ActionEventEmitter(actionSpace)// Controller to be added
    


       //  view = new ListView(model, actionSpace),
      //  controller = new ListController(model, view);

   // view.show();
});