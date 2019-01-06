import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import RouteAnimate from './routeAnimate'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Login from '../login'
import Admin from '../admin'
import Home from 'pages/home'
import FormDemo from 'pages/form'
import ListDemo from 'pages/list'
import DetailDemo from 'pages/detail'
export default () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/admin" render={({ location }) => (
        <Admin>
          <RouteAnimate
            location={location}
            timeout={1000}
            prefix={'my'}
          >
            <Switch location={location}>
              <Route path="/admin/home" component={Home} />
              <Route path="/admin/list/query" component={ListDemo} />
              <Route path="/admin/form/advanced/demo" component={FormDemo} />
              <Route path="/admin/detail/base" component={DetailDemo} />
              <Redirect from="/admin" to="/admin/home" />
            </Switch>
          </RouteAnimate>
        </Admin>
      )} />
      <Redirect from='/' to='/login' />
    </Switch>
  </Router>
)
// react-router v4 是将路由放置到组件中进行使用的

// 报错：You tried to redirect to the same route you're currently on: "/login"
// 因为匹配'/',会重定向到/login
// 当时'/login'还是会匹配'/',又会进行重定向

// 解决方法：在外层包裹Switch标签
// https://stackoverflow.com/questions/47474448/react-router-v4-warning-you-tried-to-redirect-to-the-same-route-youre-curren

// Switch
// 