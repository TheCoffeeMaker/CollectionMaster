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
          <TableCell
            className={classes.textBold}
            component="th"
            scope="col"
          ></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{DisplayCustomers(props.searchText)}</TableBody>
    </Table>
  );
}
