import React, { Component, Fragment } from 'react';
import Login from 'app/login'
import { Button } from 'antd'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Login />
        <Button type="primary">ant design</Button>
      </Fragment>
    );
  }
}

export default App;

// login
// 登录之后： sideMenu  content