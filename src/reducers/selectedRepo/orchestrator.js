import axios from 'axios'

import { SELECT_REPO_FETCH } from './constants'
import {
  addSelectedRepo,
  errorSelectedRepo
} from './actions'

export default () => store => next => async (action) => {
  switch (action.type) {
    case SELECT_REPO_FETCH:
      next(action)
      try {
        const { data } = await axios.get(`${action.payload.url}`)

        store.dispatch(addSelectedRepo(action.payload.url, data))
      } catch (err) {
        store.dispatch(errorSelectedRepo(action.payload.url, err.message))
      }
      break
    default:
      next(action)
  }
}
