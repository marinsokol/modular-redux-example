import axios from 'axios'

import {
  REPOS_FETCH
} from './constants'
import {
  addRepos,
  errorRepos
} from './actions'
import config from '../../config'

export default () =>
  store =>
    next =>
      async (action) => {
        switch (action.type) {
          case REPOS_FETCH:
            next(action)
            try {
              const { data } = await axios.get(`${config.API_URL}/users/${action.payload.username}/repos`)

              store.dispatch(addRepos(action.payload.username, data))
            } catch (err) {
              store.dispatch(errorRepos(action.payload.username, err.message))
            }
            break
          default:
            next(action)
        }
      }
