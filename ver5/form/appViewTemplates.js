var actionStoryTemplate = {
    "name": 'actionStoryTemplate_title',
    "id": 'actionStoryTemplate',
    textContent: "this is a template actionStory",
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
      //  'iconBar': iconBar,
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

var cardModel = {
    cardName: "cardName",
    cardType: 'List',
}

var typeOfBlocks = ["richtext,json,tree,html,javascript,table,image,link,divider,style,script,@mention,embed,button,breadcrumb,annotation"]