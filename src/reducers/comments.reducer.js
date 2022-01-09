import { v4 as uuid } from "uuid";

const getDateString = () => {
  const time = new Date(Date.now());
  const timeStampArr = time.toString().split(" ").slice(1, 4);
  return `${timeStampArr[0]} ${timeStampArr[1]}, ${timeStampArr[2]}`;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: uuid(),
            content: action.newComment,
            createdAt: getDateString(),
            score: 0,
            user: action.user,
            replies: [],
          },
        ],
      };
    case "EDIT_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.commentId) {
            return {
              ...comment,
              content: action.updatedComment,
            };
          }
          return comment;
        }),
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.commentId
        ),
      };
    case "ADD_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.commentId) {
            return {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: uuid(),
                  content: action.newReply,
                  createdAt: getDateString(),
                  score: 0,
                  replyingTo: action.replyTo,
                  user: action.user,
                },
              ],
            };
          }
          return comment;
        }),
      };
    case "EDIT_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.commentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === action.replyId) {
                  return {
                    ...reply,
                    content: action.updatedReply,
                  };
                }
                return reply;
              }),
            };
          }
          return comment;
        }),
      };
    case "DELETE_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.commentId) {
            return {
              ...comment,
              replies: comment.replies.filter(
                (reply) => reply.id !== action.replyId
              ),
            };
          }
          return comment;
        }),
      };
    case "CHANGE_CURRENT_COMMENT":
      return {
        ...state,
        currentComment: {
          replyId: action.replyId || null,
          commentId: action.commentId,
          isReply: action.isReply,
        },
      };
    case "CHANGE_USER":
      return {
        ...state,
        currentUser: action.user,
      };
    case "UP_VOTE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.commentId) {
            return {
              ...comment,
              score: comment.score + 1,
            };
          }
          return comment;
        }),
      };
    case "DOWN_VOTE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.commentId) {
            return {
              ...comment,
              score: comment.score - 1,
            };
          }
          return comment;
        }),
      };
    case "UP_VOTE_REPLY": {
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.commentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === action.replyId) {
                  return {
                    ...reply,
                    score: reply.score + 1,
                  };
                }
                return reply;
              }),
            };
          }
          return comment;
        }),
      };
    }
    case "DOWN_VOTE_REPLY": {
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.commentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === action.replyId) {
                  return {
                    ...reply,
                    score: reply.score - 1,
                  };
                }
                return reply;
              }),
            };
          }
          return comment;
        }),
      };
    }
    case "TOGGLE_STATE":
      return {
        ...state,
        [action.key]: action.show,
      };
    default:
      return state;
  }
};

export default reducer;
