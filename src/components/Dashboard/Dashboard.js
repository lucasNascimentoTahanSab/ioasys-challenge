import React from 'react'
import User from '../../schema/User'
import Book from '../../schema/Book'
import './Dashboard.css'
import Logo from '../Logo/Logo'
import UserDisplay from '../UserDisplay/UserDisplay'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.user = new User(props.user)
    this.totalPages = 0
    this.booksByPage = 12
    this.state = {
      books: [],
      currentPage: 1
    }
  }

  componentDidMount() {
    this._getLibrary()
  }

  render() {
    return (
      <div className="Dashboard" >
        <main className="Dashboard__content">
          <header className="Dashboard__header">
            <Logo displayDarkText />
            <UserDisplay userName={this.user.name} />
          </header>
          <div></div>
        </main>
      </div>
    )
  }

  _getLibrary() {
    fetch(`/dashboard?page=${this.state.currentPage}&amount=${this.booksByPage}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
      .then(res => res.json())
      .then(library => this._setupLibrary(library))
      .catch(error => { throw new Error(error) })
  }

  _setupLibrary(library) {
    if (!library) return

    this.totalPages = Math.floor(library.totalPages)
    this._setupBooksInLibrary(library.data)
  }

  _setupBooksInLibrary(booksInLibrary) {
    if (!booksInLibrary?.length) return

    this.setState({ books: booksInLibrary.map(book => new Book(book)) })
  }
}