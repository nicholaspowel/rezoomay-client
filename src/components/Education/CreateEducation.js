import React, { useState } from 'react'
import EducationForm from './EducationForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
// import { withRouter, Link } from 'react-router-dom'

const CreateEducation = ({ alert, user }) => {
  const [education, setEducation] = useState({
    description:
      '',
    coursework: '',
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
    }
  })
  const [created, setCreated] = useState(null)

  const handleChange = (event) => {
    event.persist()
    let name = event.target.name
    let newVal = null
    if (name.includes('[')) {
      const keys = name.split('[').map((k) => k.replace(/]$/, ''))
      name = keys[0]
      newVal = { ...education[name], [keys[1]]: event.target.value }
      console.log('newVal', newVal)
    }

    setEducation({ ...education, [name]: newVal || event.target.value })
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
