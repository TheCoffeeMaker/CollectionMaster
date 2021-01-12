import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "./Row";

export function View(props) {
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
    if (searchText) {
      products = products.filter(function (product) {
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
    return products.map((product) => (
      <Row
        key={product.id}
        product={product}
        selectedRowIndex={selectedRowIndex}
        onClick={() => onClick(product.id)}
      />
    ));
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Code</th>
          <th scope="col">Product Name</th>
          <th scope="col">Standard Cost</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{DisplayProducts(props.searchText)}</tbody>
    </table>
  );
}
