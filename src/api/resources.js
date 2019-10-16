import apiUrl from '../apiConfig'
import axios from 'axios'

export const axiosCall = (user, route = '/resumes', method = 'GET', id = '', data = {}) => {
  return axios({
    method: method,
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + route + id,
    data
  })
}
