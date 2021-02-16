/**
 * This file contains the json definition of actionSpaceEditor.
 * This will be used as a prototype to validate any creation of an instance of a new actionSpace.
 * All the attributes and parameter are defined here.
 */

/**
 * actionSpaceObject is the root Object of actionSpace.
 * It has all the scripts/divs/json/css needed for the actionSpace to function.
 *
 */

var currentDocument = document;

var actionSpaceV2 = {
    richTextToolBar: {
        name: 'richTextToolBar',
        type: 'linkMenu',
        class: 'menu',
        bar: [
            {
                name: 'button',
                type: 'div',
                class: 'topbar-button',
                'innerHTML': '<i class="las la-align-right"></i>',
                'data-cmd': 'justifyRight'
            },
            {
                name: 'button',
                type: 'div',
                class: 'topbar-button',
                'innerHTML': '<i class="las la-align-left"></i>',
                'data-cmd': 'justifyLeft'
            },
            {
                name: 'button',
                type: 'button',
                class: 'topbar-button',
                'innerHTML': '<i class="las la-align-center"></i>',
                'data-cmd': 'justifyCenter'
            },
            {
                name: 'button',
                type: 'button',
                class: 'topbar-button',
                on: 'click',
                'innerHTML': '<i class="las la-align-justify"></i>',
                'data-cmd': 'justifyFull'
            },
            {
                name: 'button',
                type: 'button',
                class: 'topbar-button',
                'innerHTML': '<i class="las la-bold"></i>',
                'data-cmd': 'Bold'
            },
            {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="las la-italic"></i>',
                "data-cmd": 'italic'

            }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="las la-underline"></i>',
                "data-cmd": 'underline'

            },
            {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="las la-list-ul"></i>',
                "data-cmd": 'insertUnorderedList'

            }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="las la-list-ol"></i>',
                "data-cmd": 'insertOrderedList'
            }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="las la-link"></i>',
                "data-cmd": 'createLink'
            }, {

                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="las la-code"></i>',
                "data-cmd": 'showCode'
            }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="las la-redo"></i>',
                "data-cmd": 'redo'
            }, {
                name: 'button',
                type: "button",
                class: 'topbar-button',
                'innerHTML': '<i class="las la-undo"></i>',
                "data-cmd": 'undo'
            }



        ]
    },
    actionSpaceEditor: [
        {
            name: 'button',
            type: "button",
            class: 'help-button',
            'innerHTML': '<i class="las la-braille"></i>',
            "data-cmd": 'undo'
        },

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
            id:"acSpaId"
        },
    ]
}