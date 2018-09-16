/**
 * @Author: wangkai
 * @Date: 2018/9/14
 * @Last Modified by: wangkai
 * @Desc: 配置全局页面的路由
 **/
import React, { Component } from 'react'
import App from '../App'
import Login from '@/pages/login'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

class RouteConfig extends Component {
  render () {
    return (
      <Router>
        <div className="content">
          <Switch>
            <Route path="/home" component={App}/>
            <Route path="/login" exact={true} component={Login}/>
            <Redirect to="/home"/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouteConfig
