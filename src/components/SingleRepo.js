import React from 'react'
import {
  string,
  func
} from 'prop-types'
import { Card } from 'antd'

const SingleRepo = ({
  name,
  username,
  url,
  language,
  selectRepo
}) =>
  (
    <Card onClick={() => selectRepo(username, url)}>
      <div>{name}</div>
      <div>{language}</div>
    </Card>
  )

SingleRepo.propTypes = {
  name: string.isRequired,
  username: string.isRequired,
  language: string,
  url: string.isRequired,
  selectRepo: func.isRequired
}

export default SingleRepo
