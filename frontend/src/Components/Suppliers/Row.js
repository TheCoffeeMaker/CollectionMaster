export function Row(props) {
  return (
    <tr key={props.supplier.id}>
      <th scope="row">{props.supplier.id}</th>
      <td>{props.supplier.first_name}</td>
      <td>{props.supplier.last_name}</td>
      <td>{props.supplier.company}</td>
    </tr>
  );
}
