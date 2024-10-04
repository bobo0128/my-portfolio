import { Container, Row, Col, Card } from 'react-bootstrap';

function Education() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>Description of Education</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
