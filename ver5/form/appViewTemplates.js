var actionStoryTemplate = {
    name: 'actionStoryTemplate',
    id: 'actionStoryTemplate',
    innerHTML: "this is a template actionStory",
    class: 'editable actionContent',
    'before': 'name'
    //  contentEditable: true
}
var headerModelSchemaV1 = {
    header: {
        'name': 'div',
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
            'class': 'searchBar'
        },
        'menu': {
            "name": "ul",
            'id': "topmenu",
            'class':'row',
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
    actionSpace: {
        name: "section",
        id: "actionSpace",
        'innerText':"yo"
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
