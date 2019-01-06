import React, { Component } from 'react';
import { Layout } from 'antd'
import SideMenu from './layout/sideMenu';
import MyHeader from './layout/header'
import MyFooter from './layout/footer'
import Crumbs from './layout/crumbs'
import { ReactComponent as Logo } from 'images/logo.svg'
import { ReactComponent as ReactLogo } from 'images/reactLogo.svg'
import styles from './admin.module.scss'
const { Content, Sider } = Layout;
const SIDER_WIDTH = 240
class Admin extends Component {
  state = {
    collapsed: false
  }
  toggleTrigger = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { collapsed } = this.state
    return (
      <Layout className={styles.admin}>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={SIDER_WIDTH}
          >
            <div className={styles.logo}>
              <ReactLogo />
              {!collapsed && <h2>Ant Design Pro</h2>}
            </div>
            <SideMenu collapsed={collapsed} />
          </Sider>
          <Layout className={styles.contentWrapper}>
            <MyHeader toggleTrigger={this.toggleTrigger} collapsed={collapsed} />
            <Crumbs />
            <Layout className={styles.container}>
              <Content className={styles.contents}>
                {this.props.children}
              </Content>
              <MyFooter />
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;