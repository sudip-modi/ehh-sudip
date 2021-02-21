
    // < actionLinkBar >
    //         <a class="tabBtn" data-element="action" href="#action">action</a>
    //         <a class="tabBtn" data-element="people" href="#people">people</a>
    //         <a class="tabBtn" data-element="setting" href="#setting">setting</a>
    //     </actionLinkBar >
//    < input id = "actionSearch" type = "text" class="searchBar" value = " search here..." >

var htmlAttributesListV2 = ["htmlAttributeName", "accept", "accept-charset", "accesskey", "action", "align", "allow", "alt", "async", "autocapitalize", "autocomplete", "autofocus", "autoplay", "background", "bgcolor", "border", "buffered", "capture", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "csp", "data", "data-*", "datetime", "decoding", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "enctype", "enterkeyhint", "for", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "importance", "integrity", "intrinsicsize", "inputmode", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "loading", "list", "loop", "low", "manifest", "max", "maxlength", "minlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "referrerpolicy", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "summary", "tabindex", "target", "title", "translate", "type", "usemap", "value", "width", "wrap", "eventHandlerAttributes", "onabort", "onautocomplete", "onautocompleteerror", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onsort", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting"]
var basicLayout = {
    actionSpace: {
        name: 'div',
        class: "actionSpace",
        resize:true,
       // innerText: "ActionSpace",
        header: {
            'name': 'div',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'header',
            'class': 'box header',
            //  'innerText':"header",
            'brand': {
                'name': 'div',
                'desc': 'This is a horizontical bar, more functionality of this bar to be added',
                'id': 'brand',
                'innerText': "[ everything happens here ]",
                'class': 'brand'
            },
            'input': {
                'name': 'input',
                'desc': 'This is a horizontical bar, more functionality of this bar to be added',
                'id': 'actionSearch',
                'placeholder': "search here...",
                'class': 'searchBar'
            },
            'actionLinkBar': [
                {
                    'name': 'a',
                    'desc': 'this leads to actionPage',
                    'id': 'action button',
                    'innerText': "action",
                    'class': 'tabBtn',
                    'data': 'action',
                    'href': "#action",

                },
                {
                    'name': 'a',
                    'desc': 'this leads to actionPage',
                    'id': 'people button',
                    'innerText': "people",
                    'class': 'tabBtn',
                    'data': 'people',
                    'href': "#people",

                }, {
                    'name': 'a',
                    'desc': 'this leads to actionPage',
                    'id': 'people button',
                    'innerText': "settings",
                    'class': 'tabBtn',
                    'data': 'setting',
                    'href': "#settings",
                },



            ],


        },
        leftSidebar: {
            name: "div",
            class: "box leftSidebar ",
       //     innerText: "left-sidebar", 
            id:'leftSidebar'
        },
        actionSpaceEditor: {
            toolList: [
                {
                    name: 'button',
                    id: "add",
                    class: "material-icons",
                    'innerText': "add",
                    //'onclick': "document.execCommand('bold',false,null)",
                    'data-command': `[{"command":"new","entity": "actionContent","value":"innerHTML"}]`,
                    // 'data': `process.act(entity, insertBreakAtPoint, document)`,
                },
                {
                    name: 'button',
                    id: "save",
                    class: "material-icons",
                    'innerText': "save",
                    //'data': '[{ "call": "StorageHelper.saveToStorage(document.getElementById(actionContent).getAttribute(name),document.getElementById(actionContent).innerHTMl)" }]',
                    'data-command': `[{"command":"save","entity": "actionContent","value":"innerHTML","name":"actionContent.firstSibling.getAttribute('id')"}]`,


                },
                //'onclick': `StorageHelper.saveToStorage(,`,

                {
                    name: 'button',
                    id: "format_bold",
                    class: "material-icons",
                    'innerText': "format_bold",
                    'onclick': "document.execCommand('bold',false,null)"
                    // 'data': `process.act(entity, insertBreakAtPoint, document)`,

                },
                {
                    name: 'button',
                    id: "format_italic",
                    class: 'material-icons',
                    'innerText': 'format_italic',
                    'data-cmd': 'italic',
                    'data': "process.act('italic', false, null, execCommand(), document)",
                }, {
                    name: 'button',
                    id: "underline",
                    class: 'material-icons',
                    'innerText': 'format_underline',
                    'data-cmd': 'underline',
                    'onclick': ""
                },
                {
                    name: 'button',
                    id: "delete",
                    class: 'material-icons',
                    'innerText': "delete"
                },
                {
                    name: 'select',
                    id: "delete",
                   innerHTML : `<select name="cars" id="cars">
                   <option value="rich text view">rich text view</option>
                   <option value="Code">code view</option>
                   <option value="opel">tree view</option>
                   <option value="output Preview">output Preview</option>
                 </select>`
                    
                },


            ],
            editor: [
                {
                    actionContentTitle: {
                        name: 'div',
                        innerText: actionStorySample.name,
                        style:'visibility:hidden'
                    },
                    name:'actionStory',
                    'class': 'actionStory',
                    'actionContent': actionStorySample,
                    // mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
                    //  output: ['self', 'output'],
                    state: 'idle', //['selectable','selected','editable','inEdit','draggable','inDrag','locked','hidden']
                    id: "actionStory"
                },
              
            ],
           
        },
        rightSidebar: {
            name: "div",
            class: "box rightSidebar",
            innerText: ""
        },
      
        footer: {
            name: "div",
            class: "footer",
            innerHTML: `made with 🧠 & 🧡, < br > during 🌧️ at <b>shunya.ek</b>, goa, india.< br >with help from google & the world-wide - web tech community.`
        }
    }
   
        

}

// var userStates = [login, loginSuccess, loginError, logout, logoutSuccess]
// var ActionButtonProps ={
//     dataTestID: string,
//   disabled?: boolean,
//   handler: MouseEventHandler,
//   icon: Icon,
//   label: string,
//   text: string,
// }

// var button = (
//     <button
//         data-testid={dataTestID}
//         className="action-button"
//         aria-label={label}
//         onClick={handler}
//         disabled={disabled}
//         title={label}
//     >
//         <IconCmp
//             size={18}
//             className="action-button-icon"
//             color={iconColor}
//             aria-hidden="true"
//             focusable="false"
//         />
//         <span>{text}</span>
//     </button>
// )
// console.log(button)