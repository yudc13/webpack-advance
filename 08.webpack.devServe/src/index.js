import React from 'react'
import ReactDOM from 'react-dom'

import ReactDemo from './ReactDemo.jsx'

import './math'

const foo = (name) => {
  console.log(name)
}

foo('tom 111')

ReactDOM.render(<ReactDemo />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./math.js')
}

