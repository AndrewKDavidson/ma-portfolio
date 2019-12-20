import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import Header from "./headerComponent";
import AppDrawer from "./drawerComponent";
import ProjectList from "./projectListComponent";
import { yellow, pink, red, purple } from "@material-ui/core/colors";

const themeObject = {
  palette: {
    type: "light",
    primary: {
      light: "#000000",
      main: "#ff4400",
      dark: "#222222"
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      dark: "#ffffff",
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  }
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const {
    palette: { type }
  } = theme;
  const toggleDarkMode = () => {
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
        <AppDrawer />
        <ProjectList />
      </MuiThemeProvider>
    </>
  );
};
export default Main;
