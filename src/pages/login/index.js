import React, { Component } from 'react'
import { Form, Icon, Input, Button, Card, message } from 'antd'
import { withRouter } from 'react-router-dom'

const user = [{name: 'admin', password: '123456'}]

const FormItem = Form.Item
@Form.create()
@withRouter
export default class Login extends Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {userName, password} = values
        user.forEach(item => {
          if (item.name === userName && item.password === password) {
            message.success('登录成功')
            localStorage.setItem('userInfo', JSON.stringify(values))
            this.props.history.push('/home')
            return
          }
          message.warning('用户名或密码错误')
        })
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="login">
        <Card
          style={{width: 400, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{required: true, message: 'Please input your username!'}],
              })(
                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="admin"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'Please input your Password!'}],
              })(
                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                       placeholder="123456"/>
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
            </FormItem>
          </Form>
        </Card>,
      </div>
    )
  }
}