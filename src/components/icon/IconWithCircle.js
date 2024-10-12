import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconWithCircle.css";

const IconWithCircle = ({ iconName, isActive, onClick, tooltipText }) => {
  return (
    <div
      className={`icon-circle ${isActive ? "active" : ""}`}
      onClick={onClick}
      data-tooltip={tooltipText} // Handle click event
    >
      <FontAwesomeIcon icon={iconName} />
    </div>
  );
};

export default IconWithCircle;
