import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import {
  NavLink,
} from "react-router-dom";

const useStyles = makeStyles(() => ({
    appBarText: {
      flexGrow: 1,
      color: "#ffffff",
      textDecoration: "none",
    },
  }));


const Header = () => {
    const classes = useStyles();

    const handleLogOut = () => {
      localStorage.removeItem('loggedIn');
    }

    return (
        <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.appBarText}
            component={NavLink}
            to="/"
            onClick={handleLogOut}
          >
            Log Out
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
          {/** This should be passed trough props and handled outside - for now it will be inactive */}
          {/* <Search onChange={(searchText) => setSearchText(searchText)} />  */}
        </Toolbar>
      </AppBar>
    );
}

export default Header;