import React, { useEffect } from "react";
import "./styles/media-display.css";

const LeftDisplayContainer = ({ children }) => {
  return <div className="left-display-container">{children}</div>;
};

const RightDisplayContainer = ({ children }) => {
  return <div className="right-display-container">{children}</div>;
};

const MediaDisplay = ({ media, rawFiles = [], onMediaChange = () => {} }) => {
  const leftDisplay = [];
  const rightDisplay = [];

  useEffect(() => {
    let isMounted = true;
    if (isMounted) onMediaChange(rawFiles);

    return () => {
      isMounted = false;
    };
  }, [media, rawFiles, onMediaChange]);

  media.forEach((item, index) => {
    index % 2 === 0 ? leftDisplay.push(item) : rightDisplay.push(item);
  });

  if (media.length % 2 !== 0 && media.length !== 1) {
    rightDisplay.push(leftDisplay.pop());
  }

  return (
    <div className="media-display-container">
      <div className="media-display">
        <LeftDisplayContainer
          className={leftDisplay.length > 0 ? "half-width" : ""}
        >
          {leftDisplay.map((file, index) => (
            <img
              style={{ height: leftDisplay.length > 1 ? "50%" : "" }}
              className="media-upload-display"
              key={`left-display-${index}`}
              alt={`display ${index}`}
              src={file.preview}
            />
          ))}
        </LeftDisplayContainer>

        {!rightDisplay.length ? (
          <></>
        ) : (
          <RightDisplayContainer
            className={rightDisplay.length > 0 ? "half-width" : ""}
          >
            {rightDisplay.map((file, index) => (
              <img
                style={{ height: rightDisplay.length > 1 ? "50%" : "" }}
                className="media-upload-display"
                key={`right-display-${index}`}
                alt={`display ${index}`}
                src={file.preview}
              />
            ))}
          </RightDisplayContainer>
        )}
      </div>
    </div>
  );
};

export default MediaDisplay;
