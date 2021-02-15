/**
 *  This ActionEventController Works like an event Controller on an Object.
 * When Intiates  via a actionEventInstance = new ActionEventController(arg = isOptional({object}))
 * it creates listners for all the event that can be listened to this object, by finding all the key's with keyName "on" in them as a string.
 * Optional parameter to filter Events while passed as an optional arguments to be implemented.
 * It has a listners Object which acts like a registry of all the events listened to along with an array of all the callback functions registered.
 * 
 */




/**
 * Ideal Setup
 */
function loadAPP() {
    window.addEventListener('load', () => {
        const _actionSpace = document.getElementsByTagName('actionSpace')[0].__proto__;
        
        console.log('actionSpace', _actionSpace);
        
        const _actionEventController = new ActionEventController(_actionSpace);
        
        console.log(_actionEventController)

        // const actionEntity = new actionEntity(['node.js', 'react']),
        // view = new ListView(controller,document.getElementsByTagName('actionSpace')[0]),
        // controller = new ListController(model, view);
        // view.show();
    });
}
loadAPP();


