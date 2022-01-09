const HeaderRow = (props) => {
  return (
    <div className="header-row">
      <div className="left-content">
        <img src={`.${props.imgUrl}`} alt="-pic" />
        <p className="name">{props.userName}</p>
        {props.isUser && <p className="is-user">you</p>}
        <p className="time">{props.createdAt}</p>
      </div>
      <div className="right-content">{props.children}</div>
    </div>
  );
};

export default HeaderRow;
