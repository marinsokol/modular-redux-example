import React, { PureComponent } from 'react'
import { Layout, Row } from 'antd'

import Header from '../../containers/Header'
import Repos from '../../containers/Repos'
import About from '../../containers/About'

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
