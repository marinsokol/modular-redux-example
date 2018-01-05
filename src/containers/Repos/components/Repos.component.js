import React, { PureComponent } from 'react'
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

export default class extends PureComponent {
  static displayName = 'Repos'

  static propTypes = {
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

  state = {}

  handleSelectRepo = url => this.props.selectRepo(this.props.username, url)

  render() {
    const { repos, username, loading } = this.props

    if (loading) {
      return (
        <Col span={12}>
          <Card>
            <Spin size="large">
              Loading...
            </Spin>
          </Card>
        </Col>
      )
    }

    if (!username) {
      return (
        <Col span={12}>
          <Card>
            Enter GitHub username
          </Card>
        </Col>
      )
    }

    if (!repos.length) {
      return (
        <Col span={12}>
          <Card>
            User doesnt have any repos
          </Card>
        </Col>
      )
    }

    return (
      <Col span={12}>
        {repos.map(({ id, name, language, url }) => (
          <Card key={id} onClick={() => this.handleSelectRepo(url)}>
            <div>{name}</div>
            <div>{language}</div>
          </Card>
        ))}
      </Col>
    )
  }
}
