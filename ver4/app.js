actionSpace4mDom = {
    'actionSpace': document.getElementById('actionSpace'),
    'addButton': document.getElementById('add'),
    'delButton': document.getElementById('del')
}

window.addEventListener('load', () => {
    // const model = new ListModel(['node.js', 'react']),
 
    console.log("actionSpace Elements ", actionSpace4mDom);
    actionEvent = new EventEmitter(actionSpace4mDom);
  controller = new Controller(actionSpace4mDom);
  //  console.log("controller", controller)

});