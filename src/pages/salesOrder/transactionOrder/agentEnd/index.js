/**
 * @Author: wangkai
 * @Date: 2018/9/19
 * @Last Modified by: wangkai
 * @Desc:
 **/
import React, { Component } from 'react'

import { Form, Row, Col, Input, Button, Icon, Table, Divider, Tag, Tabs } from 'antd'
import './index.less'
import { PhotoSwipeGallery } from 'react-photoswipe'
import TabSwitch from '@/components/TabSwitch'

const FormItem = Form.Item
const TabPane = Tabs.TabPane

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
  items: [
    {
      src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
      thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
      w: 1200,
      h: 900,
      title: 'Image 1'
    }
  ],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
  items: [
    {
      src: 'https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg',
      thumbnail: 'https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg',
      w: 1200,
      h: 900,
      title: 'Image 1'
    }
  ],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
  items: [
    {
      src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
      thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
      w: 1200,
      h: 900,
      title: 'Image 1'
    }
  ],
},
  {
    key: '4',
    name: 'Joe Black',
    age: 33,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    items: [
      {
        src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
        thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
        w: 1200,
        h: 900,
        title: 'Image 1'
      }
    ],
  },
  // {
  //   key: '5',
  //   name: 'Joe Black',
  //   age: 34,
  //   address: 'Sidney No. 1 Lake Park',
  //   tags: ['cool', 'teacher'],
  //   items: [
  //     {
  //       src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       w: 1200,
  //       h: 900,
  //       title: 'Image 1'
  //     }
  //   ],
  // },
  // {
  //   key: '6',
  //   name: 'Joe Black',
  //   age: 35,
  //   address: 'Sidney No. 1 Lake Park',
  //   tags: ['cool', 'teacher'],
  //   items: [
  //     {
  //       src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       w: 1200,
  //       h: 900,
  //       title: 'Image 1'
  //     }
  //   ],
  // },
  // {
  //   key: '7',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park',
  //   items: [
  //     {
  //       src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       w: 1200,
  //       h: 900,
  //       title: 'Image 1'
  //     }
  //   ],
  //   tags: ['cool', 'teacher'],
  // },
  // {
  //   key: '8',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park',
  //   tags: ['cool', 'teacher'],
  //   items: [
  //     {
  //       src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       w: 1200,
  //       h: 900,
  //       title: 'Image 1'
  //     }
  //   ],
  // },
  // {
  //   key: '9',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park',
  //   tags: ['cool', 'teacher'],
  //   items: [
  //     {
  //       src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
  //       w: 1200,
  //       h: 900,
  //       title: 'Image 1'
  //     }
  //   ],
  // }
]

@Form.create()
export default class AgentEnd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expand: false,
      isOpen: false,
      items: [
        {
          src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
          thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
          w: 1200,
          h: 900,
          title: 'Image 1'
        },
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg',
          thumbnail: 'https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg',
          w: 1200,
          h: 900,
          title: 'Image 2'
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg',
          thumbnail: 'https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg',
          w: 1200,
          h: 900,
          title: 'Image 3'
        }
      ],
      options: {
        closeOnScroll: false,
        shareEl: false
      },
      tabConfig: []
    }
  }

  getThumbnailContent = item => (
    <img src={item.thumbnail} width={20} height={3} alt=""/>
  )
  openPhotoSwipe = (e) => {
    e.preventDefault()
    this.setState({
      isOpen: true
    })
  }

  componentDidMount = () => {
    let {tabConfig} = this.state
    tabConfig = [
      {title: '所有订单', content: this.createTable(data, this.columns())},
      {title: '待付款', content: this.createTable(data, this.columns())},
      {title: '待发货(100)', content: this.createTable(data, this.columns())},
      {title: '待收货(100)', content: this.createTable(data, this.columns())},
    ]
    this.setState({tabConfig})
  }
  createTable = (data, columns) => {
    return (<div className="table-list">
      <Table
        scroll={{y: 400}}
        // loading={true}
        pagination={{pageSize: 15, total: 300, showSizeChanger: true, showQuickJumper: true}}
        columns={columns}
        dataSource={data}
      />
    </div>)
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    })
  }
  handleBeforeChange = (instance, change) => {
    console.log('Before change: ', change)
  }
  columns = () => {
    const {isOpen, options} = this.state
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
      key: 'items',
      dataIndex: 'items',
      render: items => {
        return (
          <div>
            测试图片
            <PhotoSwipeGallery
              items={items}
              options={options}
              thumbnailContent={this.getThumbnailContent}
              isOpen={isOpen}
              onClose={this.handleClose}
              beforeChange={this.handleBeforeChange}
            />
          </div>
        )
      },
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
    for (let i = 0; i < 3; i++) {
      children.push(
        <Col span={6} key={i} style={{display: i < count ? 'block' : 'none'}}>
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

  callback = (key) => {
    console.log(key)
  }

  render () {
    return (
      <div className="page-wrapper transaction-order">
        <div className="page-header">
          <Form
            className="top-search-form"
            onSubmit={this.handleSearch}
          >
            <Row gutter={12}>
              {this.getFields()}
              <Col span={6} style={{textAlign: 'right'}}>
                <Button type="primary" htmlType="submit">搜索</Button>
                <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                  重置
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="page-content-scroll">
          <TabSwitch tabConfig={this.state.tabConfig}/>
        </div>
        {/*<div className="page-footer">*/}

        {/*</div>*/}
      </div>
    )
  }
}