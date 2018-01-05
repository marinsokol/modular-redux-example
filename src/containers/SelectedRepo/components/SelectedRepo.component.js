import React, { PureComponent } from 'react'
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

export default class extends PureComponent {
  static displayName = 'SelectedRepo'

  static propTypes = {
    loading: bool.isRequired,
    repo: shape({
      name: string,
      language: string,
      ssh_url: string,
      html_url: string,
      watchers_count: number
    }).isRequired
  }


  state = {}

  render() {
    const { repo, loading } = this.props

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

    return (
      <Col span={12}>
        <Card>
          <p>{repo.full_name}</p>
          <p>{repo.language}</p>
          <p>{repo.watchers_count}</p>
          <p>{repo.ssh_url}</p>
          <p>
            <a href={repo.html_url} >{repo.html_url}</a>
          </p>
        </Card>
      </Col>
    )
  }
}
