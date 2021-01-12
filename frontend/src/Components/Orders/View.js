import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "./Row";

export function View(props) {
  const [orders, setOrders] = useState([]);
  const [customerDetails, setCustomerDetails] = useState([]);
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);

  useEffect(() => {
    axios.get("/orders").then((ord) => {
      setOrders(ord.data);
    });
  }, []);
  useEffect(() => {
    if (orders.length) {
      let getCustomerPerOrder = Promise.all(
        orders.map((order) =>
          axios.get(`/customers/${order.customer_id}`).then((cust) => cust.data)
        )
      );
      getCustomerPerOrder.then((customerList) =>
        setCustomerDetails(customerList)
      );

      let getEmployeePerOrder = Promise.all(
        orders.map((order) =>
          axios.get(`/employees/${order.employee_id}`).then((empl) => empl.data)
        )
      );
      getEmployeePerOrder.then((employeeList) =>
        setEmployeeDetails(employeeList)
      );
    }
  }, [orders]);

  function findCustomerForOrder(customerId) {
    let customerItem = customerDetails.find((item) => item.id === customerId);
    return (
      (customerItem &&
        customerItem.last_name + " " + customerItem.first_name) || (
        <div className="splash"></div>
      )
    );
  }

  function findEmployeeForOrder(employeeId) {
    let employeeItem = employeeDetails.find((item) => item.id === employeeId);
    return (
      (employeeItem &&
        employeeItem.last_name + " " + employeeItem.first_name) || (
        <div className="splash"></div>
      )
    );
  }

  function onClick(index) {
    setSelectedRowIndex(index);
  }

  function DisplayOrders(searchText) {
    if (searchText) {
      orders = orders.filter(function (order) {
        return (
          order.ship_name.toLowerCase().includes(searchText.toLowerCase()) ||
          order.ship_address.toLowerCase().includes(searchText.toLowerCase()) ||
          order.ship_city.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return orders.map((order) => (
      <Row
        key={order.id}
        order={order}
        findCustomerForOrder={findCustomerForOrder}
        findEmployeeForOrder={findEmployeeForOrder}
        selectedRowIndex={selectedRowIndex}
        onClick={() => onClick(order.id)}
      />
    ));
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ship Name</th>
          <th scope="col">Ship Address</th>
          <th scope="col">Ship City</th>
          <th scope="col">Employee</th>
          <th scope="col">Customer</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{DisplayOrders(props.searchText)}</tbody>
    </table>
  );
}
