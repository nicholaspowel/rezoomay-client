import React, { useState, useEffect } from 'react'
import ReusableForm from './ReusableForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { resourceRoutes, resourceModels } from '../../resourceDefinitions'
import axiosCall from '../../api/resources'
import { Redirect, withRouter } from 'react-router-dom'
// import { withRouter, Link } from 'react-router-dom'

const EditResource = ({ match, alert, user, resource }) => {
  const [item, setItem] = useState(resourceModels[resource])
  const [updated, setUpdated] = useState(null)

  useEffect(() => {
    axiosCall(user, resourceRoutes[resource], 'PATCH', item[resource])
      .then(response => {
      // fix this to handle all resources
        if (response.data[resource].startDate) {
          const startDate = response.data[resource].startDate.substring(0, 10)
          const endDate = response.data[resource].endDate.substring(0, 10)
          setItem({ ...response.data[resource], startDate, endDate })
        } else {
          setItem({ ...response.data[resource] })
        }
      })
      .catch(() => alert({ heading: 'Rut roh', message: 'Couldn\'t get resource', variant: 'danger' }))
  }, [])

  const handleChange = (event) => {
    event.persist()
    let name = event.target.name
    let newVal = null
    if (name.includes('[')) {
      const keys = name.split('[').map((k) => k.replace(/]$/, ''))
      name = keys[0]
      newVal = { ...item[name], [keys[1]]: event.target.value }
      // console.log('newVal', newVal)
    }

    setItem({ ...item, [name]: newVal || event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: 'PATCH',
      url: `${apiUrl}/${resourceRoutes[resource]}/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { [resource]: item }
    })
      .then((response) => setUpdated(response.data[resource]._id))
      .then(() => alert({ heading: 'Success', message: 'You updated an education!', variant: 'success' }))
      // .then(() => history.push(`/educationList/${match.params.id}`))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
  }

  if (updated) {
    return <Redirect to={'/'}/>
  } else {
    return (
      <ReusableForm item={item} handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
  }
}

export default withRouter(EditResource)
