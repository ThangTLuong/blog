import React, { useState } from "react";
import "./styles/home.css";

const Home = () => {
  const [mediaMinHeight, setMediaMinHeight] = useState(400);
  const [textsMinHeight, setTextsMinHeight] = useState(250);

  const showMoreMedia = () => {
    setMediaMinHeight((prevState) => prevState + 400);
  };

  const showMoreTexts = () => {
    setTextsMinHeight((prevState) => prevState + 250);
  };

  return (
    <div id="body">
      <div className="posts-container">
        <div
          className="media-container"
          style={{ minHeight: `${mediaMinHeight}px` }}
        >
          {Array.from({ length: 12 * 10 }).map((_, index) => (
            <div className="media-item" key={index}>
              <div className="item"></div>
            </div>
          ))}
        </div>
        <div className="button-group">
          <div className="button" onClick={showMoreMedia}>
            Show more
          </div>
        </div>
        <div
          className="texts-container"
          style={{ minHeight: `${textsMinHeight}px` }}
        >
          {Array.from({ length: 12 * 10 }).map((_, index) => (
            <div className="texts-item" key={index}>
              <div className="item"></div>
            </div>
          ))}
        </div>
        <div className="button-group">
          <div className="button" onClick={showMoreTexts}>
            Show more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
