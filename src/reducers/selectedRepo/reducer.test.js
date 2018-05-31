import {
  SELECT_REPO_ADD,
  SELECT_REPO_FETCH,
  SELECT_REPO_ERROR
} from './constants'
import reducer from './reducer'
import initState from './initState'

describe('repos reducer', () => {
  const repos = {
    id: 90482094,
    node_id: 'MDEwOlJlcG9zaXRvcnk5MDQ4MjA5NA==',
    name: 'demo-calendar',
    full_name: 'marinsokol/demo-calendar',
    owner: {
      login: 'marinsokol',
      id: 15654942,
      node_id: 'MDQ6VXNlcjE1NjU0OTQy',
      avatar_url: 'https://avatars2.githubusercontent.com/u/15654942?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/marinsokol',
      html_url: 'https://github.com/marinsokol',
      followers_url: 'https://api.github.com/users/marinsokol/followers',
      following_url: 'https://api.github.com/users/marinsokol/following{/other_user}',
      gists_url: 'https://api.github.com/users/marinsokol/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/marinsokol/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/marinsokol/subscriptions',
      organizations_url: 'https://api.github.com/users/marinsokol/orgs',
      repos_url: 'https://api.github.com/users/marinsokol/repos',
      events_url: 'https://api.github.com/users/marinsokol/events{/privacy}',
      received_events_url: 'https://api.github.com/users/marinsokol/received_events',
      type: 'User',
      site_admin: false
    }
  }

  it('reducer is defined', () => {
    expect(reducer).toBeDefined()
  })

  it('handles fetch action', () => {
    expect(reducer(initState, { type: SELECT_REPO_FETCH }))
      .toEqual({ ...initState, loading: true })
  })

  it('handles add action', () => {
    const action = {
      type: SELECT_REPO_ADD,
      payload: {
        username: 'test',
        data: repos
      }
    }

    expect(reducer(initState, action))
      .toEqual({
        ...initState,
        ...action.payload,
        loading: false
      })
  })

  it('handles error action', () => {
    const action = {
      type: SELECT_REPO_ERROR,
      payload: {
        username: 'test',
        error: 'test'
      }
    }

    expect(reducer(initState, action))
      .toEqual({
        ...initState,
        ...action.payload,
        data: {},
        loading: false
      })
  })
})
