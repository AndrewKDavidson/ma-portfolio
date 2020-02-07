import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { Resume } from '../Global/resumeComponent';
import "../../styles/gooey-menu.css";

const styles = theme => ({
    menuButton: {
        backgroundColor: theme.palette.buttonBackground[theme.palette.type],
        color: theme.palette.buttonText[theme.palette.type],
        borderColor: 'transparent',
        left: '25px',
        position: 'absolute',
        borderRadius: '100%',
        fontSize: 23,
        transition: 'transform ease-out 200ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        "& .hamburger": {
            backgroundColor: theme.palette.buttonText[theme.palette.type],
        },
        "&:hover": {
            backgroundColor: theme.palette.buttonBackground[theme.palette.type],
        }
    },
  });

const GooeyMenu = ({classes}) => {

    // prevent link clicks from reloading page
    const preventDefault = event => event.preventDefault();

    return(
        <nav className="menu noSelect">
            <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
            <label className={"menu-open-button " + classes.menuButton} htmlFor="menu-open">
                <span className="hamburger hamburger-1"></span>
                <span className="hamburger hamburger-2"></span>
                <span className="hamburger hamburger-3"></span>
            </label>
            <Button
                className={"menu-item " + classes.menuButton}
                onClick={preventDefault}
                href="#projects"
              >
                <i className="fa fa-paint-brush"></i>
              </Button>
              <Button
                className={"menu-item " + classes.menuButton}
                onClick={preventDefault}
                href="#contact"
              >
                <i className="fa fa-phone"></i>
              </Button>
              <Button
                className={"menu-item " + classes.menuButton}
                target="_blank"
                href={Resume}
              >
                <i className="fa fa-address-card"></i>
              </Button>
        </nav>
    )
}

export default withStyles(styles, {withTheme:true})(GooeyMenu)