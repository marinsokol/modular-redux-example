import { connect } from 'react-redux'

import Header from './components/Header.component'
import { fetchRepos } from '../../reducers/repos/actions'

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  fetchRepos: data => dispatch(fetchRepos(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
