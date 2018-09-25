/**
 * @Author: wangkai
 * @Date: 2018/9/18
 * @Last Modified by: wangkai
 * @Desc: 404page
 **/
import React, { Component } from 'react'
// import img404 from '/assets/images/404.png'
import 'animate.css'
import './index.less'
import { withRouter } from 'react-router-dom'

@withRouter
export default class NotFound extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animated: ''
    }
  }

  enter = () => {
    this.setState({animated: 'hinge'})
  }

  render () {
    return (
      <div className="page-404">
        <div className="img404">
          <img src="/assets/images/404.png" alt="404" className={`animated wobble ${this.state.animated}`}
               onMouseEnter={this.enter}/>
        </div>
      </div>
    )
  }
}