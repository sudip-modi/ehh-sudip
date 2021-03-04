//Requests are objects that receive the success or failure DOM events that were mentioned previously.
//They have onsuccess and onerror properties, and you can call addEventListener() and removeEventListener() on them.
//They also have readyState, result, and errorCode properties that tell you the status of the request.
//The result property is particularly magical, as it can be many different things, depending on how the request was generated
//(for example, an IDBCursor instance, or the key for a value that you just inserted into the database).