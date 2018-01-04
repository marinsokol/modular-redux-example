import React, { PureComponent } from 'react'
import { Layout, Row } from 'antd'

import Header from '../Header'
import Repos from '../Repos'
import About from '../About'

const { Content } = Layout

export default class extends PureComponent {
  static displayName = 'App'

  state = {}

  render() {
    return (
      <Layout>
        <Header />
        <Content>
          <Row>
            <Repos />
            <About />
          </Row>
        </Content>
      </Layout>
    )
  }
}
