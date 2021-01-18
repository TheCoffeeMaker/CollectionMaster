import TextField from "@material-ui/core/TextField";

export function Edit(props) {
  return (
    <TextField
      type="text"
      className="form-control"
      id={props.id}
      placeholder={props.id}
      defaultValue={props.value}
      onChange={(e) => {
        props.onChangeHandler(e.target.value);
      }}
    />
  );
}
