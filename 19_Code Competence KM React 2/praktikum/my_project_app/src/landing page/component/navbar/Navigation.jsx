import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="mynavbar fixed-top shadow-sm bg-body-tertiary bg-light pt-2 ps-4 pe-3"
      >
        <Container fluid>
          <Navbar.Brand href="#hero">
            <img
              src="../bootstrap-logo-shadow.png"
              alt="Bootstrap"
              width={40}
              height={33}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#hero"
                className="home nav-link active text-primary"
              >
                Home
              </Nav.Link>
              <Nav.Link href="#package" className="nav-link feature">
                Our Package
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link pricing">
                Contact Us
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
