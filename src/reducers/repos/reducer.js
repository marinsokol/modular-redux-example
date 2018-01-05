import {
  REPOS_ADD,
  REPOS_ERROR,
  REPOS_FETCH
} from './constants'
import initState from './initState'

export default (state = initState, action) => {
  switch (action.type) {
    case REPOS_FETCH:
      return {
        ...state,
        loading: true
      }
    case REPOS_ADD:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case REPOS_ERROR:
      return {
        ...state,
        ...action.payload,
        data: [],
        loading: false
      }
    default:
      return state
  }
}
