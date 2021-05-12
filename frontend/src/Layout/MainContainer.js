import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PageRoute from '../templates/PageRoute';
import ProtectedPageRoute from '../templates/ProtectedPageRoute';

import { View as ViewLogin } from '../pages/Login/View';
import { View as ViewCustomers } from "../pages/Customers/View";
import { View as ViewEmployees } from "../pages/Employees/View";
import { View as ViewInvoices } from "../pages/Invoices/View";
import { View as ViewOrders } from "../pages/Orders/View";
import { View as ViewProducts } from "../pages/Products/View";
import { View as ViewSuppliers } from "../pages/Suppliers/View";



export function MainContainer() {

  // TO DO: fix the searching functionality after moving of the header
  const [searchText, setSearchText] = useState("");
  return (
    <Router>
      <Switch>
        <PageRoute path="/" exact={true}>
          <ViewLogin/>
        </PageRoute>
        <ProtectedPageRoute path="/customers">
          <ViewCustomers searchText={searchText} />
        </ProtectedPageRoute>
        <ProtectedPageRoute path="/employees">
          <ViewEmployees searchText={searchText} />
        </ProtectedPageRoute>
        <ProtectedPageRoute path="/products">
          <ViewProducts searchText={searchText} />
        </ProtectedPageRoute>
        <ProtectedPageRoute path="/invoices">
          <ViewInvoices searchText={searchText} />
        </ProtectedPageRoute>
        <ProtectedPageRoute path="/orders">
          <ViewOrders searchText={searchText} />
        </ProtectedPageRoute>
        <ProtectedPageRoute path="/suppliers">
          <ViewSuppliers searchText={searchText} />
        </ProtectedPageRoute>
      </Switch>
    </Router>
  );
}
