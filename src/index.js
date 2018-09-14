import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import RouteConfig from './routes/route'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<RouteConfig/>, document.getElementById('root'))
registerServiceWorker()
