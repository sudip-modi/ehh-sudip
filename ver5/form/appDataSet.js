
var actionSpaceLayoutV1 = {

    header: {
        'name': 'div',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'header',
        'class': 'bar-hozontical',
      //  'innerText':"header",
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
        'actionLinkBar': [
            {
                'name': 'a',
                'desc': 'this leads to actionPage',
                'id': 'action button',
                'innerText': "action",
                'class': 'tabBtn',
                'data- element': 'action',
                'href': "#action",

            },
            {
                'name': 'a',
                'desc': 'this leads to actionPage',
                'id': 'people button',
                'innerText': "people",
                'class': 'tabBtn',
                'data- element': 'people',
                'href': "#people",

            }, {
                'name': 'a',
                'desc': 'this leads to actionPage',
                'id': 'people button',
                'innerText': "settings",
                'class': 'tabBtn',
                'data- element': 'setting',
                'href': "#settings",
            },



        ],


    },
    div: {
        name: "div",
        class: "left-sidebar",
        innerText:"left-sidebar"
    },
    actionSpaceV2 : {
        toolBar: {
            name: 'toolBar',
            display: "none",
            border: "solid 1px #a6d8a8",
            resize: 'both',
            menu: [
                {
                    name: 'button',
                    id: "add",
                    class: "material-icons",
                    'innerText': "add"
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
                    id: "format_bold",
                    class: "material-icons",
                    'innerText': "format_bold",
                    'data-cmd': 'Bold',
                    'onclick': "document.execCommand('bold',false,null)"
                },
                {
                    name: 'button',
                    id: "format_italic",
                    class: 'material-icons',
                    'innerText': 'format_italic',
                    'data-cmd': 'italic',
                    'onclick': "document.execCommand('italic',false,null)"
                }, {
                    name: 'button',
                    id: "underline",
                    class: 'material-icons',
                    'innerText': 'format_underline',
                    'data-cmd': 'underline',
                    'onclick': "document.execCommand('underline',false,null)"
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
    },
    rightNavigationBar: {
        name: "div",
        class: "right-sidebar",
        innerText: "right-sidebar"
    },
    footer: {
        name: "div",
        class: "right-sidebar",
        innerHTML: "made with 🧠 & 🧡, < br > during 🌧️ at<b>shunya.ek</b>, goa, india.< br >with help from google & the world-wide - web tech community."
    }
    //class= "tabBtn" data- element="action" href = "#action"   
}
var actionSapceLayoutV2 = {
    header: {
        'name': 'div',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'header',
        'class': 'bar-hozontical',
        //  'innerText':"header",
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
        'actionLinkBar': [
            {
                'name': 'a',
                'desc': 'this leads to actionPage',
                'id': 'action button',
                'innerText': "action",
                'class': 'tabBtn',
                'data- element': 'action',
                'href': "#action",

            },
            {
                'name': 'a',
                'desc': 'this leads to actionPage',
                'id': 'people button',
                'innerText': "people",
                'class': 'tabBtn',
                'data- element': 'people',
                'href': "#people",

            }, {
                'name': 'a',
                'desc': 'this leads to actionPage',
                'id': 'people button',
                'innerText': "settings",
                'class': 'tabBtn',
                'data- element': 'setting',
                'href': "#settings",
            },



        ],


    },
    leftSidebar: {
        name: "div",
        class: "left-sidebar",
        innerText: "left-sidebar"
    },
    actionSpaceV2: {
        toolBar: {
            name: 'toolBar',
            display: "none",
            border: "solid 1px #a6d8a8",
            resize: 'both',
            menu: [
                {
                    name: 'button',
                    id: "add",
                    class: "material-icons",
                    'innerText': "add"
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
                    id: "format_bold",
                    class: "material-icons",
                    'innerText': "format_bold",
                    'data-cmd': 'Bold',
                    'onclick': "document.execCommand('bold',false,null)"
                },
                {
                    name: 'button',
                    id: "format_italic",
                    class: 'material-icons',
                    'innerText': 'format_italic',
                    'data-cmd': 'italic',
                    'onclick': "document.execCommand('italic',false,null)"
                }, {
                    name: 'button',
                    id: "underline",
                    class: 'material-icons',
                    'innerText': 'format_underline',
                    'data-cmd': 'underline',
                    'onclick': "document.execCommand('underline',false,null)"
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
    },
    rightNavigationBar: {
        name: "div",
        class: "right-sidebar",
        innerText: "right-sidebar"
    },
    footer: {
        name: "div",
        class: "right-sidebar",
        innerHTML: "made with 🧠 & 🧡, < br > during 🌧️ at<b>shunya.ek</b>, goa, india.< br >with help from google & the world-wide - web tech community."
    }
}
    // < actionLinkBar >
    //         <a class="tabBtn" data-element="action" href="#action">action</a>
    //         <a class="tabBtn" data-element="people" href="#people">people</a>
    //         <a class="tabBtn" data-element="setting" href="#setting">setting</a>
    //     </actionLinkBar >
//    < input id = "actionSearch" type = "text" class="searchBar" value = " search here..." >
var element = { input: { type: "checkbox" } }

var basicLayout = {
    actionSpace: {
        name: 'div',
        class: "actionSpace",
        resize:true,
       // innerText: "ActionSpace",
        header: {
            'name': 'div',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'header',
            'class': 'box header',
            //  'innerText':"header",
            'brand': {
                'name': 'div',
                'desc': 'This is a horizontical bar, more functionality of this bar to be added',
                'id': 'brand',
                'innerText': "[ everything happens here ]",
                'class': 'brand'
            },
            'input': {
                'name': 'input',
                'desc': 'This is a horizontical bar, more functionality of this bar to be added',
                'id': 'actionSearch',
                'placeholder': "search here...",
                'class': 'searchBar'
            },
            'actionLinkBar': [
                {
                    'name': 'a',
                    'desc': 'this leads to actionPage',
                    'id': 'action button',
                    'innerText': "action",
                    'class': 'tabBtn',
                    'data- element': 'action',
                    'href': "#action",

                },
                {
                    'name': 'a',
                    'desc': 'this leads to actionPage',
                    'id': 'people button',
                    'innerText': "people",
                    'class': 'tabBtn',
                    'data- element': 'people',
                    'href': "#people",

                }, {
                    'name': 'a',
                    'desc': 'this leads to actionPage',
                    'id': 'people button',
                    'innerText': "settings",
                    'class': 'tabBtn',
                    'data- element': 'setting',
                    'href': "#settings",
                },



            ],


        },
        leftSidebar: {
            name: "div",
            class: "box leftSidebar",
            innerText: "left-sidebar"
        },
        actionSpaceEditor: {
            content: [
                {
                    name: 'content',
                    contentEditable: true,    
                    'class': 'content',
                    lineNumbers: true,
                    innerText: actionContent,
                    // mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
                    //  output: ['self', 'output'],
                    state: 'idle', //['selectable','selected','editable','inEdit','draggable','inDrag','locked','hidden']
                    resize: true,
                    class: "tooltip",
                    id: "richText"
                },
                 {
                    name: 'ul',
                    id: "autocomplete",
                    class: 'card',
                    position: 'next to Caret',
                //     innerHTML: 'inputMatchesFound',
                    
                },
            ],
            richTextToolBar: {
                name: 'richTextToolBar',
                display: "none",
                border: "solid 1px #a6d8a8",
                resize: 'both',
                menu: [
                    {
                        name: 'button',
                        id: "select_all",
                        class: "material-icons",
                        'innerText': "select_all",
                        'onclick': "document.execCommand('bold',false,null)"
                        // 'data': `process.act(entity, insertBreakAtPoint, document)`,

                    },
                    {
                        name: 'button',
                        id: "save",
                        class: "material-icons",
                        'innerText': "save",
                        'onclick': `StorageHelper.saveToStorage(document.getElementById('sampleNote#1').getAttribute('id'),document.getElementById('sampleNote#1').innerHTML)`,
                    },
                    {
                        name: 'button',
                        id: "format_bold",
                        class: "material-icons",
                        'innerText': "format_bold",
                        'onclick': "document.execCommand('bold',false,null)"
                       // 'data': `process.act(entity, insertBreakAtPoint, document)`,
                        
                    },
                    {
                        name: 'button',
                        id: "format_italic",
                        class: 'material-icons',
                        'innerText': 'format_italic',
                        'data-cmd': 'italic',
                        'data': "process.act('italic', false, null, execCommand(), document)",
                    }, {
                        name: 'button',
                        id: "underline",
                        class: 'material-icons',
                        'innerText': 'format_underline',
                        'data-cmd': 'underline',
                        'onclick': "document.execCommand('underline',false,null)"
                    },
                    {
                        name: 'button',
                        id: "delete",
                        class: 'material-icons',
                        'innerText': "delete"
                    },
                    {
                        name: 'button',
                        id: "drag_indicator",
                        class: 'material-icons',
                        'innerText': "drag_indicator"
                    },

                ]
            },
        },
        rightSidebar: {
            name: "div",
            class: "box rightSidebar",
            innerText: "right-sidebar"
        },
      
        footer: {
            name: "div",
            class: "footer",
            innerHTML: `made with 🧠 & 🧡, < br > during 🌧️ at <b>shunya.ek</b>, goa, india.< br >with help from google & the world-wide - web tech community.`
        }
    }
   
        

}
var actionSpaceBasicV1 = {
   actionSpaceEditor: { 
        name: 'editor',
       // contentEditable: true,
        'class': 'content tooltip',
        'before':"name",
        lineNumbers: true,
        innerText: actionContent,
         'mimeMode': 'HTML',//['html', 'richText', 'json', 'css', 'javascript'],
        //  output: ['self', 'output'],
        state: 'idle', //['selectable','selected','editable','inEdit','draggable','inDrag','locked','hidden']
      //  class: "tooltip",
        id: "richText"
    }
}

// var userStates = [login, loginSuccess, loginError, logout, logoutSuccess]
// var ActionButtonProps ={
//     dataTestID: string,
//   disabled?: boolean,
//   handler: MouseEventHandler,
//   icon: Icon,
//   label: string,
//   text: string,
// }

// var button = (
//     <button
//         data-testid={dataTestID}
//         className="action-button"
//         aria-label={label}
//         onClick={handler}
//         disabled={disabled}
//         title={label}
//     >
//         <IconCmp
//             size={18}
//             className="action-button-icon"
//             color={iconColor}
//             aria-hidden="true"
//             focusable="false"
//         />
//         <span>{text}</span>
//     </button>
// )
// console.log(button)