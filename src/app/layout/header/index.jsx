import React, { Component } from 'react';
import { Layout, Icon } from 'antd'
import styles from './index.module.scss'
const { Header } = Layout;
class MyHeader extends Component {
  render() {
    const { collapsed, toggleTrigger } = this.props
    return (
      <Header className={styles.header}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggleTrigger}
        />
      </Header>
    );
  }
}

export default MyHeader