import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'styles/reset.less'
import 'styles/container.less'

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
