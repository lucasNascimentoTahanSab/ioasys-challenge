import { useState, useEffect } from 'react'
import './Dashboard.css'
import User from '../../schema/User'
import Book from '../../schema/Book'

function Dashboard(props) {
  const [user,] = useState(new User(props.user))
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('/dashboard?page=1&amount=12', { headers: { 'Authorization': localStorage.getItem('token') } })
      .then(res => res.json())
      .then(deserializedResponse => setBooks(deserializedResponse.books?.map(book => new Book(book))))
  })

  return (
    <div className="Dashboard">
    </div>
  )
}

export default Dashboard