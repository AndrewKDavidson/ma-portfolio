import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    header: {
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1000,
        height: '100%'
      },
      /* The progress container (grey background) */
      progressContainer: {
        width: '8px',
        height: '100%',
        backgroundColor: theme.palette.scrollBar.light
      },
      /* The progress bar (scroll indicator) */
      progressBar: {
        height: '0%',
        backgroundColor: theme.palette.heading.dark,
        width: '8px'
      }
})

function ScrollComponent({classes}) {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.height = scrolled + "%";
    }
    return (
        <div className={classes.header}>
            <div className={classes.progressContainer}>
                <div className={classes.progressBar} id="myBar"></div>
            </div>
        </div>
    )
}

export default withStyles(styles, {withTheme:true})(ScrollComponent);