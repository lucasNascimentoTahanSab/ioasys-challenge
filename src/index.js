import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App.jsx'
import BookModal from './components/BookModal/BookModal.jsx'
import reportWebVitals from './js/reportWebVitals.js'
import './index.css'

const app = <App openBookModal={openBookModal.bind(this)} />

ReactDOM.render(app, document.getElementById('root'))

/**
 * These functions are needed for opening and closing modals
 * for each one of the books displayed. 
 */
function openBookModal(book) {
  const bookModal = <BookModal isOpen close={closeBookModal.bind(this)} book={book} />

  ReactDOM.render(bookModal, document.getElementById('modal'))
}

function closeBookModal(book) {
  const bookModal = <BookModal close={closeBookModal.bind(this)} book={book} />

  ReactDOM.render(bookModal, document.getElementById('modal'))
}

reportWebVitals()
