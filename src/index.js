import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Admin from './admin'
import registerServiceWorker from './registerServiceWorker'
import 'styles/reset.less'
import 'styles/container.less'

ReactDOM.render(<Router><Admin/></Router>, document.getElementById('root'))
registerServiceWorker()
