import React from 'react'
import { connect } from 'react-redux'
import {
  string,
  shape,
  number,
  bool
} from 'prop-types'
import {
  Col,
  Card,
  Spin
} from 'antd'

const SelectedRepo = ({ loading, repo }) => (
  <Col span={12}>
    {!loading ? (
      <Card>
        <p>{repo.full_name}</p>
        <p>{repo.language}</p>
        <p>{repo.watchers_count}</p>
        <p>{repo.ssh_url}</p>
        <p>
          <a href={repo.html_url} >{repo.html_url}</a>
        </p>
      </Card>
    ) :
      (
        <Card>
          <Spin size="large">
            Loading...
          </Spin>
        </Card>
      )}
  </Col>
)

SelectedRepo.propTypes = {
  loading: bool.isRequired, // eslint-disable-line react/no-typos
  repo: shape({
    name: string,
    language: string,
    ssh_url: string,
    html_url: string,
    watchers_count: number
  }).isRequired
}


const mapStateToProps = state => ({
  repo: state.selectedRepo.data,
  loading: state.selectedRepo.loading
})

const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedRepo)
