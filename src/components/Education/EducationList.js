import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import { Button, Accordion, Card } from 'react-bootstrap'

import Education from './Education'

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
      .catch(() => alert({ heading: 'Rut roh', message: 'Couldn\'t get resource', variant: 'danger' }))
  }, [])

  const educationListJsx = educationList.map(education => (
    <Education key={education._id} idKey={education._id} education={education} user={user} alert={alert}/>
  ))
  return (
    <Accordion>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        Education
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          {educationListJsx}
          <Link to='/create-education'><Button>Create Education</Button></Link>
        </Card.Body>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default EducationList
