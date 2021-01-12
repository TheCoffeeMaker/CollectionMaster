import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Search } from "../Components/Common/Search";
import { View as ViewCustomers } from "../Components/Customers/View";
import { View as ViewEmployees } from "../Components/Employees/View";
import { View as ViewInvoices } from "../Components/Invoices/View";
import { View as ViewOrders } from "../Components/Orders/View";
import { View as ViewProducts } from "../Components/Products/View";
import { View as ViewSuppliers } from "../Components/Suppliers/View";

export function MainContainer() {
  const [searchText, setSearchText] = useState("");
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Main Menu
          </NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/customers"
                >
                  Customers list
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/employees"
                >
                  Employees list
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/invoices"
                >
                  Invoices
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/orders"
                >
                  Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/suppliers"
                >
                  Suppliers
                </NavLink>
              </li>
            </ul>
          </div>
          <Search onChange={(searchText) => setSearchText(searchText)} />
        </div>
      </nav>
      <Switch>
        <Route path="/customers">
          <ViewCustomers searchText={searchText} />
        </Route>
        <Route path="/employees">
          <ViewEmployees searchText={searchText} />
        </Route>
        <Route path="/products">
          <ViewProducts searchText={searchText} />
        </Route>
        <Route path="/invoices">
          <ViewInvoices searchText={searchText} />
        </Route>
        <Route path="/orders">
          <ViewOrders searchText={searchText} />
        </Route>
        <Route path="/suppliers">
          <ViewSuppliers searchText={searchText} />
        </Route>
      </Switch>
    </Router>
  );
}
