var actionStoryTemplate = {
    name: 'actionStoryTemplate',
    id: 'actionStoryTemplate',
    innerHTML: "this is a template actionStory",
    class: 'editable actionContent',
    'before': 'name'
    //  contentEditable: true
}

var HorizonticalMenuTemplateSchema = {
    menu: {
        "name": "ul",
        "li": [
            {'name': 'a',
                'href': '#action',  
                'innerText': 'action',
            },
            {
                'name': 'a',
                'href': '#people',
                'innerText': 'People'
            },
            {
                'name': 'a',
                'href': '#setting',
                'innerText': 'setting'
            },
            {
                'name': 'a',
                'href': '#about',
                'innerText': 'about',
              
            }
        ]
       
    }

}


