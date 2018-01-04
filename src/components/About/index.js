import React, { PureComponent } from 'react'
import { Col } from 'antd'

export default class extends PureComponent {
  static displayName = 'About'

  state = {}

  render() {
    return (
      <Col span={12}>About</Col>
    )
  }
}
