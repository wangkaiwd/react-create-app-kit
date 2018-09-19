/**
 * @Author: wangkai
 * @Date: 2018/9/19
 * @Last Modified by: wangkai
 * @Desc:
 **/
import React, { Component } from 'react'
import { Layout } from 'antd'

const {Header, Footer, Sider, Content} = Layout

export default class AgentEnd extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="page-wrapper">
        AgentEnd
      </div>
    )
  }
}