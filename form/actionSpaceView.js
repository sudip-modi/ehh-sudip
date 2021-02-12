
/**
 * actionSpaceObject is the root Object of actionSpace.
 * It has all the scripts/divs/json/css needed for the actionSpace to function.
 * 
 */
var preloadCSSInhead = {
    link: {
        rel: 'stylesheet',
        id: 'actionEditor.css',
        type: "text/css",
        href: "beauty/action.css"
    }
}

var actionSpace = {
    divBlock: [
        {
            name: 'div',
            contentEditable: true,
            class: 'div-block ',
            lineNumbers: true,
            innerText: "Write whatever you can think of...",
            //mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
            //output: ['self', 'output'],
            state: 'idle',
        },
    ]
}