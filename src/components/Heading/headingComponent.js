import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Signature from '../Global/signatureComponent'
import Companies from './companiesComponent.js'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    boxBackground: {
        textAlign: 'center',
        backgroundColor: theme.palette.heading[theme.palette.type],
        color: theme.palette.text.primary,
        borderColor: theme.palette.mainBorder[theme.palette.type],
        overflow: 'hidden',
        paddingTop: '30px'
    },
    signatureContainer: {
        width: '200px',
        margin: '0 auto',
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
            fill: theme.palette.text.primary,
            "& path": {
                fill: theme.palette.text.primary,
            }
        },
    }
  });

function Heading({classes}) {
    return(
        <Box id="info" className={classes.boxBackground} borderBottom={1}>
            <Container>
                <div className={classes.signatureContainer}>
                    <Signature />
                </div>
                <Typography variant="h1" component="h2">
                    <Box fontWeight="fontWeightBold" mt={-12}>
                        MY PORTFOLIO
                    </Box>
                </Typography>
                <Typography component="p" gutterBottom={true}>
                    Nile river was once a large river. I wonder how big it will be in 100 years. I bet it won't ever be big enough to fight me.
                </Typography>
                <Box mt={8}>
                    <Typography component="p" gutterBottom={true}>
                        Companies I have worked for        
                    </Typography>
                </Box>  
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