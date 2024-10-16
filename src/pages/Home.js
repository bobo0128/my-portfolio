import React from "react";
import FlipBook from "../components/flipbook/FlipBook";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'

function Home() {
  return (
    <div >
      <Container fluid>
        {/* Bottom Part: Book */}
        <Row className="justify-content-center">
          <Col className="book-container">
            <FlipBook />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
