import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";

const styles = {
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
    padding: "0 8px"
  }
};

class AppDrawer extends Component {
  render() {
    return (
      <Drawer variant="permanent" anchor="left" open>
        <div className={styles.drawerHeader}></div>
        <div className={styles.drawerInner}>
          <p>drawer content</p>
        </div>
      </Drawer>
    );
  }
}

export default AppDrawer;
