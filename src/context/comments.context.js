import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer.js";
import commentsReducer from "../reducers/comments.reducer.js";
import defaultData from "../data.json";

export const CommentsContext = createContext();
export const DispatchContext = createContext();

export function CommentProvider(props) {
  const [state, dispatch] = useLocalStorageReducer(
    "state",
    defaultData,
    commentsReducer
  );
  return (
    <CommentsContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </CommentsContext.Provider>
  );
}
