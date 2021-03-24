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
var newMenu = new Entity(actionSpaceContainerModelSchemaVer_2, actionSpaceElementInstanceIndom);
var toggler = document.getElementsByClassName("parent");
var i;
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("parent-down");
    });
}
var hamMenu1 = document.getElementById('MainHeaderHamburger1')
hamMenu1.onclick = function () {
    document.getElementById('navigationSection').classList.toggle('hide')
    document.getElementById('navigationSection').classList.toggle('active')
}
// //console.log(newMenu.input);
// //console.log(newMenu.output);
//var newSideBar = new Entity(leftSidebarModelSchemaV1, actionSpaceElementInstanceIndom)
//var newSideBar = new Entity(actionWorkSpaceModelSchemaV1, actionSpaceElementInstanceIndom)
// var actionSpace35 = new Entity(actionSpaceModel, actionSpaceElementInstanceIndom)


// var autoSuggestCard = new Entity(itemListModelSchema, document.getElementById('editor'));