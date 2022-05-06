import React, { createContext } from "react"
//App data-> A -> C
//1. add createContext function
//2. add Provider in Root App: <Provider value={this.state.message}>
//3. add Consumer in C: {value => <span>{value}</span>}
const { Provider, Consumer } = createContext()

function ComA () {
  return (
    <div>
      this is ComA
      <ComC />
    </div>

  )
}
function ComC () {
  return (
    <div>
      this is ComC :
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}
function ComD (props) {
  const Dmessage = 'Message from D'
  function clickHandler () {
    props.getDMsg(Dmessage)
  }
  return (
    <div>
      this is ComD.
      <button onClick={clickHandler}>Send Msg from D to C</button>
      <ComF />
    </div>

  )
}
function ComF () {
  return (
    <div>
      this is ComF
    </div>

  )
}

class ContextCommunication extends React.Component {
  state = {
    message: 'this is message in Root'
  }
  getDMsg = (m) => {
    // console.log(m)
    //pass m to sendAmsg
    this.setState({
      message: m
    })
  }
  render () {
    return (
      <Provider value={this.state.message}>
        <div>
          <h1> ---Context Communication---</h1>
          <ComA />
          <ComD getDMsg={this.getDMsg} />
        </div>
      </Provider>

    )
  }
}

export default ContextCommunication