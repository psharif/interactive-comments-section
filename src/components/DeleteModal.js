import React, { useContext } from "react";
import { DispatchContext, CommentsContext } from "../context/comments.context";
import commentHelperFunctions from "../helperFunctions/commentHelperFunctions";
import SubmitButton from "./Comment-Components/SubmitButton";

export const DeleteModal = ({ show }) => {
  //Context
  const dispatch = useContext(DispatchContext);
  const state = useContext(CommentsContext);
  //Helper Function
  const { deleteComment } = commentHelperFunctions(state, dispatch);
  return (
    <div id="myModal" className={`modal ${show && "show"}`}>
      <div className="modal-content">
        <h2>Delete Comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
        <div className="button-row">
          <SubmitButton
            className="cancel"
            onClick={() =>
              dispatch({
                type: "TOGGLE_STATE",
                key: "showModal",
                show: false,
              })
            }
          >
            No Cancel
          </SubmitButton>
          <SubmitButton className="delete" onClick={() => deleteComment()}>
            Yes, Delete
          </SubmitButton>
        </div>
      </div>
    </div>
  );
};
