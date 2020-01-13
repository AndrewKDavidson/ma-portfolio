import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.drawer[theme.palette.type],
    color: theme.palette.primary[theme.palette.type],
  },
  flex: {
    flex: 1
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",

  },
  drawerInner: {

  }
});

function AppDrawer(props) {
const { classes } = props;

  return (
    <Drawer classes={{paper: classes.paper}} variant="permanent" anchor="left" open>
      <div className={ classes.drawerHeader }></div>
      <div className={ classes.drawerInner }>
        <p>drawer content</p>
      </div>
    </Drawer>
  );
}

export default withStyles(styles, {withTheme:true})(AppDrawer);
