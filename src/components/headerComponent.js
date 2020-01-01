import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Hidden from "@material-ui/core/Hidden";
import { GooeyMenu } from './gooeyMenuComponent';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BathtubIcon from "@material-ui/icons/Bathtub";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  appBarBottom: {
    top: "auto",
    bottom: 0
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header({ onToggleDark }, props) {
  const classes = useStyles();

  return (
    <>
      {/* desktop app bar*/}
      <Hidden xsDown>
        <div className={classes.root}>
          <HideOnScroll {...props}>
            <AppBar position="fixed">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Andrew Davidson Portfolio
                </Typography>
                <IconButton onClick={onToggleDark}>
                  <BathtubIcon />
                </IconButton>
                <Button color="inherit">About</Button>
                <Button color="inherit">Projects</Button>
                <Button color="inherit">Resume</Button>
                <Button color="inherit">Contact Me</Button>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        </div>
      </Hidden>

      {/* gooey mobile app bar */}
      <Hidden smUp>
        <GooeyMenu onToggleDark={onToggleDark}/>
      </Hidden>
    </>
  );
}
