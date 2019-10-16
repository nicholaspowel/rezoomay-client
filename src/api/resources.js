import apiUrl from '../apiConfig'
import axios from 'axios'

export const axiosCall = (user, method = 'GET', route = '/resumes', id = '', data = {}) => {
  return axios({
    method: method,
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + route + id,
    data
  })
}
