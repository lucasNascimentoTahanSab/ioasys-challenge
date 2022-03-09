import Book from "../Book/Book.jsx"
import BookColectionNavigation from "../BookCollectionNavigation/BookCollectionNavigation.jsx"
import './BookCollection.css'

/**
 * React component responsible for rendering the books collection, displaying
 * the library and its page navigation controller.
 */
function BookCollection(props) {
  function getBooks() {
    return props.books.map(book => <Book key={book.id} book={book} openBookModal={props.openBookModal} />)
  }

  return (
    <div className="BookCollection">
      <div className="BookCollection__books">{getBooks()}</div>
      <BookColectionNavigation
        currentPage={props.currentPage}
        totalPages={props.totalPages}
        goToPreviousPage={props.goToPreviousPage}
        goToNextPage={props.goToNextPage} />
    </div>
  )
}

export default BookCollection