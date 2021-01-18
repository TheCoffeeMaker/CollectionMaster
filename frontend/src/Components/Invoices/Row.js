import { TableCell, TableRow } from "@material-ui/core";

export function Row(props) {
  return (
    <TableRow key={props.row_number}>
      <TableCell component="th" scope="row">
        {props.row_number + 1}
      </TableCell>
      <TableCell>{props.order_id}</TableCell>
      <TableCell>{props.invoice_date}</TableCell>
    </TableRow>
  );
}
