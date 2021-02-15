/**
 * 
 */
var list = document.getElementById('list');

window.addEventListener('load', () => {
 //   const model = new ListModel(['node.js', 'react']),
        _actionSpace = {
            'actionSpace': document.getElementById('actionSpace'),
            'addButton': document.getElementById('plusBtn'),
            'delButton': document.getElementById('minusBtn')
        }
    actionEvent = new ActionEventEmitter(_actionSpace)// Controller to be added
        
    console.log(actionEvent);
    //actionController = new ActionController(actionEvent);


       //  view = new ListView(model, actionSpace),
      //  controller = new ListController(model, view);

   // view.show();
});