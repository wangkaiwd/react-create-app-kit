/**
 * @Author: wangkai
 * @Date: 2018/9/19
 * @Last Modified by: wangkai
 * @Desc:
 **/
import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd'

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
},
  {
    key: '4',
    name: 'Joe Black',
    age: 33,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 34,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 35,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '8',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '9',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }
]
export default class AgentEnd extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  columns = () => {
    return [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
      width: 150,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 150,
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 150,
    }, {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
      ),
      width: 150
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical"/>
      <a href="javascript:;">Delete</a>
    </span>
      ),
      width: 150
    }]
  }

  render () {
    return (
      <div className="page-wrapper">
        <div className="table-list">
          <Table scroll={{y: 400}} pagination={false} columns={this.columns()} dataSource={data}/>
        </div>
      </div>
    )
  }
}