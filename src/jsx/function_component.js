import React from 'react'
//function name and clas name first letter must be Capital
//onClick binding to Click action
//e.preventDefault() prevent ref link action
//pass defined parameters msg and e
function Hello () {
  const clickHandler = (e) => {
    e.preventDefault()
    console.log("function click is on.", e)
  }
  const clickHanderler2 = (e, msg) => {
    console.log("message: is passed:", e, msg)
  }
  return (
    <div>this is function
      <a onClick={clickHandler} href="http://www.google.com">google</a>
      <div onClick={(e) => clickHanderler2(e, 'click msg!')}>click msg!</div>
    </div>

  )
}

//class must have render function
//status in clss
class HelloComponent extends React.Component {
  state = {
    //define parameters for current component.
    name: 'HelloComponent Name',
    count: 0
  }
  clickHandler = () => {
    console.log("class click is on.")
  }
  changeName = () => {
    //change name in state
    //this.name not work. Must use setState to change name.
    this.setState({ name: 'change HelloComponent Name' })
  }
  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this)
  }
  render () {
    return (
      <div onClick={this.clickHandler}>
        this is class component.<br></br>
        name is: {this.state.name}
        <button onClick={this.changeName}>changeName</button>
        <button onClick={this.changeCount}>Count:{this.state.count}</button>
        {/* <button onClick={() => this.changeCount()}>Count:{this.state.count}</button> */}
      </div>
    )

  }
}

function Functioncomponent () {
  return (
    <div>
      <h1>---Function Component---</h1>
      <Hello />
      <HelloComponent />
    </div>
  )
}

export default Functioncomponent