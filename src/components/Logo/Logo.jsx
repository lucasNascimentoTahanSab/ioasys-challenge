import logo from '../../images/logo.svg'
import logoDark from '../../images/logoDark.svg'
import './Logo.css'

/**
 * React component for rendering Ioasys logo besides the "Books"
 * title. The component can switch its color from light to dark
 * and vice-versa. 
 */
function Logo(props) {
  return (
    <div className='Logo'>
      <img src={props.displayDarkText ? logoDark : logo} alt="Application's logo" />
      <span className={props.displayDarkText ? 'App__text--color-second' : 'App__text--color-first'}>Books</span>
    </div>
  )
}

export default Logo