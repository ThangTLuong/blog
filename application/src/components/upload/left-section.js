import React from "react";
import Tooltip from "../tooltip";

import options from "../../resources/options.png";

// Will have primary options such as upload an image, add text, etc.
// The mostly used options
const LeftSection = ({ onAddPostText, onAddPostMedia, onPostClear }) => {
  return (
    <section className="left-section full-height">
      <div className="empty-left-side"></div>
      <div className="left-options">
        <div className="flex flex-column">
          <div className="w-full p-2">
            <Tooltip text={ "Text" } direction={"left"}>
              <div className="bg-black rounded-full" onClick={onAddPostText}>
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </div>
            </Tooltip>
          </div>
          <div className="w-full p-2">
            <Tooltip text={ "Media" } direction={"left"}>
              <div className="bg-black rounded-full" onClick={onAddPostMedia}>
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </div>
            </Tooltip>
          </div>
          <div className="w-full p-2">
            <Tooltip text={ "Clear" } direction={"left"}>
              <div className="bg-black rounded-full" onClick={onPostClear}>
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;