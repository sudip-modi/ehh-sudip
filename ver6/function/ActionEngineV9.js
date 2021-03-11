
var actionFlowModelReq = {
    flowRequest: [
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#1',
            actionStepReq: 'reqObjectVer2',
            response: {},
        },
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#2',
            actionStepReq: 'savetoStorageReq',
            response: {},
        },
        {
            actionStepName: 'Generic', //Name Identifier is used for maintaining the templates of the Model.
            actionStepIndex: 'index#3',
            actionStepReq: 'updateDomObject',
            // actionStepArgs: ['fromPrevious', `document.createElement('div')`],
            response: {}

        },

    ],
}
class ActionEngineV9 {
    constructor() {
        console.log("I aka @ctionEngineV9, am here")

        this._flowsInAction = [];
    }
    runAsyncStep(req) {
        
    }
    runAsyncFlow(req) {
        if (operate.is(req.flowRequest) != 'Array') return console.log("why do you keep making mistakes");
        //  console.log(flowReq);
        this._flowsInAction.push(req);
        console.log(this._flowsInAction); req['state'] = "shunya";
        for (var activeReq = 0; activeReq < req.length; activeReq++) {
        
            

        }
        
    }



}
 


var actionEngineV9Instance = new ActionEngineV9();
console.log(actionEngineV9Instance)

var output = actionEngineV9Instance.runAsyncFlow(actionFlowModelReq)