import { TableCell, TableRow } from "@material-ui/core";

export function Row(props) {
  return (
    <TableRow key={props.supplier.id}>
      <TableCell component="th" scope="row">
        {props.supplier.id}
      </TableCell>
      <TableCell>{props.supplier.first_name}</TableCell>
      <TableCell>{props.supplier.last_name}</TableCell>
      <TableCell>{props.supplier.company}</TableCell>
    </TableRow>
  );
}
