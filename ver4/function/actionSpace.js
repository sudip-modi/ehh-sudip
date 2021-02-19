actionSpace4mDom = {
    'actionSpace': document.getElementById('actionSpace'),
    'addButton': document.getElementById('add'),
    'delButton': document.getElementById('del')
}

class ActionSpace { 
    constructor(entity) { 
     //   this._actionEntity = new Entity(josnObject, document.getElementById('actionSpace'))
        this._actionView = new ActionView(entity, document.getElementById('actionSpace'));
     //   console.log(this._actionView.Entity)
        this._actionEvent = new ActionEvent(document.getElementById('actionSpace')) // input should be actionView
       // this._actionStorage = new ActionStorage(window.location.pathname,document);
        this._actionControl = new ActionController(this._actionView, this._actionEvent)
       // console.log(this._actionStorage);
    }
}

window.onload = onload();

function onload() { 
   // var newActionSpace = new ActionSpace(basicLayout);
  //  console.log(newActionSpace);
    return newActionSpace;
}
var newActionSpace = new ActionSpace(basicLayout);
console.log(newActionSpace._actionView.entity.getAttribute(id))

//var newActionSpace = new ActionSpace(basicLayout);
//var newLayout = new Entity(actionSpaceLayoutV1, document.getElementsByTagName('body')[0])