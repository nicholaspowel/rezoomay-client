import React, { useState, useEffect } from 'react'
import BookForm from './BookForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect, withRouter } from 'react-router-dom'
// import { withRouter, Link } from 'react-router-dom'

const EditBook = ({ match, alert, user }) => {
  const [book, setBook] = useState({
    author: '',
    createdAt: '',
    firstPublished: '',
    originalLanguage: '',
    title: '',
    updatedAt: '',
    _id: ''
  })
  const [updated, setUpdated] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/books/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => setBook(response.data.book))
      .catch(console.error)
  }, [])

  const handleChange = (event) => {
    event.persist()
    setBook({ ...book, [event.target.name]: event.target.value })
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
      <BookForm book={book} handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
  }
}

export default withRouter(EditBook)
