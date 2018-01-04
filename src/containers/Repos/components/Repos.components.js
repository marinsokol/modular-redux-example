import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Col, Card } from 'antd'

export default class extends PureComponent {
  static displayName = 'Repos'

  static propTypes = {
    username: PropTypes.string.isRequired,
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        language: PropTypes.string,
        url: PropTypes.string,
        id: PropTypes.number
      })
    ).isRequired,
    selectRepo: PropTypes.func.isRequired
  }

  state = {}

  handleSelectRepo = url => this.props.selectRepo(this.props.username, url)

  render() {
    const { repos, username } = this.props

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
