import React, { useEffect, useState } from "react";
import { Row } from "./Row";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Box,
} from "@material-ui/core";

import { getEmployess } from '../../api/EmployeesApi';

export function View(props) {
  const [employees, setEmployees] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);

  useEffect(() => {
    getEmployess().then((emp) => {
      setEmployees(emp.data);
    });
  }, []);

  function onClick(index) {
    setSelectedRowIndex(index);
  }

  function DisplayEmployees(searchText) {
    let employeeList = employees;
    if (searchText) {
      employeeList = employeeList.filter(function (employee) {
        return (
          employee.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.first_name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          employee.company.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return employeeList.map((employee) => (
      <Row
        key={employee.id}
        employee={employee}
        selectedRowIndex={selectedRowIndex}
        onClick={() => onClick(employee.id)}
      />
    ));
  }

  return (
    <Table aria-label="employees">
      <TableHead>
        <TableRow>
          <TableCell component="th" scope="col">
            <Box fontWeight="bold">#</Box>
          </TableCell>
          <TableCell component="th" scope="col">
            <Box fontWeight="bold">First Name</Box>
          </TableCell>
          <TableCell component="th" scope="col">
            <Box fontWeight="bold">Last Name</Box>
          </TableCell>
          <TableCell component="th" scope="col">
            <Box fontWeight="bold">Company</Box>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{DisplayEmployees(props.searchText)}</TableBody>
    </Table>
  );
}
