import React from 'react'
import Logo from '../Logo/Logo.jsx'
import UserDisplay from '../UserDisplay/UserDisplay.jsx'
import BookCollection from '../BookCollection/BookCollection.jsx'
import User from '../../schema/User.js'
import Book from '../../schema/Book.js'
import utils from '../../utils/utils.js'
import './Dashboard.css'

/**
 * React component for rendering the dashboard for book exhibiting
 * porpuses. 
 */
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.user = new User(props.user)
    this.totalPages = 0
    this.currentPage = 1
    this.booksByPage = 12
    this.state = { books: [] }
  }

  componentDidMount() {
    this._getLibrary()
  }

  render() {
    return (
      <div className="Dashboard">
        <main className="Dashboard__content">
          <header className="Dashboard__header">
            <Logo displayDarkText />
            <UserDisplay userName={this.user.name} />
          </header>
          <BookCollection
            books={this.state.books}
            currentPage={this.currentPage}
            totalPages={this.totalPages}
            goToPreviousPage={this._goToPreviousPage.bind(this)}
            goToNextPage={this._goToNextPage.bind(this)}
            openBookModal={this.props.openBookModal} />
        </main>
      </div>
    )
  }

  _getLibrary() {
    fetch(`/books?page=${this.currentPage}&amount=${this.booksByPage}`, utils.getInitForGetRequests())
      .then(res => res.json())
      .then(library => this._setupLibrary(library))
      .catch(error => { throw new Error(error) })
  }

  _setupLibrary(library) {
    if (!library) return

    this.totalPages = Math.floor(library.totalPages)
    this._setupBooksInLibrary(library.data)
  }

  /**
   * Responsible for instantiating Books from books in library
   * retrieved from the API.
   */
  _setupBooksInLibrary(booksInLibrary) {
    if (!booksInLibrary?.length) return

    this.setState({ books: booksInLibrary.map(book => new Book(book)) })
  }

  _goToPreviousPage() {
    this.currentPage--
    this._getLibrary()
  }

  _goToNextPage() {
    this.currentPage++
    this._getLibrary()
  }
}