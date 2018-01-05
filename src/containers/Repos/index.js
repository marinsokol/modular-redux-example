import { connect } from 'react-redux'

import Repos from './components/Repos.component'

import { fetchSelectedRepo } from '../../reducers/selectedRepo/actions'

const mapStateToProps = state => ({
  repos: state.repos.data,
  username: state.repos.username,
  loading: state.repos.loading
})

const mapDispatchToProps = dispatch => ({
  selectRepo: (username, url) => dispatch(fetchSelectedRepo(username, url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)
