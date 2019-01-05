import React, { Component } from 'react';
import { Layout } from 'antd';
import styles from './index.module.scss'
const { Footer } = Layout
class MyFooter extends Component {
  render() {
    return (
      <Footer className={styles.footer}>
        Ant Design ©2019-1-5 Created by wk
      </Footer>
    );
  }
}

export default MyFooter;