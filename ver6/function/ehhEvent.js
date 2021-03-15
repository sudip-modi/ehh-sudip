// this file handles all the events that are Initialised during Init.

// To make a getReq to a appScript server the queryParameter have to be added to the url using buildEncodedURI.
// when making a post reqst a normal post works.
function processButtonClick(e) {
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.id === 'get') {
        request.method = "GET";
        var encodedParam = httpServiceV2.buildEncodedUri(request);
        var url2 = url + "?" + encodedParam;
        console.log(url2);
        httpServiceV2.serverNodeReqSwitcher(url2);
    }
    if (e.target.id === 'post') {
        //request = getRequest;
        request.method = "POST";
        httpServiceV2.serverNodeReqSwitcher(url, request);
    }
}





document.getElementById("get").addEventListener("click", processButtonClick);
document.getElementById("post").addEventListener("click", processButtonClick);