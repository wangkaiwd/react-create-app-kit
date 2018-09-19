import React, { Component } from 'react'
import { Table } from 'antd'

export default class TableList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Table scroll={{y: 400}} pagination={false} columns={this.columns()} dataSource={data}/>
    )
  }
}