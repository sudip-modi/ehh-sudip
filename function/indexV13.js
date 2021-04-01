indexDB.set('actionSpaceModel',actionSpaceViewModel);
var viewModel = indexDB.get('actionSpaceModel');
    viewModel.then((viewModelFromIndexDb) => {
      //  console.log("here", viewModelFromIndexDb);
    // expected output: "Success!"
    var actionSpaceElementInstanceIndom = document.getElementById('actionSpaceContainer');
    var actionSpaceInstance = new ActionView(viewModelFromIndexDb[0].model, actionSpaceElementInstanceIndom);
    //console.log(actionSpaceInstace._actionView.entity)
    var actionEventInstance = new ActionEvent(actionSpaceInstance, window);
    var actionSpaceController = new ActionController(actionSpaceInstance, viewModelFromIndexDb[0].model, actionEventInstance);

});

var DOMJson = engine.reqProcessor(getInnerHtml);
// console.log(DOMJson)
var tempo3 = document.getElementById("actionSpaceBody");

console.log("here3", tempo3);
//console.log(HorizonticalMenuTemplateSchema,actionSpaceElementInstanceIndom)
//console.log(actionSpaceViewModel[0].model);
