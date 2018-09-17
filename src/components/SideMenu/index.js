/**
 * Created by Administrator on 2018/9/15/015
 * 左侧边栏
 */
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu, Icon, Switch } from 'antd'
import './index.less'
import leftMenuList from './config'
import TopHeader from '../TopHeader'
import PageContent from './content'

const {Sider} = Layout
const SubMenu = Menu.SubMenu

@withRouter
class SideMenu extends Component {
  constructor (props) {
    super(props)
    const {pathname} = this.props.history.location
    this.state = {
      collapsed: false,
      theme: sessionStorage.theme || 'dark',
      defaultSelectedKeys: [pathname],
      openKeys: []
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
            <Link to={item.key} key={item.key}>
              {item.icon && <Icon type={item.icon}/>}
              <span>{item.text}</span>
            </Link>
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
        <Link to={sub.key}>
          {sub.icon && <Icon type={sub.icon}/>}
          <span>{sub.text}</span>
        </Link>
      </Menu.Item>
    ))
  )
  changeTheme = (value) => {
    this.setState(
      {theme: value ? 'dark' : 'light'},
      () => sessionStorage.setItem('theme', this.state.theme)
    )
  }

  render () {
    const siderStyle = {backgroundColor: '#fff'}
    const {collapsed, theme, defaultSelectedKeys} = this.state
    return (
      <Layout className="side-menu-component">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={theme === 'light' && siderStyle}
          className={theme === 'dark' && 'dark'}
        >
          <div className="logo">英树官方商城</div>
          <Switch
            checked={theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <Menu theme={theme} mode="inline" defaultSelectedKeys={defaultSelectedKeys}>
            {this.createSubMenus(leftMenuList)}
          </Menu>
        </Sider>
        <Layout>
          <TopHeader collapsed={collapsed} toggle={this.toggle}/>
          <PageContent/>
        </Layout>
      </Layout>
    )
  }
}

export default SideMenu