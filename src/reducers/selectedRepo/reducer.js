import { SELECT_REPO_ADD } from './constants'

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_REPO_ADD:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
