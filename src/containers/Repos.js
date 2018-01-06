import React from 'react'
import { connect } from 'react-redux'
import {
  string,
  arrayOf,
  shape,
  number,
  func,
  bool
} from 'prop-types'
import {
  Col,
  Card,
  Spin
} from 'antd'

import { fetchSelectedRepo } from '../reducers/selectedRepo/actions'

const Repos = ({ repos, loading, username, selectRepo }) => (
  <Col span={12}>
    {loading ? (
      <Card>
        <Spin size="large">
          Loading...
        </Spin>
      </Card>
    ) : null}
    {repos.length ? repos.map(({ id, name, language, url }) => (
      <Card key={id} onClick={() => selectRepo(username, url)}>
        <div>{name}</div>
        <div>{language}</div>
      </Card>
    )) : (<Card> User doesnt have any repos </Card>)}
  </Col>
)

Repos.propTypes = {
  username: string.isRequired, // eslint-disable-line react/no-typos
  loading: bool.isRequired, // eslint-disable-line react/no-typos
  repos: arrayOf(
    shape({
      name: string,
      language: string,
      url: string,
      id: number
    })
  ).isRequired,
  selectRepo: func.isRequired // eslint-disable-line react/no-typos
}

const mapStateToProps = state => ({
  repos: state.repos.data,
  loading: state.repos.loading
})

const mapDispatchToProps = dispatch => ({
  selectRepo: (username, url) => dispatch(fetchSelectedRepo(username, url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)
