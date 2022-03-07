import './Book.css'

function Book(props) {
  function getBookAuthors() {
    return props.book.authors.map(author => <p key={author}>{author}</p>)
  }

  return (
    <div className="Book">
      <img className="Book__image" src={props.book.imageUrl} alt="Book cover." width="81" height="118.54" />
      <section className="Book__details">
        <div>
          <h2 className="App__text--bold App__text--font-size--medium Book__title">{props.book.title}</h2>
          <div className="App__text--font-size--small App__text--color-fourth Book__authors">{getBookAuthors()}</div>
        </div>
        <div className="App__text--font-size--small App__text--color-fifth Book__specifications">
          <p>{props.book.pageCount} páginas</p>
          <p>Editora {props.book.publisher}</p>
          <p>Publicado em {props.book.published}</p>
        </div>
      </section>
    </div>
  )
}

export default Book