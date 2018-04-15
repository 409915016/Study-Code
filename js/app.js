import {loader, xhr} from './script_loader'

//console.log(loader)
async function loader_async () {
  await loader('https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js').then(res => {
    console.log('jQuery loaded!!!')
    return res
  });
  await loader('https://cdn.staticfile.org/vue/2.2.6/vue.min.js').then(res => {
    console.log('Vue loaded!!!')
    return res
  });
  console.log('done')
}

async function xhr_async () {
  await xhr('https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js').then(res => {
    res ? console.log('jQuery loaded!!!') : null
    //return res
  }).catch(e => {
    console.log(e);
  });
}

//let BBB = loader_async()
let aaa = xhr_async();


let url = '/app.php';

let par = [
  'step=2',
  'time=12345646'
];

let beacons = new Image()
beacons.src = url + '?' + par.join('&');
beacons.onload = function () {
  if (this.width == 1) console.log('beacons loaded!')

};
beacons.onerror = function () {
  throw new Error('beacons loading error!');

};



