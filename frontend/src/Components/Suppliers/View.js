import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "./Row";

export function View(props) {
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    axios.get("/suppliers").then((sup) => {
      setSuppliers(sup.data);
    });
  }, []);

  function DisplaySuppliers(searchText) {
    if (searchText) {
      suppliers = suppliers.filter(function (supplier) {
        return (
          supplier.first_name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          supplier.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
          supplier.company.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return suppliers.map((supplier) => (
      <Row key={supplier.id} supplier={supplier} />
    ));
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Company</th>
        </tr>
      </thead>
      <tbody>{DisplaySuppliers(props.searchText)}</tbody>
    </table>
  );
}
