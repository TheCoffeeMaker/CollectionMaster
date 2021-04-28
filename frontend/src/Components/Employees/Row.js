import { saveEmployee } from '../../api/EmployeesApi';
import { Edit } from "../Common/Edit";
import { useState } from "react";
import { TableRow, TableCell } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";

export function Row(props) {
  const [isEditMode, setEditMode] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState(props.employee);

  function onPropertyChange(property, entity, updatedValue) {
    setUpdatedEmployee({ ...entity, [property]: updatedValue });
  }

  function save(employee) {
    const data = {
      changes: {
        first_name: employee.first_name,
        last_name: employee.last_name,
        company: employee.company,
      },
    };

    saveEmployee(employee.id, data).then((cust) => {
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
        {updatedEmployee.id}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedEmployee.id ? (
          <Edit
            value={updatedEmployee.first_name}
            id={"first_name"}
            onChangeHandler={(newValue) =>
              onPropertyChange("first_name", updatedEmployee, newValue)
            }
          />
        ) : (
          updatedEmployee.first_name
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedEmployee.id ? (
          <Edit
            value={updatedEmployee.last_name}
            id={"last_name"}
            onChangeHandler={(newValue) =>
              onPropertyChange("last_name", updatedEmployee, newValue)
            }
          />
        ) : (
          updatedEmployee.last_name
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedEmployee.id ? (
          <Edit
            value={updatedEmployee.company}
            id={"company"}
            onChangeHandler={(newValue) =>
              onPropertyChange("company", updatedEmployee, newValue)
            }
          />
        ) : (
          updatedEmployee.company
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedEmployee.id ? (
          <div className="btn-group" role="group">
            <SaveIcon onClick={() => save(updatedEmployee)} />
            <CancelIcon onClick={onCancelClick} />
          </div>
        ) : (
          <EditIcon onClick={onClick} />
        )}
      </TableCell>
    </TableRow>
  );
}
