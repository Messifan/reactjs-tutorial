import React from "react"
//Father Component
//Son Function: father Component send message to Son with props
//props read only: son can only read pros. can not revise props
function SonFunction (props) {
  //props contains all the parameters in father component
  //use props.msg to get the message
  //props can trasfer function, jsx
  //console.log(props)
  //use a structure to store all parameters
  //const { list, getM, child } = props
  return (
    <div>I am the son function.
      message from: {props.msg};
      list from: {props.list.map(items => <p key={items}>{items}</p>)}
      <button onClick={props.getM}>Run funciton in Father Component</button>
      {props.child}
    </div>

  )
}
//son send to father
//son use the function in father component to send the message.
function SonSend (props) {
  function clickHandler () {
    props.getSonMsg('msg come from SonS')
  }
  return (
    <div>this is the son send test.
      <button onClick={clickHandler}>Click</button>
    </div>

  )
}
//Component Son
class SonClass extends React.Component {
  // use this.props.msg to get the message
  render () {
    return (
      <div>I am the son component. {this.props.msg}</div>
    )
  }
}

//Son A and Son B functions send message
//Send message from B to FatherComponent
//FatherComponent send message to A
function SonA (props) {
  //console.log(props)
  return (
    <div>this is Son A. {props.sendAmsg}
    </div>
  )
}

function SonB (props) {
  const bMsg = 'message from Son B'
  function clickHandler () {
    props.getB(bMsg)
  }
  return (
    <div>this is Son B
      <button onClick={() => props.getB(bMsg)}>Send Msg from B to A 1</button>
      <button onClick={clickHandler}>Send Msg from B to A 2</button>
    </div>
  )

}


//Component Father
class ComponentCommunication extends React.Component {
  state = {
    messsage: 'this is the msg',
    sendAmsg: 'message to from Father to A',
    list: [1, 2, 3]
  }
  getMsg = () => {
    console.log('function in Father Component')
  }
  getSonMsg = (m) => {
    // console.log(m)
  }
  getBMsg = (m) => {
    // console.log(m)
    //pass m to sendAmsg
    this.setState({
      sendAmsg: "revise:" + m
    })
  }
  render () {
    return (
      <div>
        <h1>---Component Communication---</h1>
        {/* son component pass msg */}
        <SonClass msg={this.state.messsage} />
        <SonFunction msg={this.state.messsage}
          list={this.state.list}
          getM={this.getMsg}
          child={<span>this is a span in Father Component</span>} />
        <SonSend getSonMsg={this.getSonMsg} />
        <SonB getB={this.getBMsg} />
        <SonA sendAmsg={this.state.sendAmsg} />
      </div>

    )
  }

}

export default ComponentCommunication