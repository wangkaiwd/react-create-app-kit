/**
 * @Author: wangkai
 * @Date: 2018/9/19
 * @Last Modified by: wangkai
 * @Desc:
 **/
import React, { Component } from 'react'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane
export default class TabSwitch extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  callback = (key) => {
    console.log(key)
  }

  render () {
    const {tabConfig} = this.props
    return (
      <Tabs defaultActiveKey="0" onChange={this.callback}>
        {tabConfig.map((tab, i) => (
          <TabPane tab={tab.title} key={i}>{tab.content}</TabPane>
        ))}
      </Tabs>
    )
  }
}