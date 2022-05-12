import React from 'react'
import { Input, Space, Table } from 'antd'
import '../App.css'
import axios from 'axios'

//render table in search
//send request,getdata,sent to list;

const { Search } = Input

class App extends React.Component {
  state = {
    tableFlag: false,
    list: [],
    columns: [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'DESC',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: 'ACTION',
        dataIndex: 'action',
        key: 'action',
      },
    ]
  }
  //load list
  loadList = async () => {
    const res = await axios.get('http://localhost:3001/data')
    console.log(res)
  }

  componentDidMount () {
    this.loadList()
  }
  onSearch = (value) => {
    console.log(value, this.state.tableFlag)
    if (value) {
      this.setState({ tableFlag: true })
    } else {
      this.setState({ tableFlag: false })
    }
  }

  render () {
    return (
      <div className='container'>
        <h1>---Todo Search with Ant Design---</h1>
        <Space>
          {/* {add Searchbar component} */}
          <div className='search-box'>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={this.onSearch}
            />
          </div>
        </Space>
        {/* add Table component */}
        {this.state.tableFlag ?
          <Table dataSource={this.state.list} columns={this.state.columns} /> : null}





        {/* <Button type="primary">Button</Button> */}
      </div>
    )
  }
}
class TodoSearch extends React.Component {
  render () {
    return (
      <div>
        <App />
      </div>
    )
  }
}

export default TodoSearch