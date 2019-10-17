import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter, Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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

const Education = ({ user, alert, match }) => {
  const [deleted, setDeleted] = useState(false)
  const [education, setEducation] = useState({
    description:
      '',
    coursework: '',
    _id: '',
    title: '',
    startDate: {
      month: '',
      year: 2019
    },
    endDate: {
      month: '',
      year: 2019
    },
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
      url: `${apiUrl}/educationList/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setEducation(response.data.education)
      })
      .catch(console.error)
  }, [])

  const deleteEducation = () => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/educationList/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setDeleted(true)
      })
      .then(() => alert({ heading: 'Success', message: 'You deleted a education!', variant: 'success' }))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
      .catch(console.error)
  }
  if (deleted) {
    return <Redirect to='/educationList'/>
  } else if (!education) {
    return <h2>Loading...</h2>
  } else {
    return (
      <Fragment>
        <h1>{education.title}</h1>
        <div className="content-education-item">
          <div className="d-flex justify-content-between">
            <div>
              <span className="font-weight-bold">{education.school}</span>
            </div>
            <div>
              <span className="font-italic">{education.location.city}, {education.location.state}, {education.location.country} </span>
            </div>
            <span className="ml-auto">{education.startDate.month} {education.startDate.year} - {education.endDate.month} {education.endDate.year}</span>
          </div>
          {education.coursework ? <span>Coursework:</span> : ''}
          <ul>
            {education.description.split(/\r\n|\n|\r/).map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul>
        </div>
        <Button onClick={deleteEducation} variant="danger">Destroy Education </Button>
        <Button href={`#/educationList/${match.params.id}/edit`} variant="warning">Edit</Button>
        <Link to="/educationList">Back to all Education List</Link>
      </Fragment>
    )
  }
}

export default withRouter(Education)
