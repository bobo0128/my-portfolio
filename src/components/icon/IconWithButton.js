import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconWithButton.css';

const IconWithButton = ({ iconName, isActive, onClick }) => {
  return (
    <div className={`icon-button ${isActive ? 'active': ''}`} onClick={onClick}>
      <FontAwesomeIcon icon={iconName} />
    </div>
  );
}

export default IconWithButton;
