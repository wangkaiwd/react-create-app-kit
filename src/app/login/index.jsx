import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { ReactComponent as Logo } from 'images/antDesignLogo.svg'
import { Form, Button, Input, Col, message } from 'antd'
import styles from './index.module.scss'
@withRouter
@Form.create()
class Login extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, value) => {
      if (!err) {
        if (value.userName === 'guest' && value.password === 'guest') {
          message.success('登录成功！')
          this.props.history.replace('/admin/home/analysis')
        } else {
          message.warn('账号或密码错误!')
        }
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.login}>
        <div className={styles.loginForm}>
          <div className={styles.logoWrapper}>
            <Logo className={styles.logo} />
            <span className={styles.logoText}>AntD Admin</span>
          </div>
          <Form onSubmit={this.onSubmit}>
            <Form.Item hasFeedback >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your userName!' }],
              })(
                <Input type="text" placeholder="UserName" />
              )}
            </Form.Item>
            <Form.Item hasFeedback >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <Col span={24}>
                <Button type="primary" htmlType="submit" className={styles.signIn}>Sign in</Button>
              </Col>
            </Form.Item>
            <Col className={styles.account}>
              <span>UserName : guest</span>
              <span>Password : guest</span>
            </Col>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;