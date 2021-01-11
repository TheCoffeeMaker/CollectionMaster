import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from './Row';

export function View(props) {
    const [customers, setCustomers] = useState([])
    const [selectedRowIndex, setSelectedRowIndex] = useState(0)

    useEffect(() => { axios.get('/customers').then(cust => { setCustomers(cust.data) }) }, [])

    function onClick(index) {
        setSelectedRowIndex(index)
    }

    function DisplayCustomers(searchText) {
        let customerList = customers
        if (searchText) {
            customerList = customerList.filter(function (customer) {
                return customer.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
                customer.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                customer.company.toLowerCase().includes(searchText.toLowerCase())
            })
        }
        return customerList.map(customer =>
        (
            <Row key={customer.id}
                customer={customer}
                selectedRowIndex={selectedRowIndex}
                onClick={() => onClick(customer.id)}
            />
        ))
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Company</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {DisplayCustomers(props.searchText)}
            </tbody>
        </table>
    )
}