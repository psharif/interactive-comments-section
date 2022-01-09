const commentHelperFunctions = (state, dispatch, text) => {
  return {
    //Adds a new comment
    addComment: (props, cb) => {
      const isReply = props.isReply ? true : false;
      if (state.currentComment.replyId && isReply) {
        dispatch({
          type: "ADD_REPLY",
          commentId: state.currentComment.commentId,
          newReply: text,
          replyTo: state.comments
            .filter(
              (comment) => comment.id === state.currentComment.commentId
            )[0]
            .replies.filter(
              (reply) => reply.id === state.currentComment.replyId
            )[0].user.username,
          user: state.currentUser,
        });
      } else if (isReply) {
        dispatch({
          type: "ADD_REPLY",
          commentId: state.currentComment.commentId,
          newReply: text,
          replyTo: state.comments.filter(
            (comment) => comment.id === state.currentComment.commentId
          )[0].user.username,
          user: state.currentUser,
        });
      } else {
        dispatch({
          type: "ADD_COMMENT",
          newComment: text,
          user: state.currentUser,
        });
      }
      //Reset Toggle form to false
      dispatch({ type: "TOGGLE_STATE", key: "showReplyForm", show: false });
      //Reset the text in form as a call back
      cb();
    },
    //Edit the current comment
    editComment: (props, cb) => {
      if (props.isReply) {
        dispatch({
          type: "EDIT_REPLY",
          replyId: props.replyId,
          commentId: props.commentId,
          updatedReply: text,
        });
      } else {
        dispatch({
          type: "EDIT_COMMENT",
          commentId: props.commentId,
          updatedComment: text,
        });
      }
      //Toggle is Editing to false
      cb(false);
    },
    //Function to delete the comment or reply.
    deleteComment: () => {
      if (state.currentComment.isReply) {
        dispatch({
          type: "DELETE_REPLY",
          replyId: state.currentComment.replyId,
          commentId: state.currentComment.commentId,
        });
      } else {
        dispatch({
          type: "DELETE_COMMENT",
          commentId: state.currentComment.commentId,
        });
      }
      // //Set modal to false.
      dispatch({ type: "TOGGLE_STATE", key: "showModal", show: false });
    },
    //Function to Help with Up Voting
    handleUpVote: (props) => {
      if (props.isReply) {
        dispatch({
          type: "UP_VOTE_REPLY",
          replyId: props.replyId,
          commentId: props.commentId,
        });
      } else {
        dispatch({
          type: "UP_VOTE_COMMENT",
          commentId: props.commentId,
        });
      }
    },
    //Function to Help with Down Voting
    handleDownVote: (props) => {
      if (props.isReply) {
        dispatch({
          type: "DOWN_VOTE_REPLY",
          replyId: props.replyId,
          commentId: props.commentId,
        });
      } else {
        dispatch({
          type: "DOWN_VOTE_COMMENT",
          commentId: props.commentId,
        });
      }
    },
  };
};

export default commentHelperFunctions;
