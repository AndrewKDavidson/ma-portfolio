import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    boxBackground: {
        height: '60vh',
        textAlign: 'center',
        backgroundColor: theme.palette.heading[theme.palette.type],
        color: theme.palette.secondary[theme.palette.type],
        overflow: 'hidden',
        paddingTop: '10px'
    },
    signature: {
        backgroundImage: theme.palette.type === 'light' ? 'url(/images/signature-dark.png)' : 'url(/images/dark-switch-icon.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        transition: 'background 200ms linear',
        height: '250px',
        width: '300px',
        margin: '0 auto'
    }
  });

function Heading({classes}) {
    return(
        <Box className={classes.boxBackground}>
            <div className={classes.signature}>

            </div>
            <Typography variant="h1" component="h2">
            <Box fontWeight="fontWeightBold" mt={-13}>
                MY PORTFOLIO
            </Box>
            </Typography>
            <Typography component="p" gutterBottom={true}>
                Nile river was once a large river. I wonder how big it will be in 100 years. I bet it won't ever be big enough to fight me.
            </Typography>
            <Typography component="p" gutterBottom={true}>
                Companies I have worked for            
            </Typography>
        </Box>
    )
}

export default withStyles(styles, {withTheme:true})(Heading);