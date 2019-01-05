import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import styles from './index.module.scss'
class Crumbs extends Component {
  render() {
    return (
      <div>
        <Breadcrumb className={styles.crumbs}>
          <Breadcrumb.Item>
            <Link to="/login">
              Login
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/admin">Admin</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/admin/home">Home</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div>高级表单</div>
        <div>高级表单常见于一次性输入和提交大批量数据的场景。</div>
      </div>
    );
  }
}

export default Crumbs;