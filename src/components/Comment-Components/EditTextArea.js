import React, { useEffect, useRef } from "react";
function EditTextArea({ style = {}, ...props }) {
  const textareaRef = useRef(null);
  //Use Ref to change the size of the Edit Text area.
  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [props.text]);

  return (
    <textarea
      ref={textareaRef}
      style={style}
      value={props.text}
      onChange={props.handleChange}
    />
  );
}

export default EditTextArea;
