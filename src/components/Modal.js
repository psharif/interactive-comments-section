import SubmitButton from "./Comment-Components/SubmitButton";
export const Modal = (props) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <h2>Delete Comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
        <div className="button-row">
          <SubmitButton className="cancel">No Cancel</SubmitButton>
          <SubmitButton className="delete">Yes, Delete</SubmitButton>
        </div>
      </div>
    </div>
  );
};
