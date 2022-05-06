import React from "react"

function ListItem ({ item, delItem }) {
  function deleteClickHandler () {
    delItem(item.id)
  }
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={deleteClickHandler}>Delete</button>
    </>
  )
}
function ChildrenListItem ({ children }) {
  children()
  return (
    <div>List Items</div>
  )
}
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: 'item 1 name', price: 10, info: '10%' },
      { id: 2, name: 'item 2 name', price: 20, info: '20%' },
      { id: 3, name: 'item 3 name', price: 30, info: '30%' }
    ]
  }
  //send function to Child
  delItem = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render () {
    return (
      <div>
        {this.state.list.map(item => <ListItem key={item.id} item={item} delItem={this.delItem} />)}
        <ChildrenListItem>{() => console.log(123)}</ChildrenListItem>

      </div>
    )
  }
}

class RenderList extends React.Component {
  render () {
    return (
      <div>
        <h1>---Render List example---</h1>
        <App />
      </div>
    )
  }
}
export default RenderList