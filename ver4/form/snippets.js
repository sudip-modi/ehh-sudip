const snippets = [
    {
        "prefix": ":",
        'body': [" (let i = 0; i < size; i++) { \n }  \n "]
    },
    {
        "prefix": "<",
        'body': [">"]
    },
    {
        "prefix": "[",
        'body': [" ]"]
    },
    {
        "prefix": "{",
        'body': [" }"]
    }, {
        "prefix": "(",
        'body': [" )"]
    },
    {
        "prefix": "!",
        "autoSuggest":" match HTML Template found for",
        'body': [`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
            <body> 
            </body>
        </html>`]
    },

    {
        "prefix": "for",
        'body': [" (let i = 0; i < size; i++) { \n }  \n "]
    },
    {

        "prefix": "function",
        "body": [
            "  name (params)\n {\n }\n "
        ]
    },
    {
        "prefix": "if",
        "body": [
            "  (condition) {\n }\n "
        ],
    },

    {
        "prefix": "create",
        "body": [
            "  (condition) {\n }\n "
        ],
    },
     {
        "prefix": "actionflow",
        "body": [
            "  (condition) {\n }\n "
        ],
    }
];

console.log("snippets", Object.values(snippets))
