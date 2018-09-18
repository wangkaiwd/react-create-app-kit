import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom'
import About from '@/pages/about/About'
import Inbox from '@/pages/inbox/Inbox'
import Example from '@/pages/example'
import Page404 from '@/pages/404'
import { Layout, Spin } from 'antd'

const {Content} = Layout
@withRouter
export default class PageContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spinning: true
    }
  }

  componentDidUpdate = () => {
    if (this.state.spinning) {
      this.setLoading()
    }
  }
  componentWillReceiveProps = () => {
    this.setState({spinning: true})
  }

  setLoading = () => {
    setTimeout(() => this.setState({spinning: false}), 500)
  }

  render () {
    const {match} = this.props
    return (
      <Router>
        <Content className="page">
          <Spin tip="LOADING" wrapperClassName="loading-wrap" spinning={this.state.spinning} size={'large'}>
            <Switch>
              <Route path={`${match.path}/about`} exact component={About}/>
              <Route path={`${match.path}/inbox`} exact component={Inbox}/>
              <Route path={`${match.path}/test/example`} exact component={Example}/>
              <Redirect from={`${match.path}`} exact to={`${match.path}/test/example`}/>
              <Route component={Page404}/>
            </Switch>
          </Spin>
        </Content>
      </Router>
    )
  }
}