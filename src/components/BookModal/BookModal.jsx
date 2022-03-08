import ReactModal from 'react-modal'
import './BookModal.css'

ReactModal.setAppElement(document.getElementById('modal'))

function BookModal(props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}>
    </ReactModal>
  )
}

export default BookModal