
domEvents = [

    // Keyboard events
    'keypress', //ANY key is pressed
    'keydown', //ANY key (except Shift, Fn, or CapsLock) is in a pressed position (fired continuously).
    'keyup', //ANY key is released
    
    // Mouse events
    'click',//A pointing device button (ANY button; soon to be primary button only) has been pressed and released on an element.
    'contextmenu',//The right button of the mouse is clicked (before the context menu is displayed).
    'mouseenter',//	A pointing device is moved onto the element that has the listener attached.
    'mouseleave',//	A pointing device is moved off the element that has the listener attached.
    'mousemove',//	A pointing device is moved over an element(fired continuously as the mouse moves).
    'mouseover',//	A pointing device is moved onto the element that has the listener attached or onto one of its children.
    'mouseout',//	A pointing device is moved off the element that has the listener attached or off one of its children.
    'mouseup',//	A pointing device button is released over an element.
    'select',//	Some text is being selected.
    'wheel',//	A wheel button of a pointing device is rotated in any direction.
    
    //Drag & Drop Events
    'drag',//	An element or text selection is being dragged(fired continuously every 350ms).
    'dragend',//	A drag operation is being ended(by releasing a mouse button or hitting the escape key).
    'dragenter',//	A dragged element or text selection enters a valid drop target.
    'dragstart',	// The user starts dragging an element or text selection.
    'dragleave',//	A dragged element or text selection leaves a valid drop target.
    'dragover',//	An element or text selection is being dragged over a valid drop target(fired continuously every 350ms).
    'drop',//	An element is dropped on a valid drop target.

    //Storage
    'storage',//The storage event of the Window interface fires when a storage area (localStorage) has been modified in the context of another document.
    
    //Message : To be added Along with the remaining List.
]
