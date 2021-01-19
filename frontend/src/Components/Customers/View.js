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
  const [customers, setCustomers] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);

  useEffect(() => {
    axios.get("/customers").then((cust) => {
      setCustomers(cust.data);
    });
  }, []);

  function onClick(index) {
    setSelectedRowIndex(index);
  }

  return (
    <Table aria-label="customers">
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
          <TableCell component="th" scope="col"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{customers.map((customer) => (
      <Row
        key={customer.id}
        customer={customer}
        selectedRowIndex={selectedRowIndex}
        onClick={() => onClick(customer.id)}
      />
    ))}</TableBody>
    </Table>
  );
}
