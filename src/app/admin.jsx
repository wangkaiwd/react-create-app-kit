import React, { Component } from 'react';
import SideMenu from './layout/sideMenu';
import Header from './layout/header'

class Admin extends Component {
  render() {
    return (
      <div>
        <SideMenu />
        <Header />
        <div>
          内容
        </div>
      </div>
    );
  }
}

export default Admin;