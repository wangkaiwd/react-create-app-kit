import React, { Component } from 'react';
import {
  Menu,
  Icon
} from 'antd';
import styles from './index.module.scss';
import menuData from './menuData'
const { SubMenu } = Menu;
class SideMenu extends Component {
  state = {
    menuData: []
  }
  componentDidMount = () => {
    this.initMenu()
  }
  initMenu = () => {
    const list = this.renderMenu(menuData)
    this.setState({ menuData: list })
  }
  getIcon = item => item.icon && <Icon type={item.icon} />
  renderMenu = (menuData) => {
    return menuData.map(menu => {
      if (menu.children) { return this.menuChildren(menu) }
      return this.menuItem(menu)
    })
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
    {this.getIcon(item)}
    <span>
      {item.title}
    </span>
  </Menu.Item>
  render() {
    const { menuData } = this.state
    return (
      <Menu
        mode="inline"
        theme={'dark'}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        {menuData}
      </Menu>
    );
  }
}

export default SideMenu;