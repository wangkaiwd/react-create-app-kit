/**
 * Created by Administrator on 2018/9/15/015
 * 左侧边栏
 */
import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import './index.less'
import leftMenuList from './config'
import TopHeader from '../TopHeader'

const {Header, Sider, Content} = Layout
const SubMenu = Menu.SubMenu

class SideMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  createSubMenus = (leftMenuList) => (
    leftMenuList.map(item => {
      if (!item.options) {
        return (
          <Menu.Item key={item.key}>
            {item.icon && <Icon type={item.icon}/>}
            <span>{item.text}</span>
          </Menu.Item>
        )
      }
      return (
        <SubMenu
          key={item.key}
          title={
            <span>
            {item.icon && <Icon type={item.icon}/>}
              <span>{item.text}</span>
            </span>
          }>
          {this.createMenus(item.options)}
          {item.children && this.createSubMenus(item.children)}
        </SubMenu>)
    })
  )
  createMenus = (menus) => (
    menus.map(sub => (
      <Menu.Item key={sub.key}>
        {sub.icon && <Icon type={sub.icon}/>}
        <span>{sub.text}</span>
      </Menu.Item>
    ))
  )

  render () {
    return (
      <Layout className="side-menu-component">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">英树官方商城</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {this.createSubMenus(leftMenuList)}
          </Menu>
        </Sider>
        <Layout>
          <TopHeader collapsed={this.state.collapsed} toggle={this.toggle}/>
          <Content className="content">
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default SideMenu