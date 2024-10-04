import { Container, Row, Col, Card } from 'react-bootstrap';

function Experience() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text>Description of Experience</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
