import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Signature from './signatureComponent.js'
import Companies from './companiesComponent.js'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    boxBackground: {
        textAlign: 'center',
        backgroundColor: theme.palette.heading[theme.palette.type],
        color: theme.palette.headingContent[theme.palette.type],
        borderColor: theme.palette.mainBorder[theme.palette.type],
        overflow: 'hidden',
        paddingTop: '30px'
    },
    signature: {
        height: '250px',
        width: '300px',
        margin: '0 auto',
        "& svg": {
            fill: theme.palette.headingContent[theme.palette.type],
            width: '100%',
            height: '100%',
            "& path": {
                fill: theme.palette.headingContent[theme.palette.type],
                transition: 'fill 1s ease',
            }
        }
    },
    companyContainer: {
        padding: '20px 0px',
        marginBottom: '20px'
    },
    companySvg:{
        width: 'auto',
        height: '125px',
    },
    companyFill:{
        "& svg": {
            fill: theme.palette.headingContent[theme.palette.type],
            "& path": {
                fill: theme.palette.headingContent[theme.palette.type],
            }
        },
    }
  });

function Heading({classes}) {
    return(
        <Box className={classes.boxBackground} border borderBottom={1}>
            <Container>
                <div className={classes.signature}>
                    <Signature classes={classes} />
                </div>
                <Typography variant="h1" component="h2">
                <Box fontWeight="fontWeightBold" mt={-12}>
                    MY PORTFOLIO
                </Box>
                </Typography>
                <Typography component="p" gutterBottom={true}>
                    Nile river was once a large river. I wonder how big it will be in 100 years. I bet it won't ever be big enough to fight me.
                </Typography>
                <Typography component="p" gutterBottom={true}>
                <Box mt={8}>
                    Companies I have worked for
                </Box>          
                </Typography>
                <Grid container justify='center' spacing={8} className={classes.companyContainer}>
                    <Grid item xs mb={4}>
                        <Companies classes={classes} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default withStyles(styles, {withTheme:true})(Heading);