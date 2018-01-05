import { connect } from 'react-redux'

import Header from './components/Header.component'
import { fetchRepos } from '../../reducers/repos/actions'

const mapStateToProps = state => ({
  avatarUrl: state.repos.data.length ? state.repos.data[0].owner.avatar_url : ''
})

const mapDispatchToProps = dispatch => ({
  fetchRepos: data => dispatch(fetchRepos(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
