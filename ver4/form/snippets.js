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
