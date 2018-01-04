import repos from '../reducers/repos/reducer'
import selectedRepo from '../reducers/selectedRepo/reducer'

export default (state, action) => ({
  repos: repos(state.repos, action),
  selectedRepo: selectedRepo(state.selectedRepo, action)
})
