import previousDisabled from '../../previousDisabled.png'
import nextDisabled from '../../nextDisabled.png'
import previous from '../../previous.png'
import next from '../../next.png'
import './BookCollectionNavigation.css'

function BookColectionNavigation(props) {
  const previousButton = props.currentPage === 1 ? previousDisabled : previous
  const nextButton = props.currentPage === props.totalPages ? nextDisabled : next

  function goToPreviousPage() {
    if (typeof props.goToPreviousPage === 'function' && props.currentPage !== 1) props.goToPreviousPage()
  }

  function goToNextPage() {
    if (typeof props.goToNextPage === 'function' && props.currentPage !== props.totalPages) props.goToNextPage()
  }

  return (
    <div className="BookColectionNavigation">
      <div>Página <span className="App__text--bold">{props.currentPage}</span> de <span className="App__text--bold">{props.totalPages}</span></div>
      <div className="BookColectionNavigation__buttons">
        <button onClick={goToPreviousPage.bind(this)}>
          <img src={previousButton} alt="Previous page button."></img>
        </button>
        <button onClick={goToNextPage.bind(this)}>
          <img src={nextButton} alt="Next page button."></img>
        </button>
      </div>
    </div>
  )
}

export default BookColectionNavigation