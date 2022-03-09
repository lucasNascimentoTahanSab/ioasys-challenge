import ReactModal from 'react-modal'
import close from '../../images/close.svg'
import quotes from '../../images/quotes.svg'
import './BookModal.css'

ReactModal.setAppElement(document.getElementById('modal'))

function BookModal(props) {
  function closeBookModal() {
    if (typeof props.close === 'function') props.close(props.book)
  }

  function getBookAuthors() {
    return <p className=''>{props.book.authors.join(', ')}</p>
  }

  return (
    <div>
      <button className={`BookModal__close ${props.isOpen ? '' : 'BookModal__hide'}`} onClick={closeBookModal.bind(this)} >
        <img src={close} alt="Close button." />
      </button>
      <ReactModal
        isOpen={props.isOpen}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick={false}
        onRequestClose={closeBookModal.bind(this)}
        closeTimeoutMS={250}>
        <img className="BookModal__image" src={props.book.imageUrl} alt="Book cover." sizes="100%" />
        <article className="BookModal__details App__text--line-height--big">
          <header>
            <h2 className="App__text--bold App__text--font-size--bigger BookModal__title">{props.book.title}</h2>
            <div className="App__text--font-size--small App__text--line-height--medium App__text--color-fourth">{getBookAuthors()}</div>
          </header>
          <section className="BookModal__information App__text--font-size--small">
            <h3 className="App__text--bold App__text--font-size--small">INFORMAÇÕES</h3>
            <div>
              <div className="BookModal__information-item">
                <span className="BookModal__information-item__value App__text--bold">Páginas</span>
                <span className="BookModal__information-item__value App__text--color-fifth">{props.book.pageCount}</span>
              </div>
              <div className="BookModal__information-item">
                <span className="BookModal__information-item__value App__text--bold">Editora</span>
                <span className="BookModal__information-item__value App__text--color-fifth">{props.book.publisher}</span>
              </div>
              <div className="BookModal__information-item">
                <span className="BookModal__information-item__value App__text--bold">Publicação</span>
                <span className="BookModal__information-item__value App__text--color-fifth">{props.book.published}</span>
              </div>
              <div className="BookModal__information-item">
                <span className="BookModal__information-item__value App__text--bold">Idioma</span>
                <span className="BookModal__information-item__value App__text--color-fifth">{props.book.language}</span>
              </div>
              <div className="BookModal__information-item">
                <span className="BookModal__information-item__value App__text--bold">Título Original</span>
                <span className="BookModal__information-item__value App__text--color-fifth">{props.book.title}</span>
              </div>
              <div className="BookModal__information-item">
                <span className="BookModal__information-item__value App__text--bold">ISBN-10</span>
                <span className="BookModal__information-item__value App__text--color-fifth">{props.book.isbn10}</span>
              </div>
              <div className="BookModal__information-item">
                <span className="BookModal__information-item__value App__text--bold">ISBN-13</span>
                <span className="BookModal__information-item__value App__text--color-fifth">{props.book.isbn13}</span>
              </div>
            </div>
          </section>
          <section className="BookModal__information App__text--font-size--small">
            <h3 className="App__text--bold App__text--font-size--small">RESENHA DA EDITORA</h3>
            <div>
              <img className="BookModal__information-quote" src={quotes} alt="Double quotation mark." />
              <span className="App__text--color-fifth">{props.book.description}</span>
            </div>
          </section>
        </article>
      </ReactModal>
    </div>
  )
}

export default BookModal