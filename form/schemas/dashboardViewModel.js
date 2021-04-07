
var leftSideNavBar = {
    name: 'section',
    id: "navigationSection",
    class: "column",
    inside_navigationSection: {
        name: 'div', id: "inside_navigationSection",
        // sideBar_header: {
        //     name: 'div',
        //     id:'side_bar_header',
        //     class: "justify_SpaceBetween container",
        //     brand: {
        //         name: 'div',
        //         class: "brand_logo",
        //         textContent: 'Sunil Kumar',
        //             },
        //     sideBarControlMenu: {
        //         name: 'div',
        //         class: "HeaderControl align_center justify_center",
        //         button1: {
        //             name: 'button',class: "mode_toggle_btn mr-15", id: "MainHeaderHamburger1",
        //                 },
        //         button2: {
        //             name: 'i','class': "material-icons",'textContent': 'add_box',
        //                 },
        //     },

        // },
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
                            'onclick': "engine.executeSynReq(newActionStoryReq);"

                            //  'data-command': '[{"command":"new ","entity": "actionContent","value":"innerHTML"}]',
                        }

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
                            'onclick': "engine.executeSynReq(openFileReqModel,event);"

                            //  'data-command': '[{"command":"new ","entity": "actionContent","value":"innerHTML"}]',
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
                            'textContent': 'add collection',
                            //'data-command': '[{"command":"new ","entity": "actionContent","value":"innerHTML"}]',
                            'onclick': "engine.executeSynReq(openFolderReqModel,event);"
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
            class: 'collection_list',
            collectionTitle: {
                name: 'div',
                class: "medium",
                textContent: "actionStories & Collections",
            },
            collectionItem: {
                name: 'div',
                class: "container column",
                innerHTML: `
                      <li class='row item justify_SpaceBetween'><span class="parent ">my collection</span>
                      <ul class="nested container column">
                      <li class='item row'>story 1</li>
                    <li class='item row'>story 2</li>
                    <li class='item row' >story 3</li>
                    <li class='item row'>story 4</li>
                    <li class='item row' >
                        <li class='item row'><span class="parent">my Nested Stories</span>
                            <ul class="nested">
                                <li class='item row'>story 1</li>
                                <li class='item row'>story 2</li>
                                <li class='item row'>story 3</li>
                                <li class='item row'>story 4</li>
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
                        textContent: 'myCollection'
                    },
                    ul: {
                        name: 'ul',
                        class: 'nested container column children item-collection',
                        items1: {
                            name: 'li',
                            class: 'item row',
                            textContent: 'story/file 1',
                        },
                        items2: {
                            name: 'a',
                            class: 'item row',
                            href: '/load/file2',
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
                //     innerHTML: `
                //           <li class='row item justify_SpaceBetween'>
                //              < span class= "parent " > my collection</span>
                //           <ul class="nested container column">
                //           <li class='item row'>story 1</li>
                //         <li class='item row'>story 2</li>
                //         <li class='item row' >story 3</li>
                //         <li class='item row'>story 4</li>
                //         <li class='item row' >
                //             <li class='item row'><span class="parent">my Nested Stories</span>
                //                 <ul class="nested">
                //                     <li class='item row'>story 1</li>
                //                     <li class='item row'>story 2</li>
                //                     <li class='item row'>story 3</li>
                //                     <li class='item row'>story 4</li>
                //                 </ul>
                //             </li>
                //             errands
                //         </li>

                //         <li><span class="parent">recent Stories</span>
                //             <ul class="nested">
                //                 <li>leaf</li>
                //                 <li>leaf</li>

                //             </ul>
                //         </li>
                //     </ul>
                // </li>
                // <span class="hozintalLine"></span>
                // <li><span class="parent">Recent Files</span>
                //     <ul class="nested">
                //         <li>story 1</li>
                //         <li>story 2</li>
                //         <li>story 3</li>
                //         <li>story 4</li>
                //         <li>
                //         <li><span class="parent">my Nested Stories</span>
                //             <ul class="nested">
                //                 <li>story 1</li>
                //                 <li>story 2</li>
                //                 <li>story 3</li>
                //                 <li>story 4</li>
                //             </ul>
                //         </li>
                //         errands
                // </li>

                // <li><span class="parent">recent Stories</span>
                //     <ul class="nested">
                //         <li>leaf</li>
                //         <li>leaf</li>

                //     </ul>
                // </li>
                // </ul>
                // </li>
                // <span class="hozintalLine"></span>
                // <li><span class="parent">Starred</span>
                //     <ul class="nested">
                //         <li>story 1</li>
                //         <li>story 2</li>
                //         <li>story 3</li>
                //         <li>story 4</li>
                //         <li>
                //         <li><span class="parent">my Nested Stories</span>
                //             <ul class="nested">
                //                 <li>story 1</li>
                //                 <li>story 2</li>
                //                 <li>story 3</li>
                //                 <li>story 4</li>
                //             </ul>
                //         </li>
                //         errands
                // </li>

                // <li><span class="parent">recent Stories</span>
                //     <ul class="nested">
                //         <li>leaf</li>
                //         <li>leaf</li>

                //     </ul>
                // </li>
                // </ul>
                // </li>
                // <li><span class="parent">Tags</span>
                //     <ul class="nested">
                //         <li>story 1</li>
                //         <li>story 2</li>
                //         <li>story 3</li>
                //         <li>story 4</li>
                //         <li>
                //         <li><span class="parent">my Nested Stories</span>
                //             <ul class="nested">
                //                 <li>story 1</li>
                //                 <li>story 2</li>
                //                 <li>story 3</li>
                //                 <li>story 4</li>
                //             </ul>
                //         </li>
                //         errands
                // </li>

                // <li><span class="parent">recent Stories</span>
                //     <ul class="nested">
                //         <li>leaf</li>
                //         <li>leaf</li>

                //     </ul>
                // </li>
                // </ul>
                // </li>
                // <li><span class="parent">Trash</span>
                //     <ul class="nested">
                //         <li>story 1</li>
                //         <li>story 2</li>
                //         <li>story 3</li>
                //         <li>story 4</li>
                //         <li>
                //         <li><span class="parent">my Nested Stories</span>
                //             <ul class="nested">
                //                 <li>story 1</li>
                //                 <li>story 2</li>
                //                 <li>story 3</li>
                //                 <li>story 4</li>
                //             </ul>
                //         </li>
                //         errands
                // </li>

                // <li><span class="parent">recent Stories</span>
                //     <ul class="nested">
                //         <li>leaf</li>
                //         <li>leaf</li>

                //     </ul>
                // </li>
                // </ul>
                // </li>`
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

var userDashboardWorkSpaceBody = {
    name: 'div',
    class: 'container row full-width ',
    id:'userDashboardWorkSpaceBody',
    sidebar: {
        name: 'div',
        class: 'container column',
        id: 'sidebar',
        leftSideNavBar,
    },
    body: {
        name: 'div',
        class: 'container row',
        id: 'workSpaceBody',
        bodyHeader: {},
        editor: {},
        output: {}, 
    }
}
var brand = {
    name: 'div',
    class:'brand',
    content: {
        name: 'a',
        'href': '#welcome',
        class: 'align_center itemsContainer ',
        logo: {
            'name': 'img',
            'id': 'logo',
            'src': 'images/ehh3dlowres.png',
        },
        text: {
            name: 'span',
            class: 'brandTitle',
            innerHTML: `everything happens here`
        }
    },
}
var searchBar = {
    name: 'span',
    class: 'container item',
    id:'searchBarItem',
    input: {
        'name': 'input',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'actionSearch',
        'placeholder': "search here...",
        'autocomplete': "off"
    
    },
    
}
var actionSpaceHeaderUserMenu = {
    "name": "div",
    class: 'container align_center',
    id: 'actionSpaceHeaderUserMenu',

    
       menuItem1: {
            'name': 'a',
            'class': 'dropdown',
            'href': '#action',
            'textContent': 'action',
            dropContent: {
                name: 'span',
                class: 'dropdown-content column container',
                item1: {
                    name: 'div',
                    class: 'content item',
                    textContent:'create    ctrl+n',
                },
                item2: {
                    name: 'div',
                    class: 'content item',
                    textContent: 'import  ctrl + i',
                },
                item3: {
                    name: 'div',
                    class: 'content item',
                    textContent: 'insert   ctrl + Shift + i',
                },
                item4: {
                    name: 'div',
                    class: 'content item',
                    textContent: 'open   ctrl + 0',
                },
                item5: {
                    name: 'div',
                    class: 'content item',
                    textContent: 'export   ctrl + e',
                },
                item6: {
                    name: 'div',
                    class: 'content item',
                    textContent: 'print ctrl + p',
                },


        },
        },
    menuItem2:{
        'name': 'a',
        'class': 'dropdown',
        'href': '#people',
        'textContent': 'People',
        dropContent: {
            name: 'span',
            class: 'dropdown-content column container',
            item1: {
                name: 'div',
                class: 'content item',
                textContent: 'appointments    ctrl+n',
            },
            item2: {
                name: 'div',
                class: 'content item',
                textContent: 'activity report  ctrl + i',
            },
            item3: {
                name: 'div',
                class: 'content item',
                textContent: 'contact',
            },
            item4: {
                name: 'div',
                class: 'content item',
                textContent: 'open   ctrl + 0',
            },
            item5: {
                name: 'div',
                class: 'content item',
                textContent: 'export   ctrl + e',
            },
            item6: {
                name: 'div',
                class: 'content item',
                textContent: 'print ctrl + p',
            },


        },
        },
    menuItem3:{
            'name': 'a',
            'href': '#setting',
            'textContent': 'setting'
        },
    menuItem4:{
            'name': 'button',
            'class': "material-icons",
            'textContent': 'more_vert',
        } 
}
var userDashboardTopNav = {
    name:'div',
    class:'container align_center justify_SpaceBetween full-width',
    'brand': brand,
    'search': searchBar,
    'appNav': actionSpaceHeaderUserMenu,
}

var userDashboard = {
    userDashboard: {
    name: 'div',
        class: 'container full-width row' ,
        id: 'userDashboard',
        topNav: { name: 'div', class: 'container row', id: 'topNav',userDashboardTopNav },
        workSpaceBody: { name: 'div', class: 'container row', id: 'workSpaceBody',userDashboardWorkSpaceBody },
  
    }
    
}