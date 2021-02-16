
var actionSpaceV2 = {
    richTextToolBar: {
        name: 'richTextToolBar',
        type: 'linkMenu',
        class: 'menu',
        menu: [
            {
                name: 'button',
                type: 'div',
                class: "material-icons",
                'innerText':"add"
            },
            {
                name: 'button',
                type: "button",
                class: 'material-icons',
                'innerText': 'undo'
            }, {
                name: 'button',
                type: "button",
                class: 'material-icons',
                'innerText': 'redo'
            },
            {
                name: 'button',
                type: 'div',
                class: 'material-icons',
                'innerText': "delete"
                
            },
            
        ]
    },
    actionSpaceEditor: [
       

        {
            name: 'contentInput',
            contentEditable: true,
            class: 'code',
            lineNumbers: true,
            innerText: "Write whatever you can think of...",
            // mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
            //  output: ['self', 'output'],
            state: 'idle',
            resize: true,
            id: "acSpaId"
        },
    ]
}