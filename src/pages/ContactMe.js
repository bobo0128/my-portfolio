import React from "react";
import ContactForm from "../components/contact/ContactForm";
import GoogleMapIframe from "../components/googleMap/GoogleMap";
import "./ContactMe.css"; // Include your styles here

const ContactMe = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-form">
          <ContactForm />
        </div>
        <div className="contact-map">
          <GoogleMapIframe />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
