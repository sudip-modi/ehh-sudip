/**
 * This file acts like a wrapper
 * Takes care of basic session Setup, loading dependecies as defined somewhere withIn the system.
 * It also act's as an Initater to actionView and other classes. 
 * This file when loaded should create a new actionSpace with basic setup in the dom it's loaded in.
 * Detect Features from the Config.Json
    Set Nessecary Key's in LocalStorage
    Init Listeners
    init Dom..Assingn a ID to each element of Dom.More like Content/Index scripts file
 */




var preloadCSSInhead = new Entity(preloadCSSInhead,document.getElementsByTagName('head')[0]);
//newBlock = Entity.create(actionEditor.actionEditorBlock,temp.entity)
//console.log(newBlock)
console.log(preloadCSSInhead.head)
//document.getElementsByTagName('head')[0].appendChild(preloadCSSInhead.entity);
console.log("all set and done")

var actionSpaceView_instance = document.createElement('actionSpaceView');
var actionSpace_Instance = new Entity(actionSpace, actionSpaceView_instance);

console.log("Pay attention to this Obect. We need to operation on this Instance", actionSpace_Instance);
document.getElementsByTagName('body')[0].appendChild(actionSpace_Instance.entity);



 