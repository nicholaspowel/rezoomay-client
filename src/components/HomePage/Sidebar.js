import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#contacts">Contact Methods</Nav.Link>
    <Nav.Link href="#educationList">Education</Nav.Link>
    <Nav.Link href="#interests">Interests</Nav.Link>
    <Nav.Link href="#jobs">Jobs</Nav.Link>
    <Nav.Link href="#profiles">Profiles</Nav.Link>
    <Nav.Link href="#projects">Projects</Nav.Link>
    <Nav.Link href="#skills">Skills</Nav.Link>
    <Nav.Link href="#summaries">Summaries</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Sidebar = ({ user }) => (
  <div className="sidebar">
    <Accordion className="navbar-dark" defaultActiveKey="sidebar">
      <Accordion.Toggle eventKey="sidebar" className="btn-primary"><span className="navbar-toggler-icon"></span></Accordion.Toggle>
      <Accordion.Collapse eventKey="sidebar">
        <Nav className="ml-auto flex-column" id="sidebar-content">
          { alwaysOptions }
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Accordion.Collapse>
    </Accordion>
  </div>
)

export default Sidebar
