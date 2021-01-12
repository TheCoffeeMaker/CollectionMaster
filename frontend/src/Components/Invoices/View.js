import React, { useEffect, useState } from "react";
import axios from "axios";

export function View(props) {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    axios.get("/invoices").then((inv) => {
      setInvoices(inv.data);
    });
  }, []);

  function DisplayInvoices(searchText) {
    if (searchText) {
      invoices = invoices.filter(function (invoice) {
        return invoice.order_id.toString().includes(searchText);
      });
    }
    return invoices.map((invoice) => (
      <tr key={invoice.id}>
        <td>{invoice.id}</td>
        <td>{invoice.order_id}</td>
        <td>{invoice.invoice_date}</td>
      </tr>
    ));
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Order Id</th>
          <th scope="col">Invoice Date</th>
        </tr>
      </thead>
      <tbody>{DisplayInvoices(props.searchText)}</tbody>
    </table>
  );
}
