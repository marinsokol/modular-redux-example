import { connect } from 'react-redux'

import Repos from './components/Repos.components'

const mapStateToProps = state => ({
  repos: state.repos.repos,
  username: state.repos.username
})

const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)
