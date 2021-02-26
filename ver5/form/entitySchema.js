const htmlElementSchemaModel = {
    "tagname": {
        'value': isOneof(input, HTMLElementList)
        
    },
    "id": "id",
    "class":"class name",
}


var fileModel = {
    fileName,
    fileID,
    fileURL,
    fileActors,
    fileContent
}

var fileContent = [
    {
        contentID: id,
        contentName: name,
        content: blocks,   
    },
    {
        contentID: id,
        contentName: name,
        content: blocks,
    }

]
var folderModel = {
    [folderName,folderID,FolderURL,FolderActors,folderContent]
}
var validEntityType = ['HTML', 'Object', 'object', 'string', 'function', 'Array', 'spreadsheet', 'doc']
var validEntityResources = [ "dom","localStorage","IndexDb","nativeFileSystem","HTTPService","buffer" ]
// An entity is an javascript Object
var entity = {
    "description" : "a string value, to fill in description.",
    "tagName": 'systemName', // represents a string based identifier for the system. Not to be mistaken  with Normal name
    "collectionTag": ["array of tag's "],
    "entityType_MimeType": {
        "value": {
            'operator': [
                {
                    'method': 'isInsideArray',
                    'arguments': validEntityType
                },
            ]
        }
    },
    'attributes': "an object of attributes",
    'metaData': 'actorInfo',
    'content': {
        "value": {
            'operator': [
                {
                    'method': 'isArray',
                    'arguments': "ifTrue"
                },
            ]
        }
    },
}


var actorInfo = [
    "name",
    "id",
    "role" = [ viewer,]
]


var HTMLElementEntityModel = {
    "name": {
        "value": {
            'operator': [
                {
                    'method': 'isInsideArray',
                    'arguments': HTMLElementList
                }
            ]
        }
    },
    "id": {
        "value": {
            'operator': [
                {
                    'method': 'isInt',

                }
            ]
        }
    }
}


var fromBlocks = {
    "time": 1614110818991,
    "blocks": [
        {
            "type": "header",
            "data": {
                "text": "Editor.js",
                "level": 2
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
            }
        },
        {
            "type": "header",
            "data": {
                "text": "Key features",
                "level": 1
            }
        },
        {
            "type": "list",
            "data": {
                "style": "unordered",
                "items": [
                    "It is a block-styled editor",
                    "It returns clean data output in JSON",
                    "Designed to be extendable and pluggable with a simple API"
                ]
            }
        },
        {
            "type": "header",
            "data": {
                "text": "What does it mean «block-styled editor»",
                "level": 3
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
            }
        },
        {
            "type": "header",
            "data": {
                "text": "What does it mean clean data output",
                "level": 3
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": "Clean data is useful to sanitize, validate and process on the backend."
            }
        },
        {
            "type": "delimiter",
            "data": {}
        },
        {
            "type": "paragraph",
            "data": {
                "text": "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
            }
        },
        {
            "type": "image",
            "data": {
                "file": {
                    "url": "https://codex.so/public/app/img/external/codex2x.png"
                },
                "caption": "",
                "withBorder": false,
                "stretched": false,
                "withBackground": false
            }
        }
    ],
    "version": "2.19.0"
}
var editorJsBlock = {
    "time": 1552751755369,
    "blocks": [
        {
            "type": "image",
            "data": {
                "url": "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg"
            }
        },
        {
            "type": "image",
            "data": {
                "url": ""
            }
        },
        {
            "type": "image",
            "data": {
                "url": ""
            }
        }
    ],
    "version": "2.11.10"
}

var sampleJsonObject = {
    "array": [
        1,
        2,
        3
    ],
        "boolean": true,
            "color": "gold",
                "null": null,
                    "number": 123,
                        "object": {
        "a": "b",
            "c": "d"
    },
    "string": "Hello World"
}
