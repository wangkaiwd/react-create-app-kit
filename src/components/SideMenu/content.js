import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom'
import About from '@/pages/about/About'
import Inbox from '@/pages/inbox/Inbox'
import Example from '@/pages/example'
import Page404 from '@/pages/404'
import OrderSettings from '@/pages/salesOrder/orderSetting/orderSettings'
import RefundOrderAgent from '@/pages/salesOrder/refundOrder/agentEnd'
import RefundOrderMember from '@/pages/salesOrder/refundOrder/memberEnd'
import TransactionAgent from '@/pages/salesOrder/transactionOrder/agentEnd'
import TransactionMember from '@/pages/salesOrder/transactionOrder/memberEnd'
import { Layout, Spin } from 'antd'
import BreadCrumb from '@/components/BreadCrumb'

const { Content } = Layout
@withRouter
export default class PageContent extends Component {
  constructor(props) {
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
  componentWillReceiveProps = (nextProps) => {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({ spinning: true })
    }
  }
  setLoading = () => {
    setTimeout(() => this.setState({ spinning: false }), 300)
  }

  render() {
    const { match } = this.props
    return (
      <Router>
        <React.Fragment>
          <BreadCrumb />
          <Content className="page">
            <Spin tip="YSADMIN" wrapperClassName="loading-wrap" spinning={this.state.spinning} size={'large'}>
              {this.state.spinning || <Switch>
                <Route path={`${match.path}/about`} exact component={About} />
                <Route path={`${match.path}/inbox`} exact component={Inbox} />
                <Route path={`${match.path}/salesOrder/orderSettings`} exact component={OrderSettings} />
                <Route path={`${match.path}/salesOrder/refundOrder/agentEnd`} exact component={RefundOrderAgent} />
                <Route path={`${match.path}/salesOrder/refundOrder/memberEnd`} exact component={RefundOrderMember} />
                <Route path={`${match.path}/salesOrder/transactionOrder/agentEnd`} exact component={TransactionAgent} />
                <Route path={`${match.path}/salesOrder/transactionOrder/memberEnd`} exact
                  component={TransactionMember} />
                <Route path={`${match.path}/test/example`} exact component={Example} />
                <Redirect from={`${match.path}`} exact to={`${match.path}/test/example`} />
                <Route component={Page404} />
              </Switch>}
            </Spin>
          </Content>
        </React.Fragment>
      </Router>
    )
  }
}
