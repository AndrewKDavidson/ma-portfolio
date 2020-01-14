import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import GooeyMenu from "./gooeyMenuComponent";
import AppDrawer from "./drawerComponent";
import Hidden from "@material-ui/core/Hidden";
import ProjectList from "./projectListComponent";
import { globalTheme } from "../styles/globalTheme.js";
import CssBaseline from "@material-ui/core/CssBaseline";

const useDarkMode = () => {
  const [theme, setTheme] = useState(globalTheme);

  const {
    palette: { type },
  } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light",
        background: {
          default: type === 'light' ? '#2E3045' : '#E2F1F1'
        },
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
      <CssBaseline />
        <Hidden xsDown>
          <AppDrawer onToggleDark={toggleDarkMode} />
        </Hidden>
        <Hidden smUp>
          <GooeyMenu onToggleDark={toggleDarkMode} />
        </Hidden>
        <ProjectList />
      </MuiThemeProvider>
    </>
  );
};
export default Main;
