 var httpService = {
    urlBuilder:HttpService.urlBuilder,
    requestBuilder:HttpService.requestBuilder,
    fetchRequest:HttpService.fetchRequest,
};
var ActionControllerObject = {
    onChangeRoute:ActionController.onChangeRoute
};
var ActionViewObject = {
    addInnerHTML:ActionView.addInnerHTML,
    addInnerText:ActionView.addInnerText,
    newEntity:ActionView.newEntity,
    closeModal:ActionView.closeModal
};
var EntityV1Object = {
    toJSON:EntityV1.toJSON
};
var mutateObject = {
    Obj2:mutate.Obj2,
    TWODARRAY:mutate.TWODARRAY
};
var SignUpRequest = [
    {
        response:'GetUsername',
        objectModel:'document',
        method: "getElementById",
        arguments: ["username"],
    },
    {
        response :'GetPassword',
        objectModel:'document',
        method: "getElementById",
        arguments: ["password"],
    },
    {
        response:'ParametersForSignUpRequest',
        declare:{paramsJSON:{}},
        callback:{
            declare:{
                'paramsJSON':{
                    'Username':'$l.GetUsername.value',
                    'Password':'$l.GetPassword.value'
                }
            }
        }
    },
    {
        response:'RequestBuilder',
        objectModel:'httpService',
        method:'requestBuilder',
        arguments:["POST",undefined,'$l.paramsJSON']
    },
    {
        response:'SignUpResponse',
        objectModel:'httpService',
        method:'fetchRequest',
        arguments:['$scriptURL','$l.RequestBuilder']
    },
    {
        response:'RequestNotSent',
        condition:"$l.SignUpResponse == undefined",
        objectModel:'window',
        method:'alert',
        arguments:["Clouldn't send request to the server . Try Again !"],
        exit:true
    },
    {
        response:'AlertUserAboutResponse',
        objectModel:'window',
        method:'alert',
        arguments:['$l.SignUpResponse.output']
    },
    {
        condition:"$l.SignUpResponse.result !== 'Success'",
        response:'ResetForm',
        objectModel:'document',
        method: "getElementById",
        arguments:['regForm'],
        callback:{
            objectModel:'$l.ResetForm',
            method:'reset'
        }
    },
    {
        condition:"$l.SignUpResponse.result == 'Success'",
        response:'SetLoggedIn',
        objectModel:'localStorage',
        method:'setItem',
        arguments:['LoggedIn',true],
    },
    {
        condition:"$l.SignUpResponse.result == 'Success'",
        response:'RedirectingToActionSpaceEditor',
        objectModel:'ActionControllerObject',
        method:'onChangeRoute',
        arguments:["action"],
    }
];
var loginRequest = [
    {
        response:'GetUsername',
        objectModel:'document',
        method: "getElementById",
        arguments: ["username"],
    },
    {
        response :'GetPassword',
        objectModel:'document',
        method: "getElementById",
        arguments: ["password"],
    },
    {
        response:'ParametersForLoginRequest',
        declare:{
            'paramsJSON':{
                'Username':'$l.GetUsername.value',
                'Password':'$l.GetPassword.value'
            }
        }
    },
    {
        response:'URLBuilder',
        objectModel:'httpService',
        method:'urlBuilder',
        arguments:['$scriptURL','$l.paramsJSON']
    },
    {
        response:'RequestBuilder',
        objectModel:'httpService',
        method:'requestBuilder',
        arguments:["GET"]
    },
    {
        response:'LoginResponse',
        objectModel:'httpService',
        method:'fetchRequest',
        arguments:['$l.URLBuilder','$l.RequestBuilder']
    },
    {
        response:'RequestNotSent',
        condition:"$l.LoginResponse == undefined",
        objectModel:'window',
        method:'alert',
        arguments:["Clouldn't send request to the server . Try Again !"],
        exit:true
    },
    {
        response:'AlertUserAboutResponse',
        objectModel:'window',
        method:'alert',
        arguments:['$l.LoginResponse.output']
    },
    {
        condition:"$l.LoginResponse.result !== 'Success'",
        response:'ResetForm',
        objectModel:'document',
        method: "getElementById",
        arguments:['regForm'],
        callback:{
            objectModel:'$l.ResetForm',
            method:'reset'
        }
    },
    {
        condition:"$l.LoginResponse.result == 'Success'",
        response:'SetLoggedIn',
        objectModel:'localStorage',
        method:'setItem',
        arguments:['LoggedIn',true],
    },
    {
        condition:"$l.LoginResponse.result == 'Success'",
        response:'RedirectingToActionSpaceEditor',
        objectModel:'ActionControllerObject',
        method:'onChangeRoute',
        arguments:["action"],
    }
];
var exportToSheetRequest = [
    {
        response:'GetSpreadsheetId',
        objectModel:'document',
        method: "getElementById",
        arguments: ["spreadsheetID"],
    },
    {
       response:'GetSheetName',
       objectModel:'document',
       method: "getElementById",
       arguments: ['sheetName'],
    },
    {
        response:'EditorElement',
        objectModel:'document',
        method: "getElementById",
        arguments: ['inlineContent'],
    },
    {
        response:'HtmlJson',
        objectModel:'EntityV1Object',
        method:'toJSON',
        arguments:['$l.EditorElement','$copy2HTMLModel'],
        callback:{
            declare:{
                inputJSON:{
                'editor':'$l.HtmlJson'
               }
            },
        }
    },
    {
        response:'Array',
        objectModel:'mutateObject',
        method:'Obj2',
        arguments:['$l.inputJSON',[]],
        callback:{
            response:'Exact2dArray',
            objectModel:'mutateObject',
            method:'TWODARRAY',
            arguments:['$l.Array']
        }
    },
    {
        response:'ParametersForExportToSheet',
        declare:{
            'paramsJSON':{
                'SpreadsheetId':'$l.GetSpreadsheetId.value',
                'SheetName':'$l.GetSheetName.value',
                'array':'$l.Exact2dArray',
            }
        }
    },
    {
        response:'RequestBuilder',
        objectModel:'httpService',
        method:'requestBuilder',
        arguments:["POST",undefined,'$l.paramsJSON']
    },
    {
        response:'ResponseExportToSheet',
        objectModel:'httpService',
        method:'fetchRequest',
        arguments:['$scriptURL','$l.RequestBuilder']
    },
    {
        response:'AlertUser',
        condition:"$l.SignUpResponse == undefined",
        objectModel:'window',
        method:'alert',
        arguments:['$l.ResponseExportToSheet.output']
    },
    {
        response:'closeModal',
        objectModel:'ActionViewObject',
        method:'closeModal'
    },
];
var importFromSheetRequest = [
    {
        response:'FormElement',
        objectModel:'document',
        method: "getElementById",
        arguments: ["viewForm"], 
    },
    {
        response:'EditorElement',
        objectModel:'document',
        method: "getElementById",
        arguments: ["inlineContent"],
    },
    {
        response:'GetSpreadsheetId',
        objectModel:'document',
        method: "getElementById",
        arguments: ["spreadsheetID"],
    },
    {
        response:'GetNamedRange',
        objectModel:'document',
        method: "getElementById",
        arguments: ["NamedRange"],
    },
    {
        response:'SetParameters',
        declare:{
            paramJSON:{
                'SpreadsheetId':'$l.GetSpreadsheetId.value',
                'NamedRange':'$l.GetNamedRange.value'
            }
        }
    },
    {
        response:'URLBuilder',
        objectModel:'httpService',
        method:'urlBuilder',
        arguments:['$scriptURL','$l.paramJSON']  
    },
    {
        response:'RequestBuilder',
        objectModel:'httpService',
        method:'requestBuilder',
        arguments:["GET"]
    },
    {
        response:'ImportFromSheetResponse',
        objectModel:'httpService',
        method:'fetchRequest',
        arguments:['$l.URLBuilder','$l.RequestBuilder']
    },
    {
        response:'RequestNotSent',
        condition:"$l.ImportFromSheetResponse == undefined",
        objectModel:'window',
        method:'alert',
        arguments:["Clouldn't get data from server . Try Again !"],
    },
    // {
    //     response:'AlertUserAboutResponse',
    //     condition:"$l.ImportFromSheetResponse.result !== 'Success'",
    //     objectModel:'window',
    //     method:'alert',
    //     arguments:['$l.ImportFromSheetResponse.output']
    // },
    {
        response:"RemoveImportFromSheetForm",
        objectModel:'ActionViewObject',
        method:'addInnerHTML',
        arguments:['','$l.FormElement']
    },
    {
        response:'SetSampleStory2',
        condition:"$l.ImportFromSheetResponse == undefined",
        objectModel:'ActionViewObject',
        method:'addInnerHTML',
        arguments:['$sampleIntroStory','$l.EditorElement'],
        exit:true
    },
    {
        response:'SetDataFromSheet',
        condition:"$l.ImportFromSheetResponse.result == 'Success'",
        objectModel:'ActionViewObject',
        method:'addInnerText',
        arguments:['$l.ImportFromSheetResponse.output','$l.EditorElement'],
        exit:true,
    },
    {
        response:'SetSampleStory1',
        objectModel:'ActionViewObject',
        method:'addInnerHTML',
        arguments:['$sampleIntroStory','$l.EditorElement']
    }
]
var getActionStoriesRequest = [
    {
        response:'GetSpreadsheetId',
        objectModel:'document',
        method: "getElementById",
        arguments: ["SpreadsheetId"],
    },
    {
        response:'GetNamedRange',
        objectModel:'document',
        method: "getElementById",
        arguments: ["NamedRange"],
    },
    {
        response:'SetParameters',
        declare:{
            paramJSON:{
                'SpreadsheetId':'$l.GetSpreadsheetId.value',
                'NamedRange':'$l.GetNamedRange.value'
            }
        }
    },
    {
        response:'URLBuilder',
        objectModel:'httpService',
        method:'urlBuilder',
        arguments:['$scriptURL','$l.paramJSON']  
    },
    {
        response:'RequestBuilder',
        objectModel:'httpService',
        method:'requestBuilder',
        arguments:["GET"]
    },
    {
        response:'ActionStoriesResponse',
        objectModel:'httpService',
        method:'fetchRequest',
        arguments:['$l.URLBuilder','$l.RequestBuilder']
    },
    {
        response:'RequestNotSent',
        condition:"$l.ActionStoriesResponse == undefined",
        objectModel:'window',
        method:'alert',
        arguments:["Clouldn't get Action Stories . Try Again !"],
        exit:true
    },
    {
        response:'AlertUserAboutResponse',
        condition:"$l.ActionStoriesResponse.result !== 'Success'",
        objectModel:'window',
        method:'alert',
        arguments:['$l.ActionStoriesResponse.output'],
        exit:true
    },
    {
        response:'EditorElement',
        objectModel:'document',
        method: "getElementById",
        arguments: ["inlineContent"],
        callback:{
            objectModel:'$l.EditorElement',
            method:'setAttribute',
            arguments:['fileid','cardView']
        }
    },
    {
        response:'JSONForCards',
        objectModel:'processFSInstance',
        method:'ActionStories',
        arguments:['$l.ActionStoriesResponse.output']
    },
    {
        response:'AutoSync',
        objectModel:'processFSInstance',
        method:'AutoSync'
    }
];
var getGoogleDriveFileRequest = [
    {
        response:'EditorElement',
        objectModel:'document',
        method: "getElementById",
        arguments: ["inlineContent"],
    },
    {
        response:'FormElement',
        objectModel:'document',
        method: "getElementById",
        arguments: ["viewForm"], 
    },
    {
        response:'GetfolderName',
        objectModel:'document',
        method: "getElementById",
        arguments: ["folderName"],
    },
    {
        response:'SetParameters',
        declare:{
            paramJSON:{
                'SearchFolderName':'$l.GetfolderName.value'
            }
        }
    },
    {
        response:'URLBuilder',
        objectModel:'httpService',
        method:'urlBuilder',
        arguments:['$scriptURL','$l.paramJSON']  
    },
    {
        response:'RequestBuilder',
        objectModel:'httpService',
        method:'requestBuilder',
        arguments:["GET"]
    },
    {
        response:'GDriveFolderResponse',
        objectModel:'httpService',
        method:'fetchRequest',
        arguments:['$l.URLBuilder','$l.RequestBuilder']
    },
    {
        response:"RemoveGoogleDriveForm",
        objectModel:'ActionViewObject',
        method:'addInnerHTML',
        arguments:['','$l.FormElement']
    },
    {
        response:'SetSampleStory',
        objectModel:'ActionViewObject',
        method:'addInnerHTML',
        arguments:['$sampleIntroStory','$l.EditorElement'],
    },
    {
        response:'RequestNotSent',
        condition:"$l.GDriveFolderResponse == undefined",
        objectModel:'window',
        method:'alert',
        arguments:["Clouldn't get Google Drive Folder . Try Again !"],
        exit:true
    },
    {
        response:'AlertUserAboutResponse',
        condition:"$l.GDriveFolderResponse.result !== 'Success'",
        objectModel:'window',
        method:'alert',
        arguments:['$l.GDriveFolderResponse.output'],
        exit:true
    }, 
    {
        response:'HTML_JSON',
        objectModel:'processFSInstance',
        method:'jsonForGDriveFolder',
        arguments:['$l.GDriveFolderResponse.output',JSON.parse(JSON.stringify({}))]
    },
    {
        response:'CollectionElement',
        objectModel:'document',
        method: "getElementById",
        arguments: ["myCollection"],
    },
    {
        response:'NewEntity',
        objectModel:'ActionViewObject',
        method:'newEntity',
        arguments:['$l.HTML_JSON','$l.CollectionElement'],
    },
    {
        response:'SetUsermyCollection',
        objectModel:'localStorage',
        method:'setItem',
        arguments:['UsermyCollection','$l.CollectionElement.innerHTML']
    }  
];