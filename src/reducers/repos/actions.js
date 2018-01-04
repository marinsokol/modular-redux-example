import {
  REPOS_ADD,
  REPOS_FETCH,
  REPOS_ERROR
} from './constants'

export const fetchRepos = username => ({
  type: REPOS_FETCH,
  payload: {
    username
  }
})

export const addRepos = (username, repos) => ({
  type: REPOS_ADD,
  payload: {
    username,
    repos
  }
})

export const errorRepos = (username, error) => ({
  type: REPOS_ERROR,
  payload: {
    username,
    error
  }
})
