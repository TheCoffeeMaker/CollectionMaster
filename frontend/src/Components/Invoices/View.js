import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "./Row";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useStyle } from '../Common/CssStyles';

export function View(props) {
  const classes = useStyle();

  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    axios.get("/invoices").then((inv) => {
      setInvoices(inv.data);
    });
  }, []);

  function DisplayInvoices(searchText) {
    let invoiceList = invoices;
    if (searchText) {
      invoiceList = invoiceList.filter(function (invoice) {
        return (
          invoice.order_id.toString().includes(searchText)
        );
      });
    }
    return invoiceList.map((invoice, index) => (
      <Row key={invoice.id}
        order_id={invoice.order_id}
        invoice_date={invoice.invoice_date}
        row_number={index}
      />
    ));
  }

  return (
    <Table aria-label="table table-striped">
      <TableHead>
        <TableRow>
          <TableCell component="th" className={classes.textBold}>#</TableCell>
          <TableCell component="th" className={classes.textBold}>Order Id</TableCell>
          <TableCell component="th" className={classes.textBold}>Invoice date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{DisplayInvoices(props.searchText)}</TableBody>
    </Table>
  );
}
