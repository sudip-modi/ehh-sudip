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
var validEntityType = ['HTML','Object','object','string','function','Array','spreadsheet','doc']
// An entity is an javascript Object
var entity = {
    description : "a string value, to fill in description.",
    tagName: 'systemName', // represents a string based identifier for the system. Not to be mistaken  with Normal name
    collectionTag: ["array of tag's "],
    "entityType": {
        "value": {
            'operator': [
                {
                    'method': 'isInsideArray',
                    'arguments': validEntityType
                },
            ]
        }
    },
   
}

entity	,
    description	
   
title / label
tag /
    entityType /
    spreadsheet /
    HTML /
    doc /



    resource
dom
localStorage
IndexDb
nativeFileSystem
HTTPService /
    buffer

attributes / properties	#REF!
style
visibility
contenteditable
class

    content	This is where the content of any Entity is stored




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
