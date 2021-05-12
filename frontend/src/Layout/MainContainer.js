import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PageRoute from '../templates/PageRoute';
import ProtectedPageRoute from '../templates/ProtectedPageRoute';

import { View as ViewLogin } from '../components/Login/View';
import { View as ViewCustomers } from "../components/Customers/View";
import { View as ViewEmployees } from "../components/Employees/View";
import { View as ViewInvoices } from "../components/Invoices/View";
import { View as ViewOrders } from "../components/Orders/View";
import { View as ViewProducts } from "../components/Products/View";
import { View as ViewSuppliers } from "../components/Suppliers/View";
import { View as ViewAppointment } from "../components/Appointment/View";
import { View as AppointmentsDayView } from '../components/AppointmentsDayView/View';

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
