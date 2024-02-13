import React from "react";
import "./styles/home.css";

const Home = () => {
  return (
    <div id="body">
      <div className="posts-container">
        <div className="media-container">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="media-item" key={index}>
              <div className="item"></div>
            </div>
          ))}
        </div>
        <div className="button-group">
          <div className="button">Show more</div>
        </div>
        <div className="texts-container">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="texts-item" key={index}>
              <div className="item"></div>
            </div>
          ))}
        </div>
        <div className="button-group">
          <div className="button">Show more</div>
        </div>
      </div>
    </div>
  );
};

export default Home;