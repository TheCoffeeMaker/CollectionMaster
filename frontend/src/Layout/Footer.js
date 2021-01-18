import React from "react";
import { AppBar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

export function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" align="center" className={classes.appBar}>
      Copyright {new Date().getFullYear()}
    </AppBar>
  );
}

export default Footer;
