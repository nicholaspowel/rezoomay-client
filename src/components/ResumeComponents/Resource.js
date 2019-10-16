import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter, Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

/*
author: "Miguel de Cervantes"
createdAt: "2019-10-11T14:08:22.260Z"
firstPublished: 1612
originalLanguage: "Spanish"
owner: {_id: "5da08cd6ccf6513fbb556bdf", updatedAt: "2019-10-11T16:00:08.205Z", createdAt: "2019-10-11T14:08:22.196Z", email: "w@4", __v: 0, …}
title: "Don Quixote"
updatedAt: "2019-10-11T14:08:22.260Z"
__v: 0
_id: "5da08cd6ccf6513fbb556be0"
*/

const Book = ({ user, alert, match }) => {
  const [deleted, setDeleted] = useState(false)
  const [book, setBook] = useState({
    author: '',
    createdAt: '',
    firstPublished: '',
    originalLanguage: '',
    title: '',
    updatedAt: '',
    _id: ''
  })

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/books/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setBook(response.data.book)
      })
      .catch(console.error)
  }, [])

  const deleteBook = () => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/books/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setDeleted(true)
      })
      .then(() => alert({ heading: 'Success', message: 'You deleted a book!', variant: 'success' }))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
      .catch(console.error)
  }
  if (deleted) {
    return <Redirect to='/books'/>
  } else if (!book) {
    return <h2>Loading...</h2>
  } else {
    return (
      <Fragment>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Published: {book.firstPublished}</p>
        <p>Language: {book.originalLanguage}</p>
        <Button onClick={deleteBook} variant="danger">Destroy Book </Button>
        <Button href={`#/books/${match.params.id}/edit`} variant="warning">Edit</Button>
        <Link to="/books">Back to all books</Link>
      </Fragment>
    )
  }
}

export default withRouter(Book)
