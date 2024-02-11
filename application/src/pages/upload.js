import React, { useState } from "react";
import Tooltip from "../components/tooltip";
import GetElement from "../components/post-container";
import Dropzone from "../components/upload/drop-zone";

import UploadOptions from "../components/upload/upload-options";
import LeftSection from "../components/left-section";
import RightSection from "../components/right-section";
import MainSection from "../components/main-section";

import options from "../resources/options.png";

import addText from "../resources/upload/text.png";
import addMedia from "../resources/upload/media.png";
import onClear from "../resources/upload/clear.png";

const LeftOptions = ({ toolTipText, icon, onClick }) => {
  return (
    <div className="w-full p-2">
      <Tooltip text={toolTipText} direction={"left"}>
        <div className="left-options" onClick={onClick}>
          <div className="left-options-overlay">
            <img
              className="left-options-icon"
              src={icon}
              alt="Option buttons"
            />
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

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
  };

  const optionsData = [
    {
      toolTipText: "Text",
      icon: addText,
      onClick: () => handleOptionClick("Text"),
    },
    {
      toolTipText: "Media",
      icon: addMedia,
      onClick: () => handleOptionClick("Media"),
    },
    { toolTipText: "Clear", icon: onClear, onClick: handleClearOptionClick },
  ];

  return (
    <div id="body">
      <div className="display-sections-group flex h-full w-full">
        <LeftSection>
          {optionsData.map((option, index) => (
            <LeftOptions key={index} {...option} />
          ))}
        </LeftSection>
        <MainSection>
          <GetElement
            isTextVisible={isTextVisible}
            isMediaVisible={isMediaVisible}
          >
            <textarea
              className="post-text-area"
              placeholder="What is happening?!"
            />
            <Dropzone className="upload-media-container" />
          </GetElement>
        </MainSection>
        <RightSection>
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="w-20 p-2">
              <div className="bg-black rounded-full">
                <a href="/" key={index}>
                  <img
                    className="w-full h-full"
                    src={options}
                    alt={`Option button ${index}`}
                  />
                </a>
              </div>
            </div>
          ))}
        </RightSection>
      </div>
      <UploadOptions />
    </div>
  );
};

export default Upload;