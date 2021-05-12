import { useState } from "react";
import { Edit } from "../Common/Edit";
import { saveOrder } from '../../api/OrdersApi';
import { TableRow, TableCell } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

export function Row(props) {
  const [isEditMode, setEditMode] = useState(false);
  const [updatedOrder, setUpdatedOrder] = useState(props.order);

  function onCancelClick() {
    setEditMode(false);
  }

  function onClick() {
    setEditMode(!isEditMode);
    props.onClick();
  }

  function save(order) {
    const data = {
      changes: {
        ship_name: order.ship_name,
        ship_address: order.ship_address,
        ship_city: order.ship_city,
      },
    };
    
    saveOrder(order.id, data)
      .then((cust) => {
        console.log(cust.data);
        setEditMode(!isEditMode);
      });
  }

  function onPropertyChange(properyName, entity, value) {
    setUpdatedOrder({ ...entity, [properyName]: value });
  }

  return (
    <TableRow>
      <TableCell component="th" scope="row">{props.order.id}</TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedOrder.id ? (
          <Edit
            value={updatedOrder.ship_name}
            id={"ship_name"}
            onChangeHandler={(newValue) =>
              onPropertyChange("ship_name", updatedOrder, newValue)
            }
          />
        ) : (
          updatedOrder.ship_name
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedOrder.id ? (
          <Edit
            value={updatedOrder.ship_address}
            id={"ship_address"}
            onChangeHandler={(newValue) =>
              onPropertyChange("ship_address", updatedOrder, newValue)
            }
          />
        ) : (
          updatedOrder.ship_address
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedOrder.id ? (
          <Edit
            value={updatedOrder.ship_city}
            id={"ship_city"}
            onChangeHandler={(newValue) =>
              onPropertyChange("ship_city", updatedOrder, newValue)
            }
          />
        ) : (
          updatedOrder.ship_city
        )}
      </TableCell>
      <TableCell>{props.findEmployeeForOrder(props.order.employee_id)}</TableCell>
      <TableCell>{props.findCustomerForOrder(props.order.customer_id)}</TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedOrder.id ? (
          <div className="btn-group" role="group">
            <SaveIcon onClick={() => save(updatedOrder)} />
            <CancelIcon onClick={onCancelClick} />
          </div>
        ) : (
          <EditIcon onClick={onClick} />
        )}
      </TableCell>
    </TableRow>
  );
}
