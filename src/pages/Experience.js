import React from 'react';
// import DriftBottle from '../components/driftBottle/DriftBottle';
import BottleAnimation from '../components/driftBottle/BottleAnimation';
import Bucket from '../components/driftBottle/Bucket';
import ExperienceSummary from '../components/experienceSummary/ExperienceSummary';
import ExperienceSection from '../components/experienceSection/ExperienceSection';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.css';
import myImage from '../images/experience.jpg';

const Experience = () => {
  return (
    <Container fluid>
      {/* Top Part: Drift Bottle and Summary */}
      <Row className="top-part">
        <Col md={6}>
          <img src={myImage} style={{width: '400px', height: '300px'}}/>
        </Col>
        <Col md={6} className="summary-col">
          <ExperienceSummary />
        </Col>
      </Row>

      {/* Bottom Part: Expandable Experience Sections */}
      <Row className="bottom-part">
        <Col>
          <ExperienceSection />
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
