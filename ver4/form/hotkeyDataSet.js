/**
 * This data Set Consist of all the hotKey's and Hot Range/words mapped to their defientions
 */

var hotKeyList = {
    "!": {
        name: 'li',
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
        name: 'li',
        keyIdentifier: "`",
        innerText: "This inserts a HTML Template next to caret.",
        content: ["'"],
        class: 'card',
       // "prefix": "`",

    },

    "(": {
        name: 'li',
        keyIdentifier: "(",
        content: [")"],
        class: 'card',
      //  "prefix": "(",

    },

    "{": {
        name: 'li',
        keyIdentifier: "{",
        content: ["}"],
        class: 'card',
      //  "prefix": "{",

    },
    "[": {
        name: 'li',
        keyIdentifier: "[",
        content: ["]"],
        class: 'card',
       // "prefix": "[",

    },
    "<": {
        name: '<',
        keyIdentifier: "<",
        content: [">"],
        class: 'card',
        innerText:"Adds a reflection of < "
      //  "prefix": "<",

    },
    "for": {
        name: 'for',
        keyIdentifier: "for",
        innerText:"A Template for for function",
        class: 'card',
        'content': [" (let i = 0; i < size; i++) { \n }  \n "],
        //  "prefix": "<",
    },
    "function": {
        name: 'li',
        keyIdentifier: "function",
        innerText: "A Template for for function",
        class: 'card',
        'content': ["  name (params)\n {\n }\n "],
        //  "prefix": "<",
    },
    "if": {
        name: 'li',
        keyIdentifier: "if",
        class: 'card',
        innerText:"This adss a template if Function",
        'content': ["  (condition) {\n }\n "],
        //  "prefix": "<",

    },
    "create": {
        name: 'li',
        keyIdentifier: "create",
        class: 'card',
        'content': ["  (condition) {\n }\n "],
        //  "prefix": "<",
  
    }, "actionFlow": {
        name: 'li',
        keyIdentifier: "actionFlow",
        class: 'card',
        'content': ["  (condition) {\n }\n "],
        //  "prefix": "<",
    
    },

}

