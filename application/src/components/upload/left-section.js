import React from "react";

import options from "../../resources/options.png";

// Will have primary options such as upload an image, add text, etc.
// The mostly used options
function LeftSection() {
  return (
    <section className="left-section full-height">
      <div className="empty-left-side"></div>
      <div className="left-options">
        <div className="flex flex-column">
          <div className="w-full p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;