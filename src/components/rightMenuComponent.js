import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DarkModeSwitch from './darkModeSwitchComponent';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

const styles = theme => ({
    darkModeContainer: {
        position: 'fixed',
        right: '0',
        top: '50px',
        zIndex: '100'
    },
    contactContainer: {
        transition: 'transform ease-out 200ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '100%',
        position: 'fixed',
        right: '25px',
        bottom: '24px',
        backgroundColor: theme.palette.buttonBackground[theme.palette.type],
        color: theme.palette.buttonText[theme.palette.type],
        "&:hover": {
            backgroundColor: theme.palette.buttonBackground[theme.palette.type],
        },
        "& i": {
            position: 'absolute',
            fontSize: '30px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        }
    },
})

function RightMenu({onToggleDark, classes}) {
    // right menu dark mode and contact button
    const preventDefault = event => event.preventDefault();
    return (
        <>
            <Box className={classes.darkModeContainer}>
                <DarkModeSwitch onToggleDark={onToggleDark} />  
            </Box>
            <Button
                className={`${classes.contactContainer} menu-open-button`}
                onClick={preventDefault}
                target="_blank"
                variant="contained"
                size="medium"
                href="#contact"
              >
                <i className="fas fa-phone-alt"></i>
              </Button>
        </>
    )
}

export default withStyles(styles, {withTheme:true})(RightMenu);