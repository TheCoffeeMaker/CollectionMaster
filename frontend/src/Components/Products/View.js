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
  const [products, setProducts] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);
  useEffect(() => {
    axios.get("/products").then((prod) => {
      setProducts(prod.data);
    });
  }, []);

  function onClick(index) {
    setSelectedRowIndex(index);
  }

  return (
    <Table aria-label="products">
      <TableHead>
        <TableRow>
          <TableCell component="th" scope="col">
            <Box fontWeight="bold">#</Box>
          </TableCell>
          <TableCell component="th" scope="col">
            <Box fontWeight="bold">Product Code</Box>
          </TableCell>
          <TableCell component="th" scope="col">
            <Box fontWeight="bold">Product Name</Box>
          </TableCell>
          <TableCell component="th" scope="col">
            <Box fontWeight="bold">Standard Cost</Box>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{products.map((product) => (
      <Row
        key={product.id}
        product={product}
        selectedRowIndex={selectedRowIndex}
        onClick={() => onClick(product.id)}
      />
    ))}</TableBody>
    </Table>
  );
}
