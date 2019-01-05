import React, { Component, Fragment } from 'react';
import Login from 'app/login'
import { Button } from 'antd'
class App extends Component {
  render() {
    // return this.props.children;
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;

// login
// 登录之后： admin组件 ---->> sideMenu  content