import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import styles from './index.module.scss'
const { Header } = Layout;
class MyHeader extends Component {
  render() {
    return (
      <Header className={styles.header}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className={styles.menu}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default MyHeader