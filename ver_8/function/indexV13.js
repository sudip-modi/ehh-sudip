var actionSpaceElementInstanceIndom = document.getElementById('actionSpaceContainer')
//console.log(HorizonticalMenuTemplateSchema,actionSpaceElementInstanceIndom)
//console.log(actionSpaceViewModel[0].model);
var actionSpaceInstance = new ActionView(actionSpaceViewModel[0].model, actionSpaceElementInstanceIndom);
//console.log(actionSpaceInstace._actionView.entity)
var actionSpaceController = new ActionController(actionSpaceInstance);
var toggler = document.getElementsByClassName("parent");
var i;
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("parent-down");
    });
}