import { useState } from "react";
const useInputState = (initialInput = "") => {
  const [state, setState] = useState(initialInput);

  const handleChange = (evt) => {
    setState(evt.target.value);
  };

  const reset = (evt) => {
    setState("");
  };

  return { state, reset, handleChange };
};

export default useInputState;
