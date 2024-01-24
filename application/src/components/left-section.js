import React from "react";

// Will have primary options such as upload an image, add text, etc.
// The mostly used options
const LeftSection = ({ children }) => {
  return (
    <section className="left-section full-height">
      <div className="empty-left-side"></div>
      <div className="left-options">
        <div className="flex flex-column">
          { children }
        </div>
      </div>
    </section>
  );
}

export default LeftSection;