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