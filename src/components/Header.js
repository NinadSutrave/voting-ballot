import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

const Header = () => {
  return (

    <Navbar className="Header navbar-color" expand="lg">
    <Container>
      <Navbar.Brand href="/">
      <a className="pehchaan heading" href="https://www.iitrpr.ac.in/pehchaanes/" target="_blank" rel="noreferrer">
        <img
          src={require("../assets/logo.png")}
          width="110"
          height="80"
          className="d-inline-block align-top"
          alt="Pehchaan Ek Safar logo"
        />
      </a>
      </Navbar.Brand>
      <Navbar.Brand>
      <strong className="heading">Pehchaan - Ek Safar</strong>
      </Navbar.Brand>

        <Nav className="center">
          <Nav.Link className="navlink" href="/admin">Admin</Nav.Link>
          <Nav.Link className="navlink" href="/">Voter</Nav.Link>
        </Nav>

    </Container>
  </Navbar>
    
  )
}

export default Header