var actionSpaceElementInstanceIndom = document.getElementById('actionSpaceContainer')
//console.log(HorizonticalMenuTemplateSchema,actionSpaceElementInstanceIndom)
//console.log(actionSpaceViewModel[0].model);
var actionSpaceInstance = new ActionView(actionSpaceViewModel[0].model, actionSpaceElementInstanceIndom);
//console.log(actionSpaceInstace._actionView.entity)
var actionSpaceController = new ActionController(actionSpaceInstance);
