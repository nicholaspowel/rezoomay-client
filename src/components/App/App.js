import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../Shared/AuthenticatedRoute'
import AutoDismissAlert from '../Shared/AutoDismissAlert/AutoDismissAlert'
import Header from '../Shared/Header'
import SignUp from '../Auth/SignUp'
import SignIn from '../Auth/SignIn'
import SignOut from '../Auth/SignOut'
import ChangePassword from '../Auth/ChangePassword'

import EducationList from '../Education/EducationList'
import EditEducation from '../Education/EditEducation'
import Education from '../Education/Education'
import CreateEducation from '../Education/CreateEducation'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/educationList' render={() => (
            <EducationList alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/educationList/:id' render={() => (
            <Education alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/educationList/:id/edit' render={() => (
            <EditEducation alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/create-education' render={() => (
            <CreateEducation alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
