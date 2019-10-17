import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter, Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

/*

*/

const Project = ({ user, alert, match }) => {
  const [deleted, setDeleted] = useState(false)
  const [project, setProject] = useState({
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
      url: `${apiUrl}/projects/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setProject(response.data.project)
      })
      .catch(console.error)
  }, [])

  const deleteProject = () => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/projects/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setDeleted(true)
      })
      .then(() => alert({ heading: 'Success', message: 'You deleted a project!', variant: 'success' }))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
      .catch(console.error)
  }
  if (deleted) {
    return <Redirect to='/projects'/>
  } else if (!project) {
    return <h2>Loading...</h2>
  } else {
    return (
      <Fragment>
        <h1>{project.title}</h1>
        <div className="content-project-item">
          <div className="d-flex justify-content-between">
            <div>
              <span className="font-weight-bold">{project.school}</span>
            </div>
            <div>
              <span className="font-italic">{project.location.city}, {project.location.state}, {project.location.country} </span>
            </div>
            <span className="ml-auto">{project.startDate.month} {project.startDate.year} - {project.endDate.month} {project.endDate.year}</span>
          </div>
          {project.coursework ? <span>Coursework:</span> : ''}
          <ul>
            {project.description.split(/\r\n|\n|\r/).map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul>
        </div>
        <Button onClick={deleteProject} variant="danger">Destroy Project </Button>
        <Button href={`#/projects/${match.params.id}/edit`} variant="warning">Edit</Button>
        <Link to="/projects">Back to all Project List</Link>
      </Fragment>
    )
  }
}

export default withRouter(Project)
