import React from "react";
import LeftSection from "../components/left-section";

export default function Lobby() {
  return (
    <div className="page-container">
      <div className="flex-container">
        <LeftSection></LeftSection>
        <div className="lobby-display-containter"></div>
      </div>
    </div>
  );
}
