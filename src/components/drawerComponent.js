import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    color: theme.palette.primary.main
  },
  drawerInner: {
    color: theme.palette.primary.main
  }
});

function AppDrawer(props) {
const { classes } = props;
  return (
    <Drawer variant="permanent" anchor="left" open>
      <div className={classes.drawerHeader}></div>
      <div className={classes.drawerInner}>
        <p>drawer content</p>
      </div>
    </Drawer>
  );
}

export default withStyles(styles, {withTheme:true})(AppDrawer);
