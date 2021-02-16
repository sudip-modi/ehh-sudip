 actionSpace = {
            'actionSpace': document.getElementById('actionSpace'),
            'addButton': document.getElementById('plusBtn'),
            'delButton': document.getElementById('minusBtn')
        }
  console.log("actionSpace Elements ",actionSpace);
window.addEventListener('load', () => { 
   // const model = new ListModel(['node.js', 'react']),
       
  
    actionEvent = new EventEmitter(actionSpace);
   
    controller = new Controller(actionEvent, actionSpace);
    console.log("controller",controller)
   
});