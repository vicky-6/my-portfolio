import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Navbar.Brand as={Link} to="/" className="text-success fw-bold">
            VIGNESH S
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
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