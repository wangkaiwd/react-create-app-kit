import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import About from '@/pages/about/About'
import Inbox from '@/pages/inbox/Inbox'
import { Layout } from 'antd'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import 'animate.css'

const {Content} = Layout
@withRouter
export default class PageContent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {location} = this.props.history
    return (
      <Router>
        <Content className="content">
          <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="fade" timeout={600}>
              <Switch location={location}>
                <Route path="/about" component={About}/>
                <Route path="/inbox" component={Inbox}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Content>
      </Router>
    )
  }
}