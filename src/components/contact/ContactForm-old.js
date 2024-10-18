import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Spinner from "../spinner/Spinner";
import './ContactForm.css';

const formObj = {
  user_name: "",
  user_subject: "",
  user_email: "",
  message: "",
};

const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState(formObj);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(false);

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setFormData(formObj);

          setSubmitted(true);
          console.log("Send Email success!");
        },
        (error) => {
          setError("Failed to send message. Please try again.");
          console.log("FAILED...", error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <div className="contact-form-container">
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        className="p-3"
      >
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="user_name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Your name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="user_email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Your email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <Form.Group controlId="user_subject" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Subject"
                name="user_subject"
                value={formData.user_subject}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="message" className="mb-3">
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
          <Button className="submitBtn" type="submit" disabled={loading} >
            {loading ? <Spinner animation="border" size="sm" /> : "Send Message"}
          </Button>
        </div>
      </Form>
      {submitted && !loading && (
        <p className="mt-3 text-success text-center">
          Thank you for contacting me!
        </p>
      )}
      {error && <p className="mt-3 text-danger text-center">{error}</p>}
    </div>
  );
};

export default ContactForm;
