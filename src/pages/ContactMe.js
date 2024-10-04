import { Container, Row, Col, Card } from 'react-bootstrap';

function ContactMe() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Me</Card.Title>
              <Card.Text>Contact Me Form</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMe;
