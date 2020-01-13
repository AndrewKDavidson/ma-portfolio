import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Carousel from './carouselComponent';

const Project = props => {
  return (
    <div>
      {props.project ? (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.project.title}
            </Typography>
            <Typography component="p">{props.project.description}</Typography>
            <Carousel props={props} />
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              href={props.project.url}
              target="_blank"
            >
              Go To Course
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

export default Project;
