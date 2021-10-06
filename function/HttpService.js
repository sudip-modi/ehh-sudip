var Authorize = {
  google: {
    url: "https://accounts.google.com/o/oauth2/v2/auth",
    params: {
      client_id:
        "404726625126-noedidct06k8git9d3c0eubjinnklv9i.apps.googleusercontent.com",
      redirect_uri: "http://127.0.0.1:5502/indexV13.html", //'http://localhost/publishingsheetsapi/publish.html'
      scope:
        "https://www.googleapis.com/auth/script.deployments https://www.googleapis.com/auth/script.projects https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/drive",
      state: "ActionSpaceEditor",
      include_granted_scopes: "true",
      prompt: "consent",
      response_type: "token",
    },
  },
};
class Authorization {
  static oAuth(event, data) {
    event.preventDefault();
    console.log("In oAuth()");
    var service = HttpService.urlBuilder(
      Authorize[data]["url"],
      Authorize[data]["params"]
    );
    console.log(service);
    window.location.href = service;
  }
  static authToken() {
    var service = HttpService.unbuildEndodedUri(window.location.href);
    var authorization = service["token_type"] + " " + service["access_token"];
    return authorization;
  }
}
const boundary = "-------314159265358979323846";
const delimiter = "\r\n--" + boundary + "\r\n";
const close_delim = "\r\n--" + boundary + "--";
class HttpService {
  static urlBuilder(url, params) {
    console.log(url);
    alert("url building");

    var service =
      "https://script.google.com/macros/s/AKfycbzUNT8ZJBPKwjAT6f3rBeYSRuSmM6t6OxkAfy6ylIUKsEvnBqBXVe8oabJ-CYRPGGuU7Q/exec" +
      "?" +
      HttpService.buildEncodedUri(params);
    return service;
  }
  static requestBuilder(method, headers, body, otherProperties = {}) {
    alert("request building");
    var request = {
      method: method,
      cache: "no-cache",
    };
    if (Object.keys(otherProperties).length > 0) {
      request = { ...request, ...otherProperties };
    }
    if (operate.isNotEmpty(headers)) request["headers"] = headers;
    if (operate.isNotEmpty(body)) request["body"] = JSON.stringify(body);
    return request;
  }
  static async FileUpload(file, appDataFolder) {
    return new Promise((resolve, reject) => {
      var contentType = file.type || "application/octet-stream";
      var metadata = {
        title: file.name || "Untitled",
        name: file.name || "Untitled",
        mimeType: contentType,
      };
      if (appDataFolder) metadata["parents"] = ["appDataFolder"];
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = () => {
        var base64Data = btoa(reader.result);
        var multipartRequestBody =
          delimiter +
          "Content-Type: application/json\r\n\r\n" +
          JSON.stringify(metadata) +
          delimiter +
          "Content-Type: " +
          contentType +
          "\r\n" +
          "Content-Transfer-Encoding: base64\r\n" +
          "\r\n" +
          base64Data +
          close_delim;
        resolve(multipartRequestBody);
      };
      reader.onerror = (error) => reject(error);
    });
  }
  static async fetchRequest(url, request, text = false) {
    var res;
    console.log("URL :-" + url);
    await fetch(url, request)
      .then((response) => {
        if (text) {
          var result = response.text();
          var result2;
          try {
            result2 = JSON.parse(result);
          } catch (err) {
            result2 = result;
          }
          return result2;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (!data.error) {
          res = data;
        } else {
          console.log(data.error);
          res = { error: "Error :- " + data };
        }
      })
      .catch((err) => {
        console.log("Error:- " + err);
      });
    return res;
  }
  static buildEncodedUri(request) {
    const response = [];
    for (let d in request) {
      response.push(
        encodeURIComponent(request[d][0]) +
          "=" +
          encodeURIComponent(request[d][1])
      );
    }
    return response.join("&");
  }
  static unbuildEndodedUri(request) {
    var urifragment = request.split("&"),
      data = {},
      i,
      parts;
    //process each par
    for (i = 0; i < urifragment.length; i++) {
      parts = urifragment[i].split("=");
      if (parts.length < 2) {
        parts.push("");
      }
      data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
    console.log(data);
    return data;
  }
}
