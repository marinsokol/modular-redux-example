import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Layout,
  Input
} from 'antd'

const { Header } = Layout
const { Search } = Input

export default class extends PureComponent {
  static displayName = 'Header'

  static propTypes = {
    fetchRepos: PropTypes.func.isRequired
  }

  state = {}

  handleSearch = value => this.props.fetchRepos(value)

  render() {
    return (
      <Header>
        <Search
          enterButton
          placeholder="Enter GitHub username"
          onSearch={this.handleSearch}
        />
      </Header>
    )
  }
}
