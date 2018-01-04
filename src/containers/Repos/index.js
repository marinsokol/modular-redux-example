import { connect } from 'react-redux'

import Repos from './components/Repos.components'

import { fetchSelectedRepo } from '../../reducers/selectedRepo/actions'

const mapStateToProps = state => ({
  repos: state.repos.repos,
  username: state.repos.username
})

const mapDispatchToProps = dispatch => ({
  selectRepo: (username, url) => dispatch(fetchSelectedRepo(username, url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)
