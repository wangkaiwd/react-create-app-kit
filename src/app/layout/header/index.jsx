import React, { Component } from 'react';
import { Layout, Icon, Menu, Dropdown, Row, Col, Badge, Avatar } from 'antd'
import styles from './index.module.scss'
const { Header } = Layout;
class MyHeader extends Component {
  render() {
    const { collapsed, toggleTrigger } = this.props
    return (
      <Header className={styles.header}>
        <Row type="flex" justify="space-between">
          <Col className={styles.trigger}>
            <Icon
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggleTrigger}
            />
          </Col>
          <Col className={styles.rightTools}>
            <Row type="flex" align="middle" gutter={24}>
              <Col><Icon type="search" /></Col>
              <Col>
                <Badge count={99}>
                  <Icon type="bell" />
                </Badge>
              </Col>
              <Col>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Col>
              <Col>
                <a className={styles.github} target="_blank" href="https://github.com/wangkaiwd">
                  <Icon type="github" theme="filled" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

      </Header >
    );
  }
}

export default MyHeader