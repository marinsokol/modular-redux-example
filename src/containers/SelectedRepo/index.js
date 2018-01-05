import { connect } from 'react-redux'

import SelectedRepo from './components/SelectedRepo.component'

const mapStateToProps = state => ({
  repo: state.selectedRepo.data,
  loading: state.selectedRepo.loading
})

const mapDispatchToProps = null
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedRepo)
