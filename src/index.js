import React from 'react'
import ReactDOM from 'react-dom'
import Admin from './admin'
import registerServiceWorker from './registerServiceWorker'
import 'styles/reset.less'
import 'styles/container.less'

ReactDOM.render(<Admin />, document.getElementById('root'))
registerServiceWorker()
