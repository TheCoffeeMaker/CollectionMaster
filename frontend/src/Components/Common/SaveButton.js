export function SaveButton(props) {
  return (
    <button onClick={props.saveHandler} className="btn btn-primary">
      Save
    </button>
  );
}
