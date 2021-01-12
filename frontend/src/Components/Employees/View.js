import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "./Row";

export function View(props) {
  const [employees, setEmployees] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);

  useEffect(() => {
    axios.get("/employees").then((emp) => {
      setEmployees(emp.data);
    });
  }, []);

  function onClick(index) {
    setSelectedRowIndex(index);
  }

  function DisplayEmployees(searchText) {
    if (searchText) {
      employees = employees.filter(function (employee) {
        return (
          employee.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.first_name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          employee.company.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return employees.map((employee) => (
      <Row
        key={employee.id}
        employee={employee}
        selectedRowIndex={selectedRowIndex}
        onClick={() => onClick(employee.id)}
      />
    ));
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Company</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{DisplayEmployees(props.searchText)}</tbody>
    </table>
  );
}
