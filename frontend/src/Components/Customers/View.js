import React, { useEffect, useState } from "react";
import { getCustomers } from '../../api/CustomersApi';
import { Row } from "./Row";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Box,
} from "@material-ui/core";

export function View(props) {
  const [customers, setCustomers] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);

  useEffect(() => {
    getCustomers().then((cust) => {
      setCustomers(cust.data);
    });
  }, []);

  function onClick(index) {
    setSelectedRowIndex(index);
  }

  function DisplayCustomers(searchText) {
    let customerList = customers;
    if (searchText) {
      customerList = customerList.filter(function (customer) {
        return (
          customer.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
          customer.first_name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          customer.company.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return customerList.map((customer) => (
      <Row
        key={customer.id}
        customer={customer}
        selectedRowIndex={selectedRowIndex}
        onClick={() => onClick(customer.id)}
      />
    ));
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
      <TableBody>{DisplayCustomers(props.searchText)}</TableBody>
    </Table>
  );
}
