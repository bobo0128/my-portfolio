import React from 'react';
// import DriftBottle from '../components/driftBottle/DriftBottle';
import ExperienceSummary from '../components/experienceSummary/ExperienceSummary';
import ExperienceSection from '../components/experienceSection/ExperienceSection';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.css';
import Timeline from '../components/timeline/Timeline';

const Experience = () => {
  return (
    <Container fluid>
      {/* Top Part: Drift Bottle and Summary */}
      <Row className="top-part">
        <Col md={12} className="summary-col">
          <ExperienceSummary />
        </Col>
      </Row>

      {/* Bottom Part: Expandable Experience Sections */}
      <Row className="bottom-part">
        <Col>
          <Timeline />
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
