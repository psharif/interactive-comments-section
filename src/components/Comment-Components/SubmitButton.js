function SubmitButton(props) {
  return (
    <button className="submit-button" {...props}>
      {props.children}
    </button>
  );
}

export default SubmitButton;
