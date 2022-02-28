import React from 'react'

class ReactDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'hello react 11111'
    }
  }

  render() {
    return <div>{this.state.text}</div>
  }
}

export default ReactDemo