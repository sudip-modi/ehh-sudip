var basicLayoutV3 = {
    class: 'flex column',
    header: {
        'name': 'section',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'header',
        'class': 'flex align_center row',
        //  'innerText':"header",
        'brand': {
            'name': 'img',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'src': 'images/icons_221x.png',
            'style': "width:54px",
            'id': 'brand',
            'class': 'brand'
        },
        'input': {
            'name': 'input',
            'desc': 'This is a horizontical bar, more functionality of this bar to be added',
            'id': 'actionSearch',
            'placeholder': "search here...",
            'class': 'searchBar',
            'autocomplete': "off"
        },
        'menu': {
            "name": "menu",
            'id': "topmenu",
            'class': 'flex align_justify',
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
                    'name': 'button',
                    'class': "material-icons",
                    'textContent': 'more_vert',
                }
            ]

        }



    },
    actionSpaceBodySection: {
        name: 'section',
        id: 'bodySection',
        class: 'row',
        LeftSideNavBar: {
            name: 'section',
            id: "navigationSection",
            class: "column",
            inside_navigationSection: {
                name: 'div',
                id: "inside_navigationSection",

                sideBar_header: {
                    name: 'div',
                    class: "side_bar_header",
                    brand: {
                        name: 'div',
                        class: "brand_logo",
                        textContent: 'Sunil Kumar',
                    },
                    sideBarControlMenu: {
                        name: 'div',
                        class: "HeaderControl flex align_center justify_center",
                        button1: {
                            name: 'div',
                            class: "mode_toggle_btn mr-15",
                            id: "MainHeaderHamburger1",
                        },
                        button2: {
                            name: 'i',
                            'class': "material-icons",
                            'textContent': 'add_box',
                        },
                    },

                },
                sideBar_CollectionList: {
                    name: 'div',
                    class: 'collection_list',
                    collectionItem: {
                        name: 'div',
                        class: "collection",
                        items: [
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'add',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'new file',
                                    'data-command': '[{"command":"new ","entity": "actionContent","value":"innerHTML"}]',
                                }

                            },
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'folder_open',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'open folder',
                                    'onclick': "processFS.OpenDirectory(event);"
                                }

                            },
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'save',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'save',
                                }

                            },


                        ]
                    }
                },
                hr: {
                    name: 'div',
                    class: 'hr',
                },

                sideBar_Collection_withDropDown: {
                    name: 'div',
                    class: 'collection_list_with_drop_down',
                    collectionTitle: {
                        name: 'div',
                        class: "miniHeading",
                        textContent: "Collections/Folder",
                    },
                    collectionItem: {
                        name: 'div',
                        class: "collection drop_down",
                        innerHTML: `
                      <li><span class="parent collection">my Stories</span>
                      <ul class="nested">
                      <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                        <li><span class="parent">my Nested Stories</span>
                            <ul class="nested">
                                <li>story 1</li>
                                <li>story 2</li>
                                <li>story 3</li>
                                <li>story 4</li>
                            </ul>
                        </li>
                        errands
                    </li>

                    <li><span class="parent">recent Stories</span>
                        <ul class="nested">
                            <li>leaf</li>
                            <li>leaf</li>

                        </ul>
                    </li>
                </ul>
            </li>
            <span class="hozintalLine"></span>
            <li><span class="parent">Recent Files</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>

            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>

                </ul>
            </li>
            </ul>
            </li>
            <span class="hozintalLine"></span>
            <li><span class="parent">Starred</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>

            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>

                </ul>
            </li>
            </ul>
            </li>
            <li><span class="parent">Tags</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>

            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>

                </ul>
            </li>
            </ul>
            </li>
            <li><span class="parent">Trash</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>

            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>

                </ul>
            </li>
            </ul>
            </li>`
                    }
                },
                sideBar_footer: {
                    name: 'div',
                    id: "SidebarFooter",
                    newCollectionBtn: {
                        name: 'div',
                        class: 'newCollectionBtn flex align_center',
                        id: '',
                        'textContent': 'add Collections',
                        items: [
                            {
                                name: 'i',
                                'class': "material-icons",
                                'textContent': 'library_add',
                            },

                        ]


                    },
                    footerIcons: {
                        name: 'div',
                        class: 'footerIcon flex align_center',
                        id: 'footerIcon',
                        items: [
                            {
                                name: 'i',
                                'class': "material-icons",
                                'textContent': 'favorite',
                            }, {
                                name: 'i',
                                'class': "material-icons",
                                'textContent': 'download_for_offline',
                            }, {
                                name: 'i',
                                'class': "material-icons",
                                'textContent': 'settings',
                            },
                        ]


                    },

                },

            }
        },
        actionWorkSpace: {
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
    }

}