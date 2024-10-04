import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <Card.Text>Description of Skills</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
