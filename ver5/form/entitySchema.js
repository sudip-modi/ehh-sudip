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
