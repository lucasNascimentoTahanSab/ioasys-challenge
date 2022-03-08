import ReactModal from 'react-modal'
import './BookModal.css'

function BookModal(props) {
  return (
    <ReactModal isOpen={props.isOpen}></ReactModal>
  )
}

export default BookModal