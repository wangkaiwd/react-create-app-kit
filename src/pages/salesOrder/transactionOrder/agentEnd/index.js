/**
 * @Author: wangkai
 * @Date: 2018/9/19
 * @Last Modified by: wangkai
 * @Desc:
 **/
import React, { Component } from 'react'

import { Form, Row, Col, Input, Button, Icon, Table, Divider, Tag } from 'antd'
import './index.less'

const FormItem = Form.Item

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

@Form.create()
export default class AgentEnd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expand: false,
    }
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
  handleSearch = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values)
    })
  }
  handleReset = () => {
    this.props.form.resetFields()
  }
  toggle = () => {
    const {expand} = this.state
    this.setState({expand: !expand})
  }

  getFields () {
    const count = this.state.expand ? 10 : 6
    const {getFieldDecorator} = this.props.form
    const children = []
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{display: i < count ? 'block' : 'none'}}>
          <FormItem label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input placeholder="placeholder"/>
            )}
          </FormItem>
        </Col>
      )
    }
    return children
  }

  render () {
    return (
      <div className="page-wrapper transaction-order">
        <div className="page-header">
          <Form
            className="top-search-form"
            onSubmit={this.handleSearch}
          >
            <Row gutter={24}>{this.getFields()}</Row>
            <Row>
              <Col span={24} style={{textAlign: 'right'}}>
                <Button type="primary" htmlType="submit">Search</Button>
                <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                  Clear
                </Button>
                <a style={{marginLeft: 8, fontSize: 12}} onClick={this.toggle}>
                  Collapse <Icon type={this.state.expand ? 'up' : 'down'}/>
                </a>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="page-content-scroll">
          <div className="table-list">
            <Table
              scroll={{y: 400}}
              pagination={{pageSize: 15, total: 300, showSizeChanger: true, showQuickJumper: true}}
              columns={this.columns()}
              dataSource={data}
            />
          </div>
        </div>
        <div className="page-footer">

        </div>
      </div>
    )
  }
}