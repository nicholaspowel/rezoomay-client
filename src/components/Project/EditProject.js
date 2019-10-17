import React, { useState, useEffect } from 'react'
import ProjectForm from './ProjectForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect, withRouter } from 'react-router-dom'
// import { withRouter, Link } from 'react-router-dom'

const EditProject = ({ match, alert, user }) => {
  const [project, setProject] = useState({
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
  const [updated, setUpdated] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/projects/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => setProject(response.data.project))
      .catch(console.error)
  }, [])

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

    axios({
      method: 'PATCH',
      url: `${apiUrl}/projects/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { project }
    })
      .then((response) => setUpdated(response.data.project._id))
      .then(() => alert({ heading: 'Success', message: 'You updated an project!', variant: 'success' }))
      // .then(() => history.push(`/projects/${match.params.id}`))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
  }

  if (updated) {
    return <Redirect to={`/projects/${updated}`}/>
  } else {
    return (
      <ProjectForm project={project} handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
  }
}

export default withRouter(EditProject)
