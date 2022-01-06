const HeaderRow = (props) => {
  return (
    <div className="header-row">
      <div className="left-content">
        <img src={`../images/avatars/image-amyrobson.png`} alt="amy-pic" />
        <p className="name">amyrobson</p>
        {props.isUser && <p className="is-user">you</p>}
        <p className="time">2 days ago</p>
      </div>
      <div className="right-content">{props.children}</div>
    </div>
  );
};

export default HeaderRow;
