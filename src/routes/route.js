/**
 * @Author: wangkai
 * @Date: 2018/9/14
 * @Last Modified by: wangkai
 * @Desc: 配置全局页面的路由
 **/
import React, { Component } from 'react'
import App from '../App'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import About from '@/pages/About'
import Inbox from '@/pages/Inbox'

class RouteConfig extends Component {
  render () {
    return (
      <Router>
        <div className="content">
          <Route path="/" component={App}/>
        </div>
      </Router>
    )
  }
}

export default RouteConfig
