import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaBars } from 'react-icons/fa';
import './PortfolioNavbar.css';
import {faHouse, faEnvelope, faSquarePollHorizontal, faChartPie, faCubes} from '@fortawesome/free-solid-svg-icons';
import IconWithCircle from '../icon/IconWithCircle';

function PortfolioNavbar() {
  const [expanded, setExpanded] = useState(false);

  const [activeBtn, setActiveBtn] = useState(null);

  const handleBtnClick = (iconName) => {
    setActiveBtn(iconName);
  }

  const toggleNavbar = () => setExpanded(!expanded);

  return (
    <div className="d-flex">
      <Navbar
        variant="dark"
        expand="lg"
        expanded={expanded}
        className="d-none d-lg-flex flex-column vh-100 position-fixed"
      >
        <Nav className="flex-column w-100">
          <LinkContainer to="/">
            <Nav.Link title="Home"><IconWithCircle iconName={faHouse} isActive={activeBtn === faHouse} onClick={()=>{handleBtnClick(faHouse)}}/></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/skills">
            <Nav.Link title="Skills"><IconWithCircle iconName={faChartPie} isActive={activeBtn === faChartPie} onClick={()=>{handleBtnClick(faChartPie)}}/></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/experience">
            <Nav.Link title="Experience & Education"><IconWithCircle iconName={faSquarePollHorizontal} isActive={activeBtn === faSquarePollHorizontal} onClick={()=>{handleBtnClick(faSquarePollHorizontal)}}/></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/playground">
            <Nav.Link title="My playground"><IconWithCircle iconName={faCubes} isActive={activeBtn === faCubes} onClick={()=>{handleBtnClick(faCubes)}}/></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link title="Contact Me"><IconWithCircle iconName={faEnvelope} isActive={activeBtn === faEnvelope} onClick={()=>{handleBtnClick(faEnvelope)}}  /></Nav.Link>
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
