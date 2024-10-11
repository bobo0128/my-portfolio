import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>Description of project 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>Description of project 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>Description of project 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
