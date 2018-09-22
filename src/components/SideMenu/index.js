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
    let {pathname} = this.props.history.location
    if (pathname === '/home') {
      pathname = '/home/test/example'
    }
    this.state = {
      collapsed: false,
      theme: sessionStorage.theme || 'dark',
      defaultSelectedKeys: [pathname],
      openKeys: []
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const {pathname} = nextProps.location
    if (this.props.location.pathname !== pathname) {
      this.createOpenKeys(nextProps)
      this.setState({defaultSelectedKeys: [pathname]})
    }
  }
  componentDidMount = () => {
    this.createOpenKeys(this.props)
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  // 生成打开的菜单项
  createOpenKeys = ({location, match}) => {
    const paths = location.pathname.split('/')
    const newPaths = paths.slice(2, paths.length - 1)
    let str = match.path
    const openKeys = newPaths.map(item => str += `/${item}`)
    this.setState({openKeys})
  }
  // 生成子菜单
  createSubMenus = (leftMenuList) => (
    leftMenuList.map(item => {
      if (!item.options && !item.children) {
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
          {item.options && this.createMenus(item.options)}
          {item.children && this.createSubMenus(item.children)}
        </SubMenu>)
    })
  )
  // 生成列表菜单
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
  // 改变主题
  changeTheme = (value) => {
    this.setState(
      {theme: value ? 'dark' : 'light'},
      () => sessionStorage.setItem('theme', this.state.theme)
    )
  }

  // 菜单被选中
  onSelect = ({selectedKeys}) => {
    this.setState({defaultSelectedKeys: selectedKeys})
  }

  // submenu展开关闭的回调
  onOpenChange = (openKeys) => {
    this.setState({openKeys})
  }

  render () {
    const siderStyle = {backgroundColor: '#fff'}
    const {collapsed, theme, defaultSelectedKeys, openKeys} = this.state
    return (
      <Layout className="side-menu-component">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={theme === 'light' && siderStyle}
          className={theme === 'dark' && 'dark'}
        >
          <div className="logo">英树后台</div>
          <Switch
            checked={theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <Menu
            theme={theme}
            mode="inline"
            // defaultSelectedKeys={defaultSelectedKeys}
            onSelect={this.onSelect}
            selectedKeys={defaultSelectedKeys}
            openKeys={openKeys}
            onOpenChange={this.onOpenChange}
          >
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
