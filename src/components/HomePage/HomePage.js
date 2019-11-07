import React, { Fragment } from 'react'
// import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../Shared/AuthenticatedRoute'

import EducationList from '../Education/EducationList'
import EditEducation from '../Education/EditEducation'
import Education from '../Education/Education'
import CreateEducation from '../Education/CreateEducation'
import Sidebar from './Sidebar'

import { resourceArray } from '../../resourceDefinitions'
import ResourcesCollection from '../ResumeComponents/ResourcesCollection'

const HomePage = ({ user, alert }) => {
  const resourceJsx = resourceArray.map((resource, index) => <ResourcesCollection key={resource + index} alert={this.alert} user={user} resource={resource} />)
  return (
    <Fragment>
      <Sidebar user={user}/>
      <div className="container">
        {resourceJsx}
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
