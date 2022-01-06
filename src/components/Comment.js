import HeaderRow from "./Comment-Components/HeaderRow";
import VoteButton from "./Comment-Components/VoteButton";
import MainTextSection from "./Comment-Components/MainTextSection";
import { IconButton } from "./Comment-Components/IconButton";
function Comment(props) {
  return (
    <div className="main-comment-container">
      {props.isReply && (
        <div
          className={`vertical-rule ${props.isLast ? "last-comment" : ""}`}
        ></div>
      )}
      <article className={`comment ${props.isReply ? "reply" : ""}`}>
        <aside>
          <VoteButton />
        </aside>
        <main>
          <HeaderRow>
            {props.isUser ? (
              <>
                <IconButton
                  type="Delete"
                  color="#ed6468"
                  hoverColor="#ffb8bb"
                />
                <IconButton type="Edit" color="#5457b6" hoverColor="#c3c4ef" />
              </>
            ) : (
              <IconButton type="Reply" color="#5457b6" hoverColor="#c3c4ef" />
            )}
          </HeaderRow>
          <MainTextSection />
        </main>
      </article>
    </div>
  );
}

export default Comment;
