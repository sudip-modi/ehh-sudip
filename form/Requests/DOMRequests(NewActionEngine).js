var loginRequest = [
    {
        response:'GetUsername',
        objectModel:'document',
        method: "getElementById",
        arguments: ["username"],
     //   return:'$l.GetUsername.value',
    },
    {
        response :'GetPassword',
        objectModel:'document',
        method: "getElementById",
        arguments: ["password"],
      //  return:'$l.GetPassword.value', 
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
      //  exit:true
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
]