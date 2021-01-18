import axios from "axios";
import { Edit } from "../Common/Edit";
import { useState } from "react";
import { TableCell, TableRow } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";

export function Row(props) {
  const [isEditMode, setEditMode] = useState(false);
  const [updatedCustomer, setUpdatedCustomer] = useState(props.customer);

  function onPropertyChange(property, entity, updatedValue) {
    setUpdatedCustomer({ ...entity, [property]: updatedValue });
  }

  function save(customer) {
    axios
      .put(`/customers/${customer.id}`, {
        changes: {
          first_name: customer.first_name,
          last_name: customer.last_name,
          company: customer.company,
        },
      })
      .then((cust) => {
        console.log(cust.data);
        setEditMode(!isEditMode);
      });
  }

  function onClick() {
    setEditMode(true);
    props.onClick();
  }

  function onCancelClick() {
    setEditMode(false);
  }

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {updatedCustomer.id}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedCustomer.id ? (
          <Edit
            value={updatedCustomer.first_name}
            id={"first_name"}
            onChangeHandler={(newValue) =>
              onPropertyChange("first_name", updatedCustomer, newValue)
            }
          />
        ) : (
          updatedCustomer.first_name
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedCustomer.id ? (
          <Edit
            value={updatedCustomer.last_name}
            id={"last_name"}
            onChangeHandler={(newValue) =>
              onPropertyChange("last_name", updatedCustomer, newValue)
            }
          />
        ) : (
          updatedCustomer.last_name
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedCustomer.id ? (
          <Edit
            value={updatedCustomer.company}
            id={"company"}
            onChangeHandler={(newValue) =>
              onPropertyChange("company", updatedCustomer, newValue)
            }
          />
        ) : (
          updatedCustomer.company
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedCustomer.id ? (
          <div className="btn-group" role="group">
            <SaveIcon onClick={() => save(updatedCustomer)} />
            <CancelIcon onClick={onCancelClick} />
          </div>
        ) : (
          <EditIcon onClick={onClick} />
        )}
      </TableCell>
    </TableRow>
  );
}
