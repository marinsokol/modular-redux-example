import repos from '../reducers/repos/reducer'

export default (state, action) => ({
  repos: repos(state.repos, action)
})
