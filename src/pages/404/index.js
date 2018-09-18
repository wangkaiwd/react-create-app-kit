/**
 * @Author: wangkai
 * @Date: 2018/9/18
 * @Last Modified by: wangkai
 * @Desc: 404page
 **/
import React, { Component } from 'react'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

@withRouter
export default class NotFound extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Button type="primary" onClick={() => this.props.history.push('/home')}>回到首页</Button>
      </div>
    )
  }
}