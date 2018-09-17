import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import SideMenu from '@/components/SideMenu'
import Login from '@/pages/login'
import './App.less'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/home" component={SideMenu}/>
            <Route path="/login" component={Login}/>
            <Redirect from={`/`} to={'/home'}/>
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App
