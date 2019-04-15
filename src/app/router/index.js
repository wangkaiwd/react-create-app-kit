import React, { Suspense } from 'react';
import RouteAnimate from './routeAnimate';
import Loading from 'components/loading';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from '../login';
import Admin from '../admin';
import routeConfig from './router.config';

export default () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/" render={({ location }) => (
        <Admin>
          <RouteAnimate
            location={location}
            timeout={500}
            prefix={'my'}
          >
            <Suspense fallback={<Loading/>}>
              <Switch location={location}>
                {routeConfig.map(item => (
                  <Route key={item.path} {...item} />
                ))}
                <Redirect from="/" to="/home/analysis"/>
              </Switch>
            </Suspense>
          </RouteAnimate>
        </Admin>
      )}/>
      <Redirect from='/' to='/login'/>
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

// 路由问题：暂时没有考虑嵌套路由的情况
