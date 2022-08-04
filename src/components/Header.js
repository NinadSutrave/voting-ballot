import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (

    <Navbar bg="light" expand="lg">
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
      <strong>Pehchaan - Ek Safar</strong>
      </Navbar.Brand>

        <Nav className="center">
          <Nav.Link href="/admin">Admin</Nav.Link>
          <Nav.Link href="/voter">Voter</Nav.Link>
        </Nav>

    </Container>
  </Navbar>
    
  )
}

export default Header