import React, { Component } from "react";
import Header from "./headerComponent";
import AppDrawer from "./drawerComponent";
import ProjectList from "./projectListComponent";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <AppDrawer />
        <ProjectList />
      </>
    );
  }
}

export default Main;
