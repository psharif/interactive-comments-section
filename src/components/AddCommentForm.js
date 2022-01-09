import React, { useContext } from "react";
import { CommentsContext, DispatchContext } from "../context/comments.context";
import commentHelperFunctions from "../helperFunctions/commentHelperFunctions";
import useInputState from "../hooks/useInputState";
import SubmitButton from "./Comment-Components/SubmitButton";
import EditTextArea from "./Comment-Components/EditTextArea";
const AddCommentForm = (props) => {
  //context
  const dispatch = useContext(DispatchContext);
  const state = useContext(CommentsContext);
  //State
  const { state: text, handleChange, reset } = useInputState("");
  //Helper Functions
  const { addComment } = commentHelperFunctions(state, dispatch, text);

  return (
    <div className="main-comment-container">
      {props.isReply && (
        <div
          className={`vertical-rule ${props.isLast ? "last-comment" : ""}`}
        />
      )}
      <article className={`add-comment ${props.isReply ? "reply" : ""}`}>
        <img
          src={props.user.image.png}
          alt={`${props.user.username}-pic`}
          onClick={() =>
            dispatch({
              type: "TOGGLE_STATE",
              key: "showChangeUserModal",
              show: true,
            })
          }
        />
        <EditTextArea text={text} handleChange={handleChange} />
        <SubmitButton onClick={() => addComment(props, reset)}>
          Reply
        </SubmitButton>
      </article>
    </div>
  );
};

export default AddCommentForm;
