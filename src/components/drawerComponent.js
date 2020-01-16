import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from '@material-ui/core/styles';
import DarkModeSwitch from './darkModeSwitchComponent';

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.drawer[theme.palette.type],
    color: theme.palette.primary[theme.palette.type],
    marginLeft: '8px'
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

function AppDrawer({onToggleDark, classes}) {

  return (
    <>
      <Drawer classes={{paper: classes.paper}} variant="permanent" anchor="left" open>
        <div className={ classes.drawerHeader }></div>
        <div className={ classes.drawerInner }>
          <DarkModeSwitch onToggleDark={onToggleDark} />
          <p>drawer content</p>
        </div>
      </Drawer>
    </>
  );
}

export default withStyles(styles, {withTheme:true})(AppDrawer);
