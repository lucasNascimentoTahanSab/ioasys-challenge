import React from 'react'
import Login from '../Login/Login.jsx'
import Dashboard from '../Dashboard/Dashboard.jsx'
import User from '../../schema/User.js'
import './App.css'

/**
 * React component responsible for rendering the login page,
 * when user is not logged in, or the dashboard page, after
 * user login.
 */
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: new User(),
      authenticated: false
    }
  }

  componentDidMount() {
    this._verifyIfUserIsLoggedIn()
  }

  render() {
    return (
      <div className="App">{this._getPageToRender()}</div>
    )
  }

  _getPageToRender() {
    return this.state.authenticated
      ? <Dashboard user={this.state.user} openBookModal={this.props.openBookModal} />
      : <Login sendUser={this._setupUser.bind(this)} />
  }

  _verifyIfUserIsLoggedIn() {
    fetch('/signed-in')
      .then(res => res.json())
      .then(data => this.setState({ user: new User(data.user), authenticated: data.authenticated }))
      .catch(error => { throw error })
  }

  _setupUser(user) {
    this.setState({ user: new User(user), authenticated: true })
  }
}