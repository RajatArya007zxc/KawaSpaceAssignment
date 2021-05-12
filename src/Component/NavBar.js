import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  root: {
    background: "linear-gradient(15deg,#FF8E53 30%, #FE6B8B 72% )",
  },
  logo: {
    flex: 1,

    fontWeight: "700",
    fontSize: "2em",
  },
  link: {
    minWidth: "20%",
    display: "flex",
    alignItems: "center",
    alignContent: "flex-end",
    justifyContent: "space-between",
  },
}));

function NavBar() {
  const classes = useStyle();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography className={classes.logo}>CHALLENGE</Typography>
        <div className={classes.link}>
          <Typography>VIWER</Typography>
          <Typography>ACCOUNT</Typography>
          <Typography>MANAGE</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
