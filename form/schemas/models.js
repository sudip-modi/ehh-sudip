var directoryDataModelSchema = {
    directoryname: {
        directoryName: 'name',
        type: 'folder/collection',
        items: [],
        lastModified: [],
        location: '',
        createdon: '',
        attributes:['readonly:boolean','Hidden:boolean']
    }   
}

/**
 * @type {HTMLJSONEntityModel4Html}
 */
var entityModel4Html = {
    tagName: "tagName",
    attributes: { class: "class", style: "style", src: "src", alt: "alt" },
    children: ["all"],
};
var copy2HTMLModel={
    tagName: {
      value: null,
      type: 'string',
      process: {
        objectModel: operate,
        method: 'isString',
        arguments: ['tagName']
      }
    },
    textContent:{
      value:null,
      type:'string',
      process:{
        objectModel:operate,
        method:['isString'],
        arguments:['textContent']
      }
    },
    attributes: {
      value: {
        id: {
          value: {
            nodeValue: {
              value: null,
              type: 'string',
              process: {
                objectModel: operate,
                method: 'isString',
                arguments: ['attributes.id']
              }
            }
          },
          type: 'object',
          process: {
            objectModel: operate,
            method: 'isNode',
            arguments: ['attributes.id',2]
          }
        },
        class: {
          value: {
            nodeValue: {
              value: null,
              type: 'string',
              process: {
                objectModel: operate,
                method: 'isString',
                arguments: ['attributes.id']
              }
            }
          },
          type: 'object',
          process: {
            objectModel: operate,
            method: 'isNode',
            arguments: ['attributes.class',2]
          }
        },
        style: {
          value: {
            nodeValue: {
              value: null,
              type: 'string',
              process: {
                objectModel: operate,
                method: 'isString',
                arguments: ['attributes.id',2]
              }
            }
          },
          type: 'object',
          process: {
            objectModel: operate,
            method: 'isNode',
            arguments: ['attributes.style',2]
          },
        },
        src: {
          value: {
            nodeValue: {
              value: null,
              type: 'string',
              process: {
                objectModel: operate,
                method: 'isString',
                arguments: ['attributes.id',2]
              }
            }
          },
          type: 'object',
          process: {
            objectModel: operate,
            method: 'isNode',
            arguments: ['attributes.src',2]
          },
        },
        alt: {
          value: {
            nodeValue: {
              value: null,
              type: 'string',
              process: {
                objectModel: operate,
                method: 'isString',
                arguments: ['attributes.id',2]
              }
            }
          },
          type: 'object',
          process: {
            objectModel: operate,
            method: 'isNode',
            arguments: ['attributes.alt',2]
          },
        },
        fileid: {
          value: {
            nodeValue: {
              value: null,
              type: 'string',
              process: {
                objectModel: operate,
                method: 'isString',
                arguments: ['attributes.id',2]
              }
            }
          },
          type: 'object',
          process: {
            objectModel: operate,
            method: 'isNode',
            arguments: ['attributes.fileid',2]
          },
        },
        name: {
          value: {
            nodeValue: {
              value: null,
              type: 'string',
              process: {
                objectModel: operate,
                method: 'isString',
                arguments: ['attributes.id']
              }
            }
          },
          type: 'object',
          process: {
            objectModel: operate,
            method: 'isNode',
            arguments: ['attributes.name',2]
          },
        },
      },
      type: 'object',
      process: {
        objectModel: operate,
        method: 'isNamedNodeMap',
        arguments: ['attributes']
      }
    },
    children: {
      value: null,
      type: 'array',
      process: {
        objectModel: operate,
        method: 'isHTMLCollection',
        arguments: ['children']
      },
    },
};
var actionStory2HTML = {
    tagName: {
      value: null,
      type: 'string',
      process: {
        objectModel: operate,
        method: 'isString',
        arguments: ['tagName']
      }
    },
    attributes: {
      value: {
        id: {
          value: {
            nodeValue: {
              value: null,
              type: 'string',
              process: {
                objectModel: operate,
                method: 'isString',
                arguments: ['attributes.id']
              }
            }
          },
          type: 'object',
          process: {
            objectModel: operate,
            method: 'isNode',
            arguments: ['attributes.id',2]
          }
        },
      },
      type: 'object',
      process: {
        objectModel: operate,
        method: 'isNamedNodeMap',
        arguments: ['attributes']
      }
    },
    children: {
      value: null,
      type: 'array',
      process: {
        objectModel: operate,
        method: 'isHTMLCollection',
        arguments: ['children']
      },
    },
}
var fileModel = {
    directoryname: {
        directoryName: 'name',
        id:'',
        type: 'folder/collection',
        items: [],
        lastModified: [],
        location: '',
        createdon: '',
        attributes: ['readonly:boolean', 'Hidden:boolean']
    }
}
var fileData = {
    'sample.xml': {
        data: '<test>Hello!</test>',
        type: 'application/xml'
    },
    'sample.csv': {
        data: 'Test1,Test2\nHello1,Hello2',
        type: 'text/csv'
    },
    'sample.json': {
        data: JSON.stringify({ test: 'Hello!' }),
        type: 'application/json'
    }
};
var directoryJSON = {
    'li':{
        'name':'li',
        'span':{
            'name':'span',
            'class':'parent',
            "textContent":'', //inner Text will be included
        },
        'list':{
            'name':'ul',
            'class':'nested',
            'id':'' //id - Unique ID with which directory handle of this folder can ke retrieved from indexDB
        }
    }
}
var fileJSON = {
    "class":"item row",
    "name":"li",
    "data-command": `[{"command":"file"}]`,
    "id":'', //id - Unique ID with which file handle of this file retrieved from indexDB
    "textContent":'',
}
var parentJSON = {
    'li':{
        'name':'li',
        'span':{
            'name':'span',
            'class':'parent',
            "textContent":'', //inner Text will be included
        },
        'list':{
            'name':'ul',
            'class':'nested',
            'id':'' //id - Unique ID with which directory handle of this folder can ke retrieved from indexDB
        }
    }
}
var childJSON = {
    "class":"item row",
    "name":"li",
    "id":'', //id - Unique ID with which file handle of this file retrieved from indexDB
    "textContent":'',
}
var paramsJSON = {
    'Username':'',
    'Password':'',
}
var importFromSheetparamsJSON = {
    'SpreadsheetId':'',
    'NamedRange':'',
}
var exportToSheetparamsJSON = {
    'SpreadsheetId':'',
    'SheetName':'',
    'array':''
}
const pickerOpts = {
    types: [
        {
            description: '.txt,.html,.js,.json,.csv,.xml,.xlsx,.jpg,.jpeg,.png,.mp4',
            accept: {
                'text/*': ['.txt', '.html', '.json', '.js', '.xml', '.csv'],
                'image/*': ['.jpg', '.jpeg', '.png'],
                'video/*': ['.mp4'],
            }
        },
    ],
    excludeAcceptAllOption: true,
    multiple: false
};
var redirect = {
  'url':'https://accounts.google.com/o/oauth2/v2/auth',
  'params':{
      'client_id': '1053381465878-vb5nntqvopdnbag9f060pon9d7qh81j4.apps.googleusercontent.com',
      'redirect_uri': 'http://127.0.0.1:5502/indexV13.html',//'https://kgayatri15.github.io/Integration/html/json2Spreadsheet.html',
      'scope': "https://www.googleapis.com/auth/drive",
      'state': 'ActionSpaceEditor',
      'include_granted_scopes': 'true',
      'prompt':'consent',
      'response_type': 'token'
  }
}
var Spreadsheet = {
      'CreateSpreadsheetUrl':'https://sheets.googleapis.com/v4/spreadsheets',
      'AddSheetUrl':'https://sheets.googleapis.com/v4/spreadsheets/SpreadsheetId:batchUpdate',
      'CopySpreadsheetUrl':'https://www.googleapis.com/drive/v3/files/fileId/copy',
      'headers':{
          'Accept':'application/json',
          'Content-Type':'application/json',
      }
}
var createSpreadsheetJSON = {
  "properties":{
      "title":''
  }, 
}
var createNewSheetJSON ={
  "requests":[{
          addSheet: {
            properties: {
              title: 'Sheet2',
            }
          }
  }]
}