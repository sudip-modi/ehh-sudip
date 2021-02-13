class ActionSpaceDataController extends ehhEvent {

    constructor(context, view,model) {
        super(context);
        this.view = view;
        this.model=model;

        this.on('updateEditor',this.view.updateDomContent)
    }




}
