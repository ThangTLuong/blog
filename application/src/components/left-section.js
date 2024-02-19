import React from "react";
import "./styles/left-section.css";

// Will have primary options such as upload an image, add text, etc.
// The mostly used options
const LeftSection = ({ children }) => {
  return (
    <section className="left-section full-height">
      <div className="empty-left-side"></div>
      <div className="left-options-container">
        <div className="flex flex-column">
          { children }
        </div>
      </div>
    </section>
  );
}

export default LeftSection;