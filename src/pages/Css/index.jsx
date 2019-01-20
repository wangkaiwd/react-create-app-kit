import React, { Component } from 'react';
import { Card, Row, Col } from 'antd'
import styles from './index.module.scss'
class CssDemo extends Component {
  render() {
    return (
      <Card title="CSS" className={styles.css}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Button border animation" hoverable>
              {/* 为元素添加动画: .button:hover::before,.button:hover::after */}
              <div className={styles.buttonBorder}>
                <button className={styles.button}>
                  Submit
                </button>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Donut spinner" hoverable>
              <div className={styles.donutWrapper}>
                <div className={styles.donut}></div>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Hover Shadow Box Animation" hoverable>
              <p className={styles.shadowBox}>
                Box it!
              </p>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default CssDemo;