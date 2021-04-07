var userDashboardWorkSpaceBody = {
    name: 'section',
    class: 'container row',
    sidebar: {
        
    },
    body: {
        
    }
}
var brand = {
    name: 'div',
    content: {
        name: 'a',
        'href': '#welcome',
        class: 'container align_center',
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
var userDashboardTopNav = {
    'brand': brand, 
}
var userDashboard = {
    topNav: { name: 'section',class:'container row',content:userDashboardTopNav },
    workSpaceBody: userDashboardWorkSpaceBody,
    footer:{ name:'footer',class:'footer'}
    
    
}