//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
let event = {
    "origin": ["mouse", "window", "ehh", "HTTP", "keyBoard"],
}

class actionEventController {

    constructor(context, elements) {
        //  super();
        this.elements = elements
        this.context = context
        this.createListeners(context)
    }

    createListeners(entity) {
        console.log(entity);
        var events = dataHelpers.find(entity, 'on');
        console.log("events Found", events);
        // if (events)
        var a = events.forEach(this.create);
        // console.log(a);
        this.save(events, this.context.constructor.name + "listeners");

        console.log("listeners created & Saved to local storage at ", new Date().toLocaleString().replace(',', ''), this.constructor.name);

    }

    create(entity) {
      //  console.log(entity, "entity created");

        window[entity] = actionEventController.onEvent;

    }
    static onEvent(e) {
        e.preventDefault(e);
        console.log("let Controller Know")
    }

    static initState(e) {
        var nodes = [];
        //currentState = e.type;
        let i = 0;
        document.documentElement.querySelectorAll('*').forEach(function (node) {
            node.setAttribute("currentstate", "inDom");
            node.setAttribute("prevstate", "intiated");

            if (!node.hasAttribute("ehhId")) {
                //  console.log(i,i++,"ehhId",);
                node.setAttribute("ehhId", "ehhId" + i);
                i++;

            }

        });

    }

    static changeState(e) {
        //console.log("changing state for event");
        var targetElement = e.target;
        // console.log(targetElement);

        let currentState = targetElement.getAttribute('currentstate'); //console.log("current state", currentState);  //console.log("prev state",prevState);
        let prevState = targetElement.getAttribute('prevstate');
        if (prevState === currentState) {
            targetElement.setAttribute('currentstate', e.type); //console.log(prevState);
            // console.log("New State",targetElement);
            //console.log("samestate",targetElement);
        } else {
            targetElement.setAttribute('prevstate', currentState); //console.log(prevState);
            targetElement.setAttribute('currentstate', e.type); //console.log(prevState);
            // console.log("New State",targetElement);
        }
        this.conductEvent(e);
        //console.log(targetElement.getAttributes(prevstate));

    }

    static conductEvent(e) {
        if (e.type === "mouseover") {
            console.log("Mouse moved")
            // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
        } else if (e.type === "click") {
            // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
            console.log("Clicked")
            // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
        } else {
            if (e.type === "contextmenu") {
                // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
                //createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
                e.preventDefault();
                // rightClick(e);
            }
        }
    }
//To be removed from here. Should be handled by the externalLocalStorageClass
    
    save(entity, keyTitle) {
        // console.log("saving", keyTitle, JSON.stringify(entity));
        window.localStorage.setItem(keyTitle, JSON.stringify(entity));
    }
}



