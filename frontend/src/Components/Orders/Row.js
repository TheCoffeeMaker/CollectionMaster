import { useState } from "react"
import { SaveButton } from '../Common/SaveButton'
import { Cancel } from '../Common/CancelButton'
import { EditButton } from '../Common/EditButton'
import { Edit } from '../Common/Edit'
import axios from "axios"

export function Row(props) {
    const [isEditMode, setEditMode] = useState(false)
    const [updatedOrder, setUpdatedOrder] = useState(props.order)

    function onCancelClick() {
        setEditMode(false)
    }

    function onClick() {
        setEditMode(!isEditMode)
        props.onClick()
    }

    function save(order) {
        axios
            .put('/orders/' + order.id,
                {
                    changes: {
                        ship_name: order.ship_name,
                        ship_address: order.ship_address,
                        ship_city: order.ship_city
                    }
                })
            .then(cust => {
                console.log(cust.data)
                setEditMode(!isEditMode)
            })
    }

    function onPropertyChange(properyName, entity, value) {
        setUpdatedOrder({...entity, [properyName]: value})
    }

    return (
        <tr>
            <th scope="row">{props.order.id}</th>
            <td>
                {
                    isEditMode && props.selectedRowIndex === updatedOrder.id ?
                        <Edit value={updatedOrder.ship_name}
                            id={'ship_name'}
                            onChangeHandler={(newValue) => onPropertyChange('ship_name', updatedOrder, newValue)} /> :
                        updatedOrder.ship_name
                }
            </td>
            <td>
                {
                    isEditMode && props.selectedRowIndex === updatedOrder.id ?
                    <Edit value={updatedOrder.ship_address}
                        id={'ship_address'}
                        onChangeHandler={(newValue) => onPropertyChange('ship_address', updatedOrder, newValue)} /> :
                    updatedOrder.ship_address
                }
            </td>
            <td>
                {
                    isEditMode && props.selectedRowIndex === updatedOrder.id ?
                    <Edit value={updatedOrder.ship_city}
                        id={'ship_city'}
                        onChangeHandler={(newValue) => onPropertyChange('ship_city', updatedOrder, newValue)} /> :
                    updatedOrder.ship_city
                }
            </td>
            <td>{props.findEmployeeForOrder(props.order.employee_id)}</td>
            <td>{props.findCustomerForOrder(props.order.customer_id)}</td>
            <td>
                {
                    isEditMode && props.selectedRowIndex === updatedOrder.id ?
                        <div className="btn-group" role="group">
                            <SaveButton saveHandler={() => save(updatedOrder)} />
                            <Cancel onClick={onCancelClick}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </Cancel>
                        </div>
                        :
                        <EditButton onClick={onClick}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pen" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg>
                        </EditButton>
                }
            </td>
        </tr>
    )
}