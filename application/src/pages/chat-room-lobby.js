import React from "react";
import "./styles/chat-room-lobby.css";
import LobbyOption from "../components/lobby-options";

export default function Lobby() {
  return (
    <div className="page-container">
      <div className="flex-container">
        <div className="lobby-left-section">
          {Array.from({ length: 12 }).map((_, index) => (
            <LobbyOption></LobbyOption>
          ))}
        </div>
        <div className="lobby-display-containter"></div>
      </div>
    </div>
  );
}
