import React from 'react';
import './ExperienceCard.css'; // CSS file for custom styles
import sandvine from '../../images/logo/sandvine.jpg';

const ExperienceCard = () => {
  return (
    <div className="experience-card p-3">
      <div className="row">
        {/* Logo Section */}
        <div className="col-md-1 col-2">
        <img src={sandvine} alt="Sandvine" className="experience-logo" />
          {/* Date and Location - Visible on small screens */}
          <div className="d-md-none mt-2">
            <p className="experience-date">August 2019 - Jan 2020</p>
            <p className="experience-location">Bengaluru, Karnataka</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="col-md-9 col-10">
          <h5 className="experience-title">Co-founder</h5>
          <p className="company-name">The School of ML</p>
          <p className="experience-description">
            Founded a community that develops solutions for and educates 150+ students about Data Science through live classes. Participated in all aspects of Business development from Market Research and finance to operations and marketing. Formulated the Community's vision, goals, and objectives, making education personalized for the masses, irrespective of their socio-economic status, to all age groups of society.
          </p>
        </div>

        {/* Date and Location Section - Visible on large screens */}
        <div className="col-md-2 text-md-right d-none d-md-block">
          <p className="experience-date">August 2019 - Jan 2020</p>
          <p className="experience-location">Bengaluru, Karnataka</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
