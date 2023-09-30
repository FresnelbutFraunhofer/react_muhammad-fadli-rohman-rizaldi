import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <div className="container">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="fixed-top shadow-sm bg-body-tertiary bg-light pt-2 ps-4 pe-3"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="home active text-primary">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="feature">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className="pricing">
                Pricing
              </Nav.Link>
              <Nav.Link href="#faqs" className="FAQs">
                FAQs
              </Nav.Link>
              <Nav.Link href="#about" className="about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
