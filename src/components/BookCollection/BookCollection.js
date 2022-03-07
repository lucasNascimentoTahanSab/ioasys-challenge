import Book from "../Book/Book"
import BookColectionNavigation from "../BookCollectionNavigation/BookCollectionNavigation"
import './BookCollection.css'

function BookCollection(props) {
  function getBooks() {
    return props.books.map(book => <Book key={book.id} book={book} />)
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