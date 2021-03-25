var brand= {
    'name': 'img',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'src': 'images/ehh3dlowres.png',
    'id': 'brand',
    'class': 'brand'
}
var actionSpaceHeaderMenu = {
    "name": "div",
    "span": [
        {
            'name': 'a',
            'href': '#action',
            'textContent': 'action',
        },
        {
            'name': 'a',
            'href': '#people',
            'textContent': 'People'
        },
        {
            'name': 'a',
            'href': '#setting',
            'textContent': 'setting'
        },
        {
            'name': 'a',
            'href': '#about',
            'textContent': 'about',

        },
        {
            'name': 'a',
            'class': "material-icons",
            'textContent': 'more_vert',
        }
    ]

}
var header={
    'name': 'div',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'id': 'header',
    'class': 'row',
    //  'innerText':"header",
    'brand': brand,
    'searchBar': {
        'name': 'div',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'actionSearch',
        'placeholder': "search here...",
      'autocomplete': "off"
    },
    'menu':'actionSpaceHeaderMenu' 
}
var actionWorkSpace= {
    name: 'section',
        id: "actionWorkspaceSection",
            class: "column",
                workspaceHeader: {
        name: 'div',
            class: "workspaceHeader flex align_center row",
                MainHeaderHamburger: {
            name: 'div',
                class: "mode_toggle_btn mr-15",
                    style: "background-color: #333;",
                        id: "MainHeaderHamburger2"
        },
        pageNavigate: {
            name: 'div',
                class: "flex align_center",
                    back: {
                name: 'i',
                    'class': "material-icons",
                        'textContent': 'navigate_before',
                    },
            next: {
                name: 'i',
                    'class': "material-icons",
                        'textContent': 'navigate_next',
                    },
        },
        workSpaceTitle: {
            name: 'div',
                class: "title_edit flex align_center",
                    title: {
                name: 'div',
                    class: 'title',
                        textContent: 'WorkSpaceTitle',
                            editBtn: {
                    name: 'button',
                        class: 'editBtn',
                            textContent: 'Edit'
                }
            },

        },
        controlIcon: {
            name: 'div',
                class: "controlsIcon flex align_center",
                    share: {
                name: "div",
                    class: "share icon",
                        icon: {
                    name: 'i',
                        'class': "material-icons",
                            'textContent': 'share',
                        },
            },
            heart: {
                name: "div",
                    class: "heart icon",
                        icon: {
                    name: 'i',
                        'class': "material-icons",
                            'textContent': 'favorite',
                        },

            },
            delete: {
                name: "div", class: "delete icon",
                    icon: {
                    name: 'i', 'class': "material-icons", 'textContent': 'delete',
                        },

            },
            insertTitle: {
                name: 'div',
                    class: 'icon',
                        icon: {
                    'name': 'i', 'class': "material-icons", 'textContent': 'title',
                        },
            },
            icon2: {
                name: 'div',
                    class: 'icon',
                        icon: {
                    'name': 'i', 'class': "material-icons", 'textContent': 'image',
                        },
            },
            icon3: {
                name: 'div',
                    class: 'icon',
                        icon: {
                    'name': 'i', 'class': "material-icons", 'textContent': 'format_list_bulleted',
                        },
            },

            icon4: {
                name: 'div',
                    class: 'icon',
                        icon: {
                    'name': 'i', 'class': "material-icons", 'textContent': 'attachment',
                        },
            },

            icon5: {
                name: 'div',
                    class: 'icon',
                        icon: {
                    'name': 'i', 'class': "material-icons", 'textContent': 'format_quote',
                        },
            },

            icon6: {
                name: 'div',
                    class: 'icon',
                        icon: {
                    'name': 'i', 'class': "material-icons", 'textContent': 'code',
                        },
            },

            icon7: {
                name: 'div',
                    class: 'icon',
                        icon: {
                    'name': 'i', 'class': "material-icons", 'textContent': 'horizontal_rule',
                        },
            },

            icon8: {
                name: 'div',
                    class: 'icon',
                        icon: {
                    'name': 'i', 'class': "material-icons", 'textContent': 'grid_on',
                        },
            },



        }
    },
    WorkspaceBody: {
        name: 'div', id: "BodyWorkspace", class: 'row',
            actionSpace: {
            name: 'div',
                id: 'actionSpace',
                    class: "row",
                        editor: {
                name: 'div',
                    id: 'editor',
                        class: 'column',
                            contenteditable: 'true',
                                content: {
                    name: 'div',
                        id: 'content',
                            textContent: 'kuch toh log kahengey, unka kaam hey kehna..',
                        }
            },
            output: {
                name: 'div', class: "column", id: 'output', textContent: 'output',
                    },
        },
    },
    footer: {
        name: 'div',
            class: 'workspaceFooter',
                p: {
            name: 'p',
                textContent: 'https://www.0dot1.live',
                }
    }
}

var basicLayoutV3 = {
    class: 'container column',
    section: header,
}
