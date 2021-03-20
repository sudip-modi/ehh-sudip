var actionStoryTemplate = {
    "name": 'actionStoryTemplate_title',
    "id": 'actionStoryTemplate',
    innerHTML: actionUserContent,
    //textContent: "this is a template actionStory",
    class: 'editable actionContent',
    'before': 'name',
    contentEditable: true
}
var leftSidebarModelSchemaV1 = {
    name: 'section',
    id: "navigationSection",
    class: "tempo", 


}
  
var headerModelSchemaV1 = {
    header: {
        'name': 'ul',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'header',
        'class':'flex align_center',
        //  'innerText':"header",
        'brand': {
            'name': 'img',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'src': 'images/[ ehh ] logo Ver O.8 300X144 px.png',
            'style':"width:54px",
            'id': 'brand',
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
            'class': 'flex align_justify',
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
    "iconBarTools": [
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
            'id': "loadedRouteTitle",
            "contentEditable": "true",
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
                {
                    'id': 'contentBlock',
                    'textContent': actionStoryTemplate
                },
            ],
        },
        //bottom bar like textNote to be added.
    }
}
var itemListModelSchema = {
    itemList: {
        name: "ol",
        id: "itemListModelSchema",
        //  "class": "material-icons",
        "textContent": "shortcut",
        "li": itemModelSchema,
    }
}

var blockModelSchema = {
    "name": "div",
    "id": "blockModelSchma",
    "blockType": "html"
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
            "textContent": "Item1",
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
        "textContent": "shortcut",
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
        data: "Select Text + Choose a text Style, or save a new style...",
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

