import React, { Component } from 'react'
import SideMenu from '@/components/SideMenu'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="container" style={{height: '100vh'}}>
        <SideMenu/>
      </div>
    )
  }

}

export default App
