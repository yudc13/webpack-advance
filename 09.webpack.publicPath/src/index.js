import React from 'react'
import ReactDOM from 'react-dom'
import user from './assets/user.png'

import ReactDemo from './ReactDemo.jsx'
import './math'

const img = new Image()
img.src = user

const foo = (name) => {
  console.log(name)
}

foo('tom 111')

document.body.appendChild(img)

ReactDOM.render(<ReactDemo />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./math.js')
}

