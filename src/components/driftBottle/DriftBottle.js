import React, { useEffect, useState } from 'react';
import './DriftBottle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faReact, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

const DriftBottle = () => {
  const skills = [
    { icon: faNode, label: 'Node.js' },
    { icon: faReact, label: 'React' },
    { icon: faJs, label: 'JavaScript' },
    { icon: faHtml5, label: 'HTML5' },
    { icon: faCss3, label: 'CSS3' },
  ];

  return (
    <div className="bottle-container">
      <div className="bottle">
        {skills.map((skill, index) => (
          <div key={index} className="drift-icon">
            <FontAwesomeIcon icon={skill.icon} size="2x" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriftBottle;
