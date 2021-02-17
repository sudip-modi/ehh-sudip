actionSpace4mDom = {
    'actionSpace': document.getElementById('actionSpace'),
    'addButton': document.getElementById('add'),
    'delButton': document.getElementById('del')
}

var preloadV1 = new ActionView(preloadV1, document.getElementsByTagName('head')[0]);
//var _actionView = new ActionView(actionSpaceLayoutV1, document.getElementById('actionSpace'));
var _actionSpaceLayoutV1 = new ActionView(actionSpaceLayoutV1, document.getElementsByTagName('body')[0]);

//console.log(_actionView)


class ActionSpace { 
    constructor(entity) { 
     //   this._actionEntity = new Entity(josnObject, document.getElementById('actionSpace'))
        this._actionView = new ActionView(entity, document.getElementById('actionSpace'));
        this._actionEvent = new ActionEvent(document.getElementById('actionSpace')) // input should be actionView
        this._actionControl = new ActionController(this._actionView,this._actionEvent)

    }
}



//var newActionSpace = new ActionSpace(actionSpaceLayoutV1);

//var newLayout = new Entity(actionSpaceLayoutV1, document.getElementsByTagName('body')[0])