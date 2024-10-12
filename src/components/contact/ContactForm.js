import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { sendEmail } from "../../utils/SendMail";

const formObj = {
  name: "",
  subject: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState(formObj);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
    setSubmitted(true);
    setFormData(formObj);
  };

  return (
    <div className="contact-form-container p-4">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Form onSubmit={handleSubmit} className="p-3 border rounded">
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="What is your name?"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="What is your email?"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter a subject."
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      {submitted && (
        <p className="mt-3 text-success text-center">
          Thank you for contacting me!
        </p>
      )}
    </div>
  );
};

export default ContactForm;
