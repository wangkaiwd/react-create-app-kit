/**
 * @Author: wangkai
 * @Date: 2018/9/14
 * @Last Modified by: wangkai
 * @Desc: 配置全局页面的路由
 **/
// import About from '@/pages/About'
// import Inbox from '@/pages/Inbox'
// import React from 'react'
// import { HashRouter as Router, Route, Link } from 'react-router-dom'
//
// export default () => (
//   <Router>
//     <div>
//       <ul>
//         {/*<li>
//           <Link to="/">Home</Link>
//         </li>*/}
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/inbox">Inbox</Link>
//         </li>
//       </ul>
//     </div>
//     <Route path="/about" component={About}/>
//     <Route path="/inbox" component={Inbox}/>
//   </Router>
// )
import React, { Component } from 'react'
import App from '../App'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import About from '@/pages/About'
import Inbox from '@/pages/Inbox'

class RouteConfig extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/inbox">Topics</Link>
            </li>
          </ul>
          <Route path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/inbox" component={Inbox}/>
        </div>
      </Router>
    )
  }
}

export default RouteConfig
