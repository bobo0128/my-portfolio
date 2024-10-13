import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./ExperienceSection.css";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../utils/Constants";

const ExperienceSection = () => {
  return (
    <Accordion>
      {/* Work Experience Section */}
      <Accordion.Item eventKey="0">
        <Accordion.Header>Work Experience</Accordion.Header>
        <Accordion.Body>
          {experiences.map((experience, index) => (
            <ExperienceCard  key={index} experience={experience}/>
          ))}

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
              <Card.Title>
                Bachelor of Computer Science - University X (2008 - 2012)
              </Card.Title>
              <Card.Text>
                Graduated with a degree in Computer Science, focusing on
                software engineering, algorithms, and data structures.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                Online Course - Full-Stack Development (2020)
              </Card.Title>
              <Card.Text>
                Completed an online full-stack development course, focusing on
                React, Node.js, and MongoDB, enhancing practical web application
                skills.
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
