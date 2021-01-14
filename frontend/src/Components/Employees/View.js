import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "./Row";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useStyle } from "../Common/CssStyles";

export function View(props) {
  const classes = useStyle();

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
    <Table className="table table-striped">
      <TableHead>
        <TableRow>
          <TableCell className={classes.textBold} component="th" scope="col">
            #
          </TableCell>
          <TableCell className={classes.textBold} component="th" scope="col">
            First Name
          </TableCell>
          <TableCell className={classes.textBold} component="th" scope="col">
            Last Name
          </TableCell>
          <TableCell className={classes.textBold} component="th" scope="col">
            Company
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{DisplayEmployees(props.searchText)}</TableBody>
    </Table>
  );
}
