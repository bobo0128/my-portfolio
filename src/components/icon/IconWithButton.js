import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconWithButton.css';

const IconWithButton = ({ iconName }) => {
  return (
    <div className="icon-button">
      <FontAwesomeIcon icon={iconName} />
    </div>
  );
}

export default IconWithButton;
