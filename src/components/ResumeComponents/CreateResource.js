import React, { useState } from 'react'
import BookForm from './BookForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
// import { withRouter, Link } from 'react-router-dom'

const CreateBook = ({ alert, user }) => {
  const [book, setBook] = useState({
    author: '',
    firstPublished: '',
    originalLanguage: '',
    title: ''
  })
  const [created, setCreated] = useState(null)

  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: `${apiUrl}/books/${match.params.id}`,
  //     headers: {
  //       'Authorization': `Bearer ${user.token}`
  //     }
  //   })
  //     .then((response) => setBook(response.data.book))
  //     .catch(() => alert({ heading: 'Rut roh', message: 'Couldn\'t get resource', variant: 'danger' }))
  // }, [])

  const handleChange = (event) => {
    event.persist()
    setBook({ ...book, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/books`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { book }
    })
      .then((response) => setCreated(response.data.book._id))
      .then(() => alert({ heading: 'Success', message: 'You created a book!', variant: 'success' }))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
  }

  if (created) {
    return <Redirect to={`/books/${created}`}/>
  } else {
    return (
      <BookForm book={book} handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
  }
}

export default CreateBook
