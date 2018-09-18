import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom'
import About from '@/pages/about/About'
import Inbox from '@/pages/inbox/Inbox'
import Example from '@/pages/example'
import { Layout } from 'antd'

const {Content} = Layout
@withRouter
export default class PageContent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {location, match} = this.props
    console.log(location)
    return (
      <Router>
        <Content className="content">
          <Switch>
            <Route path={`${match.path}/about`} component={About}/>
            <Route path={`${match.path}/inbox`} component={Inbox}/>
            <Route path={`${match.path}/test/example`} component={Example}/>
            <Redirect to={`${match.path}/test/example`}/>
          </Switch>
        </Content>
      </Router>
    )
  }
}