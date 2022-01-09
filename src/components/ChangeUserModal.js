import React, { useContext } from "react";
import { DispatchContext } from "../context/comments.context";

export const ChangeUserModal = ({ show, users }) => {
  //Context
  const dispatch = useContext(DispatchContext);
  //Changes the user and if open closes any reply forms.
  const selectUser = (id) => {
    const user = users.filter((user) => user.id === id)[0];
    dispatch({ type: "CHANGE_USER", user: user });
    dispatch({ type: "TOGGLE_STATE", key: "showChangeUserModal", show: false });
    dispatch({ type: "TOGGLE_STATE", key: "showReplyForm", show: false });
  };

  return (
    <div id="myModal" className={`modal ${show && "show"}`}>
      <div className="modal-content change-modal-content">
        <p className="change-user-title">Change User:</p>
        <ul>
          <li onClick={() => selectUser(users[0].id)}>
            <img src={users[0].image.png} alt={`${users[0].username}-pic`} />
            <p>{users[0].username}</p>
          </li>
          <hr />
          <li onClick={() => selectUser(users[1].id)}>
            <img src={users[1].image.png} alt={`${users[1].username}-pic`} />
            <p>{users[1].username}</p>
          </li>
          <hr />
          <li onClick={() => selectUser(users[2].id)}>
            <img src={users[2].image.png} alt={`${users[2].username}-pic`} />
            <p>{users[2].username}</p>
          </li>
          <hr />
          <li onClick={() => selectUser(users[3].id)}>
            <img src={users[3].image.png} alt={`${users[3].username}-pic`} />
            <p>{users[3].username}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
