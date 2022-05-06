import React, { createRef } from "react"

class Counter extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: 'john',
      age: 18
    },
    message: 'this is message'
  }
  //change state values
  //not recommended
  changePerson = () => {
    this.setState({
      count: this.state.count + 1,
      list: [...this.state.list, this.state.count + 4],
      person: {
        ...this.state.person,
        name: 'rose',
      }

    })
  }

  //change message: control message in state
  //define message in state;
  //set value in input; 
  //onChange action function
  //setState function to change the message in state
  inputChange = (e) => {
    console.log('change input', e)
    //get input value and sent to state.message
    this.setState(
      {
        message: e.target.value
      }
    )

  }
  render () {
    return (
      <>
        {/* <ul>
          {this.state.list.map((item) => <li key={item}>{item}</li>)}
        </ul> */}
        <div >
          <button onClick={this.changePerson}>change</button>
          {this.state.count
            + this.state.list
            + this.state.person.name
            + this.state.person.age}
          <input
            type='text'
            value={this.state.message}
            onChange={this.inputChange} />
        </div>
      </>
    )

  }
}

//uncontrol component
//need to import createRef; use msgRef.current
class Input extends React.Component {
  msgRef = createRef()
  //getValue function
  getValue = () => {
    console.log("current value:", this.msgRef.current.value)
  }
  render () {
    return (
      <>
        <input
          type='text'
          ref={this.msgRef} />
        <button onClick={this.getValue}>get input values</button>
      </>
    )
  }
}
function ReactStateFunction () {
  return (
    <div>
      <h1>---React State---</h1>
      <Counter />
      <Input />
    </div>
  )
}

export default ReactStateFunction