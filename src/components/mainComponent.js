import React, { useState } from "react";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import GooeyMenu from "./gooeyMenuComponent";
import AppDrawer from "./drawerComponent";
import Hidden from "@material-ui/core/Hidden";
import Heading from './headingComponent';
import ProjectList from "./projectListComponent";
import { globalTheme } from "../styles/globalTheme.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollComponent from './scrollIndicatorComponent';

const useDarkMode = () => {
  const [theme, setTheme] = useState(globalTheme);

  const {
    palette: { type },
  } = theme;
  //toggle between light and dark mode
  const toggleDarkMode = () => {
    //create new theme based on light or dark mode
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        // modify type to light or dark in updated theme
        type: type === "light" ? "dark" : "light",
        background: {
          // modify default body background colors here and default in globalTheme
          default: type === 'light' ? '#1A2429' : '##F8FFFF'
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
  let muiTheme = createMuiTheme(theme);

  //making typography fonts responsive (can modify sizes in theme if desired)
  muiTheme = responsiveFontSizes(muiTheme);

  return (
    <>
      {/* pass theme to entire component */}
      <MuiThemeProvider theme={muiTheme}>
        {/* setting baseline to change background colors */}
      <CssBaseline />
      {/* hiding app drawer on mobile */}
        <Hidden xsDown>
          <AppDrawer onToggleDark={toggleDarkMode} />
        </Hidden>
        <ScrollComponent />
        {/* showing mobile menu */}
        <Hidden smUp>
          <GooeyMenu onToggleDark={toggleDarkMode} />
        </Hidden>
        <Heading />
        <ProjectList />
      </MuiThemeProvider>
    </>
  );
};
export default Main;
