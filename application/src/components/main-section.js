import React from "react";
import "./styles/main-section.css";

const MainSection = ({ children }) => {
  return (
    <section className="main-section full-width full-height">
      {children}
    </section>
  );
}

export default MainSection;