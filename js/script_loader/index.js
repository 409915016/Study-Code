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