
var actionRequest = {
    'entityObjectModel': 'document',
    'methodName': 'getElementById',
    'entity': 'actionStory1'

}

var classtoCall = actionRequest.entityObjectModel;
var method2Call = actionRequest.methodName;
var entity2Call = actionRequest.entity;
var response = classtoCall[method2Call].call(entity2Call);
console.log(response);