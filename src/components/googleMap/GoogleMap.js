import React from "react";
import "../../pages/ContactMe.css";


const GoogleMapComponent = () => {
  return (
    <div className="contact-map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.4173666673555!2d-114.05752732476444!3d51.045380844351904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170003cb69fe3%3A0x65642e5fb9371572!2sCentral%20Library!5e0!3m2!1sen!2sca!4v1729138244596!5m2!1sen!2sca"
        style={{border: 0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;
