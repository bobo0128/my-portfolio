import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "../spinner/Spinner";
import "./ContactForm.css";

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
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="user_subject"
        value={formData.user_subject}
        onChange={handleChange}
        placeholder="Phone"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows="4"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? <Spinner animation="border" size="sm" /> : "Send Message"}
      </button>
      {submitted && !loading && (
        <p className="mt-3 text-success text-center">
          Thank you for contacting me!
        </p>
      )}
      {error && <p className="mt-3 text-danger text-center">{error}</p>}
    
    </form>
  );
};

export default ContactForm;
