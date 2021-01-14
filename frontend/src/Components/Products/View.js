import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "./Row";
import { Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";
import { useStyle } from '../Common/CssStyles';

export function View(props) {
  const classes = useStyle();

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

  function DisplayProducts(searchText) {
    let productList = products;
    if (searchText) {
      productList = productList.filter(function (product) {
        return (
          product.product_code
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          product.product_name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          product.standard_cost.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return productList.map((product) => (
      <Row
        key={product.id}
        product={product}
        selectedRowIndex={selectedRowIndex}
        onClick={() => onClick(product.id)}
      />
    ));
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={classes.textBold} component="th" scope="col">#</TableCell>
          <TableCell className={classes.textBold} component="th" scope="col">Product Code</TableCell>
          <TableCell className={classes.textBold} component="th" scope="col">Product Name</TableCell>
          <TableCell className={classes.textBold} component="th" scope="col">Standard Cost</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{DisplayProducts(props.searchText)}</TableBody>
    </Table>
  );
}
