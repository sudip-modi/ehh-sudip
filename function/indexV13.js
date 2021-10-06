var response2;
if (window.location.href.includes("#state=ActionSpaceEditor")) {
  engine.processReq(publishAppscriptProjectFlowRequest);
} else if (localStorage.getItem("LoggedIn") === "true") {
  ActionController.onChangeRoute("action");
}
indexDB.set("actionSpaceModel", actionSpaceViewModel);
var viewModel = indexDB.get("actionSpaceModel");
response2 = viewModel.then((viewModelFromIndexDb) => {
  //  console.log("here", viewModelFromIndexDb);
  // expected output: "Success!"
  var response = viewModelFromIndexDb;
  console.log("here", response);
  //     localStorage.setItem('UsermyCollection','');localStorage.setItem('UsermyFiles','');localStorage.setItem('UserRecentFiles','');
  var collection = localStorage.getItem("UsermyCollection");
  if (collection !== null && document.getElementById("myCollection"))
    document.getElementById("myCollection").innerHTML = collection;
  var files = localStorage.getItem("UsermyFiles");
  if (files !== null && document.getElementById("myFiles"))
    document.getElementById("myFiles").innerHTML = files;
  var RecentFiles = localStorage.getItem("UserRecentFiles");
  if (RecentFiles !== null && document.getElementById("RecentFiles"))
    document.getElementById("RecentFiles").innerHTML = RecentFiles;
  return response;
});
console.log(viewModel);
function test(response) {
  //console.log(response);
  var actionSpaceElementInstanceIndom = document.getElementById(
    "actionSpaceContainer"
  );
  var actionSpaceViewInstance = new ActionView(
    response[0].model,
    actionSpaceElementInstanceIndom
  );
  //console.log(actionSpaceInstace._actionView.entity)
  var actionEventInstance = new ActionEvent(actionSpaceViewInstance, window);
  var actionSpaceController = new ActionController(
    actionSpaceViewInstance,
    response[0].model,
    actionEventInstance
  );
  //  var DOMJson = engine.executeSynReq(getKey);
  // console.log(DOMJson)
  // var actionSpaceElementInstanceIndom = document.getElementById('actionSpaceBody');

  //  var tempo3 = document.getElementById("actionSpaceBody");

  // console.log("here3", DOMJson);
  //console.log(HorizonticalMenuTemplateSchema,actionSpaceElementInstanceIndom)
  //console.log(actionSpaceViewModel[0].model);
}
//console.log(ActionView)
//window.onload = test;

var actionSpaceElementInstanceIndom = document.getElementById(
  "actionSpaceContainer"
);
var actionSpaceViewInstance = new ActionView(
  actionSpaceViewModel[0].model,
  actionSpaceElementInstanceIndom
);
//console.log(actionSpaceInstace._actionView.entity)
var actionEventInstance = new ActionEvent(actionSpaceViewInstance, window);
var actionSpaceController = new ActionController(
  actionSpaceViewInstance,
  actionSpaceViewModel[0].model,
  actionEventInstance
);
console.log(actionSpaceController);
