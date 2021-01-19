import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "./Row";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Box,
} from "@material-ui/core";

export function View() {
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
      <TableBody>{employees.map((employee) => (
      <Row
        key={employee.id}
        employee={employee}
        selectedRowIndex={selectedRowIndex}
        onClick={() => onClick(employee.id)}
      />
    ))}</TableBody>
    </Table>
  );
}
