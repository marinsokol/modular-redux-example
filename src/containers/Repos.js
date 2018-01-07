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

import SingleRepo from '../components/SingleRepo'

const Repos = ({ repos, loading, username, selectRepo }) => (
  <Col span={12}>
    {loading ? (
      <Card>
        <Spin size="large">
          Loading...
        </Spin>
      </Card>
    ) : null}
    {(!loading && repos.length) ? repos.map(({ id, name, language, url }) => (
      <SingleRepo
        key={id}
        username={username}
        name={name}
        language={language}
        url={url}
        selectRepo={selectRepo}
      />
    )) : (<Card> User doesnt have any repos </Card>)}
  </Col>
)

Repos.propTypes = {
  username: string.isRequired,
  loading: bool.isRequired,
  repos: arrayOf(
    shape({
      name: string,
      language: string,
      url: string,
      id: number
    })
  ).isRequired,
  selectRepo: func.isRequired
}

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
