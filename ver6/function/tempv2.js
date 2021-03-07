

var GlobalObjectModels = {
    'dom': {
        name: "dom",
        'globalObjectName': document,
    },
    'wom': {
        name: 'wom',
        'globalObjectName': window,
    },
    'com': {
        name: 'com',
        'globalObjectName': chrome,
    }



}


var reqest = {
    method: 'get',// [ get,set,create,put,delete,filter, iterate,]
    entity: {
        entityIdentifier: '	ObjectID',
        entityModel: 'document',
        entityLocation: 'currentTab',
        entityType: 'HTML',
        entityName: "NameofEntity",
        entityId: 'entityId',
        entityLocation: 'Dom',
        entityServiceClass: "Particular Class which has it's Crud operators, for eg. document is one service class, similarly SpreadsheetApp is a service class in AppScript and ActionEntity is a service classfor any entity in actionSpace "
    },
    //a generic Optional Parameter for every method in across classes		
    options: {
        recurse: true, // operate.isoneof(value,[true,false])
        'and': {

        }


    }
}


var userFlow = {
    create: {
        id: "createFi"
    }
}
//1 get
var actorRequest = {

    request: {
        method: "",
        class: this.entityObjectModel.globalObjectName,
        entity: {
            entityIdentifier: "entityIdentifier",
            entityObjectModel: {
                value: String,
                operate: [isOneof(Object.keys(GlobalObjectModels))]
            }
        },
    }
}





// var requestPromise = {
//     states =[
//         { "Pending": " you don’t know if you will complete learning JavaScript by the next month " },
//         { 'Fulfilled': "you complete learning JavaScript by the next month." },
//         {   'Rejected': "you don’t learn JavaScript at all."}
//     ],
//     methods: [ "then", "catch" ,"finally" ]

// }

var content = document.getElementById('actionStory1').innerHTML;
//  console.log(content);
var outputView = document.getElementById('activeActionStory');
// console.log("here", data_url, outputView)
outputView.innerHTML = content;

var bindReq = [
    {
        class: 'document',
        method: 'getElementById',
        arguments: [actionStory1, activeActionStory],
        options: {
            recurse: false,
            output: self//[self,callback,both]
        }
    }
]



var classtoCall = document;
var method2Call = "getElementById";
var entity2Call = "actionStory1";


const exeReq = function (req) {
    //this = actionRequest.entityObjectModel;
  //  window[actionRequest.entityObjectModel];
    // var requestbuild = "return " + req.entityObjectModel + "." + req.methodName + "(" + actionRequest.entity + ")";
    // console.log(requestbuild);
    // var response = new Function( requestbuild);
    // var output = response();
    var response = window[actionRequest.entityObjectModel][actionRequest.methodName](actionRequest.entity);
        
 //   var response = this[actionRequest.methodName](actionRequest.entity);
    console.log(response);
}
exeReq(actionRequest);

var classtoCall = document;
var method2Call = "getElementById";
var entity2Call = "actionStory1";
var codeToExecute = "return document.getElementById('actionStory1')";
var tmpFunc = new Function(codeToExecute);
var t = tmpFunc();
console.log(t)


function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        console.log(context, namespaces[i])
        context = context[namespaces[i]];
        console.log(context)

    }
    console.log(context)
    return context[func].call(context, args);
}

console.log(executeFunctionByName(method2Call,classtoCall,entity2Call))