import { applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

import ReposOrchestrator from '../reducers/repos/orchestrator'

export default () =>
  applyMiddleware(
    ReposOrchestrator(),
    reduxImmutableStateInvariant()
  )

