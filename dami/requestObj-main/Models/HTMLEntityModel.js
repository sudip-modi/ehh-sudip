
/**
 * @type {HTMLJSONEntityModel4Html}
 */
var entityModel4Html={
  tagName: "tagName",
  attributes: {class: "class",style: "style",src: "src",alt: "alt"},
  children: ["all"],
};

var updateDomObject={
  reqName: 'updateDomObject',
  objectModel: document,
  method: 'getElementById',
  arguments: ['output'],
  response: [],
  andThen: ['setAttributesReq'],

}

const modelSchema={
  reqName: {type: String,required: true},
  objectModel: {type: Object,required: true},
  method: {type: Object,required: true},
  arguments: {type: Array,required: false},
  andThen: {type: Array,required: false},
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
}
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
