import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb, Row, Col } from 'antd'
import styles from './index.module.scss'
class Crumbs extends Component {
  render() {
    return (
      <div className={styles.crumbsHeader}>
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
        <Row>
          <Col className={styles.crumbsTitle}>高级表单</Col>
          <Col className={styles.crumbsDetail}>高级表单常见于一次性输入和提交大批量数据的场景</Col>
        </Row>
      </div>
    );
  }
}

export default Crumbs;