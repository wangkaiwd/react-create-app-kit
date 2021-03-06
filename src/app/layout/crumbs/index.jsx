import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';
import styles from './index.module.scss';
import routeConfig from '@/app/router/router.config';

@withRouter
class Crumbs extends Component {
  state = {
    breadNames: []
  };
  componentDidMount = () => {
    this.createBread();
  };
  // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
  // componentDidUpdate() 在更新之后快速调用，这个方法并不会在初始化render的时候调用
  componentDidUpdate = (prevProps) => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.createBread();
    }
  };
  createBread = () => {
    const { pathname } = this.props.location;
    // 当首页的时候find方法并不能在routeConfig中找到路径，会返回undefined
    const routeItem = routeConfig.find(item => item.path === pathname);
    const breadNames = routeItem ? routeItem.breadNames : [];
    this.setState({ breadNames });
  };

  render () {
    const { breadNames } = this.state;
    return (
      <div className={styles.crumbsHeader}>
        <Breadcrumb className={styles.crumbs}>
          <Breadcrumb.Item className={styles.breadTitle}>
            {breadNames[breadNames.length - 1] || '首页'}
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/admin/home/analysis">
              <Icon type="home" theme="filled"/>
            </Link>
          </Breadcrumb.Item>
          {breadNames.map((bread, i) => (
            <Breadcrumb.Item key={i}>
              {bread}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    );
  }
}

export default Crumbs;

// 面包屑问题：
// 1. 动态生成  2. 点击跳转
