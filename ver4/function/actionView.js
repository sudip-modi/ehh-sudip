class ActionView { 
    constructor(entity, element) { 
        console.log(element);
        this._actionView = new Entity(entity, element);
    }
    // this method updates any thing in the view
    append() { 
        console.log("appending")
    }

    set() { 

    }
    removeFromView() {
        
     }

}