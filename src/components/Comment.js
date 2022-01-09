import React, { useContext } from "react";
import { DispatchContext, CommentsContext } from "../context/comments.context";
import commentHelperFunctions from "../helperFunctions/commentHelperFunctions";
import useToggleState from "../hooks/useToggleState";
import useInputState from "../hooks/useInputState";
import HeaderRow from "./Comment-Components/HeaderRow";
import VoteButton from "./Comment-Components/VoteButton";
import MainTextSection from "./Comment-Components/MainTextSection";
import SubmitButton from "./Comment-Components/SubmitButton";
import EditTextArea from "./Comment-Components/EditTextArea";
import { IconButton } from "./Comment-Components/IconButton";

function Comment(props) {
  //Context
  const dispatch = useContext(DispatchContext);
  const state = useContext(CommentsContext);
  //State
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const { state: text, handleChange } = useInputState(props.content);
  //Helper Functions
  const { editComment, handleUpVote, handleDownVote } = commentHelperFunctions(
    state,
    dispatch,
    text
  );
  //Edits selected comment/reply
  const editPress = () => {
    editComment(props, () => toggleIsEditing(false));
  };
  //Changes current comment and calls callback
  const buttonClick = (cb) => {
    changeCurrentComment(props).then((props) => cb(props));
  };
  //Returns a promis to make the dispatch occur in order.
  const changeCurrentComment = (props) => {
    return new Promise((resolve) => {
      const { commentId } = props;
      const isReply = props.isReply ? true : false;
      const replyId = props.replyId || null;
      dispatch({ type: "CHANGE_CURRENT_COMMENT", isReply, replyId, commentId });
      resolve(props);
    });
  };

  return (
    <div className="main-comment-container">
      {props.isReply && (
        <div
          className={`vertical-rule ${props.isLast ? "last-comment" : ""}`}
        ></div>
      )}
      <article className={`comment ${props.isReply && "reply"}`}>
        <aside>
          <VoteButton
            votes={props.score}
            pressUpVote={() => buttonClick((props) => handleUpVote(props))}
            pressDownVote={() => buttonClick((props) => handleDownVote(props))}
            isEditing={isEditing}
          />
        </aside>
        <main>
          <HeaderRow
            imgUrl={props.user.image.png}
            userName={props.user.username}
            createdAt={props.createdAt}
            isUser={props.isUser}
          >
            {props.isUser ? (
              <>
                <IconButton
                  type="Delete"
                  color={isEditing ? "#ffb8bb" : "#ed6468"}
                  hoverColor="#ffb8bb"
                  isEditing={isEditing}
                  handlePress={() =>
                    buttonClick(() =>
                      dispatch({
                        type: "TOGGLE_STATE",
                        key: "showModal",
                        show: true,
                      })
                    )
                  }
                />
                <IconButton
                  type="Edit"
                  color={isEditing ? "#c3c4ef" : "#5457b6"}
                  hoverColor="#c3c4ef"
                  isEditing={isEditing}
                  handlePress={() => buttonClick(() => toggleIsEditing(true))}
                />
              </>
            ) : (
              <IconButton
                type="Reply"
                color="#5457b6"
                hoverColor="#c3c4ef"
                handlePress={() =>
                  buttonClick(() =>
                    dispatch({
                      type: "TOGGLE_STATE",
                      key: "showReplyForm",
                      show: true,
                    })
                  )
                }
              />
            )}
          </HeaderRow>
          {props.isUser && isEditing && (
            <div className="is-user">
              <EditTextArea text={text} handleChange={handleChange} />
              <SubmitButton onClick={editPress}>Update</SubmitButton>
            </div>
          )}
          {!isEditing && (
            <MainTextSection
              content={props.content}
              replyingTo={props.isReply ? props.replyingTo : null}
            />
          )}
        </main>
      </article>
    </div>
  );
}

export default Comment;
