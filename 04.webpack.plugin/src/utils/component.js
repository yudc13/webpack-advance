import '../styles/index.css'
import '../styles/common.less'

const dom = document.createElement('h1')

dom.className = 'title'

dom.innerHTML = ['Hello', 'webpack'].join(', ')

document.body.appendChild(dom)