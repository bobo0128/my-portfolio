import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './PortfolioNavbar.css';
import { menus } from '../../utils/Constants';
import IconWithRectangle from '../icon/IconWithRectangle';

const PortfolioNavbar = ({ activeSection, setActiveSection, setUserClicked }) => {

  console.log("activeSection:" + activeSection);
  const [expanded, setExpanded] = useState(false);

  const handleBtnClick = (id) => {
    setActiveSection(id);
    setUserClicked(true);
    setTimeout(() => setUserClicked(false), 500);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const toggleNavbar = () => setExpanded(!expanded);

  return (
    <div className="d-flex w-100">
      {/* Full navbar for large screens */}
      <Navbar
        variant="dark"
        expand="lg"
        expanded={expanded}
        className="navbar-denter d-none d-lg-flex"
      >
        <Nav className="flex-row w-100 justify-content-around">
          {menus.map((menu) => {
            const { id, href, icon, textValue } = menu;
            return (
              <Nav.Link key={id} href={href} className="custom-nav-link">
                <IconWithRectangle
                  iconName={icon}
                  isActive={activeSection === id}
                  onClick={() => handleBtnClick(id)}
                  tooltipText={textValue}
                />
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar>

      {/* Hamburger menu for small screens */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        expanded={expanded}
        className="d-lg-none position-fixed w-100"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
            <Nav.Link href="#experience" onClick={() => setExpanded(false)}>Experience</Nav.Link>
            <Nav.Link href="#playground" onClick={() => setExpanded(false)}>Playground</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default PortfolioNavbar;
