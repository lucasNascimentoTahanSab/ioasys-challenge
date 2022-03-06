import logOut from '../../logOut.png'
import './UserDisplay.css'

function UserDisplay(props) {
  return (
    <div className="UserDisplay">
      <div>Bem vindo, <span class="App__text--bold">{props.userName}</span></div>
      <button>
        <img src={logOut} alt="Logout button." />
      </button>
    </div>
  )
}

export default UserDisplay