import React, { useRef } from "react";
export const IconButton = ({ type, color, hoverColor }) => {
  const buttonRef = useRef(null);
  const iconMap = {
    Reply: "fas fa-reply",
    Delete: "fas fa-trash-alt",
    Edit: "fas fa-pen",
  };
  const handleMouseEnter = () => {
    buttonRef.current.style.color = `${hoverColor}`;
  };

  const handleMouseLeave = () => {
    buttonRef.current.style.color = `${color}`;
  };

  return (
    <button
      style={{ color: color }}
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className={iconMap[type]} />
      {type}
    </button>
  );
};
