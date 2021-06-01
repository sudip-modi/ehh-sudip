var brand = {
    name: 'div',
    content: {
        name: 'a',
        'href': '#welcome',
        class:'container align_center',
        logo: {
            'name': 'img',
            'id': 'logo',
            'src': 'images/ehh3dlowres.png',
        },
        text: {
            name: 'span',
            class:'brandTitle',
            innerHTML:`everything happens here`
        }
    },   
}
var signupModelV2 = {
    formSection: {
        name: 'section',
        class: 'container row',

        form: {
            id: 'regForm',
            name: 'form',
            'class': 'align_center',
            content: {
                'name': 'div',
                class: 'column align_center',
                'formHeading': {
                    'name': 'h1',
                    'textContent': 'Sign Up',
                },
                item0: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        icon: {
                            name: 'i', 'class': "material-icons", 'textContent': 'add_box',
                        },
                        textLable: {
                            name: 'lable',
                            'textContent': 'continue with google',
                        },

                    },
                },
                'hr': {
                    'name': 'hr', class: 'hr'
                },
                item1: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelUsername': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'username',
                        'textContent': 'Username',
                    },
                    'inputUsername': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'username',
                        'required': 'true',
                        'placeholder': 'Enter Username',
                    }
                },
                item2: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelPassword': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'password',
                        'textContent': 'Password',
                    },
                    'inputPassword': {
                        'name': 'input',
                        'type': 'password',
                        'id': 'password',
                        'required': 'true',
                        'placeholder': 'Enter Password',
                    }
                },
                item3: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'SIGN UP',
                        },
                        'data-command': `[{"command":"Signup"}]`,
                    },
                },
                item4: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'continue with email',
                        },


                    },
                },
                item5: {
                    name: 'li',
                    class: 'full-width item',
                    'textMessage': {
                        'name': 'div',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            class: 'small',
                            'textContent': 'By signing up, you agree to the Terms of Service and Privacy Policy.',
                        },

                    },
                },

            }

        }
    }
}
var loginModelV2 = {
    formSection: {
        name: 'section',
        class: 'container row',
        form: {
            id: 'regForm',
            name: 'form',
            'class': 'align_center',
            content: {
                'name': 'div',
                class: 'column align_center',
                'formHeading': {
                    'name': 'h1',
                    'textContent': 'log in',
                },
                item0: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        icon: {
                            name: 'i', 'class': "material-icons", 'textContent': 'add_box',
                        },
                        textLable: {
                            name: 'lable',
                            'textContent': 'continue with google',
                        },

                    },
                },
                'hr': {
                    'name': 'hr', class: 'hr'
                },
                item1: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelUsername': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'username',
                        'textContent': 'Username',
                    },
                    'inputUsername': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'username',
                        'required': 'true',
                        'placeholder': 'Enter Username',
                    }
                },
                item2: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelPassword': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'password',
                        'textContent': 'Password',
                    },
                    'inputPassword': {
                        'name': 'input',
                        'type': 'password',
                        'id': 'password',
                        'required': 'true',
                        'placeholder': 'Enter Password',
                    }
                },
                item3: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'LOG IN',
                        },
                        'data-command': `[{"command":"Login"}]`,
                    },
                },
                item4: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'continue with email',
                        },

                    },
                },
                item5: {
                    name: 'li',
                    class: 'full-width item',
                    'textMessage': {
                        'name': 'div',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            class: 'small',
                            'textContent': 'By signing up, you agree to the Terms of Service and Privacy Policy.',
                        },

                    },
                },

            }

        }
    }
}
var headerSignup = {
    'name': 'div',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'id': 'header',
    'class': 'row',
    //  'textContent':"header",
    'brand': brand,
  //  'menu': actionSpaceHeaderVistorMenu,
}
var sampleNestedFolder = {
    'name':'ul',
    'class':'nested',
    'li1':{'name':'li','textContent':'story 1'},
    'li2':{'name':'li','textContent':'story 2'},
    'li3':{'name':'li','textContent':'story 3'},
    'li4':{'name':'li','textContent':'story 4'},
    'li5':{
        'name':'li',
        'li':{
            'name':'li',
            'textContent':'errands',
            'span':{
                'name':'span',
                'class':'parent',
                'textContent':'my Nested Stories',
            },
            'ul':{
                'name':'ul',
                'class':'nested',
                'li1':{'name':'li','textContent':'story 1'},
                'li2':{'name':'li','textContent':'story 2'},
                'li3':{'name':'li','textContent':'story 3'},
                'li4':{'name':'li','textContent':'story 4'},
            }
        }
    },
    'li6':{
        'name':'li',
        'span':{
            'name':'span',
            'class':'parent',
            'textContent':'recent Stories',
        },
        'ul':{
            'name':'ul',
            'class':'nested',
            'li1':{'name':'li','textContent':'leaf1 1'},
            'li2':{'name':'li','textContent':'leaf2 2'}, 
        }
    }
}
var leftSideNavBar= {
    name: 'section',
    id: "navigationSection",
    class: "column",
    inside_navigationSection: {
        name: 'div', id: "inside_navigationSection",
        sideBar_CollectionList: {
            name: 'div',
             //   class: 'collection_list',
                    collectionItem: {
                name: 'div',
                   // class: "collection",
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
                                    'textContent': 'new actionStory',
                                },
                                'data-command':`[{"command":"new"}]`,
                            },
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'upload_file',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'open file',
                                },
                                'data-command':`[{"command":"OpenFile"}]`
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
                                    'textContent': 'add collection',
                                },
                                'data-command':`[{"command":"OpenDirectory"}]`
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
                                },
                                'data-command': `[{"command":"FS_Save"}]`,
                            },
                            // {
                            //     name: 'div',
                            //     class: 'item',
                            //     item2: {
                            //         name: 'div',
                            //         'class': "collection_name",
                            //         'textContent':'Google',
                            //         'data-command': `[{"command":"GDrive_Client"}]`,
                            //     },
                            // },
                            // {
                            //     name: 'div',
                            //     class: 'item',
                            //     item2: {
                            //         name: 'div',
                            //         'class': "collection_name",
                            //         'textContent':'Get A Folder from GDrive',
                            //         'data-command': `[{"command":"form","entity":"GDrive_Server"}]`,
                            //     },
                            // },
                            {
                                name: 'div',
                                class: 'item',
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent':'Invoice Form',
                                    'data-command': `[{"command":"form","entity":"invoiceForm"}]`,
                                },
                               
                            },
                            {
                                name: 'div',
                                class: 'item',
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'Export to Sheet',
                                    'data-command': `[{"command":"modal","entity":"export"}]`,//form
                                },
                                
                            },
                            {
                                name: 'div',
                                class: 'item',
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'Import from Sheet',
                                    'data-command': `[{"command":"form","entity":"import"}]`,
                                },
                                
                            },
                            {
                                name: 'div',
                                class: 'item',
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'Get Action Stories',
                                    'data-command': `[{"command":"form","entity":"actionStories"}]`,
                                },
                                
                            },
                            {
                                name: 'div',
                                class: 'item',
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'RSS Reader',
                                    'data-command': `[{"command":"form","entity":"RssReader"}]`,
                                },
                                
                            },
                             {
                                name: 'div',
                                class: 'item',
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent':'KnowledgeCenter',
                                    'data-command': `[{"command":"KnowledgeCenter"}]`,
                                },
                             }
                        ]
            }
        },
        hr: {
            name: 'div',
            class: 'hr',
        },

        sideBar_Collection_withDropDown: {
            name: 'div',
                class: 'collection_list',
                    collectionTitle: {
                        name: 'div',
                        class: "medium",
                        textContent: "actionStories & Collections",
                    },
            collectionItem: {
                name: 'div',
                class: "container column",
                'liCurrentActionStory':{
                    'name':'li',
                    'class':'row item justify_SpaceBetween',
                    'span':{
                        'name':'span',
                        'class':'parent',
                        'textContent':'Current Action Story'
                    },
                    'ul':{
                        'name':'ul',
                        'class':'nested container column',
                        'id':'CurrentActionStory'
                    }
                },
                'span0':{
                    'name':'span',
                    'class':'hozintalLine'
                },
                 'limyCollection':{
                        'name':'li',
                        'class':'row item justify_SpaceBetween',
                        'span':{
                            'name':'span',
                            'class':'parent',
                            'textContent':'my collection'
                        },
                        'ul':{
                            'name':'ul',
                            'class':'nested container column',
                            'id':'myCollection'
                        }
                 },
                'span1':{
                    'name':'span',
                    'class':'hozintalLine'
                },
                'limyFiles':{
                    'name':'li',
                    'class':'row item justify_SpaceBetween',
                    'span':{
                        'name':'span',
                        'class':'parent',
                        'textContent':'my files'
                    },
                    'ul':{
                        'name':'ul',
                        'class':'nested container column',
                        'id':'myFiles'
                    }
                },
                'span2':{
                    'name':'span',
                    'class':'hozintalLine'
                },
                'liRecentFiles':{
                    'name':'li',
                    'class':'row item justify_SpaceBetween',
                    'span':{
                        'name':'span',
                        'class':'parent',
                        'textContent':'Recent Files'
                    },
                    'ul':{
                        'name':'ul',
                        'class':'nested container column',
                        'id':'RecentFiles'
                    }
                },
                'span3':{
                    'name':'span',
                    'class':'hozintalLine'
                },
                'liStarred':{
                    'name':'li',
                    'span':{
                        'name':'span',
                        'class':'parent',
                        'textContent':'Starred'
                    },
                    'ul':sampleNestedFolder
                },
                'liTags':{
                    'name':'li',
                    'span':{
                        'name':'span',
                        'class':'parent',
                        'textContent':'Tags'
                    },
                    'ul':sampleNestedFolder
                },
                'liTrash':{
                    'name':'li',
                    'span':{
                        'name':'span',
                        'class':'parent',
                        'textContent':'Starred'
                    },
                    'ul':sampleNestedFolder
                }
            },
            collectionItem2: {
                name: 'div',
                class: "container column",
                id: 'sideLinks',
                li1: {
                    name: 'ul',
                    class: 'row item',
                    parent: {
                        name: 'span',
                        class: 'parent',
                        textContent:'myCollection'
                    },
                    ul: {
                        name: 'ul',
                        class: 'nested container column children item-collection',
                        items1: {
                            name: 'li',
                            class: 'item row',
                            textContent:'story/file 1',
                        },
                        items2: {
                            name: 'a',
                            class: 'item row',
                            href:'/load/file2',
                            textContent: 'story/file 2',
                        },
                        parent: {
                            name: 'span',
                            class: 'parent',
                            textContent: 'Folder 1'
                        },
                        ul: {
                            name: 'ul',
                            class: 'nested container column children item-collection',
                            items1: {
                                name: 'li',
                                class: 'item row',
                                textContent: 'files in folder',
                            },
                            items2: {
                                name: 'a',
                                class: 'item row',
                                href: '/load/file2',
                                textContent: 'story/file 2',
                            },

                        },
                        
                    },
                },
            },
        },
        sideBar_footer: {
            name: 'div',
                id: "SidebarFooter",
                   
            // footerIcons: {
            //     name: 'div',
            //     class: 'container IconList ',
            //     id:'footerIcons',
            //     itemCollection: {
            //         name: 'ul',
            //         class:'justify_SpaceBetween container',
            //         favouriteIcon: {
            //             name: 'i',
            //             'class': "material-icons",
            //             'textContent': 'favorite',
            //         }, 
            //         download:{
            //             name: 'i',
            //             'class': "material-icons",
            //             'textContent': 'download_for_offline',
            //         },
            //         setting: {
            //             name: 'i',
            //             'class': "material-icons",
            //             'textContent': 'settings',
            //         },
            //     }


            // },

        },

    }
}
var workspaceHeader= {
    name: 'div',
    class: "align_center row",
    id:'workspaceHeader',
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
        },

    },
     'vl':{
        'name': 'span',
        class: 'verticleBar',                           
        },
    tools: {
        name: 'div',
        class:'row',
        selectTextClass:{
            name:'select',
            class:'select',
            id:'richTextFormattingSelection',
            options:{
                name:'option',
                selected:'',
                textContent:'normal',
            },
            option1:{
                name:'option',
                value:'h1',
                textContent:'Title 1',
            },
            option2:{
                name:'option',
                value:'h2',
                textContent:'Title 2',
            },
            option3:{
                name:'option',
                value:'h3',
                textContent:'Title 3',
            },
        },
        selectTextFont:{
            name:'select',
            class:'select',
            id:'richTextFontSelection',
            options:{
                name:'option',
                selected:'',
                textContent:'normal',
            },
            option1:{
                name:'option',
                
                textContent:'Arial',
            },
            option2:{
                name:'option',
                value:'h2',
                textContent:'Poppins',
            },
            option3:{
                name:'option',
                value:'h3',
                textContent:'Title 3',
            },
        },
        selectFontSize:{
            name:'select',
            class:'select',
            id:'richTextFontSizeSelection',
            options:{
                name:'option',
                selected:'',
                textContent:'normal',
            },
            option1:{
                name:'option',
                value:'1',
                textContent:'Very Small',
            },
            option2:{
                name:'option',
                value:'2',
                textContent:'A bit small',
            },
            option3:{
                name:'option',
                value:'h3',
                textContent:'Title 3',
            },
        },
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
}
var workSpaceBody = {
    name: 'div',
    id: 'workSpaceBody',
    class: 'container',
    userView: {
        name: 'div',
        class: 'container col',
        id:'userView',
        editor: {
            name: 'div',
            class: 'container column',
            id: 'editor',
            card: {
                name: 'div',
                class: 'card container column',
                id: 'autoSuggest',
                //    style: 'visibility:hidden',
                CardHeader: {
                    name: 'div',
                    class: 'medium',
                    textContent: 'Auto Suggest curated for you'
                },
                itemCollection: {
                    name: 'datalist',
                    class: 'container column',
                    items: {
                        name: 'div',
                        class: 'item',
                        textContent: 'I am an item',
                    },
                    items2: {
                        name: 'div',
                        class: 'item',
                        textContent: 'I am second Item',
                    },
                    

                }


            },
            // tabs: {
            //     name: 'div',
            //     class: 'container',
            //     id: 'storyTabs',
            //     items: {
            //         file1: {
            //             name: 'button',
            //             textContent: 'file1',
            //             close: {
            //                 name: 'i',
            //                 class: "material-icons",
            //                 id: 'close',
            //                 textContent: 'close',
            //             },

            //         },
            //         file2: {
            //             name: 'button',
            //             textContent: 'file2',
            //             close: {
            //                 name: 'i',
            //                 class: "material-icons",
            //                 id: 'close',
            //                 textContent: 'close',
            //             },

            //         },
            //         file3: {
            //             name: 'button',
            //             textContent: 'file3',
            //             close: {
            //                 name: 'i',
            //                 class: "material-icons",
            //                 id: 'close',
            //                 textContent: 'close',
            //             },

            //         },
            //     }


            // },
            content: {
                name: 'div',
                class: 'container column',
                id: 'content',
                activeActionStory: {
                    name: 'div',
                    class: 'container column',
                    id: 'activeActionStory',
                    block: {
                        name: 'div',
                        class: 'blocks',
                        id:'blocks+Index',
                        li1:{
                            name:'span',
                            id:'viewForm',
                        },
                        li2: {
                            name: 'span',
                            class: 'inlineContent',
                            id:'inlineContent',
                            contentEditable: 'true',
                            fileID:'',
                            innerHTML: sampleIntroStory
                        },
                    }
                    
                }
                
            }
        },
        output: {
            name: 'div',
            class: 'container',
            id:'output',
            textContent:'output',
            
        }
    },
    
    
    
    
}
var actionWorkSpace = {
    name: 'section',
    id: "actionWorkspaceSection",
    class: "column",
    'workspaceHeader': workspaceHeader,
    'workSpaceBody': workSpaceBody,  
}
var actionSpaceBody = {
    name: 'div',
    class: 'container row',
    id: 'actionSpaceBody',
    sidebarSection: leftSideNavBar,
    workSpaceSection: actionWorkSpace,
}
var footer= {
    name: 'div',
    class: 'workspaceFooter',
    p: {
        name: 'p',
        innerHTML: `<footer>
            made with 🧠 & 🧡,
            < br > during 🌧️ at <b>shunya.ek</b>, goa, india.
            < br >with help from google & the world - wide - web tech community.
        </footer >`,
    }
}
var card = {
    name: 'div',
    class: 'card container',
    style:'visibility:hidden',
    CardHeader: {
        name: 'div',
        class: 'h2',
        textContent: 'Auto Suggest curated for you'
    },
    itemCollection: {
        name: 'span',
        class: 'container coloumn',
              
        items: {
            name: 'div',
            class: 'item',
            textContent:'I am an item',
            
        }

    }
    
    
}
var CardViewJSON = {
    'name':'div',
    'class':'card_item',
    'h2':{
        'name':'h2',
        'textContent':'Action Story'
    },
    'p':{
        'name':'p',
        
    }
}
var itemModel = {
    name: 'div',
    class: 'item row container',
    item1: {
        name: 'i',
        'class': "material-icons icon mr - 10",
        'textContent': 'add',
        id: 'add',
    },
    item2: {
        name: 'div',
        'class': "collection_name",
        'textContent': 'new actionStory',
        //        'onclick': "engine.executeSynReq(newActionStoryReq);"
        //  'data-command': '[{"command":"new ","entity": "actionContent","value":"innerHTML"}]',
    }

}
var contextMenu = {
    commands: [
        { textContent: 'open' },
        { textContent: 'open in tab' },
        { class: 'horizonticleBar' },
        { textContent: "copy" },
        {textContent:'pasteCollection'},
        { textContent: 'share' },
        { textContent: 'dublicate' },
        { textContent: 'rename' },
        {textContent:'delete'},
    ]
}
var invoiceJSON = {
    'content':{
        'name':'div',
    'invoice':{
        'name':'div',
        'class':'invoice',
    'header':{
        'name':'header',
        'h1':{
            'name':'h1',
            'textContent':'Invoice'
        },
        'address':{
            'name':'address',
            'contenteditable':'',
            'Name':{
                'name':'p',
                'textContent':'Geeta Baweja'
            }, 
            'Place':{
                'name':'p',
                'innerHTML':'Connaught Place, Delhi<br> India',
            },
            'pincode':{
                'name':'p',
                'textContent':'110001'
            },
        },
    },
    'article':{
        'name':'article',
            'h1':{
             'name':'h1',
             'textContent':'Recipient',
            },
            'address':{
            'name':'address',
            'contenteditable':'',
                'p':{
                    'name':'p',
                    'innerHTML':'Flat,House No.,Building,Company<br>Colony,Street,Sector<br>Town/City, State<br>Pincode',
                }
            },
            'meta':{
                'name':'table',
                'class':'meta',
                'tr1':{
                    'name':'tr',
                    'th':{
                        'name':'th',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'textContent':'Due Date'
                        }
                    },
                    'td':{
                        'name':'td',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'textContent':'9th April 2021'
                        }
                    }
                },
                'tr3':{
                    'name':'tr',
                    'th':{
                        'name':'th',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'textContent':'Doc Number'
                        }
                    },
                    'td':{
                        'name':'td',
                        'span':{
                            'name':'span',
                            'id':'DocNumber',
                            'contenteditable':'',
                            'textContent':''
                        }
                    }
                },
                'tr4':{
                    'name':'tr',
                    'th':{
                        'name':'th',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'textContent':'Status'
                        }
                    },
                    'td':{
                        'name':'td',
                        'span':{
                            'name':'span',
                            // 'contenteditable':'',
                            'textContent':'Payable'
                        }
                    }
                },
            },
            'inventory':{
                'name':'table',
                'class':'inventory',
                'thead':{
                    'name':'thead',
                    'tr':{
                        'name':'tr',
                        'th1':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Description',
                            } 
                        },
                        'th2':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Amount',
                            } 
                        },
                        'th3':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Detail Type',
                            } 
                        },
                        'th4':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Ref',
                            } 
                        },
                        'th5':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Account',
                            } 
                        },
                        'th6':{
                            'name':'th',
                            'span':{
                                'name':'span',
                                'contenteditable':'',
                                'textContent':'Line Status',
                            } 
                        },
                    }
                },
                'tbody':{
                    'name':'tbody',
                    'id':'tbody',
                    'trCustom':{
                        'name':'tr',
                        'id':'trCustom',
                        'td1':{
                            'name':'td',
                            'a':{
                                'name':'a',
                                'id':'Custom',
                                'class':'cut',
                                'textContent':'-',
                                'data-command': `[{"command":"RemoveItem"}]`,
                            },
                            'span':{
                                'name':'span',
                                'class':'Description',
                                'contenteditable':'',
                                'textContent':'Sample Expense'
                            }
                        },
                        'td2':{
                            'name':'td',
                            'span1':{
                                'name':'span',
                                'data-prefix':'',
                                'textContent':'Rs. '
                            },
                            'span2':{
                                'name':'span',
                                'class':'Amount',
                                'contenteditable':'',
                                'textContent':'600.00'
                            }
                        },
                        'td3':{
                            'name':'td',
                            'span2':{
                                'name':'span',
                                'class':'DetailType',
                                'contenteditable':'',
                                'textContent':'Expense Detail'
                            }
                        },
                        'td4':{
                            'name':'td',
                            'span2':{
                                'name':'span',
                                'class':'Ref',
                                'contenteditable':'',
                                'textContent':'DEF234'
                            }
                        },
                        'td5':{
                            'name':'td',
                            'span':{
                                'name':'span',
                                'class':'Account',
                                'contenteditable':'',
                                'textContent':'EFG345'
                            }
                        },
                        'td6':{
                            'name':'td',
                            'span2':{
                                'name':'span',
                                'class':'LineStatus',
                                'contenteditable':'',
                                'textContent':'Billable'
                            }
                        }
                    }
                }
            },
            'add':{
                'name':'a',
                'class':'add',
                'textContent':'+',
                'data-command': `[{"command":"NewItem"}]`,
            },
            // 'balance':{
            //     'name':'table',
            //     'class':'balance',
            //     'tr1':{
            //         'name':'tr',
            //         'th':{
            //             'name':'th',
            //             'span':{
            //                 'name':'span',
            //                 'contenteditable':'',
            //                 'textContent':'Total Amount'
            //             }
            //         },
            //         'td':{
            //             'name':'td',
            //             'span1':{
            //                 'name':'span',
            //                 'data-prefix':'',
            //                 'textContent':'Rs. '
            //             },
            //             'span2':{
            //                 'name':'span',
            //                 'id':'TotalAmount',
            //                 'textContent':'600.00'
            //             }
            //         }
            //     },
            // },
           
        },
        'submit':{
            'name':'button',
            'full-width':'',
            'textContent':"Submit Invoice",
            'data-command': `[{"command":"SubmitInvoice"}]`,
        }
    }
    }
}
var newItemJSON ={
        'name':'tr',
        'id':'',
        'td1':{
            'name':'td',
            'a':{
                'name':'a',
                'class':'cut',
                'textContent':'-',
                'data-command': `[{"command":"RemoveItem"}]`,
            },
            'span':{
                'name':'span',
                'class':'Description',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td2':{
            'name':'td',
            'span1':{
                'name':'span',
                'data-prefix':'',
                'textContent':'Rs. '
            },
            'span2':{
                'name':'span',
                'class':'Amount',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td3':{
            'name':'td',
            'span2':{
                'name':'span',
                'class':'DetailType',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td4':{
            'name':'td',
            'span2':{
                'name':'span',
                'class':'Ref',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td5':{
            'name':'td',
            'span':{
                'name':'span',
                'class':'Account',
                'contenteditable':'',
                'textContent':''
            }
        },
        'td6':{
            'name':'td',
            'span2':{
                'name':'span',
                'class':'LineStatus',
                'contenteditable':'',
                'textContent':''
            }
        }
}
var importfromSheet = {
    formSection: {
        name: 'section',
        class: 'container row',
        form: {
          //  id: 'regForm',
            name: 'form',
            'class': 'align_center',
            content: {
                'name': 'div',
                class: 'column align_center',//column align_center
                'formHeading': {
                    'name': 'h1',
                    'textContent': 'Import From Sheet',
                },
                'hr': {
                    'name': 'hr', class: 'hr'
                },
                item1: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelSpreadsheetID': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'spreadsheetID',
                        'textContent': 'Spreadsheet ID',
                    },
                    'inputSpreadsheetID': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'spreadsheetID',
                        'required': 'true',
                        'placeholder': 'Enter SpreadsheetID',
                        'value':'1ffczYrBikoQ49ijbqRHrAkZc0mJl4Ezb9fHfeocstmw',
                    }
                },
                item2: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelNamedRange': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'NamedRange',
                        'textContent': 'Named Range',
                    },
                    // 'inputNamedRange': {
                    //     'name': 'input',
                    //     'type': 'text',
                    //     'id': 'NamedRange',
                    //     'required': 'true',
                    //     'placeholder': 'Enter Named Range(Eg, SheetName!A1:D10)',
                    // },
                    'inputNamedRange':{
                        'name':'select',
                        'id':'NamedRange',
                        'required':'true',
                        'o1':{'name':'option','value':'FormsV1!A1:C5','textContent':'FormsV1!A1:C5'},
                        'o2':{'name':'option','value':'FormsV1!A10:E20','textContent':'FormsV1!A10:E20'},
                        'o3':{'name':'option','value':'Test!A1:D8','textContent':'Test!A1:D8'},
                        'o4':{'name':'option','value':'Test!A15:D20','textContent':'Test!A15:D20'},
                    }
                },
                item3: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'SUBMIT',
                        },
                       'data-command':`[{"command":"importFromSheet"}]`,
                    },
                },
            }

        }
   }
}
var exportToSheet = {
    div:{
    'name':'div',
    'class':'modal-content',
    'br1':{
        'name':'br'
    },
     'div1':{
     'name':'div',
     'class':'closeContainer',
     'span':{
        'name':'span',
        'data-command': `[{"command":"closeModal"}]`,
        'class':'close',
        'textContent':'x',
        },
    },
    formSection: {
        name: 'section',
        class: 'container row',
        form: {
           // id: 'regForm',
            name: 'form',
            'class': 'exportToSheet',
            content: {
                'name': 'div',
                class: 'column align_center',
                'formHeading': {
                    'name': 'h1',
                    'textContent': 'Export To Sheet',
                },
                'hr': {
                    'name': 'hr', class: 'hr'
                },
                item1: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelSpreadsheetID': {
                        name: 'label',
                        class: 'alignSelf-left small',
                        'width':'100%',
                        'for': 'spreadsheetID',
                        'textContent': 'Spreadsheet ID',
                    },
                    'inputSpreadsheetID': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'spreadsheetID',
                        'width':'100%',
                        'required': 'true',
                        'placeholder': 'Enter SpreadsheetID',
                        'value':'1ffczYrBikoQ49ijbqRHrAkZc0mJl4Ezb9fHfeocstmw',
                    }
                },
                item2: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelSheetName': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'sheetName',
                        'textContent': 'Sheet Name',
                    },
                    // 'inputsheetName': {
                    //     'name': 'input',
                    //     'type': 'text',
                    //     'id': 'sheetName',
                    //     'required': 'true',
                    //     'placeholder': 'Enter Sheet Name',
                    // }
                    'inputSheetName':{
                        'name':'select',
                        'id':'sheetName',
                        'required':'true',
                        'o1':{'name':'option','value':'FormsV1','textContent':'FormsV1'},
                        'o2':{'name':'option','value':'Test','textContent':'Test'},
                    }
                },
                item3: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'SUBMIT',
                        },
                        'data-command': `[{"command":"exportToSheet"}]`,
                    },
                },
            }

        }
    }
}
}
var RssReaderJSON = {
    formSection: {
        name: 'section',
        class: 'container row',
        form: {
          //  id: 'regForm',
            name: 'form',
            'class': 'align_center',
            content: {
                'name': 'div',
                class: 'column align_center',//column align_center
                'formHeading': {
                    'name': 'h1',
                    'textContent': 'RSS READER FOR A URL',
                },
                'hr': {
                    'name': 'hr', class: 'hr'
                },
                item1: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelURL': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'url',
                        'textContent': 'URL OF A WEBSITE',
                    },
                    'inputSpreadsheetID': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'url',
                        'required': 'true',
                        'placeholder': 'Enter URL',
                    }
                },
                item2: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'SUBMIT',
                        },
                       'data-command':`[{"command":"RssReader"}]`,
                    },
                },
            }

        }
   }
}
var GetActionStoriesJSON = {
    formSection: {
        name: 'section',
        class: 'container row',
        form: {
          //  id: 'regForm',
            name: 'form',
            'class': 'align_center',
            content: {
                'name': 'div',
                class: 'column align_center',//column align_center
                'formHeading': {
                    'name': 'h1',
                    'textContent': 'GET ACTION STORIES',
                },
                'hr': {
                    'name': 'hr', class: 'hr'
                },
                item1:{
                    name: 'li',
                    class: 'full-width item column',
                    'labelSpreadsheetID': {
                        name: 'label',
                        class: 'alignSelf-left small',
                        'width':'100%',
                        'textContent': 'Spreadsheet ID',
                    },
                    'inputSpreadsheetID': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'SpreadsheetId',
                        'width':'100%',
                        'required': 'true',
                        'placeholder': 'Enter Spreadsheet ID',
                        'value':'1ffczYrBikoQ49ijbqRHrAkZc0mJl4Ezb9fHfeocstmw'
                    }
                },
                item2:{
                    name: 'li',
                    class: 'full-width item column',
                    'labelNamedRange': {
                        name: 'label',
                        class: 'alignSelf-left small',
                        'width':'100%',
                        'textContent': 'Named Range',
                    },
                    'inputNamedRange': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'NamedRange',
                        'width':'100%',
                        'required': 'true',
                        'placeholder': 'Enter Named Range',
                        'value':'ActionStories!A1:A5',
                    }
                },
                item3:{
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent':'SUBMIT',
                        },
                        'data-command': `[{"command":"ActionStories"}]`,

                    },
                },
            }

        }
   }
}
var GoogleJSON = {
    formSection:{
        name: 'section',
        class: 'container row',
        form: {
            id: 'regForm',
            name: 'form',
            'class': 'align_center',
            content: {
                'name': 'div',
                class: 'column align_center',
                'Heading1': {
                    'name': 'h1',
                    'textContent': 'Spreadsheet Flow',
                },
                item1:{
                    name: 'li',
                    class: 'full-width item column',
                    'label1': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'textContent': '1. Create a Spreadsheet 2. Create a new Sheet 3. Create a copy of the Spreadsheet',
                    }, 
                    // 'label2': {
                    //     'name': 'label',
                    //     class: 'alignSelf-left small',
                    //     'textContent': '',
                    // },
                    // 'label3': {
                    //     'name': 'label',
                    //     class: 'alignSelf-left small',
                    //     'textContent': '',
                    // }, 
                },
                item2:{
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent':'Execute Spreadsheet Flow',
                        },
                        'data-command': `[{"command":"SpreadsheetFlowGoogleClient"}]`,

                    },
                },
                hr1: {
                    name: 'div',
                    class: 'hr',
                },
                'Heading2': {
                    'name': 'h1',
                    'textContent': 'Create a file in Google Drive',
                },
                item3:{
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent':'Execute this Flow',
                        },
                        'data-command': `[{"command":"CreateFileGoogleClient"}]`,
                    },
                },
                hr2: {
                    name: 'div',
                    class: 'hr',
                },
                'Heading3': {
                    'name': 'h1',
                    'textContent': 'Get ActionStories from GDrive',
                }, 
                item4:{
                    name: 'li',
                    class: 'full-width item column',
                    'labelSpreadsheetID': {
                        name: 'label',
                        class: 'alignSelf-left small',
                        'width':'100%',
                        'textContent': 'Spreadsheet ID',
                    },
                    'inputSpreadsheetID': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'SpreadsheetId',
                        'width':'100%',
                        'required': 'true',
                        'placeholder': 'Enter Spreadsheet ID',
                        'value':'1ffczYrBikoQ49ijbqRHrAkZc0mJl4Ezb9fHfeocstmw'
                    }
                },
                item5:{
                    name: 'li',
                    class: 'full-width item column',
                    'labelNamedRange': {
                        name: 'label',
                        class: 'alignSelf-left small',
                        'width':'100%',
                        'textContent': 'Named Range',
                    },
                    'inputNamedRange': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'NamedRange',
                        'width':'100%',
                        'required': 'true',
                        'placeholder': 'Enter Named Range',
                        'value':'ActionStories!A1:A5',
                    }
                },
                item6:{
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent':'Get Action Stories',
                        },
                        'data-command': `[{"command":"ActionStories"}]`,

                    },
                },
                hr3: {
                    name: 'div',
                    class: 'hr',
                },
                item7:{
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent':'Back to Editor',
                        },
                        'data-command': `[{"command":"Redirect","entity":"action"}]`,

                    },
                }
            }
        }
    }
}
var GetFileFromGDrive = {
    formSection: {
        name: 'section',
        class: 'container row',
        form: {
            id: 'ClientForm',
            name: 'form',
            'class': 'align_center',
            content: {
                'name': 'div',
                class: 'column align_center',//column align_center
                'formHeading': {
                    'name': 'h1',
                    'textContent': 'Search Folder in GDrive',
                },
                'hr': {
                    'name': 'hr', class: 'hr'
                },
                item1: {
                    name: 'li',
                    class: 'full-width item column',
                    'labelNamedRange': {
                        'name': 'label',
                        class: 'alignSelf-left small',
                        'for': 'folderName',
                        'textContent': 'Folder Name',
                    },
                    'inputNamedRange': {
                        'name': 'input',
                        'type': 'text',
                        'id': 'folderName',
                        'required': 'true',
                        'placeholder': 'Enter folder Name',
                        'value':'JSONForm1.0',
                    },
                },
                item2: {
                    name: 'li',
                    class: 'full-width item',
                    'button': {
                        'name': 'button',
                        class: 'full-width',
                        textLable: {
                            name: 'lable',
                            'textContent': 'SUBMIT',
                        },
                        'data-command':`[{"command":"SearchFolder_GoogleServer"}]`,
                    },
                },
            }

        }
   }
}