import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './SocialMedia.css';

function SocialMedia() {
  const openContactForm = () => {
    alert('Contact Me Form');
  };

  return (
    <div className="d-none d-lg-flex flex-column position-fixed top-50 end-0 pe-3">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} className="mb-2" /></a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={30} className="mb-2" /></a>
      <FaEnvelope size={30} onClick={openContactForm} style={{ cursor: 'pointer' }} />
    </div>
  );
}

export default SocialMedia;
