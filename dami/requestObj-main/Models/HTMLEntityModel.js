
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
      objectModel: Operate,
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
              objectModel: Operate,
              method: 'isString',
              arguments: ['attributes.id']
            }
          }
        },
        type: 'object',
        process: {
          objectModel: Operate,
          method: 'isNode',
          arguments: ['attributes.id']
        }
      },
      class: {
        value: {
          nodeValue: {
            value: null,
            type: 'string',
            process: {
              objectModel: Operate,
              method: 'isString',
              arguments: ['attributes.id']
            }
          }
        },
        type: 'object',
        process: {
          objectModel: Operate,
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
              objectModel: Operate,
              method: 'isString',
              arguments: ['attributes.id',2]
            }
          }
        },
        type: 'object',
        process: {
          objectModel: Operate,
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
              objectModel: Operate,
              method: 'isString',
              arguments: ['attributes.id',2]
            }
          }
        },
        type: 'object',
        process: {
          objectModel: Operate,
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
              objectModel: Operate,
              method: 'isString',
              arguments: ['attributes.id',2]
            }
          }
        },
        type: 'object',
        process: {
          objectModel: Operate,
          method: 'isNode',
          arguments: ['attributes.alt',2]
        },
      }
    },
    type: 'object',
    process: {
      objectModel: Operate,
      method: 'isNamedNodeMap',
      arguments: ['attributes']
    }
  },children: {
    value: null,
    type: 'array',
    process: {
      objectModel: Operate,
      method: 'isHTMLCollection',
      arguments: ['children']
    },
  },
}
