import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DarkModeSwitch from './darkModeSwitchComponent';
import "../styles/gooey-menu.css";

const styles = theme => ({
    menuButton: {
      backgroundColor: theme.palette.tertiary[theme.palette.type],
      borderColor: 'transparent',
      color: theme.palette.primary.light 
    }
  });

const GooeyMenu = ({onToggleDark, classes}) => {
    return(
        <nav className="menu noSelect">
            <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
            <label className={"menu-open-button " + classes.menuButton} htmlFor="menu-open">
                <span className="hamburger hamburger-1"></span>
                <span className="hamburger hamburger-2"></span>
                <span className="hamburger hamburger-3"></span>
            </label>
            
            <a href="#" className={"menu-item " + classes.menuButton}> <i className="fa fa-home"></i> </a>
            <a href="#" className={"menu-item " + classes.menuButton}> <i className="fa fa-phone"></i> </a>
            <a href="#" className={"menu-item " + classes.menuButton}> <i className="fa fa-project-diagram"></i> </a>
            <DarkModeSwitch onToggleDark={onToggleDark} />
        </nav>
    )
}

export default withStyles(styles, {withTheme:true})(GooeyMenu)