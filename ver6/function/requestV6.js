//Requests are objects that receive the success or failure DOM events that were mentioned previously.
//They have onsuccess and onerror properties, and you can call addEventListener() and removeEventListener() on them.
//They also have readyState, result, and errorCode properties that tell you the status of the request.
//The result property is particularly magical, as it can be many different things, depending on how the request was generated
//(for example, an IDBCursor instance, or the key for a value that you just inserted into the database).


//Object Model's define the resource Parameter of an entity

var GlobalObjectModels = {
    'dom': {
        name: "dom",
        'globalObjectName': "Document",
    },
    'wom': {
        name: 'wom',
        'globalObjectName': "window",
    },
    'com': {
        name: 'com',
        'globalObjectName':'chrome',
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
        id:"createFi"
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

var simpleReq = {
    class: 'className',
    method: 'methodName',
    arguments: [input,otherArguments],
    options: {
        recurse: true,
        output:self//[self,callback,both]
    }
    
}



var requestPromise = {
    states =[
        { "Pending": " you don’t know if you will complete learning JavaScript by the next month " },
        { 'Fulfilled': "you complete learning JavaScript by the next month." },
        {   'Rejected': "you don’t learn JavaScript at all."}
    ],
    methods: [ "then", "catch" ,"finally" ]
    
}

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


class ActionEngine {
    constructor() {
        
    }


    executeRequest(reqest) {
        let completed = true;

        let requestInpromise = new Promise(function (resolve, reject) {
            if (completed) {
                resolve("I have completed learning JS.");
            } else {
                reject("I haven't completed learning JS yet.");
            }
        });
        requestInpromise
            .then(handleResolvedA)
            .then(handleResolvedB)
            .then(handleResolvedC)
            .catch(handleRejectedAny);
        
    }
    
}

