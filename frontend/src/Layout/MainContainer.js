import React, { useState } from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { View as ViewCustomers } from "../Components/Customers/View";
import { View as ViewEmployees } from "../Components/Employees/View";
import { View as ViewInvoices } from "../Components/Invoices/View";
import { View as ViewOrders } from "../Components/Orders/View";
import { View as ViewProducts } from "../Components/Products/View";
import { View as ViewSuppliers } from "../Components/Suppliers/View";

const useStyles = makeStyles(() => ({
  appBarText: {
    flexGrow: 1,
    color: "#ffffff",
    textDecoration: "none",
  },
}));

export function MainContainer() {
  const classes = useStyles();

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.appBarText}
            component={NavLink}
            to="/"
          >
            Main Menu
          </Typography>
          <Typography
            variant="h6"
            className={classes.appBarText}
            component={NavLink}
            to="/customers"
          >
            Customers List
          </Typography>
          <Typography
            variant="h6"
            className={classes.appBarText}
            component={NavLink}
            to="/employees"
          >
            Employees List
          </Typography>
          <Typography
            variant="h6"
            className={classes.appBarText}
            component={NavLink}
            to="/products"
          >
            Products
          </Typography>
          <Typography
            variant="h6"
            className={classes.appBarText}
            component={NavLink}
            to="/invoices"
          >
            Invoices
          </Typography>
          <Typography
            variant="h6"
            className={classes.appBarText}
            component={NavLink}
            to="/orders"
          >
            Orders
          </Typography>
          <Typography
            variant="h6"
            className={classes.appBarText}
            component={NavLink}
            to="/suppliers"
          >
            Suppliers
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/customers">
          <ViewCustomers />
        </Route>
        <Route path="/employees">
          <ViewEmployees />
        </Route>
        <Route path="/products">
          <ViewProducts />
        </Route>
        <Route path="/invoices">
          <ViewInvoices />
        </Route>
        <Route path="/orders">
          <ViewOrders />
        </Route>
        <Route path="/suppliers">
          <ViewSuppliers />
        </Route>
      </Switch>
    </Router>
  );
}
