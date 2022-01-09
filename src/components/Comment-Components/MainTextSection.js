function MainTextSection({ content, replyingTo }) {
  return (
    <p className="main-text-section">
      {replyingTo && <span className="replying-to">{`@${replyingTo} `}</span>}
      {content}
    </p>
  );
}

export default MainTextSection;
