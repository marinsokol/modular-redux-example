import {
  SELECT_REPO_FETCH,
  SELECT_REPO_ADD,
  SELECT_REPO_ERROR
} from './constants'

export const fetchSelectedRepo = (username, url) => ({
  type: SELECT_REPO_FETCH,
  payload: {
    username,
    url
  }
})

export const addSelectedRepo = (url, repo) => ({
  type: SELECT_REPO_ADD,
  payload: {
    data: repo,
    url
  }
})


export const errorSelectedRepo = (url, error) => ({
  type: SELECT_REPO_ERROR,
  payload: {
    url,
    error
  }
})
