import {
  SELECT_REPO_ADD,
  SELECT_REPO_FETCH,
  SELECT_REPO_ERROR
} from './constants'
import initState from './initState'

export default (state = initState, action) => {
  switch (action.type) {
    case SELECT_REPO_ADD:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case SELECT_REPO_ERROR:
      return {
        ...state,
        ...action.payload,
        data: {},
        loading: false
      }
    case SELECT_REPO_FETCH:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
