import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "./Row";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@material-ui/core";

export function View() {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    axios.get("/invoices").then((inv) => {
      setInvoices(inv.data);
    });
  }, []);

  return (
    <Table aria-label="invoices">
      <TableHead>
        <TableRow>
          <TableCell component="th">
            <Box fontWeight="bold">#</Box>
          </TableCell>
          <TableCell component="th">
            <Box fontWeight="bold">Order Id</Box>
          </TableCell>
          <TableCell component="th">
            <Box fontWeight="bold">Invoice date</Box>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{invoices.map((invoice, index) => (
      <Row
        key={invoice.id}
        order_id={invoice.order_id}
        invoice_date={invoice.invoice_date}
        row_number={index}
      />
    ))}</TableBody>
    </Table>
  );
}
