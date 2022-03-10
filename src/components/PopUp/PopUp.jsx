import './PopUp.css'

/**
 * React component for rendering pop-up in login form for
 * showing possible errors.
 */
function PopUp(props) {
  return (
    <div className={`PopUp ${props.show ? 'PopUp--after-open' : 'PopUp--before-close'}`}>
      <span className="PopUp__arrow"></span>
      <div className="PopUp__message App__text--color-first App__text--bolder">{props.message}</div>
    </div>
  )
}

export default PopUp