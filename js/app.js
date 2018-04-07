import {loader} from './script_loader'

//console.log(loader)
async function loader_async () {
  await loader('https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js').then(res => {
    console.log('jQuery loaded!!!')
    return res
  })
  await loader('https://cdn.staticfile.org/vue/2.2.6/vue.min.js').then(res => {
    console.log('Vue loaded!!!')
    return res
  })

  console.log('done')
}

// loader('https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js').then(res=>{
//   alert(res)
// })

let aaa = loader_async()




