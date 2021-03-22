/** 
 * this is the init file that loads the actionSpace in Dom
 */

class ActionSpaceV10 {
    constructor(view, model, controller) {
        
    }
    intit() {
        
    }
}

var ActionSpaceV10Instance = new ActionSpaceV10();


var actionSpaceElementInstanceIndom = document.getElementById('actionSpaceContainer')
//console.log(HorizonticalMenuTemplateSchema,actionSpaceElementInstanceIndom)
 var newMenu = new Entity(headerModelSchemaV1, actionSpaceElementInstanceIndom);
// //console.log(newMenu.input);
// //console.log(newMenu.output);
//var newSideBar = new Entity(leftSidebarModelSchemaV1, actionSpaceElementInstanceIndom)
var newSideBar = new Entity(actionWorkSpaceModelSchemaV1, actionSpaceElementInstanceIndom)
// var actionSpace35 = new Entity(actionSpaceModel, actionSpaceElementInstanceIndom)


// var autoSuggestCard = new Entity(itemListModelSchema, document.getElementById('editor'));