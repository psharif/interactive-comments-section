function VoteButton({ votes, pressUpVote, pressDownVote, isEditing }) {
  return (
    <div className="vote-button">
      <button
        onClick={pressUpVote}
        disabled={isEditing ? true : ""}
        className={`${isEditing ? "editing" : ""}`}
      >
        <i className="fas fa-plus" />
      </button>
      <p className={`${isEditing ? "editing" : ""}`}>{votes}</p>
      <button
        onClick={pressDownVote}
        disabled={isEditing ? true : ""}
        className={`${isEditing ? "editing" : ""}`}
      >
        <i className="fas fa-minus" />
      </button>
    </div>
  );
}
export default VoteButton;
