var actionSpaceHeaderUserMenu = {
    "name": "div",
    class: 'container menu',
    id:'actionSpaceHeaderUserMenu',
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
            'name': 'button',
            'class': "material-icons",
            'textContent': 'more_vert',
        }
    ]

}

var headerUser={
    'name': 'div',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'id': 'header',
    'class': 'row',
    //  'textContent':"header",
    'brand': brand,
    'searchBar': {
        'name': 'input',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'actionSearch',
        'placeholder': "search here...",
      'autocomplete': "off"
    },
    'menu': actionSpaceHeaderUserMenu,
}

var actionLayoutUserV3 = {
    
    id:'actionSpaceLayoutContainer',
    class: 'container column',
    section: headerUser,
    section2: actionSpaceBody,
    section3: footer,
}
var peopleLayoutUserV3 = {
    id: 'actionSpaceLayoutContainer',
    class: 'container column',
    section: headerUser,
    section2: actionSpaceBody,
    section3: footer,
}
var settingBody = {
    name: 'div',
    textContent:'setting'
}
var settingLayoutUserV3 = {
    id: 'actionSpaceLayoutContainer',
    class: 'container column',
    section: headerUser,
    section2: actionSpaceBody,
    section3: footer,
}