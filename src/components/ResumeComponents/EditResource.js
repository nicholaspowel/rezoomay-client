import React, { useState, useEffect } from 'react'
import ReusableForm from './ReusableForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import axiosCall from '../../api/resources'
import { Redirect, withRouter } from 'react-router-dom'
// import { withRouter, Link } from 'react-router-dom'

const EditResource = ({ match, alert, user, resource }) => {
  const [item, setItem] = useState({
    // needs to be an interchangable object
  })
  const [updated, setUpdated] = useState(null)

  useEffect(() => {
    axiosCall(user, 'PATCH', resourceRoutes[resource])
      .then((response) => setItem(response.data[resource]))
      .catch(console.error)
  }, [])

  const handleChange = (event) => {
    event.persist()
    setItem({ ...book, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: 'PATCH',
      url: `${apiUrl}/books/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { book }
    })
      .then((response) => setUpdated(response.data.book._id))
      .then(() => alert({ heading: 'Success', message: 'You updated a book!', variant: 'success' }))
      // .then(() => history.push(`/books/${match.params.id}`))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
  }

  if (updated) {
    return <Redirect to={`/books/${updated}`}/>
  } else {
    return (
      <ReusableForm book={book} handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
  }
}

export default withRouter(EditResource)
