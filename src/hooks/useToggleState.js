import { useState } from "react";
const useToggleState = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = (state) => {
    setState(state);
  };

  return [state, toggle];
};

export default useToggleState;
