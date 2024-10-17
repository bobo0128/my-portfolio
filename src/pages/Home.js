import React from "react";
import FlipBook from "../components/flipbook/FlipBook";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'

function Home(background) {
  const backgroundImg = background? `url($background)`: "";
  return (
    <div style={{backgroundImage: backgroundImg}}>
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
