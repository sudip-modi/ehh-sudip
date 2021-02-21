actionSpace4mDom = {
    'actionSpace': document.getElementById('actionSpace'),
    'addButton': document.getElementById('add'),
    'delButton': document.getElementById('del')
}

class ActionSpace { 
    constructor(entity) { 
     //   this._actionEntity = new Entity(josnObject, document.getElementById('actionSpace'))
        this._actionView = new ActionView(entity, document.getElementById('actionSpace'));
      
        this._actionEvent = new ActionEvent(this._actionView._actionView) // input should be actionView
        console.log(this._actionEvent)
     //   this._actionStorage = new ActionStorage(window.location.pathname,document);
        this._actionControl = new ActionController(this._actionView, this._actionEvent)
        console.log(this._actionControl);
    }
}

window.onload = onload();

function onload() { 
   // var newActionSpace = new ActionSpace(basicLayout);
  //  console.log(newActionSpace);
    return newActionSpace;


}
var newActionSpace = new ActionSpace(basicLayout);
console.log(window.newActionSpace._actionView._actionView)
//console.log(newActionSpace._actionView.entity.getAttribute(id))


//var newActionSpace = new ActionSpace(basicLayout);
//var newLayout = new Entity(actionSpaceLayoutV1, document.getElementsByTagName('body')[0])