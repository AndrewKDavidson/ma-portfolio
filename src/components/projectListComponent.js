import React, { Component } from "react";
import Grid from "@material-ui/core/grid";
import TextField from "@material-ui/core/TextField";
import { PROJECTS } from "../shared/projects";
import Project from "../components/projectComponent";

class ProjectList extends Component {
  state = {
    projects: PROJECTS,
    searchString: ""
  };

  constructor() {
    super();
  }

  getProjects = () => {
    console.log("Got all them projects");
  };

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getProjects();
  };

  render() {
    console.log(this.state.projects);
    return (
      <div>
        {this.state.projects ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchinput"
              placeholder="Search for Projects"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={2} style={{ padding: 24 }}>
              {this.state.projects.map(currentProject => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
