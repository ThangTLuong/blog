import React, { useState } from "react";
import Tooltip from "../components/tooltip";
import { getElement } from "../components/upload/functionalities/post-container";

import UploadOptions from "../components/upload/upload-options";
import LeftSection from "../components/left-section";
import RightSection from "../components/right-section";
import MainSection from "../components/main-section";

import options from "../resources/options.png";

const LeftOptions = ({ toolTipText, icon, onClick }) => {
  return (
    <div className="w-full p-2">
      <Tooltip text={ toolTipText } direction={"left"}>
        <div className="bg-black rounded-full" onClick={onClick}>
          <img className="w-full h-full" src={icon} alt="Option buttons" />
        </div>
      </Tooltip>
    </div>
  );
}

const Upload = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isMediaVisible, setIsMediaVisible] = useState(false);

  const handleOptionClick = (option) => {
    if (option === "Text") {
      setIsTextVisible(!isTextVisible);
    } else if (option === "Media") {
      setIsMediaVisible(!isMediaVisible);
    }
  };

  const handleClearOptionClick = () => {
    setIsTextVisible(false);
    setIsMediaVisible(false);
  }

  const optionsData = [
    { toolTipText: "Text", icon: options, onClick: () => handleOptionClick("Text") },
    { toolTipText: "Media", icon: options, onClick: () => handleOptionClick("Media") },
    { toolTipText: "Clear", icon: options, onClick: handleClearOptionClick },
  ];

  return (
    <div id="body">
      <div className="display-sections-group flex h-full w-full">
        <LeftSection>
          {
            optionsData.map((option, index) => (
              <LeftOptions key={index} {...option} />
            ))
          }
        </LeftSection>
        <MainSection>
          { getElement({ isTextVisible, isMediaVisible }) }
        </MainSection>
        <RightSection>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
          <div className="w-20 p-2">
            <div className="bg-black rounded-full">
              <a href="/">
                <img className="w-full h-full" src={options} alt="Option buttons" />
              </a>
            </div>
          </div>
        </RightSection>
      </div>
      <UploadOptions />
    </div>
  );
}

export default Upload;