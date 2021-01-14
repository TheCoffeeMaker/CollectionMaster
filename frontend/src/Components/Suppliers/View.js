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

  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    axios.get("/suppliers").then((sup) => {
      setSuppliers(sup.data);
    });
  }, []);

  function DisplaySuppliers(searchText) {
    let supplierList = suppliers;
    if (searchText) {
      supplierList = supplierList.filter(function (supplier) {
        return (
          supplier.first_name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          supplier.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
          supplier.company.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return supplierList.map((supplier) => (
      <Row key={supplier.id} supplier={supplier} />
    ));
  }

  return (
    <Table aria-label="suppliers">
      <TableHead>
        <TableRow>
          <TableCell className={classes.textBold}>#</TableCell>
          <TableCell className={classes.textBold}>First Name</TableCell>
          <TableCell className={classes.textBold}>Last Name</TableCell>
          <TableCell className={classes.textBold}>Company</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{DisplaySuppliers(props.searchText)}</TableBody>
    </Table>
  );
}
