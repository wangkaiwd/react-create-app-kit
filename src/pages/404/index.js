/**
 * @Author: wangkai
 * @Date: 2018/9/18
 * @Last Modified by: wangkai
 * @Desc: 404page
 **/
import React, { Component } from 'react'
import { Button } from 'antd'
import img404 from 'images/404.png'
import './index.less'
import { withRouter } from 'react-router-dom'

@withRouter
export default class NotFound extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="page-404">
        <div className="img404">
          <img src={img404} alt=""/>
        </div>
      </div>
    )
  }
}