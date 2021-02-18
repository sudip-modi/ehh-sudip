actionSpace4mDom = {
    'actionSpace': document.getElementById('actionSpace'),
    'addButton': document.getElementById('add'),
    'delButton': document.getElementById('del')
}

class ActionSpace { 
    constructor(entity) { 
     //   this._actionEntity = new Entity(josnObject, document.getElementById('actionSpace'))
        this._actionView = new ActionView(entity, document.getElementById('actionSpace'));
        this._actionEvent = new ActionEvent(document.getElementById('actionSpace')) // input should be actionView
        this._actionControl = new ActionController(this._actionView,this._actionEvent)

    }
}

document.onload = onload();

function onload() { 
    var newActionSpace = new ActionSpace(basicLayout);
}

//var newActionSpace = new ActionSpace(basicLayout);
//var newLayout = new Entity(actionSpaceLayoutV1, document.getElementsByTagName('body')[0])