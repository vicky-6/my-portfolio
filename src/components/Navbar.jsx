import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        className="custom-navbar"
      >
        <Container>
          <Navbar.Brand href="/" className="text-success fw-bold">
            VIGNESH S
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Remove jsx attribute */}
      <style>{`
        .custom-navbar .nav-link {
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .custom-navbar .nav-link:hover {
          color: #04dead;
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;
