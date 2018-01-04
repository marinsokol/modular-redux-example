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
        id: PropTypes.string
      })
    ).isRequired
  }

  state = {}

  render() {
    const { repos, username } = this.props

    if (!username) {
      return (
        <Col span={12}>Enter GitHub username</Col>
      )
    }

    if (!repos.length) {
      return (
        <Col span={12}>User doesnt have any repos</Col>
      )
    }

    return (
      <Col span={12}>
        {repos.map(({ id, name, language }) => (
          <Card key={id}>
            <div>{name}</div>
            <div>{language}</div>
          </Card>
        ))}
      </Col>
    )
  }
}
