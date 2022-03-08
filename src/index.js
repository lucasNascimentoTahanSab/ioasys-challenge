import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App.jsx'
import BookModal from './components/BookModal/BookModal.jsx'
import reportWebVitals from './reportWebVitals.js'
import './index.css'

const app = <App
  openBookModal={openBookModal.bind(this)}
  closeBookModal={closeBookModal.bind(this)} />

ReactDOM.render(app, document.getElementById('root'))

function openBookModal(book) {
  const bookModal = <BookModal isOpen={true} book={book} />

  ReactDOM.render(bookModal, document.getElementById('modal'))
}

function closeBookModal() {
  const bookModal = <BookModal isOpen={false} />

  ReactDOM.render(bookModal, document.getElementById('modal'))
}

reportWebVitals()
