var brand= {
    'name': 'img',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'src': 'images/ehh3dlowres.png',
    'id': 'brand',
    'class': 'brand'
}
var actionSpaceHeaderMenu = {
    "name": "div",
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
            'name': 'a',
            'class': "material-icons",
            'textContent': 'more_vert',
        }
    ]

}
var header={
    'name': 'div',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'id': 'header',
    'class': 'row',
    //  'innerText':"header",
    'brand': brand,
    'searchBar': {
        'name': 'div',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'actionSearch',
        'placeholder': "search here...",
      'autocomplete': "off"
    },
    'menu':'actionSpaceHeaderMenu' 
}

var basicLayoutV3 = {
    class: 'container column',
    section: header,
}
