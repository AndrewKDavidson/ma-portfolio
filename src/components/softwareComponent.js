import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

class SoftwareList extends Component {

  render() {

    return (
      <Container id="software">
        <div style={{marginLeft: '26px', marginTop: '12px'}}>
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Box fontWeight="fontWeightBold">
                Software
            </Box>
          </Typography>
          <Typography variant="body1" component="p">
            {/* {Object.keys(PROJECTS).length} * of my most well known software */}
          </Typography>
          <Typography component="h3" variant="h5">
            <Link href="https://my.matterport.com/show/?m=x254ChDEXQt" color='inherit' style={{paddingRight: '15px'}}>
                REI Virtual Campsite
            </Link>
            <Link href="https://www.figma.com/proto/PInPdpOp0FAiR684GR0Knn/Portfolio?node-id=245%3A110&scaling=min-zoom" color='inherit' style={{padding: '0 15px'}}>
                "PDF" of work at REI
            </Link>
            <Link href="https://www.behance.net/morganblair" color='inherit' style={{padding: '0 15px'}}>
                My Bahance
            </Link>
          </Typography>
        </div>
        {/* {this.state.projects ? (
          <div>
            <Grid container spacing={2} style={{ padding: 24 }}>
              {this.state.projects.map(currentProject => (
                <Grid item xs={12}>
                  <Project key={currentProject.id} project={currentProject} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No projects found"
        )} */}
      </Container>
    );
  }
}

export default SoftwareList;
