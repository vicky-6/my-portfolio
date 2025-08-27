import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        expanded={expanded}
        onToggle={setExpanded}
        className="custom-navbar"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-success fw-bold">
            VIGNESH S
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/experience" onClick={() => setExpanded(false)}>
                Experience
              </Nav.Link>
              <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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