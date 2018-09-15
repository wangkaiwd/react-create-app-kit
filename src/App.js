import React, { Component } from 'react'
import SideMenu from '@/components/SideMenu'
import './App.less'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="container">
        <SideMenu/>
      </div>
    )
  }

}

export default App
