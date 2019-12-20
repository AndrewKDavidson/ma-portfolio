import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Hidden from "@material-ui/core/Hidden";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BathtubIcon from "@material-ui/icons/Bathtub";
import MenuIcon from "@material-ui/icons/Menu";
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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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

      {/* mobile app bar */}
      <Hidden smUp>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBarBottom}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                ara-label="open-drawer"
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <MenuIcon />
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom"
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              <IconButton onClick={onToggleDark}>
                <BathtubIcon />
              </IconButton>
              <Button color="inherit">About</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Resume</Button>
              <Button color="inherit">Contact Me</Button>
            </Toolbar>
          </AppBar>
        </div>
      </Hidden>
    </>
  );
}
