import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaBars } from 'react-icons/fa';
import './PortfolioNavbar.css';
import {faHouse, faEnvelope, faSquarePollHorizontal, faChartPie, faCubes} from '@fortawesome/free-solid-svg-icons';
import { menus } from '../../utils/Constants';
import IconWithCircle from '../icon/IconWithCircle';

const PortfolioNavbar = ({activeSection}) => {

  console.log("activeSection:"+activeSection);
  const [expanded, setExpanded] = useState(false);

  const [activeBtn, setActiveBtn] = useState(null);

  const handleBtnClick = (iconName, sectionId) => {
    setActiveBtn(iconName);
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
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
          {
            menus.map((menu,index) => {
              const {id, href, icon, textValue } = menu;
              return (
                <Nav.Link key={id} href={href}><IconWithCircle iconName={icon} isActive={activeBtn === icon || activeSection === id} onClick={()=>{handleBtnClick(icon, id)}} tooltipText={textValue}/></Nav.Link>
              );
            })
          }
            {/* <Nav.Link href="#home"><IconWithCircle iconName={faHouse} isActive={activeBtn === faHouse} onClick={()=>{handleBtnClick(faHouse)}} tooltipText="Home"/></Nav.Link>
            <Nav.Link href="#skills"><IconWithCircle iconName={faChartPie} isActive={activeBtn === faChartPie} onClick={()=>{handleBtnClick(faChartPie)}} tooltipText="Skills" /></Nav.Link>


            <Nav.Link href="#experience"><IconWithCircle iconName={faSquarePollHorizontal} isActive={activeBtn === faSquarePollHorizontal} onClick={()=>{handleBtnClick(faSquarePollHorizontal)}} tooltipText="Experience" /></Nav.Link>


            <Nav.Link href="#playground"><IconWithCircle iconName={faCubes} isActive={activeBtn === faCubes} onClick={()=>{handleBtnClick(faCubes)}} tooltipText="Park" /></Nav.Link>

            <Nav.Link href="#contact"><IconWithCircle iconName={faEnvelope} isActive={activeBtn === faEnvelope} onClick={()=>{handleBtnClick(faEnvelope)}} tooltipText="Contact" /></Nav.Link> */}
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
              <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link href="#skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
              <Nav.Link href="#experience" onClick={() => setExpanded(false)}>Experience</Nav.Link>
              <Nav.Link href="#playground" onClick={() => setExpanded(false)}>Playground</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default PortfolioNavbar;
