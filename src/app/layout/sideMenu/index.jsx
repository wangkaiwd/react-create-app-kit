import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import {
  Menu,
  Icon
} from 'antd';
import styles from './index.module.scss';
import menuData from './menuData'
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
  initMenu = () => {
    const list = this.renderMenu(menuData)
    const { pathname } = this.props.history.location
    this.setState({ menuData: list, selectedKeys: [pathname], openKeys: [pathname] })
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
  onOpenChange = openKeys => {
    this.setState({ openKeys })
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
  menuItem = item => <Menu.Item key={`/admin${item.key}`}>
    <Link to={`/admin${item.key}`}>
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
// TODOS: 在刷新页面的时候还可以保持menu的打开状态