import { useReducer, useEffect } from "react";
function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });
  useEffect(() => {
    const saveState = {
      ...defaultVal,
      currentUser: state.currentUser,
      comments: state.comments,
    };
    window.localStorage.setItem(key, JSON.stringify(saveState));
  }, [state.comments, state.currentUser, defaultVal, key]);

  return [state, dispatch];
}
export { useLocalStorageReducer };
