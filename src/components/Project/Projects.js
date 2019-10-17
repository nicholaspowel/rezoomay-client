import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Projects = ({ user, alerts }) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/projects`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(responseData => {
        // console.log(responseData.data.projects)
        setProjects((responseData.data.projects))
      })
      .catch(() => alert({ heading: 'Rut roh', message: 'Couldn\'t get resource', variant: 'danger' }))
  }, [])

  const projectsJsx = projects.reverse().map(project => (
    <li className="list-group-item d-flex justify-content-between" key={project._id}>
      <Link to={`/projects/${project._id}`}>{project.title}</Link>
    </li>
  ))
  return (
    <div>
      <h1>Projects</h1>
      <Link to='/create-project'><Button>Create Project</Button></Link>
      <ul>{projectsJsx}</ul>
    </div>
  )
}

export default Projects
