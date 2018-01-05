import {
  REPOS_ADD,
  REPOS_ERROR
} from './constants'
import initState from './initState'

export default (state = initState, action) => {
  switch (action.type) {
    case REPOS_ADD:
      return {
        ...state,
        ...action.payload
      }
    case REPOS_ERROR:
      return {
        ...state,
        ...action.payload,
        data: []
      }
    default:
      return state
  }
}
