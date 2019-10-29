import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter, Redirect } from 'react-router-dom'
import { Button, Accordion, Card } from 'react-bootstrap'

/*
author: "Miguel de Cervantes"
createdAt: "2019-10-11T14:08:22.260Z"
firstPublished: 1612
originalLanguage: "Spanish"
owner: {_id: "5da08cd6ccf6513fbb556bdf", updatedAt: "2019-10-11T16:00:08.205Z", createdAt: "2019-10-11T14:08:22.196Z", email: "w@4", __v: 0, …}
title: "Don Quixote"
updatedAt: "2019-10-11T14:08:22.260Z"
__v: 0
_id: "5da08cd6ccf6513fbb556be0"
*/

const Education = ({ idKey, user, alert }) => {
  const [deleted, setDeleted] = useState(false)
  const [education, setEducation] = useState({
    description:
      '',
    coursework: '',
    _id: '',
    title: '',
    startDate: '',
    endDate: '',
    school: '',
    concentration: '',
    location: {
      city: '',
      state: '',
      country: ''
    },
    owner: '',
    createdAt: '',
    updatedAt: '',
    __v: 0
  })

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/educationList/${idKey}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setEducation(response.data.education)
      })
      .catch(() => alert({ heading: 'Rut roh', message: 'Couldn\'t get resource', variant: 'danger' }))
  }, [])

  const deleteEducation = () => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/educationList/${idKey}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setDeleted(true)
      })
      .then(() => alert({ heading: 'Success', message: 'You deleted a education!', variant: 'success' }))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
  }
  if (deleted) {
    return <Redirect to='/'/>
  } else if (!education) {
    return <h2>Loading...</h2>
  } else {
    return (
      <Fragment>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={idKey}>
              {education.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={idKey}>
              <Card.Body>
                <h1>{education.title}</h1>
                <div className="content-education-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span className="font-weight-bold">{education.school}</span>
                    </div>
                    <div>
                      <span className="font-italic">{education.location.city}, {education.location.state}, {education.location.country} </span>
                    </div>
                    { /* use momentjs to display date s here  */ }
                  </div>
                  {education.coursework ? <span>Coursework:</span> : ''}
                  <ul>
                    {education.description.split(/\r\n|\n|\r/).map((bullet, index) => <li key={index}>{bullet}</li>)}
                  </ul>
                </div>
                <Button onClick={deleteEducation} variant="danger">Destroy Education </Button>
                <Button href={`#/educationList/${idKey}/edit`} variant="warning">Edit</Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Fragment>
    )
  }
}

export default withRouter(Education)
