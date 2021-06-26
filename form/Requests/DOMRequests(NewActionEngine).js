 var httpService = {
    urlBuilder:HttpService.urlBuilder,
    requestBuilder:HttpService.requestBuilder,
    fetchRequest:HttpService.fetchRequest,
};
var ActionControllerObject = {
    onChangeRoute:ActionController.onChangeRoute
};
var ActionViewObject = {
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