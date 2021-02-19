/**
 * This data Set Consist of all the hotKey's and Hot Range/words mapped to their defientions
 */

var hotKeyList = {
    "!": {
        name: 'option',
        keyIdentifier: "!",
        class: 'card',
        'innerText':"This inserts a HTML Template next to caret.",
        content: [`<!DOCTYPE html>
            < html lang="en" >
            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
        </head>
                        <content>
                        </content>
        </html>`],
     //   "prefix": "!", 
    },

    "`": {
        name: 'option',
        keyIdentifier: "`",
        innerText: "This inserts a HTML Template next to caret.",
        content: ["'"],
        class: 'card',
       // "prefix": "`",

    },

    "(": {
        name: 'option',
        keyIdentifier: "(",
        content: [")"],
        class: 'card',
      //  "prefix": "(",

    },

    "{": {
        name: 'option',
        keyIdentifier: "{",
        content: ["}"],
        class: 'card',
      //  "prefix": "{",

    },
    "[": {
        name: 'option',
        keyIdentifier: "[",
        content: ["]"],
        class: 'card',
       // "prefix": "[",

    },
    "<": {
        name: 'option',
        keyIdentifier: "<",
        content: [">"],
        class: 'card',
        innerText:"Adds a reflection of < "
      //  "prefix": "<",

    },
    "for": {
        name: 'option',
        keyIdentifier: "for",
        innerText:"A Template for [for] function",
        class: 'card',
        onclick:`this.insertText`,
        'data': [" (let i = 0; i < size; i++) { \n }  \n "],
        //  "prefix": "<",
    },
    "function": {
        name: 'option',
        keyIdentifier: "function",
        innerText: "A Template for function",
        class: 'card',
        'data': ["  name (params)\n {\n }\n "],
        //  "prefix": "<",
    },
    "if": {
        name: 'option',
        keyIdentifier: "if",
        class: 'card',
        innerText:"This adss a template if Function",
        'content': ["  (condition) {\n }\n "],
        //  "prefix": "<",

    },
    "create": {
        name: 'option',
        keyIdentifier: "create",
        class: 'card',
        innerText:"create",
        'content': ["  (condition) {\n }\n "],
        //  "prefix": "<",
  
    }, "actionFlow": {
        name: 'option',
        keyIdentifier: "actionFlow",
        class: 'card',
        'content': ["  (condition) {\n }\n "],
        //  "prefix": "<",
    
    },

}

