import Comment from "./Comment";
import EditComment from "./EditComment";
import { Modal } from "./Modal";
function CommentList() {
  return (
    <section className="comment-list">
      <Comment />
      <EditComment isReply isLast />
      <Modal />
    </section>
  );
}

export default CommentList;
