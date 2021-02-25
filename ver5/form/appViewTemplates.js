var basicLayout = {
    actionSpace: {
        name: 'div',
        class: "actionSpace",
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
                    'data': 'action',
                    'href': "#action",

                },
                {
                    'name': 'a',
                    'desc': 'this leads to actionPage',
                    'id': 'people button',
                    'innerText': "people",
                    'class': 'tabBtn',
                    'data': 'people',
                    'href': "#people",

                }, {
                    'name': 'a',
                    'desc': 'this leads to actionPage',
                    'id': 'people button',
                    'innerText': "settings",
                    'class': 'tabBtn',
                    'data': 'setting',
                    'href': "#settings",
                },



            ],


        },
        leftSidebar: {
            name: "div",
            class: "box leftSidebar ",
            //     innerText: "left-sidebar", 
            id: 'leftSidebar'
        },
        actionSpaceEditor: {
            toolList: [
                {
                    name: 'button',
                    id: "add",
                    class: "material-icons",
                    'innerText': "add",
                    //'onclick': "document.execCommand('bold',false,null)",
                    'data-command': `[{"command":"new","entity": "actionContent","value":"innerHTML"}]`,
                    // 'data': `process.act(entity, insertBreakAtPoint, document)`,
                },
                {
                    name: 'button',
                    id: "save",
                    class: "material-icons",
                    'innerText': "save",
                    //'data': '[{ "call": "StorageHelper.saveToStorage(document.getElementById(actionContent).getAttribute(name),document.getElementById(actionContent).innerHTMl)" }]',
                    'data-command': `[{"command":"save","entity": "actionContent","value":"innerHTML","name":"actionContent.firstSibling.getAttribute('id')"}]`,


                },
                //'onclick': `StorageHelper.saveToStorage(,`,

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
                    'onclick': ""
                },
                {
                    name: 'button',
                    id: "delete",
                    class: 'material-icons',
                    'innerText': "delete"
                },
                {
                    name: 'select',
                    id: "delete",
                    innerHTML: `<select name="cars" id="cars">
                   <option value="rich text view">rich text view</option>
                   <option value="Code">code view</option>
                   <option value="opel">tree view</option>
                   <option value="output Preview">output Preview</option>
                 </select>`

                },


            ],
            editor: [
                {
                    actionContentTitle: {
                        name: 'div',
                        innerText: actionStorySample.name,

                    },
                    name: 'actionStory',
                    'class': 'actionStory',
                    'actionContent': actionStorySample,
                    // mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
                    //  output: ['self', 'output'],
                    state: 'idle', //['selectable','selected','editable','inEdit','draggable','inDrag','locked','hidden']
                    id: "actionStory"
                },

            ],

        },
        rightSidebar: {
            name: "div",
            class: "box rightSidebar",
            innerText: ""
        },

        footer: {
            name: "div",
            class: "footer",
            innerHTML: `made with 🧠 & 🧡, < br > during 🌧️ at <b>shunya.ek</b>, goa, india.< br >with help from google & the world-wide - web tech community.`
        }
    }



}
var actionStoryTemplate = {
    "name": 'actionStoryTemplate_title',
    "id": 'actionStoryTemplate',
    innerHTML: actionUserContent,
    //textContent: "this is a template actionStory",
    class: 'editable actionContent',
    'before': 'name',
     contentEditable: true
}

var HorizonticalMenuTemplateSchema = {
    'menu': {
        "name": "topmenu",
        'id':"topmenu",
        "li": [
            {'name': 'a',
                'href': '#action',  
                'textContent': 'action',
            },
            {
                'name': 'a',
                'href': '#people',
                'textContent': 'People'
            },
            {
                'name': 'a',
                'href': '#setting',
                'textContent': 'setting'
            },
            {
                'name': 'a',
                'href': '#about',
                'textContent': 'about',
              
            },
              {
                  'name': 'button',
                 'class': "material-icons",
                  'textContent': 'more_vert',

            }
        ]
       
    }

}
var headerModelSchemaV1 = {
    header: {
        'name': 'ul',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'header',
        //  'innerText':"header",
        'brand': {
            'name': 'span',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'brand',
            'textContent': "[ everything happens here ]",
            'class': 'brand'
        },
        'input': {
            'name': 'input',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'actionSearch',
            'placeholder': "search here...",
            'class': 'searchBar',
            'autocomplete': "off"
        },
        'menu': {
            "name": "menu",
            'id': "topmenu",
            'class': 'row',
            "span": [
                {
                    'name': 'a',
                    'href': '#action',
                    'textContent': 'action',
                },
                {
                    'name': 'a',
                    'href': '#people',
                    'textContent': 'People'
                },
                {
                    'name': 'a',
                    'href': '#setting',
                    'textContent': 'setting'
                },
                {
                    'name': 'a',
                    'href': '#about',
                    'textContent': 'about',

                },
                {
                    'name': 'button',
                    'class': "material-icons",
                    'textContent': 'more_vert',

                }
            ]

        }



    }
}

var iconBar = {
    'name': "iconBar",
   // 'style':"visibility:hidden",
    'id': 'iconBar',
    'class': "material-icons",
    'textContent': 'drag_indicator',
    "iconBarTools":[
    {
        'name': 'button',
        'class': "material-icons",
        'href': '#create',
        'textContent': 'create',
    },
    {
        'name': 'button',
        'href': '#people',
        'class': "material-icons",
        'textContent': 'inventory_2'
    },
    {
        'name': 'button',
        'href': '#setting',
        'class': "material-icons",
        'textContent': 'save'
        },
        {
            'name': 'button',
            'class': "material-icons",
            'textContent': 'share',

        },
        {
            'name': 'button',
            'class': "material-icons",
            'textContent': 'delete',

        }
    ]
}

