/**
 * Created by Administrator on 2018/9/15/015
 * 左侧边栏
 */
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu, Icon, Switch } from 'antd'

import style from './index.less'
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
    const menuTreeNode = this.createLeftMenu(leftMenuList)
    this.setState({menuTreeNode})
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
  createLeftMenu = (leftMenuList) => (
    leftMenuList.map(item => {
      if (!item.children) return this.menusTree(item)
      return this.subMenusTree(item)
    })
  )
  // 生成子菜单
  subMenusTree = (subMenuTree) => (
    <SubMenu
      key={subMenuTree.key}
      title={
        <span>
          {subMenuTree.icon && <Icon type={subMenuTree.icon}/>}
          <span>{subMenuTree.title}</span>
        </span>
      }>
      {this.createLeftMenu(subMenuTree.children)}
    </SubMenu>
  )
  // 生成列表菜单
  menusTree = (menuTree) => (
    <Menu.Item key={menuTree.key}>
      <Link to={menuTree.key} key={menuTree.key}>
        {menuTree.icon && <Icon type={menuTree.icon}/>}
        <span>{menuTree.title}</span>
      </Link>
    </Menu.Item>
  )

  // 菜单被选中
  onSelect = ({selectedKeys}) => {
    this.setState({defaultSelectedKeys: selectedKeys})
  }

  // submenu展开关闭的回调
  onOpenChange = (openKeys) => {
    this.setState({openKeys})
  }

  render () {
    const {collapsed, menuTreeNode, defaultSelectedKeys, openKeys} = this.state
    return (
      <Layout className={style['side-menu-component']}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className={style.logo}>英树后台</div>
          <Menu
            theme="dark"
            mode="inline"
            onSelect={this.onSelect}
            selectedKeys={defaultSelectedKeys}
            openKeys={openKeys}
            onOpenChange={this.onOpenChange}
          >
            {menuTreeNode}
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
