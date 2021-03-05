//Requests are objects that receive the success or failure DOM events that were mentioned previously.
//They have onsuccess and onerror properties, and you can call addEventListener() and removeEventListener() on them.
//They also have readyState, result, and errorCode properties that tell you the status of the request.
//The result property is particularly magical, as it can be many different things, depending on how the request was generated
//(for example, an IDBCursor instance, or the key for a value that you just inserted into the database).


//Object Model's define the resource Parameter of an entity

var objectModels: {

}

var userflow = {
    step1: {
        process: `make HTTP req`,
        
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
    entity: {

    },
    entityObjectModel: {
        value: String,
        operate:[isOneof(document,)]
    }
}