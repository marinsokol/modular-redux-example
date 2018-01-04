import {
  REPOS_ADD,
  REPOS_FETCH,
  REPOS_ERROR
} from './constants'

export const fetchRepos = user => ({
  type: REPOS_FETCH,
  payload: {
    user
  }
})

export const addRepos = (user, repos) => ({
  type: REPOS_ADD,
  payload: {
    user,
    repos
  }
})

export const errorRepos = (user, error) => ({
  type: REPOS_ERROR,
  payload: {
    user,
    error
  }
})
