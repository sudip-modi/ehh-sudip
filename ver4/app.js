actionSpace4mDom = {
    'actionSpace': document.getElementById('actionSpace'),
    'addButton': document.getElementById('add'),
    'delButton': document.getElementById('del')
}

window.addEventListener('load', () => {
    // const model = new ListModel(['node.js', 'react']),
    console.log("actionSpace Elements ", actionSpace4mDom);
    actionEvent = new actionEventController(actionSpace4mDom);
    actionControl = new Controller(actionSpace4mDom);
    actionView = new actionView();
  //  console.log("controller", controller)

});