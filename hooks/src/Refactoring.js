import React, {Component} from 'react'

export default class extends Component {
  state = {
    isToggeled: false
  }

  toggle = () => {
    this.setState(state => {
      return { isToggeled: !state.isToggeled }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.isToggeled && <h1>HEY! Toggle is ON!</h1>}
      </div>
    )
  }
}