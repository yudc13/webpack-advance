import { format } from './utils'

format()

console.log('this is index')

const button = document.createElement('button')

button.innerHTML = '加载元素'

document.body.appendChild(button)

// webpackPrefetch 网络空闲的时候 提前下载文件资源
button.addEventListener('click', function() {
  import(
    /* webpackChunkName: 'element' */
    /* webpackPrefetch: true */
    './element.js').then(res => {
    document.body.appendChild(res.default)
  })
})

