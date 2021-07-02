function doGet(e){
  try{
    var model,result;
    var data = JSON.parse(JSON.stringify(e.parameter));
      if(Object.keys(data).length === 2 && data.hasOwnProperty('SpreadsheetId')){
          model = getDataFromSheetRequest;
      }else if(Object.keys(data).length === 1 && data.hasOwnProperty('SearchFolderName')){
          model = searchFolderRequest;
      }else if(Object.keys(data).length === 1 && data.hasOwnProperty('FileId')){
          model = getFileContentRequest;
      }
      result = actionengine.processRequest(model,data);
      return result[result.length-1];
  }catch(err){
    return ContentService.createTextOutput(JSON.stringify(
      {'result':'error','output':'Encountered an error.Try Again..Thank You for your patience !','error':err.message}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}
function doPost(e){
  try{
      var data = JSON.parse(e.postData.contents);
      var model;
      if(Object.keys(data).length === 1){
        model = invoiceFormRequest;
      }else if(Object.keys(data).length === 3 && data.hasOwnProperty('NamedRange')){
        model = updateDataInSheetRequest;
      }else if(Object.keys(data).length === 3&& data.hasOwnProperty('SheetName')){
        model = sendDataToSheetRequest;
      }else if(Object.keys(data).length === 2 && data.hasOwnProperty('FileId')){
        model = updateFileContentRequest;
      }
      var result = actionengine.processRequest(model,data);
      return result[result.length - 1];
   }catch(err){
    return ContentService.createTextOutput(JSON.stringify(
      {'result':'error','output':'Encountered an error.Try Again..Thank You for your patience !','error':err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}