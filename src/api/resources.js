import apiUrl from '../apiConfig'
import axios from 'axios'

export const axiosCall = (data, user, method = 'GET', route = '/resumes', id = '') => {
  return axios({
    method: method,
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + route + id,
    data: data || {}
  })
}
