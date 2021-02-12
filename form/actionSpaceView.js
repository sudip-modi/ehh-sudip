
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
    },
    link: {
        rel: 'stylesheet',
        id: 'FontSheet',
      href: "https://fonts.googleapis.com/css2?family=Bai+Jamjuree&family=Montserrat&family=Open+Sans&family=Poppins"
    }
}
    
var actionSpace = {
    topMenu: [
        {
            name: 'div',
            contentEditable: true,
            class: 'menu-button ',
            lineNumbers: true,
            mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
            output: ['self', 'output'],
            state: 'idle',
            resize: true
        
        },
        {
            name: 'button',
            type: 'div',
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-align-right"></i>',
            'data-cmd': 'justifyRight'
        },
        {
            name: 'button',
            type: 'div',
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-align-left"></i>',
            'data-cmd': 'justifyLeft'
        },
        {
            name: 'button',
            type: 'button',
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-align-center"></i>',
            'data-cmd': 'justifyCenter'
        },
        {
            name: 'button',
            type: 'button',
            class: 'topbar-button',
            on: 'click',
            'innerHTML': '<i class="fas fa-align-justify"></i>',
            'data-cmd': 'justifyFull'
        },
        {
            name: 'button',
            type: 'button',
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-bold"></i>',
            'data-cmd': 'Bold'
        },
        {
            name: 'button',
            type: "button",
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-italic"></i>',
            "data-cmd": 'italic'

        }, {
            name: 'button',
            type: "button",
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-underline"></i>',
            "data-cmd": 'underline'

        },
        {
            name: 'button',
            type: "button",
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-list-ul"></i>',
            "data-cmd": 'insertUnorderedList'

        }, {
            name: 'button',
            type: "button",
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-list-ol"></i>',
            "data-cmd": 'insertOrderedList'
        }, {
            name: 'button',
            type: "button",
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-link"></i>',
            "data-cmd": 'createLink'
        }, {

            name: 'button',
            type: "button",
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-code"></i>',
            "data-cmd": 'showCode'
        }, {
            name: 'button',
            type: "button",
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-redo"></i>',
            "data-cmd": 'redo'
        }, {
            name: 'button',
            type: "button",
            class: 'topbar-button',
            'innerHTML': '<i class="fas fa-undo"></i>',
            "data-cmd": 'undo'
        }



    ],
    actionSpaceEditor: [
        {
            name: 'divBlock',
            contentEditable: true,
            class: 'div-block ',
            lineNumbers: true,
            innerText: "Write whatever you can think of...",
            mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
            output: ['self', 'output'],
            state: 'idle',
            resize: true
        },
       
    ]

}

var toolBarStyleSheet = {
    rules: [
        ".topbar { overflow: hidden; background: var(--background); position: fixed; top: 0; width: 100 %; font - size: 18px; z - index: 10;",
        ".topbar - row { max - width: 950px; margin: auto; display: block; text - align: right;"

    ]
    
}          
    
console.log("Loaded in Dom ",preloadCSSInhead,actionSpace,toolBarStyleSheet)

