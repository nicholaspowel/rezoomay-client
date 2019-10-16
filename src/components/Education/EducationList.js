import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const EducationList = ({ user, alerts }) => {
  const [educationList, setEducationList] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/educationList`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(responseData => {
        // console.log(responseData.data.educationList)
        setEducationList((responseData.data.educationList))
      })
      .catch(console.error)
  }, [])

  const educationListJsx = educationList.reverse().map(education => (
    <li className="list-group-item d-flex justify-content-between" key={education._id}>
      <Link to={`/educationList/${education._id}`}>{education.title}</Link>
    </li>
  ))
  return (
    <div>
      <h1>Education List</h1>
      <Link to='/create-education'><Button>Create Education</Button></Link>
      <ul>{educationListJsx}</ul>
    </div>
  )
}

export default EducationList
