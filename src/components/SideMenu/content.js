import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom'
import About from '@/pages/about/About'
import Inbox from '@/pages/inbox/Inbox'
import Example from '@/pages/example'
import { Layout } from 'antd'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const {Content} = Layout
@withRouter
export default class PageContent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {location, match} = this.props
    return (
      <Router>
        <Content className="content">
          <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="fade" timeout={600}>
              <Switch location={location}>
                <Route path={`${match.path}/test/example`} component={Example}/>
                <Route path={`${match.path}/about`} component={About}/>
                <Route path={`${match.path}/inbox`} component={Inbox}/>
                <Redirect to={`${match.path}/test/example`}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Content>
      </Router>
    )
  }
}