import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DarkModeSwitch from './darkModeSwitchComponent';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const styles = theme => ({
    darkModeContainer: {
        position: 'fixed',
        right: '0',
        top: '50px',
        zIndex: '100'
    },
    contactContainer: {
        position: 'fixed',
        right: '25px',
        bottom: '15px',
        zIndex: '100',
        width: '74px',
        height: '74px',
        borderRadius: '10%',
        backgroundColor: theme.palette.buttonBackground[theme.palette.type],
        color: theme.palette.buttonText[theme.palette.type],
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
            <Link href="#" onClick={preventDefault} color='inherit' className="">
                <Box className={classes.contactContainer}>
                    <i className="fas fa-phone-alt"></i>
                </Box>
            </Link>
        </>
    )
}

export default withStyles(styles, {withTheme:true})(RightMenu);