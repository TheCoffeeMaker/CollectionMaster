import { useState } from "react";
import axios from "axios";

import { SaveButton } from "../Common/SaveButton";
import { EditButton } from "../Common/EditButton";
import { Cancel } from "../Common/CancelButton";
import { Edit } from "../Common/Edit";

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
    axios
      .put("/products/" + product.id, {
        changes: {
          product_code: product.product_code,
          product_name: product.product_name,
          standard_cost: product.standard_cost,
        },
      })
      .then((cust) => {
        console.log(cust.data);
        setEditMode(!isEditMode);
      });
  }

  return (
    <tr>
      <th scope="row">{updatedProduct.id}</th>
      <td>
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
      </td>
      <td>
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
      </td>
      <td>
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
      </td>
      <td>
        {isEditMode && props.selectedRowIndex === updatedProduct.id ? (
          <div className="btn-group" role="group">
            <SaveButton saveHandler={() => save(updatedProduct)} />
            <Cancel onClick={onCancelClick}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-x-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </Cancel>
          </div>
        ) : (
          <EditButton onClick={onClick}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-pen"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
              />
            </svg>
          </EditButton>
        )}
      </td>
    </tr>
  );
}
