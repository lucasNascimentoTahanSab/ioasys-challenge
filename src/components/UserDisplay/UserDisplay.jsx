import logOut from '../../images/logOut.png'
import './UserDisplay.css'

/**
 * React component responsible for the user display rendering at the
 * dashboard header, containing a salutation and logout button.
 */
function UserDisplay(props) {
  function signOut() {
    fetch('/sign-out')
  }

  return (
    <div className="UserDisplay">
      <div className="UserDisplay__salutation">Bem vindo, <span className="App__text--bold">{props.userName}</span></div>
      <button onClick={signOut.bind(this)}>
        <img src={logOut} alt="Logout button." />
      </button>
    </div>
  )
}

export default UserDisplay