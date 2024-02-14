import React, { useState, useEffect } from "react";
import Tooltip from "../components/utilities/tooltip";
import GetElement from "../components/post-container";
import Dropzone from "../components/upload/drop-zone";
import { upload } from "../services/upload-service";
import "./styles/upload.css";

import UploadOptions from "../components/upload/upload-options";
import LeftSection from "../components/left-section";
import RightSection from "../components/right-section";
import MainSection from "../components/main-section";

import options from "../resources/options.png";

import addText from "../resources/upload/text.png";
import addMedia from "../resources/upload/media.png";
import onClear from "../resources/upload/clear.png";
import onSubmit from "../resources/upload/upload-submit.png";

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
  const [userData, setUserData] = useState({});

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isMediaVisible, setIsMediaVisible] = useState(false);

  const [text, setText] = useState("");
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch("/upload")
      .then((res) => res.json())
      .then((data) => {
        const userData = {
          user_id: data.user_id,
          username: data.username,
          user_handle: data.user_handle,
          time_posted: "now",
        };
        setUserData(userData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleMediaChange = (media) => {
    setMedia(media);
  };

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

  const handleUploadOptionClick = (data) => {
    data.preventDefault();
    // upload({ user_id, text, media });
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
    {
      toolTipText: "Upload",
      icon: onSubmit,
      onClick: handleUploadOptionClick,
    },
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
          {Object.keys(userData).length > 0 && (
            <GetElement
              isTextVisible={isTextVisible}
              isMediaVisible={isMediaVisible}
              userData={userData}
            >
              <textarea
                className="post-text-area"
                placeholder="What is happening?!"
                onChange={handleTextChange}
              />
              <Dropzone
                className="upload-media-container"
                onMediaChange={handleMediaChange}
              />
            </GetElement>
          )}
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
