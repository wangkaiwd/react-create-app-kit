import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Menu,
  Icon
} from 'antd';
import styles from './index.module.scss';
import menuData from './menuData'
const rootMenuKey = menuData.map(item => item.key)
const { SubMenu } = Menu;
@withRouter
class SideMenu extends Component {
  state = {
    menuData: [],
    selectedKeys: [],
    openKeys: []
  }
  componentDidMount = () => {
    this.initMenu()
  }
  componentDidUpdate = (prevProps) => {
    const { pathname } = this.props.location
    if (pathname !== prevProps.location.pathname) {
      this.setState({ selectedKeys: [pathname] })
    }
  }
  initMenu = () => {
    const list = this.renderMenu(menuData)
    const { pathname } = this.props.history.location
    this.setState({ menuData: list, selectedKeys: [pathname] })
  }
  getIcon = item => item.icon && <Icon type={item.icon} />
  renderMenu = (menuData) => {
    return menuData.map(menu => {
      if (menu.children) { return this.menuChildren(menu) }
      return this.menuItem(menu)
    })
  }
  onChangeSelectKeys = ({ key }) => {
    this.setState({ selectedKeys: [key] })
  }
  // SubMenu 展开/关闭的回调，注意：再点击Menu.Item的时候不会触发
  // 现在的问题：在点击首页的时候，其它的侧边栏不会闭合
  onOpenChange = openKeys => {
    const { openKeys: oldOpenKeys } = this.state
    // 找出最新打开的侧边栏对应的openKeys
    const lastOpenKeys = openKeys.find(item => oldOpenKeys.indexOf(item) === -1)
    if (rootMenuKey.indexOf(lastOpenKeys) === -1) {// 如果最新打开的是一级菜单，要用最新打开的侧边栏为数组重新赋值
      this.setState({ openKeys })
    } else { // 如果最新打开的不是一级菜单，说明可能是二级或者三级菜单
      this.setState({ openKeys: lastOpenKeys ? [lastOpenKeys] : [] })
    }
  }
  menuChildren = (subItem) => {
    return (
      <SubMenu
        key={subItem.key}
        title={
          <span>
            {this.getIcon(subItem)}<span>{subItem.title}</span>
          </span>
        }>
        {this.renderMenu(subItem.children)}
      </SubMenu>
    )
  }
  menuItem = item => <Menu.Item key={item.key}>
    <Link to={item.key}>
      {this.getIcon(item)}
      <span>
        {item.title}
      </span>
    </Link>
  </Menu.Item>
  render() {
    const {
      menuData,
      selectedKeys,
      openKeys
    } = this.state
    return (
      <Menu
        mode="inline"
        theme={'dark'}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={this.onChangeSelectKeys}
        onOpenChange={this.onOpenChange}
      >
        {menuData}
      </Menu>
    );
  }
}

export default SideMenu;

// 问题：通过当前的选中项，找出对应的父选项
//      1. 存储到locationStorage中（如果用户关闭了页面，重新进来的时候会有问题）
//      2. 通过代码逻辑进行查询
