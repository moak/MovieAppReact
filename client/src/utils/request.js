export default function (method, url, body) {

  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);


    xhr.onload = function() {
      if (this.status === 200) {

        let json = {};
        try {
          json = JSON.parse(this.responseText);
        } catch(ex) {
          reject(Error("Cannot parse server answer"));
          return;
        }
        resolve(json);
      }
      else if (this.status === 403) {
        reject(Error("Permission Denied"));
      }
      else if (this.status >= 400 && this.status < 500) {
        reject(Error("Request Error"));
      }
      else if (this.status >= 500) {
        reject(Error("Server Error"));
      }
    }

    xhr.onerror = function() {
      reject(Error("Network error"));
    }
    console.log('body' , body);


    xhr.send(JSON.stringify(body));
  });

}
