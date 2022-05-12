import React from 'react'
class Test extends React.Component {
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  render () {
    return <div>Test</div>
  }
}
class App extends React.Component {
  state = {
    count: 0,
    flag: true
  }
  constructor() {
    super()
    console.log('constructor')
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  clickHandler = () => {
    this.setState(
      {
        count: this.state.count + 1,
        flag: !this.state.flag
      }
    )
  }

  render () {
    console.log('render')
    return (
      <div>
        <h1>---Render Cycle---</h1>
        <button onClick={this.clickHandler}>{this.state.count}</button>
        {this.state.flag ? <Test /> : null}
      </div>
    )
  }
}
class RenderCycle extends React.Component {
  render () {
    return (
      <div>
        <App />
      </div>
    )
  }
}

export default RenderCycle