import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, contentURL }) => {
  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {/* Dynamically load content via iframe */}
        <iframe
          src={contentURL}
          title="Dynamic Content"
          width="100%"
          height="500px"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Modal;
