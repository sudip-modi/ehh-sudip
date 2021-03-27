var brand= {
    'name': 'img',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'src': 'images/icons_221x.png',
    'id': 'brand',
    'class': 'brand'
}
var headerMenuUser = {
    "name": "div",
    class:'container align_center',
//    style:'align',
    "menu": [
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
    ],

}
var headerMenuVisitor = {
    "name": "div",
    class:'container align_center',
//    style:'align',
    "menu": [
        {
            'name': 'a',
            'href': '#product',
            'textContent': 'product',
        },
        {
            'name': 'a',
            'href': '#framework',
            'textContent': 'framework'
        },
        {
            'name': 'a',
            'href': '#blueprints',
            'textContent': 'blueprints || solutions',
        },
        {
            'name': 'span',
            class:'verticleLine',

        },
        {
            'name': 'a',
            'href': '#login',
            'textContent': 'login',
        },
        {
            'name': 'a',
            'href': '#selfInvite',
            'textContent': 'self-Invite',
        },
    ],

}
var header={
    'name': 'div',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'id': 'header',
    'class': 'row',
    //  'innerText':"header",
    'brand': brand,
    'searchBar': {
        'name': 'input',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'actionSearch',
        'placeholder': "search here...",
      'autocomplete': "off"
    },
    'appMenu':headerMenuUser, 
}


var actionSpaceBody={
    name:'div',
    textContent:'ActionSpace'

}

var basicLayoutV3 = {
    class: 'flex column',
    'header': header,
    'header2':headerMenuVisitor,
    'actionSpaceBody': actionSpaceBody,
}
