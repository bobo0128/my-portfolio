import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      {isVisible && (
        <FaArrowUp
          onClick={scrollToTop}
          size={40}
          className="btn btn-dark rounded-circle"
          style={{ cursor: 'pointer'}}
        />
      )}
    </div>
  );
}

export default ScrollToTop;
