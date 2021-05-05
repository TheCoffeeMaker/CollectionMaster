import React, { useEffect, useState } from "react";
import { getInvoices } from '../../api/InvoicesApi';
import { Row } from "./Row";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@material-ui/core";

export function View(props) {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    getInvoices().then((inv) => {
      setInvoices(inv.data);
    });
  }, []);

  function DisplayInvoices(searchText) {
    let invoiceList = invoices;
    if (searchText) {
      invoiceList = invoiceList.filter(function (invoice) {
        return invoice.order_id.toString().includes(searchText);
      });
    }
    return invoiceList.map((invoice, index) => (
      <Row
        key={invoice.id}
        order_id={invoice.order_id}
        invoice_date={invoice.invoice_date}
        row_number={index}
      />
    ));
  }

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
      <TableBody>{DisplayInvoices(props.searchText)}</TableBody>
    </Table>
  );
}
