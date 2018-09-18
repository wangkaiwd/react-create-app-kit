import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'styles/reset.less'
import 'styles/container.less'

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'))
registerServiceWorker()
