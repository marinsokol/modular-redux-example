import React, { PureComponent } from 'react'
import { Layout, Row } from 'antd'

import SearchBar from '../containers/SearchBar'
import Repos from '../containers/Repos'
import SelectedRepo from '../containers/SelectedRepo'

const { Content } = Layout

export default class extends PureComponent {
  static displayName = 'App'

  state = {}

  render() {
    return (
      <Layout>
        <SearchBar />
        <Content>
          <Row>
            <Repos />
            <SelectedRepo />
          </Row>
        </Content>
      </Layout>
    )
  }
}
