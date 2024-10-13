import React, { useEffect } from "react";
import "./ExperienceCard.css"; // CSS file for custom styles

const ExperienceCard = ({experience}) => {
  return (
    <div className="experience-card p-3">
      <div className="row">
        {/* Logo Section */}
        <div className="col-md-1 col-2">
          <img
            src={experience.icon}
            alt="Sandvine"
            className="experience-logo"
          />
          {/* Date and Location - Visible on small screens */}
          <div className="d-md-none mt-2">
            <p className="experience-date">{experience.date}</p>
            <p className="experience-location">{experience.location}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="col-md-9 col-10">
          <h5 className="experience-title">{experience.experience_title}</h5>
          <p className="company-name">{experience.company_name}</p>
          <p className="experience-description">{experience.description}</p>
        </div>

        {/* Date and Location Section - Visible on large screens */}
        <div className="col-md-2 text-md-right d-none d-md-block">
          <p className="experience-date">{experience.date}</p>
          <p className="experience-location">{experience.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
