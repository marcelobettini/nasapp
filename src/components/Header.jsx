import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar className="nav" bg="light" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <span className="text-danger">Mars</span>
          <img
            className="logo"
            src="https://res.cloudinary.com/dsvdu8znq/image/upload/v1665449543/meatball-nasa-logo_fqbaca.png"
            alt=""
          />
          Rover
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#mep">Program</Nav.Link>
            <Nav.Link href="#rovers">Rovers</Nav.Link>
            <Nav.Link href="#pic">Pictures</Nav.Link>
            <NavDropdown title="Missions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Spirit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Opportunity
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Curiosity</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Perseverance
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
