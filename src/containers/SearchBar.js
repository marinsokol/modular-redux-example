import React from 'react'
import { connect } from 'react-redux'
import {
  string,
  func
} from 'prop-types'
import {
  Layout,
  Input,
  Avatar
} from 'antd'

import { fetchRepos } from '../reducers/repos/actions'

const { Header } = Layout
const { Search } = Input

const SearchBar = ({ avatarUrl, searchRepos }) => (
  <Header>
    <Avatar src={avatarUrl} />
    <Search
      enterButton
      placeholder="Enter GitHub username"
      onSearch={value => searchRepos(value)}
    />
  </Header>
)

SearchBar.propTypes = {
  avatarUrl: string.isRequired,
  searchRepos: func.isRequired
}

const mapStateToProps = state => ({
  avatarUrl: state.repos.data.length ? state.repos.data[0].owner.avatar_url : ''
})

const mapDispatchToProps = dispatch => ({
  searchRepos: data => dispatch(fetchRepos(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
