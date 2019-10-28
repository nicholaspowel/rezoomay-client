import React, { Fragment } from 'react'
// import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../Shared/AuthenticatedRoute'

import EducationList from '../Education/EducationList'
import EditEducation from '../Education/EditEducation'
import Education from '../Education/Education'
import CreateEducation from '../Education/CreateEducation'
import Sidebar from './Sidebar'

const HomePage = ({ user, alert }) => {
  return (
    <Fragment>
      <Sidebar user={user}/>
      <div className="container">
        <EducationList alert={this.alert} user={user} />
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
      </div>
    </Fragment>
  )
}

export default HomePage
