var actionStoryTemplate = {
    name: 'actionStoryTemplate',
    id: 'actionStoryTemplate',
    innerHTML: "this is a template actionStory",
    class: 'editable actionContent',
    'before': 'name'
    //  contentEditable: true
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
            "name": "ul",
            'id': "topmenu",
            'class': 'row',
            "li": [
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
    'iconBar': {
        "name": "ul",
        "menu": [
            {
                'name': 'button',
                'class': "material-icons",
                'href': '#action',
                'textContent': 'add',
            },
            {
                'name': 'button',
                'href': '#people',
                'class': "material-icons",
                'textContent': 'publish'
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
                'textContent': 'delete',

            }
        ]

    }

}
var actionSpaceModel = {
    'actionSpace': {
        name: "section",
        id: "actionSpace",
     //   'textContent': "yo",
       // 'toolbar': iconBar,
        'editor': {
            'name': 'div',
            'id': "editor",
            'textContent': "actionStorySample.name",
        },
        'iconBar':iconBar,
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

var actionSpaceEditor= {
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
            },
            name: 'actionStory',
            'class': 'actionStory',
          //  'actionContent': actionStorySample,
            // mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
            //  output: ['self', 'output'],
            state: 'idle', //['selectable','selected','editable','inEdit','draggable','inDrag','locked','hidden']
            id: "actionStory"
        },

    ]

}
