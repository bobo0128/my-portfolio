import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './ExperienceSection.css';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
  return (
    <Accordion>
      {/* Work Experience Section */}
      <Accordion.Item eventKey="0">
        <Accordion.Header>Work Experience</Accordion.Header>
        <Accordion.Body>
          {/* Work Experience as cards */}
          {/* <Card className="mb-3">
            <Card.Body>
              <Card.Title>Software Developer - Syvtech Solution (2023 - Present)</Card.Title>
              <Card.Text>
                Led the development of scalable systems using Java and Spring Boot, collaborating with small teams and handling key technical designs.
              </Card.Text>
            </Card.Body>
          </Card> */}
    <ExperienceCard />
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Full Stack Developer - Thrive Health (2021 - 2023)</Card.Title>
              <Card.Text>
                Developed full-stack solutions using React, Node.js, and MongoDB, focusing on healthcare applications with enhanced user interfaces and APIs.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Java Developer - Sandvine (2018 - 2021)</Card.Title>
              <Card.Text>
                Worked on network performance and security monitoring services using Java and Spring Boot microservices to enhance data handling and processing.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Add more experiences as necessary */}
        </Accordion.Body>
      </Accordion.Item>

      {/* Education Section */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>Education</Accordion.Header>
        <Accordion.Body>
          {/* Education as cards */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Bachelor of Computer Science - University X (2008 - 2012)</Card.Title>
              <Card.Text>
                Graduated with a degree in Computer Science, focusing on software engineering, algorithms, and data structures.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Online Course - Full-Stack Development (2020)</Card.Title>
              <Card.Text>
                Completed an online full-stack development course, focusing on React, Node.js, and MongoDB, enhancing practical web application skills.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Add more education details as necessary */}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ExperienceSection;
