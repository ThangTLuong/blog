import React from "react";

const MainSection = ({ addElements }) => {
  return (
    <section className="main-section full-width full-height">
      {addElements.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))}
    </section>
  );
}

export default MainSection;