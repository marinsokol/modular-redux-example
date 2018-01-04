import axios from 'axios'

import {
  REPOS_FETCH
} from './constants'
import {
  addRepos,
  errorRepos
} from './actions'
import config from '../../config'

export default () => store => next => async (action) => {
  switch (action.type) {
    case REPOS_FETCH:
      next(action)
      try {
        const { data } = await axios.get(`${config.API_URL}/users/${action.payload.user}/repos`)

        store.dispatch(addRepos(action.payload.user, data))
      } catch (err) {
        store.dispatch(errorRepos(action.payload.user, err.message))
      }
      break
    default:
      next(action)
  }
}
