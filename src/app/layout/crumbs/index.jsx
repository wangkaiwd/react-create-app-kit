import React, { Component } from 'react';
import { Breadcrumb } from 'antd'
import styles from './index.module.scss'
class Crumbs extends Component {
  render() {
    return (
      <Breadcrumb className={styles.crumbs}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default Crumbs;