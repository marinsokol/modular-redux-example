import { applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

import ReposOrchestrator from '../reducers/repos/orchestrator'
import SelectedRepoOrchestrator from '../reducers/selectedRepo/orchestrator'

export default () =>
  applyMiddleware(
    ReposOrchestrator(),
    SelectedRepoOrchestrator(),
    reduxImmutableStateInvariant()
  )

