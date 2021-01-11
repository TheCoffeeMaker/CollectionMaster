import React, { useState } from 'react';
import axios from 'axios';

export function Edit (props) {
    const [customerFirstName, setCustomerFirstName] = useState(props.customer.first_name)
    const [customerLastName, setCustomerLastName] = useState(props.customer.last_name)
    const [customerCompany, setCustomerCompany] = useState(props.customer.company)
    const [customerId, setCustomerId] = useState(props.customer.id)

    function onChangeFirstName (event) {
        setCustomerFirstName(event.target.value)
    }

    function onChangeLastName (event) {
        setCustomerLastName(event.target.value)
    }

    function onChangeCompany (event) {
        setCustomerCompany(event.target.value)
    }

    function save () {
        axios
            .put('/customers/' + customerId,
                {
                    changes: {
                        first_name: customerFirstName,
                        last_name: customerLastName,
                        company: customerCompany
                    }
                })
            .then(cust => { console.log(cust.data) })
    }

    return (
        <div>
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" id="first_name" placeholder="First Name" defaultValue={customerFirstName}
                    onChange={onChangeFirstName} />
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" id="last_name" placeholder="Last Name" defaultValue={customerLastName}
                    onChange={onChangeLastName} />
            </div>
            <div className="mb-3">
                <label className="form-label">Company</label>
                <input type="text" className="form-control" id="company" placeholder="Company" defaultValue={customerCompany}
                    onChange={onChangeCompany} />
            </div>
            <div className="mb-3">
                <button onClick={save} type="submit" className="btn btn-primary">Save</button>
            </div>
        </div>
    )
}