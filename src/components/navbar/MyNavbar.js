import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expanded={expanded} expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/playground" onClick={() => setExpanded(false)}>
              My Playground
            </Nav.Link>
            <Nav.Link as={Link} to="/experience" onClick={() => setExpanded(false)}>
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
