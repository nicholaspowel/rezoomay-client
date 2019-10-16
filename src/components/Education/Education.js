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
      'Full time 500+ Web Development Immersive Program\n Developed four Full Stack web applications using JavaScript, HTML, CSS, and Ruby\nCollaborated with a team using Agile methodology and Scrum principles',
    coursework: '',
    _id: '',
    title: 'GA',
    startDate: {
      month: 'Jan',
      year: 2019
    },
    endDate: {
      month: 'Apr',
      year: 2019
    },
    school: 'General Assembly',
    concentration: 'Full Stack Web Development',
    location: {
      city: 'Boston',
      state: 'MA',
      country: 'USA'
    },
    owner: '',
    createdAt: '2019-10-15T22:38:46.652Z',
    updatedAt: '2019-10-15T22:38:46.652Z',
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
        <Button onClick={deleteEducation} variant="danger">Destroy Education </Button>
        <Button href={`#/educationList/${match.params.id}/edit`} variant="warning">Edit</Button>
        <Link to="/educationList">Back to all Education List</Link>
      </Fragment>
    )
  }
}

export default withRouter(Education)
