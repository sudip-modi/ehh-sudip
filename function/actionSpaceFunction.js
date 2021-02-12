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


ehhAppOutput = document.createElement('ehhOutput');

var preloadCSSInhead = new Entity(preloadCSSInhead, document.getElementsByTagName("head")[0]);
//newBlock = Entity.create(actionEditor.actionEditorBlock,temp.entity)
//console.log(newBlock)
//console.log(temp.entity)
document.getElementsByTagName('head')[0].appendChild(preloadCSSInhead.entity);
console.log("all set and done")
//console.log(temp.output);

 