import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconWithCircle.css';

const IconWithCircle = ({iconName}) => {
  return (
    <div className="icon-circle">
      <FontAwesomeIcon icon={iconName} />
    </div>
  );
}

export default IconWithCircle;
