
var actionSpaceV2 = {
    toolBar: {
        name: 'toolBar',
        display: "none",
        border: "solid 1px #a6d8a8",
        resize: 'both',
        menu: [
            {
                name: 'button',
                id:"add",
                class: "material-icons",
                'innerText':"add"
            },
            {
                name: 'button',
                id: "del",
                class: 'material-icons',
                'innerText': 'undo'
            }, {
                name: 'button',
                id: "redo",
                class: 'material-icons',
                'innerText': 'redo'
            },
            {
                name: 'button',
                id: "delete",
                class: 'material-icons',
                'innerText': "delete"
                
            },
            
        ]
    },
    richTextToolBar: {
        name: 'richTextToolBar',
        display: "none",
        border: "solid 1px #a6d8a8",
        resize: 'both',
        menu: [
            {
                name: 'button',
                id:"format_bold",
                class: "material-icons",
                'innerText':"format_bold",
                'data-cmd': 'Bold',
                'onclick':"document.execCommand('bold',false,null)"
            },
            {
                name: 'button',
                id: "format_italic",
                class: 'material-icons',
                'innerText': 'format_italic',
                'data-cmd': 'italic',
                'onclick':"document.execCommand('italic',false,null)"
            }, {
                name: 'button',
                id: "underline",
                class: 'material-icons',
                'innerText': 'format_underline',
                'data-cmd': 'underline',
                'onclick':"document.execCommand('underline',false,null)"
            },
            {
                name: 'button',
                id: "delete",
                class: 'material-icons',
                'innerText': "delete" 
            },
            
        ]
    },

    actionSpaceEditor: [
        {
            name: 'content',
            contentEditable: true,
            class: 'richText',
            lineNumbers: true,
            innerText: actionContent,
            // mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
            //  output: ['self', 'output'],
            state: 'idle', //['selectable','selected','editable','inEdit','draggable','inDrag','locked','hidden']
            resize: true,
           
            id: "richText"
        },
    ]
}

var actionContent = {
    innerText : "I was changed",
    class: 'richText',
  //  contentEditable: true
}

var preloadV1 = {
    beautyCss: [
        {
            name: 'link',
            rel: 'stylesheet',
            id: 'stylesheet',
            type: "text/css",
            href: "beauty/testing.css",
            class: 'preloadCSS'
        },
        {
            name: 'link',
            rel: 'FontSheet',
            id: 'FontSheet',
            type: "text/css",
            href: "https://fonts.googleapis.com/css2?family=Bai+Jamjuree&family=Montserrat&family=Open+Sans&family=Poppins",
            class: 'preloadCSS'
        },
        {
            name: 'link',
            rel: 'IconSheet',
            id: 'IconSheet',
            href: "https://fonts.googleapis.com/icon?family=Material+Icons",
            class: 'preloadCSS'
        },

    ],
    scripts: [
        {
            name: 'script',
            type: 'text/javascript',
            class: 'preloadScript',
            id: 'actionHelpers.js',
            type: "text/javascript",
            //src: "function/actionView.js"
        },
    ],
    form: [
        {
            name: 'script',
            type: 'text/javascript',
            class: 'preloadScript',
            id: 'snippets.js',
            //type: "text/javascript",
            src: "form/snippets.js"
        },
        {
            name: 'script',
            type: 'text/javascript',
            class: 'preloadScript',
            id: 'sysdataSet.js',
            //type: "text/javascript",
            src: "form/sysdataSet.js"
        },
        
    ]
}

var actionSpaceLayoutV1 = {

    header: {
        'name': 'div',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'header',
        'class': 'bar-hozontical',
        'innerText':"header",
        'brand': {
            'name': 'div',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'header',
            'innerText': "[ everything happens here ]",
            'class': 'bar-hozontical'
        },
        'input': {
            'name': 'input',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'actionSearch',
            'value': "search here...",
            'class': 'searchBar'
        },
        'div': {
            'name': 'div',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'actionLinkBar',
            'class': 'linkBar',
            'options': [
                 {
                    'name': 'button',
                    'desc': 'this leads to actionPage',
                    'id': 'action button',
                    'innerText': "action",
                    'class': 'tabBtn',
                    'data- element': 'action',
                    'href':"#action",
                    
                },
                 {
                        'name': 'button',
                        'desc': 'this leads to actionPage',
                        'id': 'people button',
                     'innerText': "people",
                        'class': 'tabBtn',
                     'data- element': 'people',
                     'href': "#people",
                }, {
                    'name': 'button',
                    'desc': 'this leads to actionPage',
                    'id': 'people button',
                    'innerText': "people",
                    'class': 'tabBtn',
                    'data- element': 'setting',
                    'href': "#settings",
                },
                  
                

            ],

            
            
        },


    },
    
    //class= "tabBtn" data- element="action" href = "#action"
    
    
}

    // < actionLinkBar >
    //         <a class="tabBtn" data-element="action" href="#action">action</a>
    //         <a class="tabBtn" data-element="people" href="#people">people</a>
    //         <a class="tabBtn" data-element="setting" href="#setting">setting</a>
    //     </actionLinkBar >
//    < input id = "actionSearch" type = "text" class="searchBar" value = " search here..." >


console.log(actionSpaceLayoutV1)