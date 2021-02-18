/**
 * This data Set Consist of all the hotKey's and Hot Range/words mapped to their defientions
 */

var hotKeyList = {
    "!": {
        name: 'li',
        keyIdentifier: "!",
        class: 'card',
        innerText:"This inserts a HTML Template next to caret."
        body: [`<!DOCTYPE html>
            < html lang="en" >
            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
        </head>
                        <body>
                        </body>
        </html>`],
     //   "prefix": "!", 
    },

    "`": {
        name: 'li',
        keyIdentifier: "`",
        body: ["'"],
        class: 'card',
       // "prefix": "`",

    },

    "(": {
        name: 'li',
        keyIdentifier: "(",
        body: [")"],
        class: 'card',
      //  "prefix": "(",

    },

    "{": {
        name: 'li',
        keyIdentifier: "{",
        body: ["}"],
        class: 'card',
      //  "prefix": "{",

    },
    "[": {
        name: 'li',
        keyIdentifier: "[",
        body: ["]"],
        class: 'card',
       // "prefix": "[",

    },
    "<": {
        name: 'li',
        keyIdentifier: "<",
        body: [">"],
        class: 'card',
      //  "prefix": "<",

    },
    "for": {
        name: 'li',
        keyIdentifier: "for",
        class: 'card',
        'body': [" (let i = 0; i < size; i++) { \n }  \n "],
        //  "prefix": "<",
    },
    "function": {
        name: 'li',
        keyIdentifier: "function",
        class: 'card',
        'body': ["  name (params)\n {\n }\n "],
        //  "prefix": "<",
    },
    "if": {
        name: 'li',
        keyIdentifier: "if",
        class: 'card',
        ,innerText:"This adss a template if Function"
        'body': ["  (condition) {\n }\n "],
        //  "prefix": "<",

    },
    "create": {
        name: 'li',
        keyIdentifier: "create",
        class: 'card',
        'body': ["  (condition) {\n }\n "],
        //  "prefix": "<",
  
    }, "actionFlow": {
        name: 'li',
        keyIdentifier: "actionFlow",
        class: 'card',
        'body': ["  (condition) {\n }\n "],
        //  "prefix": "<",
    
    },

}

