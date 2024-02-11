import React from "react";

const CharacterCountDisplay = ({ currentCount, maxCount }) => {
  return (
    <div className="character-count">
      {`${currentCount}/${maxCount}`}
    </div>
  );
}

export default CharacterCountDisplay;