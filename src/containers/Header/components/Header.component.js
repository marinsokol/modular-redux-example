import React, { PureComponent } from 'react'
import {
  string,
  func
} from 'prop-types'
import {
  Layout,
  Input,
  Avatar
} from 'antd'

const { Header } = Layout
const { Search } = Input

export default class extends PureComponent {
  static displayName = 'Header'

  static propTypes = {
    avatarUrl: string.isRequired,
    fetchRepos: func.isRequired
  }

  state = {}

  handleSearch = value => this.props.fetchRepos(value)

  render() {
    const { avatarUrl } = this.props
    return (
      <Header>
        <Avatar src={avatarUrl} />
        <Search
          enterButton
          placeholder="Enter GitHub username"
          onSearch={this.handleSearch}
        />
      </Header>
    )
  }
}
