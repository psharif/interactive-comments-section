import React, { useRef } from "react";
export const IconButton = ({
  type,
  color,
  hoverColor,
  handlePress,
  isEditing,
}) => {
  const buttonRef = useRef(null);
  const iconMap = {
    Reply: "fas fa-reply",
    Delete: "fas fa-trash-alt",
    Edit: "fas fa-pen",
  };
  //Changes color on hover. Hover color and regular color are passed through props.
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
      onClick={handlePress}
      disabled={isEditing ? true : ""}
    >
      <i className={iconMap[type]} />
      {type}
    </button>
  );
};
