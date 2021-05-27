import { useState } from "react";
import { saveProduct } from '../../api/ProductsApi';
import { Edit } from "../Common/Edit";
import { TableRow, TableCell } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';

export function Row(props) {
  const [isEditMode, setEditMode] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(props.product);

  function onPropertyChange(property, entity, updatedValue) {
    setUpdatedProduct({ ...entity, [property]: updatedValue });
  }

  function onCancelClick() {
    setEditMode(!isEditMode);
  }

  function onClick() {
    setEditMode(!isEditMode);
    props.onClick();
  }

  function save(product) {
    const data = {
      changes: {
        product_code: product.product_code,
        product_name: product.product_name,
        standard_cost: product.standard_cost,
      },
    };

    saveProduct(product.id, data).then((cust) => {
      console.log(cust.data);
      setEditMode(!isEditMode);
    });
  }

  return (
    <TableRow>
      <TableCell component="th" scope="row">{updatedProduct.id}</TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedProduct.id ? (
          <Edit
            value={updatedProduct.product_code}
            id={"product_code"}
            onChangeHandler={(newValue) =>
              onPropertyChange("product_code", updatedProduct, newValue)
            }
          />
        ) : (
          updatedProduct.product_code
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedProduct.id ? (
          <Edit
            value={updatedProduct.product_name}
            id={"product_name"}
            onChangeHandler={(newValue) =>
              onPropertyChange("product_name", updatedProduct, newValue)
            }
          />
        ) : (
          updatedProduct.product_name
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedProduct.id ? (
          <Edit
            value={updatedProduct.standard_cost}
            id={"standard_cost"}
            onChangeHandler={(newValue) =>
              onPropertyChange("standard_cost", updatedProduct, newValue)
            }
          />
        ) : (
          updatedProduct.standard_cost
        )}
      </TableCell>
      <TableCell>
        {isEditMode && props.selectedRowIndex === updatedProduct.id ? (
          <div className="btn-group" role="group">
            <SaveIcon onClick={() => save(updatedProduct)} />
            <CancelIcon onClick={onCancelClick} />
          </div>
        ) : (
          <EditIcon onClick={onClick} />
        )}
      </TableCell>
    </TableRow>
  );
}
