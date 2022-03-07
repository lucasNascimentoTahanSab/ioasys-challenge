import logOut from '../../images/logOut.png'
import './UserDisplay.css'

function UserDisplay(props) {
  return (
    <div className="UserDisplay">
      <div className="UserDisplay__welcoming">Bem vindo, <span className="App__text--bold">{props.userName}</span></div>
      <button>
        <img src={logOut} alt="Logout button." />
      </button>
    </div>
  )
}

export default UserDisplay