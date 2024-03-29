import React from "react";

// Will have many different templates to help user get started with their posts
// Also thinking of having presets right under or above the templates
const RightSection = ({ children }) => {
  return (
    <section className="right-section full-height">
      <div className="right-options">
        <div className="flex flex-wrap">
          { children }
        </div>
      </div>
      <div className="empty-right-side full-height"></div>
    </section>
  );
}

export default RightSection;