import React, { Component } from "react";
import Grid from "@material-ui/core/grid";
import { PROJECTS } from "../shared/projects";
import Project from "../components/projectComponent";

class ProjectList extends Component {
  state = {
    projects: PROJECTS
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default ProjectList;
