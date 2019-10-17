import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Resources" id="basic-nav-dropdown">
      <NavDropdown.Item href="#contacts">Contact Methods</NavDropdown.Item>
      <NavDropdown.Item href="#educationList">Education</NavDropdown.Item>
      <NavDropdown.Item href="#interests">Interests</NavDropdown.Item>
      <NavDropdown.Item href="#jobs">Jobs</NavDropdown.Item>
      <NavDropdown.Item href="#profiles">Profiles</NavDropdown.Item>
      <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
      <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
      <NavDropdown.Item href="#summaries">Summaries</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
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
    <Nav.Link href="#"></Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      rezoomay-client
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
