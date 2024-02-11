import React, { useState } from "react";

const getTooltipStyle = (direction) => {
  const spacing = 8;

  switch (direction) {
    case "top":
      return { bottom: `calc(100% + ${spacing}px)`, left: "50%", transform: "translateX(-50%)" };
    case "right":
      return { top: "50%", left: `calc(100% + ${spacing}px)`, transform: "translateY(-50%)" };
    case "bottom":
      return { top: `calc(100% + ${spacing}px)`, left: "50%", transform: "translateX(-50%)" };
    case "left":
      return { top: "50%", right: `calc(100% + ${spacing}px)`, transform: "translateY(-50%)" };
    default:
      return {};
  }
}

const Tooltip = ({ text, children, direction }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="tooltip-container"
    onMouseEnter={() => {
      setVisible(true)}}
    onMouseLeave={() => {
      setVisible(false)}}>
      {children}
      {isVisible && (
        <div className="tooltip" style={ {...getTooltipStyle(direction)} }>{text}</div>
        )
      }
    </div>
  );
}

export default Tooltip;