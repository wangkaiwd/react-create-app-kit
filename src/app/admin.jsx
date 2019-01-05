import React, { Component } from 'react';
import { Layout } from 'antd'
import SideMenu from './layout/sideMenu';
import MyHeader from './layout/header'
import MyFooter from './layout/footer'
import Crumbs from './layout/crumbs'
import styles from './admin.module.scss'
const { Content, Sider } = Layout;
class Admin extends Component {
  render() {
    return (
      <Layout className={styles.admin}>
        <MyHeader />
        <Layout>
          <Sider width={200} className={styles.sider}>
            <SideMenu />
          </Sider>
          <Layout className={styles.crumbsWrapper}>
            <Crumbs />
            <Content className={styles.container}>
              {this.props.children}
            </Content>
            <MyFooter />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;