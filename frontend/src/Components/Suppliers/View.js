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
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    axios.get("/suppliers").then((sup) => {
      setSuppliers(sup.data);
    });
  }, []);

  return (
    <Table aria-label="suppliers">
      <TableHead>
        <TableRow>
          <TableCell>
            <Box fontWeight="bold">#</Box>
          </TableCell>
          <TableCell>
            <Box fontWeight="bold">First Name</Box>
          </TableCell>
          <TableCell>
            <Box fontWeight="bold">Last Name</Box>
          </TableCell>
          <TableCell>
            <Box fontWeight="bold">Company</Box>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{suppliers.map((supplier) => (
      <Row key={supplier.id} supplier={supplier} />
    ))}</TableBody>
    </Table>
  );
}
