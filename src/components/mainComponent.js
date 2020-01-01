import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import Header from "./headerComponent";
import AppDrawer from "./drawerComponent";
import Hidden from "@material-ui/core/Hidden";
import ProjectList from "./projectListComponent";
import { globalTheme } from "../styles/globalTheme.js";

const useDarkMode = () => {
  const [theme, setTheme] = useState(globalTheme);

  const {
    palette: { type }
  } = theme;
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light"
      }
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

const Main = () => {
  const [theme, toggleDarkMode] = useDarkMode();

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);

  return (
    <>
      <MuiThemeProvider theme={muiTheme}>
        <Header onToggleDark={toggleDarkMode} />
        <Hidden xsDown>
          <AppDrawer />
        </Hidden>
        <ProjectList />
      </MuiThemeProvider>
    </>
  );
};
export default Main;
