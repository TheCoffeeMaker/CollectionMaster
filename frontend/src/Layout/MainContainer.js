import React, {createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PageRoute from '../templates/PageRoute';
import ProtectedDashboard from '../templates/ProtectedDashboard';

import { View as ViewLogin } from '../pages/Login/View';
import { View as ViewCustomers } from "../pages/Customers/View";
import { View as ViewEmployees } from "../pages/Employees/View";
import { View as ViewInvoices } from "../pages/Invoices/View";
import { View as ViewOrders } from "../pages/Orders/View";
import { View as ViewProducts } from "../pages/Products/View";
import { View as ViewSuppliers } from "../pages/Suppliers/View";

import './index.scss';


export const SearchContext = createContext("");

export function MainContainer() {


  // TO DO: fix the searching functionality after moving of the header
  const [searchText, setSearchText] = useState("");


  return (
    <SearchContext.Provider value={{setSearchText}}>
    <Router>
      <Switch>
        <PageRoute path="/" exact={true}>
          <ViewLogin/>
        </PageRoute>
        <ProtectedDashboard path="/customers">
          <ViewCustomers searchText={searchText} />
        </ProtectedDashboard>
        <ProtectedDashboard path="/employees">
          <ViewEmployees searchText={searchText} />
        </ProtectedDashboard>
        <ProtectedDashboard path="/products">
          <ViewProducts searchText={searchText} />
        </ProtectedDashboard>
        <ProtectedDashboard path="/invoices">
          <ViewInvoices searchText={searchText} />
        </ProtectedDashboard>
        <ProtectedDashboard path="/orders">
          <ViewOrders searchText={searchText} />
        </ProtectedDashboard>
        <ProtectedDashboard path="/suppliers">
          <ViewSuppliers searchText={searchText} />
        </ProtectedDashboard>
      </Switch>
    </Router>
    </SearchContext.Provider>
  );
}
