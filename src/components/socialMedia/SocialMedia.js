import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import IconWithCircle from '../icon/IconWithCircle';
import IconWithButton from '../icon/IconWithButton';
import './SocialMedia.css';

function SocialMedia() {
  const openContactForm = () => {
    alert('Contact Me Form');
  };

  return (
    <div className='social-media-icons'>
      {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} className="mb-2" /></a> */}
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><IconWithButton iconName={faLinkedin} /></a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><IconWithButton iconName={faGithub} /></a>
      {/* <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={30} className="mb-2" /></a> */}
      {/* <FaEnvelope size={30} onClick={openContactForm} style={{ cursor: 'pointer' }} /> */}
      
    </div>
  );
}

export default SocialMedia;
