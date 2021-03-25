
function ShowDropDown(btn) {
    var get_drop_down_item_id = btn.dataset.dropdown
    var get_drop_down_item = document.getElementById(get_drop_down_item_id)
    if(btn.querySelector('.drop_down_arrow')){
        btn.querySelector('.drop_down_arrow').classList.toggle('active')
    }
    get_drop_down_item.classList.toggle('active')

}

function ShowSideBarData(btn) {
    var get_data_id = btn.dataset.show
    var get_data = document.querySelector(get_data_id)
    var data = get_data.cloneNode(true)
    data.style.display = 'inherit'
    var SideBar = document.getElementById('SideBarContent')
    SideBar.innerHTML = ""
    if(window.innerWidth < 920){
        document.getElementById('body_side_bar').classList.add('mobile_active')
    }
    if (document.getElementById('body_side_bar').classList.contains('hide')) {
        document.getElementById('body_side_bar').classList.remove('hide')
    }
    SideBar.appendChild(data)

}

function ShowDataOnWorkspace(btn) {
    var get_data = document.querySelector(btn.dataset.workspace)
    var data = get_data.cloneNode(true)
    data.style.display = 'inherit'

    var BodyWorkSpace = document.getElementById('BodyWorkspace')
    BodyWorkSpace.innerHTML = ""
    BodyWorkSpace.appendChild(data)
}

var mid_hamMenu = document.getElementById('mid_bar_hamburger')
mid_hamMenu.onclick = function () {
    document.getElementById('body_side_bar').classList.toggle('hide')
    if(window.innerWidth < 920){
        document.getElementById('body_side_bar').classList.toggle('mobile_active')
    }
}
var hamMenu1 = document.getElementById('MainHeaderHamburger1')
hamMenu1.onclick = function () {
    document.getElementById('navigationSection').classList.toggle('hide')
    document.getElementById('navigationSection').classList.toggle('active')
}

var hamMenu2 = document.getElementById('MainHeaderHamburger2')
hamMenu2.onclick = function () {
    document.getElementById('navigationSection').classList.toggle('hide')
    document.getElementById('navigationSection').classList.toggle('active')
}