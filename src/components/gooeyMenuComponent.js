import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import "../styles/gooey-menu.css";

const styles = theme => ({
    menuButton: {
        backgroundColor: theme.palette.buttonBackground[theme.palette.type],
        color: theme.palette.buttonText[theme.palette.type],
        borderColor: 'transparent',
        left: '25px',
        position: 'absolute',
        "& span": {
            backgroundColor: theme.palette.buttonText[theme.palette.type],
        }
    },
  });

const GooeyMenu = ({classes}) => {
    return(
        <nav className="menu noSelect">
            <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
            <label className={"menu-open-button " + classes.menuButton} htmlFor="menu-open">
                <span className="hamburger hamburger-1"></span>
                <span className="hamburger hamburger-2"></span>
                <span className="hamburger hamburger-3"></span>
            </label>
            
            <a href="#info" className={"menu-item " + classes.menuButton}> <i className="fa fa-home"></i> </a>
            <a href="#projects" className={"menu-item " + classes.menuButton}> <i className="fa fa-project-diagram"></i> </a>
            <a href="#contact" className={"menu-item " + classes.menuButton}> <i className="fa fa-phone"></i> </a>
        </nav>
    )
}

export default withStyles(styles, {withTheme:true})(GooeyMenu)