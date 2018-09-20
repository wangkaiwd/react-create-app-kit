import React, { Component } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'

export default class TableList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.paginationProp = {
      showQuickJumper: true,
      showSizeChanger: true
    }
  }

  render () {
    const {pagination, bordered, ...tableProps} = this.props
    return (
      <Table
        bordered={bordered || false}
        scroll={{y: 400}}
        pagination={pagination ? {...pagination, ...this.paginationProp} : false}
        {...tableProps}
      />
    )
  }
}

TableList.propTypes = {
  pagination: PropTypes.object,
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired
}