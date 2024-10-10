import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import './BottleAnimation.css';
// import './BatteryAnimation.css';

const BottleAnimation = () => {
  const [icons, setIcons] = useState([]);

  // Simulate icons appearing in the bottle over time
  useEffect(() => {
    const iconArray = [
      faReact,
      faNodeJs,
      faJs,
      faHtml5,
      faCss3Alt,
    ];
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < iconArray.length) {
        setIcons(prev => [...prev, iconArray[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 800); // Adds icons at intervals

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bottle-container">
      {/* Bottle Shape */}
      <div className="bottle">
        {/* Display icons as they appear */}
        {icons.map((icon, idx) => (
          <FontAwesomeIcon
            key={idx}
            icon={icon}
            className={`icon icon-${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BottleAnimation;
