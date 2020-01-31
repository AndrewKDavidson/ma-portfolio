import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    header: {
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%'
      },
      /* Progress container (grey background) */
      progressContainer: {
        width: '8px',
        height: '100%',
        backgroundColor: 'transparent'
      },
      /* Progress bar (scroll indicator) */
      progressBar: {
        height: '0%',
        backgroundColor: theme.palette.scrollBar[theme.palette.type],
        width: '8px'
      }
})

function ScrollComponent({classes}) {
    // adding onscroll event listener
    window.onscroll = function() {scrollFunction()};

    // change css style of scroll container on scroll event
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