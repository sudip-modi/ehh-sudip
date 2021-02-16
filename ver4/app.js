actionSpace = {
    'actionSpace': document.getElementById('actionSpace'),
    'addButton': document.getElementById('add'),
    'delButton': document.getElementById('del')
}

window.addEventListener('load', () => {
    // const model = new ListModel(['node.js', 'react']),
 
  //  console.log("actionSpace Elements ", actionSpace);
    actionEvent = new EventEmitter(actionSpace);

   controller = new Controller(actionSpace);
  //  console.log("controller", controller)

});