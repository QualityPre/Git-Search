import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const githubAPI = axios.create({
  baseURL: GITHUB_URL,
  Authorization: `token ${GITHUB_TOKEN}`,
})

// searches for all users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  const response = await githubAPI.get(`${GITHUB_URL}/search/users?${params}`)
  return response.data.items
}
// get one user
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'updated',
    per_page: 10,
  })

  const [user, repos] = await Promise.all([
    githubAPI.get(`/users/${login}`),
    githubAPI.get(`/users/${login}/repos?${params}`),
  ])
  return { user: user.data, repos: repos.data }
}
