import React, { useContext } from "react";
import { CommentsContext } from "../context/comments.context";
import Comment from "./Comment";
import { DeleteModal } from "./DeleteModal";
import { ChangeUserModal } from "./ChangeUserModal";
import AddCommentForm from "./AddCommentForm";

function CommentList() {
  //Context
  const state = useContext(CommentsContext);
  return (
    <section className="comment-list">
      {state.comments
        .sort((a, b) => b.score - a.score) //Sorts based on Vote Scores.
        .map((comment) => {
          return (
            // To add a key to a fragment, we have to use the long-hand version
            // rather than <> </>, we have to use <React.Fragment>
            <React.Fragment key={comment.id}>
              <Comment
                key={comment.id}
                {...comment}
                commentId={comment.id}
                isUser={comment.user.username === state.currentUser.username}
              />
              {/* Shows Add Reply form based on current comment */}
              {!state.currentComment.isReply &&
                state.currentComment.commentId === comment.id &&
                state.showReplyForm && (
                  <AddCommentForm user={state.currentUser} isReply />
                )}
              {comment.replies
                .sort(
                  // Sorts it by Day it was created
                  (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
                )
                .map((reply, indx) => {
                  return (
                    <React.Fragment key={reply.id}>
                      <Comment
                        key={reply.id}
                        {...reply}
                        isReply
                        isUser={
                          reply.user.username === state.currentUser.username
                        }
                        isLast={indx === comment.replies.length - 1}
                        replyId={reply.id}
                        commentId={comment.id}
                      />
                      {/* Shows Add Reply form based on current comment */}
                      {state.currentComment.isReply &&
                        state.currentComment.replyId === reply.id &&
                        state.showReplyForm && (
                          <AddCommentForm user={state.currentUser} isReply />
                        )}
                    </React.Fragment>
                  );
                })}
            </React.Fragment>
          );
        })}
      <DeleteModal show={state.showModal} />
      <AddCommentForm user={state.currentUser} />
      <ChangeUserModal users={state.users} show={state.showChangeUserModal} />
    </section>
  );
}

export default CommentList;
