import React, { useEffect, useState, useRef } from "react";
function EditTextArea({ style = {}, ...props }) {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);

  const handleChange = (evt) => {
    setCurrentValue(evt.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      style={style}
      value={currentValue}
      onChange={handleChange}
    />
  );
}

export default EditTextArea;
