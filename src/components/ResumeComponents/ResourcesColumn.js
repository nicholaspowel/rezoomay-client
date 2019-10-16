import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Books = ({ user, alerts }) => {
  const [books, setBooks] = useState([])

  useEffect(() => {

      .then(responseData => {
        // console.log(responseData.data.books)
        setBooks((responseData.data.books))
      })
      .catch(console.error)
  }, [])

  const booksJsx = books.reverse().map(book => (
    <li className="list-group-item d-flex justify-content-between" key={book._id}>
      <Link to={`/books/${book._id}`}>{book.title}</Link>
    </li>
  ))
  return (
    <div>
      <h1>Books</h1>
      <Link to='/create-book'><Button>Create Book</Button></Link>
      <ul>{booksJsx}</ul>
    </div>
  )
}

export default Books
