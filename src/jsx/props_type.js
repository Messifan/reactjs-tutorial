import React from "react"
//1. defaultProps ; Test.propTypes
import PropTypes from 'prop-types'
function Test ({ pageSize = 10, list }) {
  return (
    <div>
      this is test.
      pageSize:{pageSize}
      {list.map(item => <p key={item}>{item}</p>)}

    </div>
  )
}

Test.propTypes = {
  list: PropTypes.array.isRequired
}
//define defaultProps in class
class App extends React.Component {
  static defaultProps = {
    pageSize: 15
  }
  render () {
    return (
      <div>
        <h1>---PropTypes Example---</h1>
        <Test pageSize={20} list={[10, 12]} />
        {this.props.pageSize}
      </div>
    )
  }
}
class PropTypesExample extends React.Component {
  render () {
    return (
      <div>
        <App />
      </div>
    )
  }
}
export default PropTypesExample