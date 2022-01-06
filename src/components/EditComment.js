import SubmitButton from "./Comment-Components/SubmitButton";
import EditTextArea from "./Comment-Components/EditTextArea";
import HeaderRow from "./Comment-Components/HeaderRow";
import VoteButton from "./Comment-Components/VoteButton";
import { IconButton } from "./Comment-Components/IconButton";
const EditComment = (props) => {
  return (
    <div className="main-comment-container">
      {props.isReply && (
        <div
          className={`vertical-rule ${props.isLast ? "last-comment" : ""}`}
        ></div>
      )}
      {props.isUser ? (
        <article className={`edit-comment ${props.isReply ? "reply" : ""}`}>
          <aside>
            <VoteButton />
          </aside>
          <main>
            <HeaderRow isUser>
              <>
                <IconButton
                  type="Delete"
                  color="#ed6468"
                  hoverColor="#ffb8bb"
                />
                <IconButton type="Edit" color="#5457b6" hoverColor="#c3c4ef" />
              </>
            </HeaderRow>
            <div className="is-user">
              <EditTextArea />
              <SubmitButton>Update</SubmitButton>
            </div>
          </main>
        </article>
      ) : (
        <article className={`edit-comment ${props.isReply ? "reply" : ""}`}>
          <img src={`../images/avatars/image-amyrobson.png`} alt="amy-pic" />
          <EditTextArea />
          <SubmitButton>Reply</SubmitButton>
        </article>
      )}
    </div>
  );
};

export default EditComment;
