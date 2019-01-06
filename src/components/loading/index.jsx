import React, { Component } from 'react';
import { Spin, Row, Col } from 'antd'
import styles from './index.module.scss'
class Loading extends Component {
  render() {
    return (
      <Row className={styles.loading} type={'flex'} justify={'center'}>
        <Col>
          <Spin />
        </Col>
      </Row>
    );
  }
}

export default Loading;