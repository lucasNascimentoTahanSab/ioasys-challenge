import BookColectionNavigation from "../BookCollectionNavigation/BookCollectionNavigation"

function BookCollection(props) {
  return (
    <div className="BookCollection">
      <div></div>
      <BookColectionNavigation
        currentPage={props.currentPage}
        totalPages={props.totalPages}
        goToPreviousPage={props.goToPreviousPage}
        goToNextPage={props.goToNextPage} />
    </div>
  )
}

export default BookCollection