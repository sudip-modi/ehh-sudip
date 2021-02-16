actionSpace4mDom = {
    'actionSpace': document.getElementById('actionSpace'),
    'addButton': document.getElementById('add'),
    'delButton': document.getElementById('del')
}

window.addEventListener('load', () => {
    // const model = new ListModel(['node.js', 'react']),
  //  console.log("actionSpace Elements ", actionSpace4mDom);
   // actionEvent = new ActionEvent(actionSpace4mDom);
    actionEntity = new Entity(actionSpaceV2, document.getElementById('actionSpace'))
  //  actionControl = new Controller(actionSpace4mDom);
   // actionView = new ActionView(actionSpaceViewJson,actionSpace4mDom);
  //  console.log("controller", controller)
    console.log("actionSpaceViewJson", actionSpaceV2);
});