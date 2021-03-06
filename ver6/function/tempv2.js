var Tester;
var Message;

function fnLogin(userName, password) {
    Tester.Message("User: " + userName);
    Tester.Message("Pass: " + password);
}

function fnLogout() {
    Tester.Message("Logged out");
}

var strfn = "fnLogin";

