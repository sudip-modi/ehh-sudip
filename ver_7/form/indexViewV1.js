var basicLayoutV3 = {
    class: 'flex column',
    header: {
        'name': 'div',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'header',
        'class': 'row',
        //  'innerText':"header",
        'brand': {
            'name': 'img',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'src': 'images/icons_221x.png',
            'id': 'brand',
            'class': 'brand'
        },
        'input': {
            'name': 'input',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'actionSearch',
            'placeholder': "search here...",
          'autocomplete': "off"
        },
        'menu': {
            "name": "div",
            'id': "topmenu",
         
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
    },
    

}