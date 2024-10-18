import React from "react";
import ContactForm from "../components/contact/ContactForm";
import GoogleMapIframe from "../components/googleMap/GoogleMap";
import "./ContactMe.css"; // Main layout styles

const ContactMe = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">
        I’m living in Calgary and open to on-site job opportunities in Calgary. 
        I am also available for remote work anywhere in the world. 
        Feel free to reach out to me for potential collaborations or job opportunities.
      </p>
      <div className="contact-content">
        <ContactForm />
        <GoogleMapIframe />
      </div>
    </div>
  );
};

export default ContactMe;
