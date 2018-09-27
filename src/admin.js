import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import SideMenu from '@/components/SideMenu'
import Login from '@/pages/login'
import style from './admin.less'
// 权限验证函数
const auth = () => {
  const user = [{name: 'admin', password: '123456'}]
  const {userName, password} = JSON.parse(localStorage.getItem('userInfo')) || {}
  return !(user.name === userName && user.password === password)
}
const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      auth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
      )
    }
  />
)

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Router>
        <div className={style.container}>
          <Switch>
            <PrivateRoute path="/home" component={SideMenu}/>
            <Route path="/login" component={Login}/>
            <Redirect from="/" to="/home"/>
          </Switch>
        </div>
      </Router>
    )
  }

}

export default Admin
