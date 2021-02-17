
var actionSpaceV2 = {
    toolBar: {
        name: 'toolBar',
        display: "none",
        border: "solid 1px #a6d8a8",
        resize: 'both',
        menu: [
            {
                name: 'button',
                id:"add",
                class: "material-icons",
                'innerText':"add"
            },
            {
                name: 'button',
                id: "del",
                class: 'material-icons',
                'innerText': 'undo'
            }, {
                name: 'button',
                id: "redo",
                class: 'material-icons',
                'innerText': 'redo'
            },
            {
                name: 'button',
                id: "delete",
                class: 'material-icons',
                'innerText': "delete"
                
            },
            
        ]
    },
    richTextToolBar: {
        name: 'richTextToolBar',
        display: "none",
        border: "solid 1px #a6d8a8",
        resize: 'both',
        menu: [
            {
                name: 'button',
                id:"format_bold",
                class: "material-icons",
                'innerText':"format_bold",
                'data-cmd': 'Bold',
                'onclick':"document.execCommand('bold',false,null)"
            },
            {
                name: 'button',
                id: "format_italic",
                class: 'material-icons',
                'innerText': 'format_italic',
                'data-cmd': 'italic',
                'onclick':"document.execCommand('italic',false,null)"
            }, {
                name: 'button',
                id: "underline",
                class: 'material-icons',
                'innerText': 'format_underline',
                'data-cmd': 'underline',
                'onclick':"document.execCommand('underline',false,null)"
            },
            {
                name: 'button',
                id: "delete",
                class: 'material-icons',
                'innerText': "delete" 
            },
            
        ]
    },

    actionSpaceEditor: [
        {
            name: 'content',
            contentEditable: true,
            class: 'richText',
            lineNumbers: true,
            innerText: actionContent,
            // mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
            //  output: ['self', 'output'],
            state: 'idle', //['selectable','selected','editable','inEdit','draggable','inDrag','locked','hidden']
            resize: true,
           
            id: "richText"
        },
    ]
}

var actionContent = {
    innerText : "I was changed",
    class: 'richText',
  //  contentEditable: true
}

var actionSpaceLayoutV1 = {

    header: {
        'name': 'div',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'header',
        'class': 'bar-hozontical',
        'innertext':"header",
        'brand': {
            'name': 'div',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'header',
            'class': 'bar-hozontical'
        }
    },
    
    
    
    
}



console.log(actionSpaceLayoutV1)