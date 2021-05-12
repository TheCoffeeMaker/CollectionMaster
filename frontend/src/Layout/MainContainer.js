import React, { useState } from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
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
import { View as ViewAppointment } from "../Components/Appointment/View";
import { View as AppointmentsDayView } from '../Components/AppointmentsDayView/View';

const useStyles = makeStyles(() => ({
  appBarText: {
    flexGrow: 1,
    color: "#ffffff",
    textDecoration: "none",
  },
}));

export function MainContainer() {
  const classes = useStyles();

  const appointmentsList = [
    { name: 'Alex', lastName:'Pop', phoneNumber:'00000'},
    { name: 'Pisica', lastName:'Andreea', phoneNumber:'00001'},
 ];

  const [searchText, setSearchText] = useState("");
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
          <Search onChange={(searchText) => setSearchText(searchText)} />
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact={true}>
          <ViewAppointment customer={{name: 'Alex', lastName: 'Pop', phoneNumber: '123'}}/>
          <AppointmentsDayView id="testAppointsmeents" appointments={appointmentsList}/>
        </Route>
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
