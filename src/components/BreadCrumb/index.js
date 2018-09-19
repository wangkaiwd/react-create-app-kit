/**
 * @Author: wangkai
 * @Date: 2018/9/19
 * @Last Modified by: wangkai
 * @Desc: 面包屑导航
 **/
import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import { withRouter } from 'react-router-dom'
import leftMenuList from '@/components/SideMenu/config'
import './index.less'

@withRouter
export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      linkArray: []
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      return this.setState({linkArray: []}, () => this.breadList())
    }
    this.breadList()
    console.log(this.state.linkArray)
  }
  breadList = () => {
    const {pathname} = this.props.location
    const paths = pathname.split('/')
    let path = ''
    paths.forEach((item, index) => {
      if (index > 0) {
        path += `/${item}`
        this.compareLink(leftMenuList, path)
      }
    })
  }

  // 面包屑列表去重
  uniqueArray = (subItem, path) => {
    const obj = {path, text: subItem.text}
    const {linkArray} = this.state
    let bool = true
    linkArray.forEach(one => {
      if (one.path === obj.path) {
        bool = false
      }
    })
    bool && linkArray.push(obj)
    this.setState({linkArray})
  }
  // fixme: 根据有没有options和children以及其它情况进行分裂，之后可以进行优化
  // 面包屑列表和侧边栏进行比较
  compareLink = (menuList, path) => {
    menuList.forEach(subItem => {
      if (subItem.options) {
        if (subItem.key === path) {
          this.uniqueArray(subItem, path)
        }
        this.compareLink(subItem.options, path)
      }
      else if (subItem.children) {
        if (subItem.key === path) {
          this.uniqueArray(subItem, path)
          this.uniqueArray(subItem.children, path)
        }
        this.compareLink(subItem.children, path)
      }
      else {
        if (subItem.key === path) {
          this.uniqueArray(subItem, path)
        }
      }
    })
  }

  render () {
    const {linkArray} = this.state
    return (
      <div className="bread-crumb">
        <Breadcrumb>
          {linkArray.map(item => <Breadcrumb.Item key={item.path}>{item.text}</Breadcrumb.Item>)}
        </Breadcrumb>
      </div>
    )
  }
}