
var preload = {
    beautyCss: [
        {
            name: 'link',
            rel: 'stylesheet',
            id: 'FontSheet',
            type: "text/css",
            href: "https://fonts.googleapis.com/css2?family=Bai+Jamjuree&family=Montserrat&family=Open+Sans&family=Poppins",
            class: 'preloadCSS'
        }
    ],
    scripts: [
        {
            name: 'script',
            type: 'text/javascript',
            class: 'preloadScript',
            id: 'actionSpaceView.js',
            //type: "text/javascript",
            src: "function/actionSpaceView.js"   
        },
        {
            name: 'script',
            type: 'text/javascript',
            class: 'preloadScript',
            id: 'actionSpaceView.js',
            //type: "text/javascript",
            src: "function/actionEventController.js"
        },
    ],
    form: [
        {
            name: 'script',
            type: 'text/javascript',
            class: 'preloadScript',
            id: 'actionSpaceForm',
            src: "form/actionSpaceForm.js"
        }
      
    ]
}
var x = document.activeElement.tagName;

window.onload = loadActionEditor();

function loadActionEditor() { 
    var actionSpacePreloads = new Entity(preload, document.getElementsByTagName('actionSpacePreloads')[0]);
    //console.log("actionSpacePreloads Loaded", actionSpacePreloads.entity);
   
    var actionSpace1 = new Entity(actionSpace, document.getElementsByClassName('actionSpace')[0]);
    console.log("actionEditor Loaded", actionSpace1.entity);


}