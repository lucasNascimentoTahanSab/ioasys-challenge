import './Logo.css'
import logo from '../../logo.svg'
import logoDark from '../../logoDark.svg'

function Logo(props) {
  return (
    <div className='Logo'>
      <img src={props.displayDarkText ? logoDark : logo} alt="Application's logo" />
      <span className={props.displayDarkText ? 'Logo__title-dark' : 'Logo__title-light'}>Books</span>
    </div>
  )
}

export default Logo