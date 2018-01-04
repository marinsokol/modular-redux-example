import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import CreateStore from './store'

import './index.css'
import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={CreateStore()}>
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
