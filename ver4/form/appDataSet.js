
var actionSpaceV2 = {
    richTextToolBar: {
        name: 'richTextToolBar',
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