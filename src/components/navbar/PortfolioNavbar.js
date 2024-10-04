import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaBars } from 'react-icons/fa';
import './PortfolioNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import IconWithCircle from '../icon/IconWithCircle';
import IconWithButton from '../icon/IconWithButton';

function PortfolioNavbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);

  return (
    <div className="d-flex">
      {/* Sidebar for large screens */}
      <Navbar
        variant="dark"
        expand="lg"
        expanded={expanded}
        className="d-none d-lg-flex flex-column vh-100 position-fixed"
      >
        <Nav className="flex-column w-100">
          <LinkContainer to="/">
            <Nav.Link><FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#f09456",}} /></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link><IconWithCircle iconName={faHouse}/></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link><IconWithButton iconName={faHouse}/></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/skills">
            <Nav.Link>Skills</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/experience">
            <Nav.Link>Experience</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/education">
            <Nav.Link>Education</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>

      {/* Hamburger menu for small screens */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        expanded={expanded}
        className="d-lg-none position-fixed"
        style={{ width: '100%' }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <LinkContainer to="/">
              <Nav.Link onClick={() => setExpanded(false)}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link onClick={() => setExpanded(false)}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link onClick={() => setExpanded(false)}>Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/experience">
              <Nav.Link onClick={() => setExpanded(false)}>Experience</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/playground">
              <Nav.Link onClick={() => setExpanded(false)}>Playground</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default PortfolioNavbar;
