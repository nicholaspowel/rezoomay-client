import React, { useState } from 'react'
import ProjectForm from './ProjectForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
// import { withRouter, Link } from 'react-router-dom'

const CreateProject = ({ alert, user }) => {
  const [project, setProject] = useState({
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
      newVal = { ...project[name], [keys[1]]: event.target.value }
      // console.log('newVal', newVal)
    }

    setProject({ ...project, [name]: newVal || event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log('project', project)
    axios({
      method: 'POST',
      url: `${apiUrl}/projects`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { project }
    })
      .then((response) => setCreated(response.data.project._id))
      .then(() => alert({ heading: 'Success', message: 'You created a project!', variant: 'success' }))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
  }

  if (created) {
    return <Redirect to={`/projects/${created}`}/>
  } else {
    return (
      <ProjectForm project={project} handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
  }
}

export default CreateProject
