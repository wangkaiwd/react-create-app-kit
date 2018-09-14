import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, Table, Divider, Tag } from 'antd'

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  columns = () => {
    return [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
      ),
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
      <a href="javascript:">Invite {record.name}</a>
      <Divider type="vertical"/>
      <a href="javascript:">Delete</a>
    </span>
      ),
    }]
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        {/*<ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/inbox">Topics</Link>
            </li>
          </ul>*/}
        <Table columns={this.columns()} dataSource={data}/>
      </div>
    )
  }

}

export default App
