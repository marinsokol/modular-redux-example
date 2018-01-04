import {
  createStore,
  compose
} from 'redux'

import reducers from './reducers'
import middleware from './middleware'
import initState from './initState'

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducers,
    initState,
    composeEnhancers(
      middleware()
    )
  )
}
