export function loader (url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.type = `text/javascript`;

    //Firefoox, Opera, Chrome, Safari 3+
    script.onload = () => {
      //alert('Script loaded!')
      resolve('Script loaded!')
    };
    script.src = `${url}`;
    try {
      document.getElementsByTagName('head')[0].appendChild(script)
    } catch (err) {
      reject(err)
    }

  })
}

export function xhr (url) {
  return new Promise((resolve, reject) => {
    let _xhr
      = new XMLHttpRequest();
    _xhr.open('get', url, true);
    _xhr.onreadystatechange = function () {
      if (_xhr.readyState == 4) {
        if (_xhr.status >= 200 && _xhr.status < 300 || _xhr.status == 304) {
          let script = document.createElement('script');
          script.type = `text/javascript`;
          script.text = _xhr.responseText;
          document.body.appendChild(script);
          resolve('success')
        }
        else {
          reject(_xhr.status)
        }
      }
    };
    _xhr.send(null)
  })
}

