import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from '@material-ui/core/styles';
import Signature from '../Global/signatureComponent'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Resume from '../../Downloads/MBlair_resume.pdf';

const styles = theme => ({
  paper: {
    borderColor: theme.palette.mainBorder[theme.palette.type],
    borderRight: '1px solid',
    backgroundColor: theme.palette.drawer[theme.palette.type],
    color: theme.palette.primary[theme.palette.type],
    width: '80px'
  },
  flex: {
    flex: 1
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  drawerInner: {
    paddingTop: '16px',
    display: 'flex',
    alignItems: 'flex-start',
    flexFlow: 'column nowrap',
    height: '100%'

  },
  signatureContainer: {
    width:'100%',
    padding: '25px 0',
    borderColor: theme.palette.mainBorder[theme.palette.type],
    borderBottom: '1px solid',
    zIndex:'10',
    "& svg" : {
      paddingLeft: '8px'
    }
  },
  linkText: {
    color: theme.palette.primary[theme.palette.type],
    writingMode: 'vertical-lr',
    margin: '0 auto',
    transform: 'rotate(180deg)',
    fontSize: '18px',
    "& a": {
      margin: '16px 0'
    }
  },
  city: {
    margin: 'auto auto 0 auto',
    padding: '26px 0',
    borderColor: theme.palette.mainBorder[theme.palette.type],
    borderBottom: '1px solid',
    writingMode: 'vertical-lr',
    transform: 'rotate(180deg)',
  }
});

function AppDrawer({classes}) {

  const preventDefault = event => event.preventDefault();

  return (
    <>
      <Drawer classes={{paper: classes.paper}} variant="permanent" anchor="left" open>
        <div className={ classes.drawerHeader }>
          <div className={classes.signatureContainer}>
            <Link href="#info" onClick={preventDefault} color='inherit'>
              <Signature />
            </Link>
          </div>
        </div>
        <div className={ classes.drawerInner } >
          <Typography className={classes.linkText}>
            <Link href="#contact" onClick={preventDefault} color='inherit'>
              Contact Info
            </Link>
            <Link href="#projects" onClick={preventDefault} color='inherit'>
              My Work
            </Link>
          </Typography>
          <Typography className={classes.city}>
            <Link href={Resume} target="_blank" color='inherit'>
                Resume
            </Link>
          </Typography>
        </div>
      </Drawer>
    </>
  );
}

export default withStyles(styles, {withTheme:true})(AppDrawer);
