import React, { useState } from 'react'
import EducationForm from './EducationForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
// import { withRouter, Link } from 'react-router-dom'

const CreateEducation = ({ alert, user }) => {
  const [education, setEducation] = useState({
    description:
      'Full time 500+ Web Development Immersive Program\n Developed four Full Stack web applications using JavaScript, HTML, CSS, and Ruby\nCollaborated with a team using Agile methodology and Scrum principles',
    coursework: [],
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
  const [created, setCreated] = useState(null)

  const handleChange = (event) => {
    event.persist()
    setEducation({ ...education, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('education', education)
    axios({
      method: 'POST',
      url: `${apiUrl}/educationList`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { education }
    })
      .then((response) => setCreated(response.data.education._id))
      .then(() => alert({ heading: 'Success', message: 'You created a education!', variant: 'success' }))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
  }

  if (created) {
    return <Redirect to={`/educationList/${created}`}/>
  } else {
    return (
      <EducationForm education={education} handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
  }
}

export default CreateEducation
