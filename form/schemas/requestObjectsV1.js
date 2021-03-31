/**
* @type RequestObj
*/
var singleReq = {
    reqName: "singleReq",
    objectModel: document,
    method: "getElementById",
    arguments: ["test"],
    callBack: "convertToJSON",
};

/**
* @type RequestObj
*/
var convertToJSON = {
    objectModel: DOMConversion,
    method: "toJSON",
    arguments: ["fromPrevious", entityModel4Html],
};



var openFileReqModel = {
    objectModel: processFS,
    method: 'Open',
    arguments: 'event',
    andThen: 'set2IndexDb',
    callback: '',// call back to recive update in storage.
}