var richTextBar = {
    'name': "div",
    'id': 'richTextBar',
    'class': "material-icons",
    'textContent': 'add',
    "iconBarTools": [
        {
            'name': 'button',
            'class': "material-icons",
            'href': '#title',
            'textContent': 'notes',
        },
        {
            'name': 'button',
            'href': '#text_format',
            'class': "material-icons",
            'textContent': 'title'
        },
        {
            'name': 'button',
            'href': '#insert_photo',
            'class': "material-icons",
            'textContent': 'insert_photo'
        },
        {
            'name': 'button',
            'class': "material-icons",
            'textContent': 'code',

        },
          {
            'name': 'button',
            'class': "material-icons",
              'textContent': 'attach_file',

        },
        {
            'name': 'button',
            'class': "material-icons",
            'textContent': 'horizontal_rule',

        },
        {
            'name': 'button',
            'class': "material-icons",
            'textContent': 'find_replace',

        },
        {
            'name': 'button',
            'class': "material-icons",
            'textContent': 'grid_4x4',

        },
        {
            'name': 'button',
            'class': "material-icons",
            'textContent': 'grid_4x4',

        }
    ]
}

var actionSpaceModel = {
    'actionSpace': {
        //RouteNavBar to be added.
        name: "section",
        id: "actionSpace",
        'iconBar': iconBar,
        "loadedRouteTitle": {
            "name": "div",
            'id':"loadedRouteTitle",
            "contentEditable":"true",
            'textContent': actionStoryTemplate.name
        },
     //   'textContent': "yo",
       // 'toolbar': iconBar,
        'editor': {
            'richTextBar': richTextBar,
            'name': 'div',
            'id': "editor",
            //'contentEditable':'true',
            "ol": [
                {   'id':'contentBlock',
                    'textContent': actionStoryTemplate
                },
],      
        },
       //bottom bar like textNote to be added.
    }
    }
var sidebar = {
    'iconBar': {
        "name": "ul",
        "menu": [
            {
                'name': 'button',
                'class': "material-icons",
                'href': '#action',
                'innertext': 'add',
            },
            {
                'name': 'button',
                'href': '#people',
                'class': "material-icons",
                'innerText': 'publish'
            },
            {
                'name': 'button',
                'href': '#setting',
                'class': "material-icons",
                'innerText': 'save'
            },
            {
                'name': 'button',
                'class': "material-icons",
                'innerText': 'delete',

            }
        ]

    }

}

var blockModelSchema= {
    "name": "div",
    "id": "blockModelSchma",
    "blockType":"html"
}

var typeOfBlocks = ["richtext,json,tree,html,javascript,table,image,link,divider,style,script,@mention,embed,button,breadcrumb,annotation"]
//should always be wrapped around a List/collection
var itemModelSchema = {
    "name": "div",
    'class': "card",
    "item": [
        {
            "name": "li",
            'class': "card",
            "textContent" :"Item1",
            "innerItem": [


            ]
        },
        {
            "name": "li",
            'class': "card",
            "textContent": "Item1 Description",
            "innerItem": [


            ]
        },
    ]
}
var itemListModelSchema = {
    itemList: {
        name: "ol",
        id: "itemListModelSchema",
      //  "class": "material-icons",
        "textContent":"shortcut",
        "li": itemModelSchema,
    }
}
    //hotKeyAutoSuggestItemModelSchema
var hotKeyAutoSuggestItemViewSchema = [
    {
        'name': 'span',
        "id": "listItemIcon",
        'class': "material-icons",
        'textContent': 'shortcut',
    },
    {
        'name': 'span',
        "id": "listItemId",
        'textContent': '! html',
    },
    {
        'name': 'div',
        "id": "listItemId",
        'textContent': 'List Item Content',
    },
]

var richtextToolBarButtonModel = [
        {
        name: 'select',
        id: 'TextThemeStyleList',
        class: 'toolTip',
        data:"Select Text + Choose a text Style, or save a new style...",
        option: [
            {
                name: 'option',
                id: 'TextThemeStyleitem1',
                textContent: "H1",
                class: "H1",
            },
            {
                name: 'option',
                id: 'TextThemeStyleitem2',
                textContent: "H2",
                class: "H2",
            },

            {
                name: 'option',
                id: 'TextThemeStyleitem2',
                textContent: "H3",
                class: "H3",
            },
            {
                name: 'option',
                id: 'TextThemeStyleitem2',
                textContent: "Select Text and Save a new Template",
                
            },

        ]
        },
         {
        name: 'select',
        id: 'TextFontList',
        class: 'toolTip',
        data: "Select font style",
        option: [
            {
                name: 'option',
                id: 'TextThemeStyleitem1',
                textContent: "Helvitica",
                class: "selectText",
            },
            {
                name: 'option',
                id: 'TextThemeStyleitem2',
                textContent: "Arial",
                class: "H2",
            },

            {
                name: 'option',
                id: 'TextThemeStyleitem2',
                textContent: "H3",
                class: "H3",
            },
            {
                name: 'option',
                id: 'TextThemeStyleitem2',
                textContent: "Select Text and Save a new Template",

            },

        ]
    }

    ]


