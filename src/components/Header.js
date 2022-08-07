import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

const Header = () => {
  return (

    <Navbar className="navbar-color" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img
          src={require("../assets/logo.png")}
          width="150"
          height="90"
          className="d-inline-block align-top"
          alt="Pehchaan Ek Safar logo"
        />
      </Navbar.Brand>
      <Navbar.Brand>
      <strong><a className="pehchaan" href="https://www.iitrpr.ac.in/pehchaanes/" target="_blank" rel="noreferrer">Pehchaan - Ek Safar</a></strong>
      </Navbar.Brand>

        <Nav className="center">
          <Nav.Link href="/admin">Admin</Nav.Link>
          <Nav.Link href="/">Voter</Nav.Link>
        </Nav>

    </Container>
  </Navbar>
    
  )
}

export default Header