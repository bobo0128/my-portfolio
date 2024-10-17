import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconWithRectangle.css";

const IconWithRectangle = ({ iconName, isActive, onClick, tooltipText}) => {
  return (
    <div
      className={`icon-rect ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {/* <div className="icon-left">
        <FontAwesomeIcon icon={iconName} className="icon" />
      </div> */}
      <span className="button-text">{tooltipText}</span>
    </div>
  );
};

export default IconWithRectangle;
