import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { PROJECTS } from "../../shared/projects";
import Project from "./projectComponent";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

class ProjectList extends Component {
  state = {
    projects: PROJECTS
  };

  render() {
    return (
      <Container id="projects">
        <div style={{marginLeft: '26px', marginTop: '12px'}}>
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Box fontWeight="fontWeightBold">
              My Projects
            </Box>
          </Typography>
          <Typography variant="body1" component="p">
            {Object.keys(PROJECTS).length} of my best projects
          </Typography>
        </div>
        {this.state.projects ? (
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
        )}
      </Container>
    );
  }
}

export default ProjectList;
