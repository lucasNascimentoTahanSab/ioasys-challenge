import './PopUp.css'

function PopUp(props) {
  return (
    <div className={`PopUp ${props.show ? 'PopUp--after-open' : 'PopUp--before-close'}`}>
      <span className="PopUp__arrow"></span>
      <div className="PopUp__message App__text--color-first App__text--bolder">{props.message}</div>
    </div>
  )
}

export default PopUp